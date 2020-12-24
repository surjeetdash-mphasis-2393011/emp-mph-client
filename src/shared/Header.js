import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from '@material-ui/core/Badge';
import logo from '../assets/emp-app-logo.png';
import { CalendarViewDay } from '@material-ui/icons'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Auth from '../Auth/Auth';

function useStickyState(key, defaultValue) {
    const [value, setValue] = React.useState(() => {
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null
            ? JSON.parse(stickyValue)
            : defaultValue;
    });
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}
const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

function Header(props) {
    const [token, setToken] = useStickyState('token', 'NOT_LOGGED_IN');

    useEffect(() => {
        // fetch your data when the props.location changes
    }, [props.location]);
    const classes = useStyles();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const [dialogOpen, setDialogOpen] = useState(false);
    const handleDialoClickOpen = () => {
        setDialogOpen(true);
    };
    const handleDialogClickAgree = () => {
        window.localStorage.clear();

        setDialogOpen(false);
        return <Auth></Auth>
    };

    const handleDialogClickDisAgree = () => {
        setDialogOpen(false);
    };
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom"
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["Personal Data", "Skils Management", "Training Data", "Project Management", "Leave data", "Setting"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {(token !== 'NOT_LOGGED_IN') && <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/People">People</Nav.Link>
                    <Nav.Link href="/Teams">Teams</Nav.Link>
                    <Nav.Link href="/Forums">Forums</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link> <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                    </Nav.Link>
                </Nav>}
                {(token !== 'NOT_LOGGED_IN') && <Nav>
                    <Nav.Link href="">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="">Logged in as {'username'}</Nav.Link>
                    <Nav.Link eventKey={2} onClick={handleDialoClickOpen}>SignOut</Nav.Link>
                </Nav>}
                {(token === 'NOT_LOGGED_IN') && <Nav>
                    <Nav.Link eventKey={2} href="/SignIn">SignIn</Nav.Link>
                </Nav>}
                {(token !== 'NOT_LOGGED_IN') && <div>
                    {["right"].map((anchor) => (
                        <React.Fragment key={anchor}>

                            <CalendarViewDay color="secondary" style={{ fontSize: 50 }} onClick={toggleDrawer(anchor, true)} />
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)} >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>}{'  '}
            </Navbar.Collapse>
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClickDisAgree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Action required"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you want to logout?
            </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClickDisAgree} color="primary">
                        Cancel
                </Button>
                    <Button onClick={handleDialogClickAgree} color="primary" autoFocus>
                        Agree
                </Button>
                </DialogActions>
            </Dialog>
        </Navbar>
    );
}

export default Header;

