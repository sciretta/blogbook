import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'

import Header from '../../components/Header'
import LeftSide from '../../components/LeftSide'
import RightSide from '../../components/RightSide'

const useStyles = makeStyles((theme) =>({
  toolbar:{
    marginBottom:5
  },
  container:{
    background:theme.palette.background.body,
    padding:`0 ${theme.drawer.rightWidth}px 0 ${theme.drawer.leftWidth}px`,
    [theme.breakpoints.down('sm')]: {
      padding:`0 0 0 ${theme.drawer.leftWidth}px`
    },
    [theme.breakpoints.down('xs')]: {
      padding:`0 15px`
    }
  },
  drawerPaperLeft:{
    width:theme.drawer.leftWidth,
    background:theme.palette.background.body,
    border:'none'
  },
  drawerLeft:{
    width:theme.drawer.leftWidth,
    background:theme.palette.background.body,
  },
  drawerPaperRight:{
    width:theme.drawer.rightWidth,
    background:theme.palette.background.body,
    border:'none'
  },
  drawerRight:{
    width:theme.drawer.rightWidth,
    background:theme.palette.background.body,
  }
}))

export default function PostsLayout(props) {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>BlogbooK</title>
      </Head>
      <CssBaseline/>
      <Header/>
      <Toolbar className={classes.toolbar}/>
      <Hidden xsDown>
        <Drawer 
          className={classes.drawerLeft}
          variant="permanent"
          classes={{
            paper: classes.drawerPaperLeft,
          }}
        >
          <Toolbar className={classes.toolbar}/>
          <LeftSide/>
          <Toolbar className={classes.toolbar}/>
        </Drawer>
      </Hidden>
      <Container maxWidth="xl" className={classes.container}>
        {props.children}
      </Container>
      <Hidden smDown>
        <Drawer
          className={classes.drawerRight}
          variant="permanent"
          anchor="right"
          classes={{
            paper: classes.drawerPaperRight
          }}
        >
          <Toolbar className={classes.toolbar}/>
          <RightSide/>
          <Toolbar className={classes.toolbar}/>
        </Drawer>
      </Hidden>
    </>
  )
}