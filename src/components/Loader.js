import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({isLoading})=>{
  return (
    <Backdrop
    sx={{  zIndex: 9999 }}
    open={isLoading}
  >
    <CircularProgress color="inherit" />
  </Backdrop> 
  )
}

export default Loader;
