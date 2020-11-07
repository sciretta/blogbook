import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import Header from '../../components/Header'

const useStyles = makeStyles((theme) =>({
  toolbar:{
    marginBottom:5
  },
  container:{
    background:theme.palette.background.body
  }
}))

export default function NewPostLayout(props) {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <CssBaseline/>
      <Header/>
      <Toolbar className={classes.toolbar}/>
      <Container maxWidth="xl" className={classes.container}>
        {props.children}
      </Container>
      <Toolbar className={classes.toolbar}/>
    </>
  )
}