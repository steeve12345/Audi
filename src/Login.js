import React from 'react';
import './Login.css';
import audi from "./audi1.png";
import { data } from 'react-router-dom';
const Login = (props) => {
var userData = [
  {userName: "karthi",password: 6381,cart:[]},
  {userName: "dhinesh",paswcord: 6380,cart:[]},
  {userName: "pandii",password: 9090,cart:[]},
];
// function signup()
// var userName = document.getElementById("usserName").value;
// var userName = document.getElementById("password").value;
// console.log("userName","password");


const signup = () => {
  var userName = document.getElementById("userName").value;
  var userPassword = document.getElementById("password").value;
  var activeUserDetail = userData.filter((data)=>{
    return userName == data.userName;
  });
  console.log(activeUserDetail);
  if (activeUserDetail.length > 0){
    if(activeUserDetail[0].password == userPassword){
      localStorage.setItem("userName",activeUserDetail[0].userName);
      window.location.replace("./Home");
      } else {
      console.log("wrong password");
      
    }
  
}
};
  return (
    <div className='backround' >

        <div className='ak'>                 
           
          <img className='logo' src={audi} alt=''/>
        <div>
         <p>username</p>
            <input id="userName" placeholder="Userid...." />
           
            </div>
            <div>
            <p>password</p>
            <input id="password" placeholder="password...." />
            
            </div>
            <button onClick={signup}>Login</button>
            </div>
            </div>
  );
};
export default Login;