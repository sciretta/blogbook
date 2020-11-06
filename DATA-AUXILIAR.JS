//users
export const users=[
  UserCreator(1,'Leonardo','paswordd','sciretta','04/12/1997','Venezuela','descripcion aqui va toda la informacion'),
  UserCreator(2,'Alguien','pas','fulano','10/12/2019','Venezuela','descripcion aqui va toda la informacion'),
  UserCreator(3,'fulano','contrasena','detal','20/03/2017','Argentina','descripcion aqui va toda la informacion'),
  UserCreator(4,'leonel','barca','messi','03/07/2015','Argentina','descripcion aqui va toda la informacion')
]

function UserCreator(id,name,pasword,username,joined,country,des){
	let description = [...new Array(5)].map(()=>des).reduce((curr,acc)=>curr+acc)
  return {id,name,pasword,username,joined,country,description}
}


//posts
export const posts=[
  PostCreator(1,1,'Titulo post 1','Cuerpo del post aqui va toda la informacion',7,'03/07/2015'),
  PostCreator(2,1,'Titulo post 2','Cuerpo del post aqui va toda la informacion',10,'20/03/2017'),
  PostCreator(3,2,'Titulo post 3','Cuerpo del post aqui va toda la informacion',20,'04/12/1997'),
  PostCreator(4,3,'Titulo post 4','Cuerpo del post aqui va toda la informacion',2,'04/12/1997')
]

function PostCreator(id,userId,title,info,likes,published){
	let body = [...new Array(100)].map(()=>info).reduce((curr,acc)=>curr+acc)
  return {id,userId,title,body,likes,published}
}

