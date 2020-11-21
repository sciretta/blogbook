import { useState } from 'react'
import { useRouter } from 'next/router'

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
import WebIcon from "@material-ui/icons/Web"

import { useStore } from '../../Store'

const userTags = ['javascript','maths','react','python','javascript','maths','react','python','javascript','maths','react','python']
const popularTags = ['art','music','maths','react','physics']

const useStyles = makeStyles((theme) => ({
  item:{
  	borderRadius:5
  }
}))

export default function LeftSide() {
  const {user} = useStore()
	const classes = useStyles()
  
  return (
    <>
      {user.username?
        <UserList username={user.username}/>:
        <Tags tags={popularTags}/>
      }
    </>
  )
}

function UserList({username}){
  const classes = useStyles()
  const {replace} = useRouter()

  const handleRedirect = path =>{
    replace(path)
  }

  return(
    <List component="nav">
      <ListItem button 
        className={classes.item}
        onClick={()=>handleRedirect(`/${username}`)}
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary={username}/>
      </ListItem>
      <ListItem button 
        className={classes.item}
        onClick={()=>handleRedirect("/")}
      >
        <ListItemIcon>
          <BookmarkIcon />
        </ListItemIcon>
        <ListItemText primary="Reading list"/>
      </ListItem>
      <ListItem button 
        className={classes.item}
        onClick={()=>handleRedirect("/")}
      >
        <ListItemIcon>
          <WebIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard"/>
      </ListItem>
      <Tags tags={userTags}/>
    </List>
  )
}


function Tags({tags}) {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open);
  }
  return (
  	<>
      <ListItem button onClick={handleClick} className={classes.item}>
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary="My Tags" />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {tags.map(tag=>
			    	<ListItem button className={classes.item}>
			        <ListItemText primary={`#${tag}`}/>
			      </ListItem>
			    )}
        </List>
      </Collapse>
    </>
  )
}