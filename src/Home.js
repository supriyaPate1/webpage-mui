import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ComputerIcon from '@mui/icons-material/Computer';
import './science.css'
export default function Home() {
  return (
    <>
                    
      <div className='body1'>
         <div className='text'>
            <div >
              <div>
                <h1>Get Started with
                Aptio Today</h1>
              </div>               
              <div className='text'><p id='para'>Talk to an Aptio expert about your needs and see a live product demonstration. Discuss current challenge and fight the right application for your curent use case </p>
              </div>
            </div>
         </div>
         <div className='betweenspace'></div>
         
        <div className='text1'>
          <form className='form' >
            <table className='tab'>
                
                <tr>
                    <td ><input type='text' className='twofields' required id='firstN' placeholder='first name'></input></td>

                    <td><input type='text' className='twofields' required id='firstL' placeholder='last name'  ></input></td>
                </tr>
                <tr>
                    <td><input type='text' required className='twofields' id='Ffirst' placeholder='Work Mail' ></input></td>
                    <td><input type='text' required className='twofields' id='Lfirst' placeholder='Phone '></input></td>
                </tr>
                <tr>
                    <td><input type="text"  className='twofields' id='phone'  placeholder='Company' ></input></td>
                    <td><input type="Number" className='twofields'  placeholder='Job Function'></input></td>
                </tr>
                <tr>
                    <td colSpan={2}><input  className='onefield' type='Number'  placeholder='Country' ></input></td>
                </tr>
                <tr>
                    <td colSpan={2}><input className='onefield' type='text' id='add'  placeholder='How can we help' ></input></td>
                </tr>
                <tr>
                    <td><button type='Button' id='submitbtn'>Get Started</button></td>
                </tr>              
             </table>
           </form>
       
        </div>
        <div className='sideicons'>
          <div id='msg'>
              <ComputerIcon/>
          </div>
          <div id='comp'>
              <ChatBubbleOutlineIcon/>
          </div>
        </div>
      </div>
      
    
    </>
  )
}
