import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) =>({
  title:{
    textAlign:'center',
    marginTop:20,
    marginBottom:60
  }
}))

export default function Post(props) {
	const classes = useStyles()

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
              Title of the post
            </Typography>
            <Divider/>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              {[...new Array(20)].map(()=>
                <>
                  Lorem ipsum es el texto que se usa habitualmente 
                  en diseño gráfico en demostraciones de tipografías 
                  o de borradores de diseño para probar el diseño 
                  visual antes de insertar el texto final.
                </>)}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid 
        container 
        item
        direction="column"
        md={4} lg={3}>
        {props.card}
      </Grid>
    </Grid>
  )
}