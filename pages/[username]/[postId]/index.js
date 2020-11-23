import { useState,useEffect } from 'react'

import NewPostLayout from '../../../layouts/NewPostLayout'//
import Post from '../../../components/Post'
import CoverCard from '../../../components/Cover/CoverCard'

import { handleData } from '../../../handles/users'

export default function UserPost({postId,username}) {
  const [layoutTitle,setLayoutTitle] = useState()
  const [user,setUser] = useState({})

  useEffect(()=>{
    handleData(username,setUser)
  },[])

  return (
    <NewPostLayout title={layoutTitle}>
      <Post 
        setLayoutTitle={(title)=>setLayoutTitle(title)}
        postId={postId}
        card={<CoverCard coverUser={user}/>}
      />
    </NewPostLayout>
  )
}

export async function getServerSideProps({query}){
  return {
    props:{
      postId:query.postId,
      username:query.username
    }
  }
}
