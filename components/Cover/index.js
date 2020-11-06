import React from 'react'

import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles((theme) =>({
  container:{
    paddingTop:15,
    paddingBottom:15,
    minHeight:400
  },
  avatar:{
    width:200,
    height:200
  },
  button:{
    textTransform:'none',
    width:150,
    marginTop:15,
    color:theme.palette.textColor.postButton
  },
  info:{
    marginTop:20,
    textAlign:'center'
  },
  paper:{
    background:theme.palette.background.paper
  }
}))


export default function Cover(props) {
  const [user] = React.useState({
    username:'Leonardo',
    country:'Venezuela',
    joined:'10/29/2020',
    description:'Some short description from the user for the visitors and somo like that.'
  })
  const classes = useStyles()
  const {replace} = useRouter()

  return (
    <>
      <Paper elevation={1} className={classes.paper}>
        <Grid 
          container 
          className={classes.container} 
          justify="flex-start" 
          alignContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid 
            item 
            container 
            justify="center" 
            alignContent="center"
          >
            <Grid item>
              <div className={classes.button}></div>
            </Grid>
            <Grid 
              item 
              container 
              justify="center"
              xs={12} sm={5} md={7} lg={8} 
            >
              <Avatar className={classes.avatar}>
                {user.username[0]}
              </Avatar>
            </Grid>
            <Grid item>
              <Button 
                color="primary"
                variant="contained"
                disableElevation
                className={classes.button}
              >
                Edit profile
              </Button>
            </Grid>
          </Grid>
          <Grid 
            item 
            container 
            justify="center" 
            alignContent="center"
            direction="column"
            className={classes.info}
            xs={7} sm={6} md={5} lg={4} 
          >
            <Grid item>
              <Typography variant="h2">
                {user.username}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">
                from {user.country},
              </Typography>
              <Typography variant="h3">
                joined {user.joined}
              </Typography>
              <Typography variant="h4">
                {user.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}