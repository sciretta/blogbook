import UserLayout from '../../layouts/UserLayout'
import PostsGroup from '../../components/PostsGroup'

export default function User() {
  return (
    <UserLayout>
      <PostsGroup amount={10}/>
    </UserLayout>
  )
}