import React from 'react'

import { useRouter } from 'next/router'
import { useStore } from '../../Store'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


function ElevationScroll({children,window}) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: 0,
  })
}

const useStyles = makeStyles(({palette:{background,textColor},zIndex,button}) =>({
  root: {
    backgroundColor: background.header,
    backdropFilter:'blur(5px)',
    zIndex: zIndex.drawer + 1
  },
  toolbar:{
    padding:'0 1.5vw'
  },
  searchContainer:{
    flexGrow:1,
    padding:'0 2vw'
  },
  search:{
    maxWidth:420
  },
  button:button,
  titleButton:{
    textTransform:'none'
  }
}))


export default function Header(props) {
  const { connected } = useStore()
  const classes = useStyles()
  const {replace} = useRouter()

  const handleSearch = event =>{
    if(event.key==='Enter')
      console.log('Buscando...')
  }

  const handleRedirect = path =>{
    replace(path)
  }

  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Button 
            className={classes.titleButton} 
            disableRipple
            onClick={()=>handleRedirect("/")}
          >
            <Typography variant="h1">
              Blogbook
            </Typography>
          </Button>
          <div className={classes.searchContainer}>
            <TextField 
              id="search" 
              className={classes.search} 
              variant="outlined"
              placeholder="Search..."
              onKeyPress={handleSearch}
            />
          </div>
          {connected?
            <Button 
              onClick={()=>handleRedirect("/new")}
              variant="contained" 
              color="primary"
              disableElevation
              className={classes.button}
            >
              New post
            </Button>:
            <Button 
              onClick={()=>handleRedirect("/login")}
              variant="contained" 
              color="primary"
              disableElevation
              className={classes.button}
            >
              Log in
            </Button>
          }
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}