import Head from 'next/head'

import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'

import Header from '../../components/Header'
import Cover from '../../components/Cover'

const useStyles = makeStyles((theme) =>({
  toolbar:{
    marginBottom:5
  },
  container:{
    background:theme.palette.background.body
  }
}))

export default function UserLayout(props) {
  const classes = useStyles()
  const username = "Leonardo"//useername de la context api
  return (
    <>
      <Head>
        <title>{username?username:'Loading...'}</title>
      </Head>
      <CssBaseline/>
      <Header/>
      <Toolbar className={classes.toolbar}/>
      <Container maxWidth="xl" className={classes.container}>
        <Cover/>
        {props.children}
      </Container>
      <Toolbar className={classes.toolbar}/>
    </>
  )
}