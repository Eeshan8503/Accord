import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './styles.css'
import Logo from './../../assets/Accord-logo.svg'
import Lottie from 'react-lottie';
import animationData from './../../lotties/LoginpL.json'
import leaves from './../../lotties/leaves.json'
import leavesR from './../../lotties/leavesR.json'
const clientId = "740313692705-66409pi5h12j1nrisa60nfrqsk0vukqc.apps.googleusercontent.com";
const interact = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const fallingLeaf = {
    loop: true,
    autoplay: true,
    animationData: leaves,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const fallingLeafR = {
    loop: true,
    autoplay: true,
    animationData: leavesR,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div style={{display:"flex"}}>
            <div style={{height:"100vh",width:"50%", backgroundColor:"#f4f8f9", display:'flex',alignItems:'center',flexDirection:"column"}}>
                <img src={Logo} style={{height:"30%", width:"80%"}} alt="logo" />
                <h1 style={{fontSize:"3em"}}>Welcome to Accord</h1>
                <Lottie 
	                 options={interact}
                     height={400}
                    width={400}
                 />
            </div>
            <div style={{position:'absolute',left:'50%',zIndex:-1}}>
            <Lottie 
	                options={fallingLeaf}
                    height={400}
                    width={400}
                 />
            </div>
            <div style={{position:'absolute',right:0,zIndex:-1}}>
            <Lottie 
	                options={fallingLeafR}
                    height={300}
                    width={300}
                 />
            </div>
            <div style={{height:"100vh", display:"flex",flexDirection:'column', width:'50%',alignItems:'center'}}>
           
            <h1 style={{marginTop:'20%',fontSize:90}}>Login</h1>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    render={renderProps => (
                     <button className='login-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign In with your college email ID</button>
                    )}
                    // buttonText="Sign In with your college email ID"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    style={{height:'1000px'}}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
            </div>
        </div>
    );
}
export default Login;