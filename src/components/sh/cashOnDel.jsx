import './styles/cashOnDel.css';
import React from 'react';
function Key6()
{
  return(
   <>
    <div id='title'>
      <h1>Payment</h1>
    </div>
    <div id="cont">
      <h1>For CashOn Delivery</h1>
      <h1>Cancellation Policies</h1>
      <h1>Are Not Applicable...</h1>
    </div>
    <div id="button">
      <button onClick={()=>window.location.pathname='/end'}>Place My Order</button>
    </div>
   </>
  )
}

export default Key6;