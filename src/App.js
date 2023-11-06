import React, { useEffect } from 'react';
import './App.css';
import Emaillist from './Emaillist';
import Header from './Header.js';
import Mail from './Mail.js';
import Sidebar from './Sidebar.js';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch to dispatch actions
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice.js';
import Login from './Login.js';
import { auth } from './firebase.js';


function App() {
  
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if (user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photourl:user.photoURL
        }))
      }
    })
  },[])
  return (
    <Router>
    {!user? (
      <Login   />
    ):
    (
      <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Routes>
          <Route path='/mail' element={<Mail />} />
          <Route path='/' element={<Emaillist />} />
        </Routes>
      </div>
      {sendMessageIsOpen && <SendMail />} {/* Show SendMail component based on sendMessageIsOpen */}
      {/* <button onClick={handleOpenSendMessage}>Open Message</button> Button to dispatch openSendMessage action */}
      {/* <button onClick={handleCloseSendMessage}>Close Message</button> Button to dispatch closeSendMessage action */}
    </div>
    )}
    </Router>
      );
}

export default App;
