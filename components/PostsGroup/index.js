import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { handleGroupPosts } from '../../handles/posts'


const useStyles = makeStyles((theme) =>({
  container:{
    marginTop:20
  },
  card:{
    margin:'0px 10px 10px 10px'
  },
  actionArea:{
    padding:'20px 10px'
  }
}))

export default function PostsGroup({search}) {
	const classes = useStyles()
  
  const [posts,setPosts] = useState([{content:'Nothing'}])//eliminar
  useEffect(()=>{
    handleGroupPosts(search,setPosts)
  },[])

  return (
    <Grid 
      container 
      className={classes.container} 
      justify="flex-start" 
      alignContent="center"
      direction="column"
    >
      {posts.title?posts.map(post=>(
        <PostCard 
          key={post.title} 
          path={`${post.author}/${post.id}`}
          author={post.author}
          title={post.title}
        />
      )):null}
    </Grid>
  )
}


function PostCard({path,title,author}) {
  const classes = useStyles()
  const {replace} = useRouter()

  const handleRedirect = path =>{
    replace(path)
  }


  return (
    <Card className={classes.card}>
      <CardActionArea 
        className={classes.actionArea}
        onClick={()=>handleRedirect(path)}
      >
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid 
          container
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h3">
            {author} y likes
          </Typography>
          <Button>
            <Typography variant="h3">
              save
            </Typography>
          </Button>
        </Grid>
      </CardActions>
    </Card>
  )
}