import React, { useState, createContext } from 'react';
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
function Login({setter}) {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        setter(res.profileObj)
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
        <div style={{display:"flex", flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div style={{position:'absolute',left:0,top:0,zIndex:-1}}>
            <Lottie 
	                options={fallingLeaf}
                    height={400}
                    width={400}
                 />
            </div>
            
            <div style={{position:'absolute',right:0,top:0,zIndex:-1}}>
            <Lottie 
	                options={fallingLeafR}
                    height={300}
                    width={300}
                 />
            </div>
        <img src={Logo} style={{height:"45%", width:"45%"}} alt="logo" />
            {/* <div style={{height:"100vh",width:"50%", backgroundColor:"transparent", display:'flex',alignItems:'center',justifyContent:'center',flexDirection:"column"}}>
                <h1 style={{fontSize:"3em"}}>Welcome</h1>
                <Lottie 
	                 options={interact}
                     height={400}
                    width={400}
                 />
            </div>
            <div style={{position:'absolute',left:0,zIndex:-1}}>
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
            </div> */}
            <div>
           
            <h1 className='head' style={{marginTop:'5%',fontSize:'3em'}}>Login</h1>
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