import './styles/final.css';
import React from 'react';
function home()
{
  window.location.assign('http://localhost:3001');
}
function Key3()
{
  return(
   <>
      <div id="cont">
      <h1>Congratulations !</h1>
      <h1>Your Order has been</h1>
      <h1>placed successfully.</h1>
      <h1 id="end">" Enjoy Your Food..."</h1>
    </div>
    <div id="button">
      <button onClick={home}>Go to home page</button>
    </div>
   </>
  )
}

export default Key3;