import { useState,useEffect } from 'react'
import { useLogIn } from '../../hooks'

import UserLayout from '../../layouts/UserLayout'
import PostsGroup from '../../components/PostsGroup'

import { useStore } from '../../Store'

import { handleData } from '../../handles/users'

export default function User({username}) {
  const [user,setUser] = useState({})

  useEffect(()=>{
    handleData(username,setUser)
  },[])

  useLogIn()
  
  return (
    <UserLayout user={user}>
      <PostsGroup author={user.username}/>
    </UserLayout>
  )
}

export async function getServerSideProps({query}){
  return {
    props:{
      username:query.username
    }
  }
}