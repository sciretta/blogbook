const selector = (type,arr) => arr.reduce(((acc,id)=>({
    ...acc,
    [id]:document.getElementById(`${type}-${id}`).value
	}
)),{})

//register
export const handleRegister = (replace,setError,setSuccessAction) => {
	const body = selector('register',['username','name','country','password','passwordCheck'])

  fetch(`http://localhost:3000/api/user/register`, {
    method: 'POST',
    body:JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => {
    if(!res.error){
    	setSuccessAction(true)
    	replace("login")
    }else{
    	setError({
    		open:true,
        message:res.error
    	})
    }
  })
}

//login
export const handleLogin = (replace,setError,setSuccessAction,dispatch) => {

  const body = selector('login',['username','password'])

  fetch(`http://localhost:3000/api/user/login`, {
    method: 'POST',
    body:JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res =>res.json())
  .then(res =>{
    if(!res.error){
      localStorage.setItem("auth-token",res.token)
      setSuccessAction(true)
      replace("/")
      dispatch({
        type:'LOGIN_USER',
        user:res.user
      })
    }else{
      setError({
        open:true,
        message:res.error
      })
    }
  })
}

//token validation
export const handleCheckLoggedIn = async (dispatch) => {
  const token = localStorage.getItem("auth-token")

  if (token === null) {
    localStorage.setItem("auth-token", "")
    token = ""
  }else{
    try {
      const tokenRes = await fetch(`http://localhost:3000/api/user/tokenIsValid`, {
        method: 'GET',
        headers: {
          'x-auth-token':token
        }
      }) 
      .then(res =>res.json())

      if (!tokenRes.error) {
        const userRes = await fetch(`http://localhost:3000/api/user/data`, {
          method: 'POST',
          headers: {
            'x-auth-token':token
          }
        })
        .then(res =>res.json())
        .then(res =>{
          dispatch({
            type:'LOGIN_USER',
            user:res.user
          })
        })
      }
    } catch (err){
      console.log(error.message)
    }
  }
}

export const handleData = async (username,setUser) => {
  const userRes = await fetch(`http://localhost:3000/api/user/data`, {
    method: 'POST',
    body:JSON.stringify({type:'visitor',username}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res =>res.json())
  .then(res =>{
    if(!res.error){
      setUser(res.user)
    }else{
      console.log(res)
    }
  })
}
