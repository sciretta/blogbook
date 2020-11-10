import Head from 'next/head'
import { useState,useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'

import Header from '../../components/Header'
import Cover from '../../components/Cover'
import { useStore,useDispatch } from '../../Store'

import { handleData } from '../../handles/users'

const useStyles = makeStyles((theme) =>({
  toolbar:{
    marginBottom:5
  },
  container:{
    background:theme.palette.background.body
  }
}))

export default function UserLayout({children,username}) {
  const classes = useStyles()
  const {connected} = useStore()
  const dispatch = useDispatch()
  const {tempUser} = useStore()

  useEffect(()=>{
    handleData(username,dispatch)
  },[])

  return (
    <>
      <Head>
        <title>{username}</title>
      </Head>
      <Header/> 
      <CssBaseline/> 
      <Toolbar className={classes.toolbar}/>
      <Container maxWidth="xl" className={classes.container}>
        <Cover connected={connected} user={tempUser}/>
        {children}
      </Container>
      <Toolbar className={classes.toolbar}/>
    </>
  )
}