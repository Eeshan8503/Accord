import React ,{useState} from 'react';
import './style.css'
const IntrestBox = (props) => {
    const [color, setcolor] = useState('white');
    const fcolor='black'
    const [toggle, settoggle] = useState(false);
    function toggler(){
        settoggle(!toggle);
        if(toggle){
            setcolor('#B3ECF1')
        }
        else{
            setcolor('white')
        }
    }
  return(
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',border:'2px solid black', height:50,padding:5,width:200,borderRadius:100,margin:'2em',backgroundColor:color,cursor:'pointer',lineHeight:1}} onClick={toggler}>
     <h3 style={{textAlign:'center',color:fcolor}}>{props.cont}</h3>
     </div>
  );
};

export default IntrestBox;
