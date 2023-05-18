import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./css/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar }  from "@material-ui/core"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Header() {

    const user = useSelector(selectUser);
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img src='data:image/png;base64,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'/>
                    </div>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <Headeroptions Icon={HomeIcon} title="Home"/>
                <Headeroptions Icon={PeopleIcon} title="My Network"/>
                <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
                <Headeroptions Icon={MessageIcon} title="Messaging"/>
                <Headeroptions Icon={NotificationsIcon} title="Notification"/>
                <Headeroptions avatar={Avatar} title={user.displayName}/>
            </div>
        </div>
    )
}

export default Header

