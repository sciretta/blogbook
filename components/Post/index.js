import { useState,useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import { handleLoadPost } from '../../handles/posts'
import { handleLike } from '../../handles/users'
import { useStore } from '../../Store'
import { useLogIn } from '../../hooks'

const useStyles = makeStyles((theme) =>({
  title:{
    textAlign:'center',
    marginTop:20,
    marginBottom:60
  },
  button:theme.button,
  paper:{
    minHeight:'80vh'
  }
}))

export default function Post({card,setLayoutTitle,postId}) {
	const classes = useStyles()
  const {user} = useStore()
  const [title,setTitle] = useState('Loading...')
  const [content,setContent] = useState('Content')

  useLogIn()

  useEffect(()=>{
    setLayoutTitle(title)
    if(title==='Loading...'){
      handleLoadPost(postId,setTitle,setContent)
    }
  },[title])

  return (
    <Grid 
      container
      justify="flex-end"
      alignItems="flex-start"
      alignContent="center"
      spacing={2}
    > 
      <Grid 
        container 
        item
        direction="column"
        xs={12} sm={12} md={7} lg={8}
      >
        <Paper className={classes.paper}>
          <Grid item>
            <Typography className={classes.title} variant="h2">
              {title}
            </Typography>
            <Divider/>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              {content}
            </Typography>
          </Grid>
          <Grid item>
            <Button 
              onClick={()=>handleLike(user.id,postId)}
              variant="contained" 
              color="primary"
              disableElevation
              className={classes.button}
            >
              Like
            </Button>
          </Grid>
        </Paper>
      </Grid>
      <Grid 
        container 
        item
        direction="column"
        md={4} lg={3}
      >
        {card}
      </Grid>
    </Grid>
  )
}