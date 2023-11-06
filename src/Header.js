import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar ,IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser)
  const dispatch=useDispatch();
  const logOut=()=>{
     auth.signOut().then(()=>{
      dispatch(logout());
     })
  }
  return (
  <div className='header'>
    <div className="header_left">
      <IconButton>
        <MenuIcon />
      </IconButton>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="logo">
      </img>
    </div>
    <div className="header_middle">
      <SearchIcon />
      <input placeholder='Search mail' type='text' />
      <TuneIcon className='header_inputCaret' />
    </div>
      <div className="header_right">
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon/>
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <Avatar className='avicon' 
      src={user?.photoUrl}
      onClick={logOut}
      />
      </div>
  </div>
  );
}

export default Header;