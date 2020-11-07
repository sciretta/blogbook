import { useState,useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import { handleLoadPost } from '../../handles/posts'

const useStyles = makeStyles((theme) =>({
  title:{
    textAlign:'center',
    marginTop:20,
    marginBottom:60
  }
}))

export default function Post({card,setLayoutTitle,postId}) {
	const classes = useStyles()
  const [title,setTitle] = useState('Loading...')
  const [content,setContent] = useState('Content')

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
        <Paper>
          <Grid item>
            <Typography className={classes.title} variant="h2">
              {title}
            </Typography>
            <Divider/>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              {[...new Array(30)].map((i,index)=>
                <div key={index}>
                  {content}
                </div>
            )}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid 
        container 
        item
        direction="column"
        md={4} lg={3}>
        {card}
      </Grid>
    </Grid>
  )
}