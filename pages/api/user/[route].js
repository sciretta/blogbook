import { 
	userRegister,
  userLogin,
  userValidToken,
  userData
} from '../../../server/controllers/Users'

import dbConnect from '../../../server/db.connect'

dbConnect()

export default async (req, res) => {
	const { method,body,query:{route} } = req
  
  switch(route){
  	case 'register':
  	  if(method==='POST')
  	  	return userRegister(body,res)
  	  else
  	  	res.status(400).json({success:false})
  	  break
  	case 'login':
  	  if(method==='POST')
  	  	return userLogin(body,res)
  	  else
  	  	res.status(400).json({success:false})
  	  break
    case 'tokenIsValid':
      if(method==='GET')
        return userValidToken(req,res)
      else
        res.status(400).json({success:false})
      break
    case 'data':
      if(method==='POST')
        return userData(req,res)
      else
        res.status(400).json({success:false})
      break
  	default:
  	  res.status(400).json({error:'Invalid route.'})
  }
}