import {ReactNode} from "react";
import {Box, Divider, Drawer} from "@mui/material";
import Logo from "./images/Logo.svg"
import {ReactComponent as Home} from "./images/Home.svg"
import {ReactComponent as Products} from "./images/products.svg"
import {ReactComponent as Sales} from "./images/sales.svg"
import {ReactComponent as User} from "./images/user.svg"
import {ReactComponent as Exit} from "./images/exit.svg"
import NavItem from "./navItem";
import {useLocation} from "react-router-dom";

const navElements = [
    {
        id: 1,
        icon: Home,
        title: 'Main page',
        path: '/'
    },
    {
        id: 2,
        icon: Products,
        title: 'My products',
        path: '/products'
    },
    {
        id: 3,
        icon: Sales,
        title: 'Form here',
        path: '/form'
    },
    {
        id: 4,
        icon: User,
        title: 'Personal cabinet',
        path: '/user'
    }
]


const Navigation = (props: { children: ReactNode }) => {
    const drawerWidth = 275
    let location = useLocation();

    return (
        <Box sx={{display: 'flex'}}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    height: '100%',
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Box py={6} px={5}>
                        <img alt={'logo'} src={Logo}/>
                    </Box>
                    <Box py={5}>
                        {navElements.map((el) => {
                            return (
                                <NavItem
                                    key={el.id}
                                    active={(location.pathname === el.path)}
                                    icon={el.icon}
                                    path={el.path}
                                    title={el.title}/>
                            )
                        })}
                    </Box>
                    <Box sx={{flexGrow: 1}}></Box>
                    <Divider sx={{marginLeft: '40px', marginRight: '40px'}}/>
                    <Box py={6}>
                        <NavItem icon={Exit} active={false} path={'/logout'} title={'Log out'}/>
                    </Box>
                </Box>
            </Drawer>
            <Box style={{minHeight:'100vh', flexGrow: 1, backgroundColor: "#F8F8F8"}}>
                {props.children}
            </Box>
        </Box>
    )
}

export default Navigation