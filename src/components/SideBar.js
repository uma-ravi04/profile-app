import { Drawer, List, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { LogoutRounded, Dehaze } from '@mui/icons-material';
import { itemList } from '../constants';

export default function SideBar() {

    return (
        <Drawer
            sx={{
                width: '200px',
                height: '90vh',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '200px',
                    boxSizing: 'border-box',
                    borderWidth: 0,
                    height: '95vh'
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <div className='side-header'><img src="logo.png" alt='kyro' /><Dehaze /></div>
            <List >
                {itemList.map((item) => (
                    <ListItem key={item.title} disablePadding  >
                        <ListItemButton>
                            <ListItemIcon >
                                {item.icon}
                            </ListItemIcon >
                            <ListItemText primary={item.title} disableTypography className='list-text' />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List style={{ marginTop: `auto`, marginBottom: "1.5rem" }}>
                <ListItem key={"Log out"} disablePadding  >
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutRounded />
                        </ListItemIcon>
                        <ListItemText primary={"Log out"} disableTypography className='list-text' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}