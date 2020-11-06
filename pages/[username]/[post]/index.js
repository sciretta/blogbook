import NewPostLayout from '../../../layouts/NewPostLayout'//
import Post from '../../../components/Post'
import CoverCard from '../../../components/Cover/CoverCard'

export default function UserPost() {
  return (
    <NewPostLayout>
      <Post 
        card={<CoverCard/>}
      />
    </NewPostLayout>
  )
}