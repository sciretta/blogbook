import { useState } from 'react'

import NewPostLayout from '../../../layouts/NewPostLayout'//
import Post from '../../../components/Post'
import CoverCard from '../../../components/Cover/CoverCard'

export default function UserPost({postId}) {
  const [layoutTitle,setLayoutTitle] = useState()
  return (
    <NewPostLayout title={layoutTitle}>
      <Post 
        setLayoutTitle={(title)=>setLayoutTitle(title)}
        card={<CoverCard/>}
        postId={postId}
      />
    </NewPostLayout>
  )
}

export async function getServerSideProps({query}){
  return {
    props:{
      postId:query.postId
    }
  }
}
