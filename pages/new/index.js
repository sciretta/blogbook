import NewPostLayout from '../../layouts/NewPostLayout'
import NewPost from '../../components/Post/NewPost'

export default function New() {
  return (
    <NewPostLayout title={New post.}>
      <NewPost/>
    </NewPostLayout>
  )
}