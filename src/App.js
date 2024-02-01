import { useState } from 'react';
import './App.css'

const PasswordGenerator = () => {
  const [password, setPassword] = useState("")

const generatePassword = () =>{

  const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"

const passwordLenth  = 12;

let newPassword = ""
for(let i = 0; i < passwordLenth; i++){
  const randomIndex = Math.floor(Math.random() * char.length)
  newPassword = newPassword + char.charAt(randomIndex);
}

setPassword(newPassword)
};

  return (
    <>
<div className='general'>
    <div className='container'>
      <h2>Password generator</h2>
    </div>

    
    <div>
      <label>Password    </label>
      <input className='input' type="text" value = {password} />
    </div>

    <div>
      <button className='btn' onClick={generatePassword}>Generate Password </button>
    </div>

    </div>
    </>


  );
}

export default PasswordGenerator;
