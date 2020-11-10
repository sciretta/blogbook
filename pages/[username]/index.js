import { useLogIn } from '../../hooks'

import UserLayout from '../../layouts/UserLayout'
import PostsGroup from '../../components/PostsGroup'

import { useStore } from '../../Store'

export default function User({username}) {
  const {tempUser} = useStore()
  useLogIn()
  
  return (
    <UserLayout username={username}>
      <PostsGroup search={tempUser.id}/>
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