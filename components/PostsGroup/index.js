import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


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

export default function PostsGroup({amount}) {
	const classes = useStyles()
  return (
    <Grid 
      container 
      className={classes.container} 
      justify="flex-start" 
      alignContent="center"
      direction="column"
    >
      {[...new Array(amount)].map((i,index)=>(
        <PostCard key={index} path={"/username/12345"}/>
      ))}
    </Grid>
  )
}


function PostCard({path}) {
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
            Titulo del post que va a ser leido o no.
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
            Autor y likes
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