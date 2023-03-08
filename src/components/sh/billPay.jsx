import "./styles/billPay.css";
import React,{useEffect,useState} from "react";
import alertLogo from './asserts/danger.png'

let data = JSON.parse(sessionStorage.getItem('pkDetail'));

function Key2() {

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

  function next() {
    if (document.querySelectorAll(".optn")[0].checked) {
      window.location.pathname = "/cashOnDel";
    } else if (document.querySelectorAll(".optn")[1].checked) {
      window.location.pathname = "/card";
    } else if (document.querySelectorAll(".optn")[2].checked) {
      window.location.pathname = "/upi";
    }
    else{
      if(!document.querySelector('.sAlert'))
      document.body.appendChild(signInAlert('Select One'))

      if(alertState === 0)setAlertState(1)
      else setAlertState(0)
    }
  }

  return (
    <>
      <div className="heading">
        <h1>Bill Details</h1>
      </div>
      <div id="elements">
        <div id="billdetails" className="bANDpDIV">
          <div id="bHeading">
            <h1 id="bh1">Bill Details :</h1>
          </div>
          <div id="billDet">
            <div id="pDetail"> 
              <div id="pD1">
                <h2>Item Total : </h2>
              </div>
              <div id="pD2">
                <h2>&#8377; {0}</h2>
              </div>
            </div>
            <div id="pDetail"> 
              <div id="pD1">
                <h2>Delivery Fee : </h2>
              </div>
              <div id="pD2">
                <h2>&#8377; {data.delFee}</h2>
              </div>
            </div>
            <div id="pDetail"> 
              <div id="pD1">
                <h2>Packing Fee : </h2>
              </div>
              <div id="pD2">
                <h2>&#8377; {data.packageFee}</h2>
              </div>
            </div>
            <div id="pDetail"> 
              <div id="pD1">
                <h2>Total : </h2>
              </div>
              <div id="pD2">
                <h2>&#8377; {data.delFee+data.packageFee}</h2>
              </div>
            </div>
          </div>
        </div>
        <div id="payment" className="bANDpDIV">
          <div id="pHeading">
            <h1 id="bh1">Payment :</h1>
          </div>
          <div id="align" className="pDiv">
            <input type="radio" className="optn" id="r" name="sh" />
            <p>Cash On Delivery</p>
          </div>
          <div id="align" className="pDiv">
            <input type="radio" className="optn" id="r" name="sh" />
            <p>Credit / Debit Card</p>
          </div>
          <div id="align" className="pDiv">
            <input type="radio" className="optn" id="r" name="sh" />
            <p>UPI Payment</p>
          </div>
      <div id="button">
            <button onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Key2;
