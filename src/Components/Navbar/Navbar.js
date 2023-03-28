import React, {useState} from 'react';
import './Navbar.css';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai' 
function Navbar() {
  const [showbutton,setShowButoon]=useState(false);
  return (
    <div className='navbarbody'>
         <div className='linksparentbody'>
             <h1><i class="fa-duotone fa-envelope"></i> Get in Touch</h1>
            <div className='closeicon'>
            <AiOutlineClose style={{display : showbutton? 'block' : 'none' }} onClick={()=>{setShowButoon(false)}} className='closeicon'/>
            <AiOutlineMenu style={{display : showbutton? 'none' : 'block' }} onClick={()=>{setShowButoon(true)}} className='closeicon'/>
      
            </div>
               </div>
            <div className={showbutton ? "showclass":"hideclass"}>
            <div className='navbarlinks'>
              <h4>Home</h4>
              <h4>About Us</h4>
              <h4>Contact Us</h4>
              <button>Linkedin</button>
            </div>
         
              
            </div>
          
   
    </div>
  )
}

export default Navbar
