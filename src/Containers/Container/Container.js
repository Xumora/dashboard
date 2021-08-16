import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Users from '../../Pages/Users/Users';
import Photos from '../../Pages/Photos/Photos';
import Todo from '../../Pages/Todo/Todo';
import Header from '../Header/Header';
import ContainerWrapper from './ContainerWrapper';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const links = [
    { to: "/", icon: faHome, name: "Home" },
    { to: "/users", icon: faUsers, name: "Users" },
    { to: "/photos", icon: faImages, name: "Photos" },
    { to: "/todos", icon: faList, name: "Todos" },
]
const Container = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ContainerWrapper className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Header />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className="py-3 px-2">
                    <ListItem button className="p-1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4J_HQ2VOH0K0nNwaGP1WW2FqZHSSQRYbjQ&usqp=CAU" alt="?" style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
                        <div className="ms-3">
                            <h6 className="mb-0 fw-bold v">Xumora Mamirova</h6>
                            <small className="mb-0">kh.mamirova@gmail.com</small>
                        </div>
                    </ListItem>
                </List>
                <Divider />
                <List className="py-3 px-2">
                    {
                        links.map((l, i) => {
                            return <ListItem button key={i}>
                                <Link to={l.to} className="btn v">
                                    <ListItemIcon><FontAwesomeIcon icon={l.icon} className="me-3 v" /></ListItemIcon>
                                    {l.name}
                                </Link>
                            </ListItem>
                        })
                    }
                </List>
            </Drawer>
            <main className={`bg-white p-0 ${classes.content}`}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/users">
                        <Users />
                    </Route>

                    <Route path="/photos">
                        <Photos />
                    </Route>

                    <Route path="/todos">
                        <Todo />
                    </Route>
                </Switch>
            </main>
        </ContainerWrapper>
    );
}

export default Container
