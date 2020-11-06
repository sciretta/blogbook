import jwt from 'jsonwebtoken'
import User from '../models/User'
import Post from '../models/Post'
import auth from '../middlewares/auth'


export const postNew = async (body,res) => {
  try{
    const { title, content, userId, tags } = body

    if (!title || !content || !userId || !tags)
      return res
        .status(400)
        .json({ error: "Complete the post." })
   
    const existingPost = await Post.findOne({ title })
    if (existingPost)
      return res
        .status(400)
        .json({ error: "A post with this title already exists." })

    //create and saving new user
    const author = await User.findById(userId)
    if (!author) 
      return res.json({error:'User not found.'})

    const newPost = new Post({
      title,
      content,
      tags,
      userId
    })
    const savedPost = await newPost.save()
    return res.json({
      id:savedPost._id,
      username:author.username})
  }catch(err){
    return res.status(500).json({error:err.message})
  }
}

// //create a new user
// export const postsUser = async (body,res) => {
// 	try{
// 		const { username, name, country, password, passwordCheck } = body
//     // validate
//     if (!username || !name || !password || !passwordCheck)
//       return res
//         .status(400)
//         .json({ error: "Not all required fields have been entered." })

//   	if (password.length < 5)
//       return res
//         .status(400)
//         .json({ error: "The password needs to be at least 5 characters long." })

//     if (password !== passwordCheck)
//       return res
//         .status(400)
//         .json({ error: "Enter the same password twice for verification." })

//     const existingUser = await User.findOne({ username })
//     if (existingUser)
//       return res
//         .status(400)
//         .json({ error: "An account with this username already exists." })
    
//     //encrypt the password
//     const salt = await bcrypt.genSalt()
//     const passwordHash = await bcrypt.hash(password,salt)

//     //create and saving new user
//     const newUser = new User({
//       username,
//       name,
//       country,
//       password: passwordHash
//     })
//     const savedUser = await newUser.save()
//     return res.json(savedUser)
//   }catch(err){
//   	return res.status(500).json({error:err.message})
//   }
// }

// export const postVisitor