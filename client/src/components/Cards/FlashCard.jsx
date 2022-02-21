import React from 'react'
import './fcard.css'
import Dp from './../../assets/logo.png'
const FlashCard = () => {
  return (
   <div style={{marginTop:'12%'}}>
   <div class="marquee">
  <div>
    <span>You spin me right round, baby. Like a record, baby.</span>
    <span>You spin me right round, baby. Like a record, baby.</span>
  </div>
</div>
    <div className='main-card'>
        <div className='photo'>
            <img src={Dp}  alt=''/>
        </div>
        <div className='content-container'>
         <h1>About</h1>
         <h1>From</h1>
         <h1>Branch</h1>
         <h1>Common Intrests</h1>
         <h1>Spotify Playlist</h1>
        </div>
    </div>
   </div>
    
  )
}

export default FlashCard    