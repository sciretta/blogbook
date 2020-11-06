import { useState } from 'react'
import { useRouter } from 'next/router'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const ReceptionAlert = successMessage => Component => () =>{
  const {replace} = useRouter()
  const [error, setError] = useState({
    open:false,
    message:''
  })
  const [successAction,setSuccessAction] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setError({
      open:false,
      message:''
    })
    setSuccessAction(false)
  }
  return ( 
    <>
      <Component setError={setError} setSuccessAction={setSuccessAction} replace={replace}/>

      <Snackbar open={error.open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error.message}
        </Alert>
      </Snackbar>
      <Snackbar open={successAction} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ReceptionAlert