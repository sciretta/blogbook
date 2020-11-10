import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) =>({
  container:{
    background:theme.palette.background.body
  },
  gridContainer:{
    minHeight:'100vh'
  }
}))

export default function ReceptionLayout(props) {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>{props.type}-Blogbook</title>
      </Head>
      <CssBaseline/>
      <Container maxWidth="xl" className={classes.container}>
        <Grid 
          container
          justify="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item>
            {props.children}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}