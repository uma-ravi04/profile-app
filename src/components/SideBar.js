import { Drawer, List, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { LogoutRounded, QuestionAnswerRounded, ArticleRounded, CorporateFareRounded, Dehaze, Home, Settings, Assignment, Dashboard } from '@mui/icons-material';

const itemList = [{
    "title": "Home",
    "icon": <Home />
},
{
    "title": "Projects",
    "icon": <Assignment />
},
{
    "title": "Dashboard",
    "icon": <Dashboard />
},
{
    "title": "Messages",
    "icon": <QuestionAnswerRounded />
}, {
    "title": "Documents",
    "icon": <ArticleRounded />
}, {
    "title": "Organisations",
    "icon": <CorporateFareRounded />
},
{
    "title": "Settings",
    "icon": <Settings />
}]

export default function SideBar() {

    return (       
        <Drawer
            sx={{
                width: '200px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '200px',
                    boxSizing: 'border-box',
                    borderWidth: 0
              },
            }}           
            variant="permanent"
            anchor="left"
        >
            <div className='side-header'><img src="logo.png" alt='kyro' /><Dehaze/></div>
            <List >
                {itemList.map((item) => (
                    <ListItem key={item.title} disablePadding  >
                        <ListItemButton>
                             <ListItemIcon >
                                {item.icon}
                            </ListItemIcon >
                            <ListItemText primary={item.title} disableTypography className='list-text'/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List style={{ marginTop: `auto` , marginBottom:"1.5rem"}}>
                <ListItem key={"Log out"} disablePadding  >
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutRounded />
                        </ListItemIcon>
                        <ListItemText primary={"Log out"} disableTypography className='list-text'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>       
    )
}