import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import auth from '../middlewares/auth'

//create a new user
export const userRegister = async (body,res) => {
	try{
		const { username, name, country, password, passwordCheck } = body
    // validate
    if (!username || !name || !password || !passwordCheck)
      return res
        .status(400)
        .json({ error: "Not all required fields have been entered." })

  	if (password.length < 5)
      return res
        .status(400)
        .json({ error: "The password needs to be at least 5 characters long." })

    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ error: "Enter the same password twice for verification." })

    const existingUser = await User.findOne({ username })
    if (existingUser)
      return res
        .status(400)
        .json({ error: "An account with this username already exists." })
    
    //encrypt the password
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password,salt)

    //create and saving new user
    const newUser = new User({
      username,
      name,
      country,
      password: passwordHash
    })
    const savedUser = await newUser.save()
    return res.json(savedUser)
  }catch(err){
  	return res.status(500).json({error:err.message})
  }
}

//login user
export const userLogin = async (body,res) => {
  try {
    const { username, password } = body

    // validate
    if (!username || !password)
      return res.status(400).json({ error: "Not all fields have been entered." })

    const user = await User.findOne({ username })
    
    if (!user)
      return res
        .status(400)
        .json({ error: "No account with this username has been registered." })
    
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials." })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    return res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        country: user.country,
        
      },
    })
  }catch(err){
    return res.status(500).json({error:err.message})
  }
}

//delete user
export const userDelete = async (req,res) => {//modificar este endpoint
  try {
    await auth(req,res)
      .then(async () => {
        const deletedUser = await User.findByIdAndDelete(req.user)
        if(!deletedUser)
          return res.status(400).json({error:'User not found.'})
        return res.json(deletedUser)
      })
  }catch(err){
    return res.status(500).json({error:err.message})
  }
}

//check token
export const userValidToken = async (req, res) => {
  try {
    const token = req.headers["x-auth-token"]
    if (!token) 
      return res.json({error:'No token found.'})

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) 
      return res.json({error:'Incorrect token.'})

    const user = await User.findById(verified.id)
    if (!user) 
      return res.json({error:'User not found.'})

    return res.json(true)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

//get user data
export const userData = async (req,res) => {//modificar este endpoint
  try{
    await auth(req,res)
      .then(async () => {
        const user = await User.findById(req.user)
        
        if(!user)
          return res.json({msg:'User not found.'})

        return res.json({
          user: {
            id: user._id,
            username: user.username,
            name: user.name,
            country: user.country,
            
          }
        })
      })
  }catch (err) {
    res.status(500).json({ error: err.message })
  }
}