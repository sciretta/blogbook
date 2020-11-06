import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme) =>({
  paper:{
  	width:'100%',
  	minHeight:500
  }
}))

export default function UserPost(props) {
	const classes = useStyles()

  return (
    <Hidden only={["xs","sm"]}>
    	<Paper className={classes.paper}>
	      cover card
	    </Paper>
    </Hidden>
  )
}