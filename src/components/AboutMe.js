import React from 'react';

export default function About(){
    return(
      <section className="section" id="about">

        
        <div className="About"> 
      <img alt="card"  src='https://www.maxpixel.net/static/photo/1x/Icon-Female-Avatar-Female-Icon-Red-Icon-Avatar-6007530.png'className="image"/>
          
    <h2>Kainat Farooq</h2>
                     
          <p className="sec-p"></p>
          <p className="sec-p2">Web Developer</p>
          
          <div className="div-icon">
        <p className="card-icons">
          <a title="twitter account" href='www.twitter.com' target="_blank" >
        <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        
        <a href='www.facebook.com' target="_blank" title="facebook account">
        <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        
        <a href= "https://github.com/Kainat18" target= "_blank" title="github account">
        <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
        </p>
            
          </div>
          </div>
          <div className="description">
          <h2>Hello</h2>
          <h4 className="intro">Here's who I am & what I do</h4>
            
          <div className="button">
          <a href="#resume"><button className="btn-1">RESUME</button></a>
         <a href="#projects" > <button className="btn-2">PROJECTS</button> </a>
         </div>
            
          <p className='aboutme'> I'm Kainat Farooq </p>
          <p className='aboutme'>I’m a self-motivated young individual and a beginner in web-development</p>
            
          </div>

          
         

      </section>
    )
}