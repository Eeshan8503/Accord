import React, { useEffect } from 'react';
import Logo from './../../assets/Accord-logo.svg'
import DP from './../../assets/Ellipse 1.png'
import './style.css'
import Lottie from 'react-lottie';
import IntrestBox from './IntrestBox';
import intrests from './../../lotties/intrests.json'
import intrests1 from './../../lotties/intrests1.json'
const IntrestsPage = () => {  
    const fallingLeaf = {
        loop: true,
        autoplay: true,
        animationData: intrests,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const intrests11 = {
        loop: true,
        autoplay: true,
        animationData: intrests1,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
  <div>
  <div style={{position:'absolute',left:0,top:10,display:'flex',zIndex:1}}>
  <img className='logo' src={Logo} height={150} width={150} alt='' />
  </div>
  <div style={{position:'absolute',left:150,top:-80,zIndex:1}}>
            <Lottie 
	                options={fallingLeaf}
                    height={400}
                    width={400}
                 />
     </div>
     <div style={{position:'absolute',right:0,bottom:0,zIndex:-1}}>
            <Lottie 
	                options={intrests11}
                    height={400}
                    width={400}
                 />
     </div>
  
  <div>
  <div className="headder"  >
  <div style={{display:'flex',justifyContent:'center'}}>
      <img className='dp' src={DP} height={150} width={150} alt='' />
  </div>
      <h1 className="title">Abhinav Jain</h1>
      <h1 className="title">Information Science</h1>
      <h1 className="title">2nd Year</h1>
      <br/>
  </div>    
      <h1 className="int">Choose any 5 intrests</h1>
      <div style={{display:'flex',marginLeft:50,marginTop:0,flexWrap:'wrap'}}>
      <IntrestBox cont='Music'/>
      <IntrestBox cont='Coding'/>
      <IntrestBox cont='Travel'/>
      <IntrestBox cont="Stocks\crypto\nft's"/>
      <IntrestBox cont='Food'/>
      <IntrestBox cont='Sports'/>
      <IntrestBox cont='Dance'/>
      <IntrestBox cont='Fashion'/>
      <IntrestBox cont='Entertainment'/>
      <IntrestBox cont='Photography'/>
      <IntrestBox cont='Art and Designing'/>
      <IntrestBox cont='Gaming'/>
      <IntrestBox cont='Reading\Writing'/>
      <IntrestBox cont='Entrepreneur'/>
      <IntrestBox cont='Other'/>
      </div>
      <br/>
      <div className='btn'>Continue</div>
  </div>
  </div>
  );
};

export default IntrestsPage;
