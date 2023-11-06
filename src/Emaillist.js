import React, { useEffect, useState } from 'react'
import './Emaillist.css';
import {Checkbox,IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';

function Emaillist() {
    const [emails,setemails]=useState([]);

    useEffect(()=>{
        db.collection('emails').orderBy('timeStamp','desc').onSnapshot
        (snapshot=>setemails(snapshot.docs.map(doc=>(
            {
            id:doc.id,
            data:doc.data(),
            }
        ))
        ))

    },[])

  return (
    <div className='emaillist'>
        <div className="emaillist_settings">
            <div className="emaillist_settingsLeft">
                <Checkbox />
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className="emaillist_settingsRihtt">
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
            </div>
        </div>
        <div className="emaillist_section">
                <Section Icon={InboxIcon} title="Primary" color="red" selected={true}/>
                <Section Icon={LocalOfferIcon} title="Promotions" color="blue" />
                <Section Icon={PeopleIcon} title="Social" color="green" />
        </div>
        <div className="emaillist_list">
            {emails.map(({id, data:{to,subject,message,timeStamp}}) => 
            (
                <EmailRow 
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timeStamp?.seconds * 1000).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
                />
            ))}
        </div>
    </div>
  )
}

export default Emaillist