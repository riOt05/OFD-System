import './styles/card.css';
import React,{useEffect,useState} from 'react';
import alertLogo from './asserts/danger.png'

function Key5()
{

   // Alert

   let [alertState,setAlertState] = useState(0)

   useEffect(()=>{
     let timmer =  setTimeout(()=>{
          if(document.querySelector('.sAlert')){
              document.body.removeChild(document.querySelector('.sAlert'))
          }
      },2000)
      return ()=>clearTimeout(timmer)
  },[alertState])
 
   function signInAlert(value){
     let div = document.createElement('div')
     div.className ='sAlert'
     let message = document.createElement('h1')
     message.innerHTML =value
     let img = document.createElement('img')
     img.src = alertLogo
     div.appendChild(img)
     div.appendChild(message)
     return div
  }
 
  //alert end

  function pay(){
    let v1 = document.getElementById('input1').value;
    let v2 = document.getElementById('input2').value;

    if(v1==='' || v2==='' ){
      if(!document.querySelector('.sAlert'))
      document.body.appendChild(signInAlert('Enter valid Detail'))

      if(alertState === 0)setAlertState(1)
      else setAlertState(0)
    }
    // else if(!v2.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/g)){
    //   if(!document.querySelector('.sAlert'))
    //   document.body.appendChild(signInAlert('Enter valid expDate'))
    //   if(alertState === 0)setAlertState(1)
    //   else setAlertState(0)
    // }
    // else if(!v1.match(/[0-9]{3}/gi)){
    //   if(!document.querySelector('.sAlert'))
    //   document.body.appendChild(signInAlert('Enter valid CVV'))
    //   if(alertState === 0)setAlertState(1)
    //   else setAlertState(0)
    // }
    else{
     window.location.pathname ='/end'
    }
  }

  return(
   <>
    <div id='title'>
      <h1>Payment</h1>
    </div>
    <div id="cont">
      <input type="text" id='input1' placeholder="Enter Your Card's CVV Date"/><br />
      <input type="text" id='input2' placeholder="Enter Your Card's Expiry Date" />
    </div>
    <div id="button">
      <button onClick={pay}>₹ Pay</button>
    </div>
   </>
  )
}

export default Key5; 