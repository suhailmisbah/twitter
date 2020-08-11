import React from 'react'
import { Link } from 'react-router-dom';

// Style
import './assets/sideNav.css';

// UI Elemenst
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';

// ICONS
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function sideNav() {
    return (
        <div className="sideNav__main">
            <Divider />
                <List>
                     {/* logo */}
                    <ListItem>
                        <TwitterIcon className="twitter__icon"/>
                    </ListItem>

                     {/* Navigation */}
                     <Link to="/" ><ListItem className="sideNav__items">
                    <ListItemIcon> <HomeIcon/></ListItemIcon>
                    <ListItemText><strong>Home</strong></ListItemText>
                    </ListItem></Link>

                    <Link to="/explore" ><ListItem className="sideNav__items">
                        <ListItemIcon> <ExploreIcon/></ListItemIcon>
                        <ListItemText><strong>Explore</strong></ListItemText>
                    </ListItem></Link>

                    <ListItem className="sideNav__items">
                    <ListItemIcon> <NotificationsIcon/></ListItemIcon>
                    <ListItemText><strong>Notificatons</strong> </ListItemText>
                    </ListItem>

                    <ListItem className="sideNav__items">
                    <ListItemIcon> <MessageIcon/></ListItemIcon>
                    <ListItemText><strong>Messages</strong> </ListItemText>
                    </ListItem>

                    <ListItem className="sideNav__items"> 
                    <ListItemIcon> <BookmarksIcon/></ListItemIcon>
                    <ListItemText><strong>Bookmarks</strong> </ListItemText>
                    </ListItem>

                    <ListItem className="sideNav__items">
                    <ListItemIcon> <ListAltIcon/></ListItemIcon>
                    <ListItemText><strong>Lists</strong> </ListItemText>
                    </ListItem>

                    <ListItem className="sideNav__items">
                    <ListItemIcon> <PersonIcon/></ListItemIcon>
                    <ListItemText><strong>Profile</strong> </ListItemText>
                    </ListItem>

                    <ListItem className="sideNav__items">
                    <ListItemIcon> <MoreHorizIcon/></ListItemIcon>
                    <ListItemText><strong>More</strong> </ListItemText>
                    </ListItem>

                    {/* tweet button */}
                    <ListItem>
                        <Button variant="outlined" className="tweet__button" fullWidth>Tweet</Button>
                    </ListItem>

                    <ListItem className="sideNav__items">
                        <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <h3 className="sideNav__username">suhailmisbah <ExitToAppIcon/></h3>
                    </ListItem>
                </List>
                
                <Divider />
            
        </div>
    )
}

export default sideNav
