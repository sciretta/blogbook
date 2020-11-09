import { useLogIn } from '../../hooks'

import UserLayout from '../../layouts/UserLayout'
import PostsGroup from '../../components/PostsGroup'

import { useStore } from '../../Store'

export default function User() {
  const {user} = useStore()
  useLogIn()
  
  return (
    <UserLayout>
      <PostsGroup search={user.id}/>
    </UserLayout>
  )
}