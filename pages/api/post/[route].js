import { 
  postNew,
  postLoad
} from '../../../server/controllers/Posts'

import dbConnect from '../../../server/db.connect'

dbConnect()

export default async (req, res) => {
	const { method,body,query:{route} } = req
  
  switch(route){
  	case 'new':
  	  if(method==='POST')
  	  	return postNew(body,res)
  	  else
  	  	res.status(400).json({success:false})
  	  break
    case 'load':
      if(method==='POST')
        return postLoad(body,res)
      else
        res.status(400).json({success:false})
      break
    // case 'all':
    //   if(method==='POST')
    //     return userRegister(body,res)
    //   else
    //     res.status(400).json({success:false})
    //   break
  	default:
  	  res.status(400).json({error:'Invalid route.'})
  }
}