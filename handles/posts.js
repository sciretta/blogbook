 
//creating new post
export const handleCreatePost = (replace,userId) => {//cualquiera puede crear un post, middleware auth
	const title = document.getElementById("new-post-title").value
  const content = document.getElementById("new-post-content").value
  //const tags = document.getElementsByClassName("new-post-tags").map(tag=>tag.value)
  const tags = [{value:'javascript'},{value:'react'}].map(tag=>tag.value)
  const body = {title,content,tags,userId}

  fetch(`/api/post/new`, {
    method: 'POST',
    body:JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => {
    if(!res.error){
    	replace(`${res.username}/${res.id}`)
    }else{
    	console.log({error:res.error})//eliminar
    }
  })
}

//loading post
export const handleLoadPost = (postId,setTitle,setContent) => {

  fetch(`/api/post/load`, {
    method: 'POST',
    body:JSON.stringify(postId),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => {
    if(!res.error){
      setTitle(res.post.title)
      setContent(res.post.content)
    }else{
      console.log({error:res.error})//eliminar
    }
  })
}

//loading group of posts
export const handleGroupPosts = (author,setPosts) => {

  fetch(`/api/post/group`, {
    method: 'POST',
    body:JSON.stringify(author),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => {
    if(!res.error){
      setPosts(res)
    }else{
      console.log(res)//eliminar
    }
  })
}