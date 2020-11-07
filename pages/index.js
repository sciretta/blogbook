import { useEffect } from 'react'

import { handleCheckLoggedIn } from '../handles/users'
import { useDispatch } from '../Store'

import PostsLayout from '../layouts/PostsLayout'
import PostsGroup from '../components/PostsGroup'

export default function Home() {
  const dispatch = useDispatch()
	useEffect(() => {
    handleCheckLoggedIn(dispatch)
  }, [])

  return (
    <PostsLayout >
      <PostsGroup search={'ALL'}/>
    </PostsLayout>
  )
}
