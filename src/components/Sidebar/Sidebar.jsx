import React from 'react';
import classes from './Sidebar.module.css';
import SettingIcon from '../../assets/Icons/SettingIcon';
import SidebarMenu from './SidebarMenu';
import userPicture from '../../images/userPicture.svg';


const Sidebar = () => {


    return (
        <aside className={classes.sidebar}>
            <header className={classes["sidebar__logo"]}>
                <span className={classes["sidebar__logo-icon"]}><SettingIcon aria-label="Settings" /></span>
                <h1 className={classes["sidebar__logo-title"]}>Dashboard</h1>
            </header>
            <SidebarMenu />
            <footer className={classes["sidebar__user-profile"]}>
                <div className={classes["sidebar__user-profile-info"]}>
                    <img src={userPicture} alt="User" className={classes["sidebar__user-profile-avatar"]} />
                    <div>
                        <h3 className={classes["sidebar__user-profile-name"]}>Evano</h3>
                        <p className={classes["sidebar__user-profile-role"]}>Project Manager</p>
                    </div>
                </div>
            </footer>
        </aside>
    );
}

export default Sidebar;
