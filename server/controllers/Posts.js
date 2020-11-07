import jwt from 'jsonwebtoken'
import User from '../models/User'
import Post from '../models/Post'
import auth from '../middlewares/auth'

//create a new post
export const postNew = async (body,res) => {
  try{
    const { title, content, userId, tags } = body

    //validatons
    if (!title || !content || !userId || !tags)
      return res
        .status(400)
        .json({ error: "Complete the post." })
   
    const existingPost = await Post.findOne({ title })
    if (existingPost)
      return res
        .status(400)
        .json({ error: "A post with this title already exists." })

    //finding user
    const author = await User.findById(userId)
    if (!author) 
      return res.json({error:'User not found.'})

    //saving post
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

//load one post
export const postLoad = async (body,res) => {
  try{
    //finding post
    const existingPost = await Post.findById(body)
    if (!existingPost)
      return res
        .status(400)
        .json({ error: "This post doesn't exist." })

    return res.json({post:existingPost})
  }catch(err){
    return res.status(500).json({error:err.message})
  }
}

// export const postVisitor