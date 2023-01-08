import { UserProvider } from '../store/ContextProvider';
import { Box } from '@mui/material';
import SideBar from '../components/SideBar';
import Form from '../components/Form';
import ProfilePreview from '../components/ProfilePreview';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/Theme';

const ProfilePage = () => {    

    return (
        <ThemeProvider theme={theme}>            
            <Box sx={{ display: 'flex', minWidth: "1150" }}>
                <SideBar />
                <UserProvider>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: '#f7f7f7', p: 3, minWidth: "400px", width: 1 / 2 }}
                >
                    <Form />
                </Box>
                <Box sx={{ width: 1 / 4, minWidth: "100px" }}>
                    <ProfilePreview />
                </Box>
                </UserProvider>
            </Box>
        </ThemeProvider>
    )
}

export default ProfilePage;