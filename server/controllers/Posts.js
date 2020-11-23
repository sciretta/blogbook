import jwt from 'jsonwebtoken'
import User from '../models/User'
import Post from '../models/Post'
import auth from '../middlewares/auth'
import moment from 'moment'

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
      author:author.username
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

//load a group of posts
export const postGroup = async (body,res) => {
  try{
    const author = body
    //sort all posts by date
    const organizador = posts =>{
      function comparar ( a, b ){ 
        if (moment(a.published).isAfter(b.published, 'day')) {
          return -1
        }
        if (moment(b.published).isAfter(a.published, 'day')) {
          return 1
        }
        return 0
      }
      return posts.sort(comparar)
    }
    
    if(author==='ALL'){
      const posts = await Post.find()

      const postsOrganizados = organizador(posts)

      return res.json(postsOrganizados)
    }else{
      //finding post
      const posts = await Post.find({author})
      if (!posts)
        return res
          .status(400)
          .json({ error: "This user doesn't have posts yet." })

      const postsOrganizados = organizador(posts)

      return res.json(postsOrganizados)
    }
  }catch(err){
    return res.status(500).json({error:err.message})
  }
}
