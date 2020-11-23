import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) =>({
  paper:{
  	width:'100%',
  	minHeight:'79.5vh'
  },
  avatar:{
    marginTop:20,
    marginBottom:15,
    width:100,
    height:100
  },
  text:{
    textAlign:'center'
  }
}))

export default function UserPost({coverUser}) {
	const classes = useStyles()
  const [author,setAuthor] = useState({})

  return (
    <Hidden only={["xs","sm"]}>
    	<Paper className={classes.paper}>
	      <Grid 
          container direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid 
              item 
              container 
              justify="center"
            >
            <Avatar className={classes.avatar}>
              {coverUser.name?coverUser.name[0]:'Blogbook'}
            </Avatar>
          </Grid>
          <Grid item>
            <Typography className={classes.text} variant="h2">
              {coverUser.username||'Username'}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.text} variant="h3">
              from {coverUser.country || 'No country.'},
            </Typography>
            <Typography className={classes.text} variant="h3">
              joined {coverUser.joined || 'No date.'},
            </Typography>
            <Typography className={classes.text} variant="h4">
              {coverUser.description || 'No description.'}
            </Typography>
          </Grid>
        </Grid>
	    </Paper>
    </Hidden>
  )
}
