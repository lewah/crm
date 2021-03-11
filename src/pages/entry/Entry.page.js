import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import './entry.style.css';

import {Jumbotron} from 'react-bootstrap';
import {LoginForm} from '../../components/login/Login.comp';
import {PasswordReset} from '../../components/password-reset/PasswordReset.comp';

export const Entry = () => {
  // function bellow saves email&password
  const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
       const[frmLoad, setFrmLoad] = useState('login');

    // handles the changed set values(email,password) then passed to loginform as prop
const handleOnChange = e => {
const{name, value} = e.target;
//
switch (name) {
  case 'email':
  setEmail(value);
    break;
    case 'password':
    setPassword(value);
      break;
  default:
  break;
}

console.log(name, value);
};

// alert for filling up the email
const handleOnSubmit = e => {
  e.preventDefault();

  if(! email || !password){
    return alert('Fill the required details!');
  }
  //Todo api to submit the form
  console.log(email,password);
};
const handleOnResetSubmit = e => {
  e.preventDefault();

  if(! email ){
    return alert('Please Enter Email!');
  }
  //Todo api to submit the form
  console.log(email);
};


// handles the clicking of forget password to a Reset Page
const formSwitcher = (frmType)=> {
  setFrmLoad(frmType);

};
  return(
    <div className='entry-page '>
     <Jumbotron className='form-box'>
     {frmLoad === 'login' &&
       <LoginForm
     handleOnChange = {handleOnChange}
     handleOnSubmit = {handleOnSubmit}
     formSwitcher = {formSwitcher}
     email = {email}
     pass = {password}
     />}
     {frmLoad === 'reset' &&
       <PasswordReset
     handleOnChange = {handleOnChange}
     handleOnResetSubmit = {handleOnResetSubmit}
     formSwitcher = {formSwitcher}
     email = {email}

     />}
     </Jumbotron>
    </div>
  );
}
