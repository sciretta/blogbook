import { createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/grey'

export const lightTheme = createMuiTheme({
  palette: {
  	primary:{
  		main:grey[800]
  	},
    background:{
    	header:'rgba(144,164,174,.5)',
      body:grey[50],
      card:grey[200],
      paper:blueGrey[50]
    },
    textColor:{
      title:grey[800]
    }
  },
  typography: {
    h1: {
      fontFamily: "system-ui",
      fontWeight:800,
      fontSize:24,
      color:grey[800]
    },
    h2: {
      fontFamily: "system-ui",
      fontWeight:800,
      fontSize:40,
      color:grey[800]
    },
    h3: {
      fontFamily: "system-ui",
      fontWeight:500,
      fontSize:20,
      color:grey[800]
    },
    h4: {
      fontFamily: "system-ui",
      fontWeight:400,
      fontSize:18,
      color:grey[800]
    },
    textArea:{
      fontFamily: "system-ui"
    }
  },
  drawer:{
    leftWidth:200,
    rightWidth:300
  },
  button:{
    minWidth:150,
    height:56,
    color:grey[50]
  }
})