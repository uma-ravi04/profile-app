import { Alert,Snackbar } from '@mui/material';

const AlertMsg = ({ alert, setAlert }) => {

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      // open and onClose needs boolean. you can set inside useState
      open={Boolean(alert)}
      onClose={(e) => { setAlert(null) }}
      // after 5 seconds it will automatically close
      autoHideDuration={5000}
    >
      <Alert severity={alert?.severity}>{alert?.alertContent}</Alert>
    </Snackbar>
  )
}

export default AlertMsg;