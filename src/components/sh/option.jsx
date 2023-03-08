import './styles/option.css';
import React from 'react';

let overAllData ={}

function Key1()
{

  function delivery(){
    window.location.pathname = '/billPay'

             overAllData['type'] = 'Delivery'
             overAllData['delFee'] = 50
             overAllData['packageFee'] = 20
             
             sessionStorage.setItem('pkDetail',JSON.stringify(overAllData))

  }
  function dineIn(){
    window.location.pathname = '/dineIn'
  }
  function takeAway(){
    window.location.pathname = '/takeAway'
  }
 
  return(
    <>
    <div id="disc">
      <p id="innerDisc" onClick={dineIn}>Dine-In</p>
      </div>  
    <div id="disc">  
      <p id="innerDisc" onClick={takeAway}>Take Away</p>
    </div>
    <div id="disc">  
      <p id="innerDisc" onClick={delivery}>Delivery</p>
    </div>
    </>
  )
}

export default Key1;