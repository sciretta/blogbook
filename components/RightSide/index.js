import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Collapse from '@material-ui/core/Collapse'

import BookmarkIcon from '@material-ui/icons/Bookmark'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import LabelIcon from '@material-ui/icons/Label'

const topPosts = [
  {title:'How to start a js project?',likes:3},
  {title:'New way to do something?',likes:3},
  {title:'WTH IS GOING ON??',likes:3}
]

const useStyles = makeStyles((theme) => ({
  paper:{
  	background:theme.palette.background.paper
  },
  item:{
  	borderRadius:5
  },
  footer:{
    display:'flex',
    justifyContent:'center'
  }
}))

export default function RightSide(props) {
	const classes = useStyles()
  return (
    <>
      <Paper elevation={1} className={classes.paper}>
        <List component="nav">
          <ListItem className={classes.item}>
            <ListItemText 
              primary="Week Top 10"
            />
          </ListItem>
          {topPosts.map((post,index)=>
            <ListItem button className={classes.item} key={index}>
              <ListItemText 
                primary={`${index+1}-${post.title}`} 
                secondary={`${post.likes} likes`}
              />
            </ListItem>
          )}
        </List>
      </Paper>
      <footer className={classes.footer}>
        Leonardo • Blogbook © 2020
      </footer>
    </>
  )
}