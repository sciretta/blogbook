import jwt from 'jsonwebtoken'

const auth = (req,res) => new Promise((resolve)=>{
  try{
    const token = req.headers["x-auth-token"]

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied." })

    req.user = verified.id
    resolve()
  }catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default auth