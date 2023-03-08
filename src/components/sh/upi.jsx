import './styles/upi.css';
import React,{useEffect,useState} from 'react';
import alertLogo from './asserts/danger.png'

function Key4()
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
  let v = document.querySelector('input').value
  
  if(v===''){
    if(!document.querySelector('.sAlert'))
    document.body.appendChild(signInAlert('Enter valid Detail'))

    if(alertState === 0)setAlertState(1)
    else setAlertState(0)
  }
  else{
    window.location.pathname = '/end'
  }
}

  return(
   <>
    <div id='title'>
      <h1>Payment</h1>
    </div>
    <div id="cont">
      <input type="text" placeholder='Enter Your UPI ID Eg(abcd@axl)' />
    </div>
    <div id="button">
      <button onClick={pay}>₹ PAY</button>
    </div>
   </>
  )
}

export default Key4;