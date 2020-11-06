import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { handleCreatePost } from '../../handles/posts'
import { useStore } from '../../Store'

const useStyles = makeStyles((theme) =>({
  title:{
    resize:'none',
    width:'100%',
    background:theme.palette.background.card,
    padding:'2vh 6vw',
    fontFamily:theme.typography.textArea.fontFamily,
    fontSize:50,
    fontWeight:'bolder'
  },
  body:{
    resize:'none',
    width:'100%',
    background:theme.palette.background.card,
    padding:'5vh 6vw',
    fontFamily:theme.typography.textArea.fontFamily,
    fontSize:30,
    fontWeight:'bolder'
  },
  button:{
    width:120,
    height:56,
    color:theme.palette.textColor.postButton
  }
}))

export default function NewPost() {
	const classes = useStyles()
  const {user} = useStore()
  const {replace} = useRouter()

  return (
    <Grid container direction="column" >
      <Grid item>
        <TextareaAutosize 
          id="new-post-title" 
          className={classes.title} 
          aria-label="title" 
          rowsMin={2} 
          placeholder="Title" 
        />	
      </Grid>
      <Grid item>
      	<TextareaAutosize 
      	  id="new-post-content"
      	  className={classes.body}
      	  aria-label="body" 
      	  rowsMin={5} 
      	  placeholder="Lets start..." 
      	/>
      </Grid>
      <Grid item container justify="center">
      	<Button 
          variant="contained" 
          color="primary"
          disableElevation
          className={classes.button}
          onClick={()=>handleCreatePost(replace,user.id)}
        >
          Post
        </Button>
      </Grid>
    </Grid>
  )
}