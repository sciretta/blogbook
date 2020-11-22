import { useLogIn } from '../hooks'

import PostsLayout from '../layouts/PostsLayout'
import PostsGroup from '../components/PostsGroup'

export default function Home() {
  useLogIn()
  return (
    <PostsLayout >
      <PostsGroup author={'ALL'}/>
    </PostsLayout>
  )
}
