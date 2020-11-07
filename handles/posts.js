
//creating new post
export const handleCreatePost = (replace,userId) => {
	const title = document.getElementById("new-post-title").value
  const content = document.getElementById("new-post-content").value
  //const tags = document.getElementsByClassName("new-post-tags").map(tag=>tag.value)
  const tags = [{value:'javascript'},{value:'react'}].map(tag=>tag.value)
  const body = {title,content,tags,userId}

  fetch(`http://localhost:3000/api/post/new`, {
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

  fetch(`http://localhost:3000/api/post/load`, {
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