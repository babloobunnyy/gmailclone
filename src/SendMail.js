import React from 'react'
import "./sendmail.css";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';


function SendMail() {
  const dispatch=useDispatch();
  const {register,handleSubmit,watch,formState: { errors }}=useForm()
  const onSubmit=(formData)=>{
    db.collection('emails').add({
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  };
  return (
    <div className="sendmail">
        <div className='sendmail_header'>
            <h3>New Message</h3>
            <CloseIcon className="semdmail__close"
            onClick={()=>dispatch(closeSendMessage())}
            />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name='to' placeholder="To" type ="email" {...register('to', { required: true })}/>
        {errors.to && <p className='sendmail_errors'>To is required</p>}
        <input name='subject' placeholder="Subject"  type ="text" {...register('subject', { required: true })}/>
        {errors.subject && <p className='sendmail_errors'>Subject is required</p>}
        <input name='message' placeholder="Message...." className="send_message" type="text" {...register('message', { required: true })}/>
        {errors.message && <p className='sendmail_errors'>Seriously!!??</p>}
        <div className='sendMail_options'>
            <Button className='sendmail_send'
            variant='contained'
            color='primary'
            type='submit'>Send</Button>
        </div>
        </form>
    </div>
  )
}

export default SendMail