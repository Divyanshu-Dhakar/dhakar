import './interests.css'
import React from 'react'

const interests = () => {
  return (
    <div>
      <div className='interests'>
        <h3>Interests</h3>
        <div className='cards'>
        <div className="cols">
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front">
              <div className="inner">
                <p>Frontend Development</p>

              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Transforming ideas into exceptional web and mobile app experiences.</p>
                <p>Work with:</p><p>HTML, CSS, Javascript, React Js</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front" >
              <div className="inner">
                <p>UI/UX Designing</p>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p><p>Work With:</p><p>
                    Figma, Adobe XD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front" >
              <div className="inner">
                <p>Graphic Designing</p>

              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Crafting visually stunning designs that connect with your audience.</p><p>Work With:</p><p>Adobe Photoshop, Adobe Illutrator</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front">
              <div className="inner">
                <p>Video Editing</p>
        
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Editing creative videos to showcase the Brand</p><p>Work With:</p><p>Adobe Premiere Pro, Adobe After Effects</p>
              </div>
            </div>
          </div>
        </div>
   
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default interests
