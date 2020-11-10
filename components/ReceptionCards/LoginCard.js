import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { useDispatch } from '../../Store'
import ReceptionAlert from './ReceptionAlert'
import { handleLogin } from '../../handles/users'

const useStyles = makeStyles((theme) =>({
  card:{
    margin:'0px 10px 10px 10px'
  },
  button:theme.button
}))

function LoginCard({replace,setError,setSuccessAction}) {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Card className={classes.card}>
      <CardActions>
        <Grid 
          container
          justify="space-around"
          alignItems="center"
          direction="column"
          spacing={1}
        >
          <Grid item>
            <TextField 
              id="login-username" 
              variant="outlined"
              placeholder="Username"
            />
          </Grid>
          <Grid item>
            <TextField 
              id="login-password" 
              variant="outlined"
              placeholder="Password"
              type="password"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained" 
              color="primary"
              disableElevation
              className={classes.button}
              onClick={()=>handleLogin(replace,setError,setSuccessAction,dispatch)}
            >
              Log in
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.button}
              onClick={()=>replace("register")}
            >
              New
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default ReceptionAlert('Iniciando sesion...')(LoginCard)