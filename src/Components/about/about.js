import './about.css'
import React from 'react'

const about = () => {
  return (
    <div>
      <div className='about-section'>
        <h1>About</h1>
        <div className='about'>
          <div className='about-img'>
            <img src="https://cdn.pixabay.com/photo/2012/04/18/03/19/man-36741_960_720.png"></img>
          </div>
          <div className='content'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <h5>divyanshudhakar29@gmail.com</h5>
            <h5>Jaipur Rajasthan, India</h5>
          </div>
        </div>

      </div>
      

    </div>
  )
}

export default about
