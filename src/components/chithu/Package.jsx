import { useEffect,useState } from "react";
import notFoundImg from './asserts/empty-box.png'
import './styles/chithu.css'

let overAllData ={}

export default function Package(){
     //states
     let [dineIN,setDineIn] = useState(false)
     let [takeAway,setTakeAway] = useState(false)
                                  
     useEffect(()=>{
          if(window.location.pathname === '/dineIn')setDineIn(true)
          else if(window.location.pathname === '/takeAway')setTakeAway(true)
     },[])

     //functionlalities

     document.getElementById('back').addEventListener('click',()=>{back()})

     let [count,setCount] = useState(0)
     let meridian = 0;

     function back(){
          console.log('back');
     }

     function navi(){
          if(window.location.pathname ==='/takeAway'){
             overAllData['type'] = 'Take-Away'
             overAllData['time'] = document.getElementById('timeIn').value
             overAllData['packageType'] = document.getElementById('spec1').checked?'Bag':'Box'
             overAllData['delFee'] = 0
             overAllData['packageFee'] = 27
             
             sessionStorage.setItem('pkDetail',JSON.stringify(overAllData))
          }
          else if(window.location.pathname === '/dineIn'){
               overAllData['type'] = 'Dine-In'
               overAllData['time'] = document.getElementById('timeIn').value
               overAllData['numberOfPersons'] = document.getElementById('personNum').innerText
               overAllData['delFee'] = 0
               overAllData['packageFee'] = 0
               overAllData['specification'] = document.getElementById('spec1').checked ?'Ac':'Non-Ac'
               
               sessionStorage.setItem('pkDetail',JSON.stringify(overAllData))
          }

          window.location.pathname = '/billPay'
     }

     function updateMeridian(a,e){
         e.target.parentNode.childNodes.forEach(element => {
          if(element === e.target){
               element.style.backgroundColor = 'blue'
               return
          }
          element.style.backgroundColor = 'red'
         });
          if(a === 'am' && meridian!==1)meridian=1
          else if(a === 'pm' && meridian!==0)meridian=0
     }

     function increment(){
          setCount(count+=1)
     }
     function decrement(){
          if(count <= 0)return
          setCount(count-=1)
     }

     //Contents
     function dine_IN(){
        
      return (
          <>
           <div className="heading">
               <h1>Dine-IN</h1>
           </div>
           <div className="options">
            <div className="option1">
               <div id="disc">
                    <pre id="p">Number Of Person</pre>
               </div>
               <div id="value">
                    <div id="disp"><span id="personNum">{count}</span></div>
                    <div id="valbtns">
                         <button onClick={increment}>&#43;</button>
                         <button onClick={decrement}>&#45;</button>
                    </div>
               </div>
            </div>
            <div className="option2">
               <div id="disc">
                    <pre id="p">Dine-In Time</pre>
               </div>
               <div id="value">  
                    <div id="disp"><input type="time" id="timeIn" placeholder='00:00' /></div>
                    <div id="valbtns">
                         <button onClick={(e)=>updateMeridian('am',e)}>AM</button>
                         <button onClick={(e)=>updateMeridian('pm',e)}>PM</button>
                    </div>
               </div>
            </div>
            <div className="option3">
               <div id="disc">    
               <p id="p">Specification</p>
               </div>
               <div id="nonVal">
                    <div>
                         <input type="radio" name="spec" id="spec1" /><label htmlFor="spec1">AC</label>
                    </div>
                    <div>
                         <input type="radio" name="spec" id="spec"/><label htmlFor="spec">Non-AC</label>
                    </div>
               </div>
            </div>
            <div id="btnDiv"><button onClick={navi}>Next</button></div>
           </div>
          </>
      )
     }

     function take_Away(){
          return(
               <>
               <div className="heading">
                   <h1>Take-Away</h1>
               </div>
               <div className="options">
                <div className="option1">
                   <div id="disc">
                        <pre id="p">Package Type</pre>
                   </div>
                   <div id="nonVal">
                    <div>
                         <input type="radio" name="spec" id="spec1" /><label htmlFor="spec1">BAG</label>
                    </div>
                    <div>
                         <input type="radio" name="spec" id="spec"/><label htmlFor="spec">BOX</label>
                    </div>
               </div>
                </div>
                <div className="option2">
                   <div id="disc">
                        <pre id="p">TakeAway- Time</pre>
                   </div>
                   <div id="value">  
                        <div id="disp"><input type="time" id="timeIn" placeholder='00:00' /></div>
                        <div id="valbtns">
                             <button onClick={(e)=>updateMeridian('am',e)}>AM</button>
                             <button onClick={(e)=>updateMeridian('pm',e)}>PM</button>
                        </div>
                   </div>
                </div>
                <div id="btnDiv"><button onClick={navi}>Next</button></div>
               </div>
              </>
          )
     }
     function notFound(){
            return(
               <>
               <style>
              {`.heading{
                background-color: black ;
                border:1px solid white;
              }
              .container{
                background-color: black ;
              }`}
               </style>
                <div className="heading">
                   <h1 style={{color:'red'}}>PageNotFound err:404</h1>
               </div>
               <div id="notFoundBody">
                    <img src={notFoundImg} alt=""/>
               </div>
               </>
            )
     }

     return dineIN?dine_IN():takeAway?take_Away():notFound()
}