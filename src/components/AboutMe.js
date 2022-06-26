import React from 'react';

export default function About(){
    return(
      <section className="section" id="about">

       
        <div className="About"> 
      <img alt="card"  src='https://www.maxpixel.net/static/photo/1x/Icon-Female-Avatar-Female-Icon-Red-Icon-Avatar-6007530.png'className="image"/>
          
      <h2>Kainat Farooq</h2>
                     
          <p className="sec-p"></p>
          <p className="sec-p2">Web Developer</p>

          
          
        <div className="div-icons">
        <div className="card-icons">
          <a title="twitter account" href='www.twitter.com' target="_blank" >
          <i class="fa-brands fa-twitter"></i>
        </a>
        
        <a href='www.facebook.com' target="_blank" title="facebook account">
        <i class="fa-brands fa-facebook-f"></i>
        </a>
        
        <a href= "https://github.com/Kainat18" target= "_blank" title="github account">
        <i class="fa-brands fa-github"></i>
        </a>
        
        </div>
        </div>
        </div>
    
          <div className="description">
          <h2>Hello</h2>

          <div className="button">
          <a href="#resume"><button className="btn-1">RESUME</button></a>
         <a href="#projects" > <button className="btn-2">PROJECTS</button> </a>
         </div>

          <p className='aboutme'> My name is Kainat  </p>
          <p className='aboutme'> I am a self-taught beginner in web development. The idea of creating beautiful and interactive websites 
          just by writing a couple of lines of code has got my attention towards web design. 
          Now I am eager to dive deeper into it and learn new and more exciting things. 
          Some of the skills I bring to the table:
          HTML & CSS , Javascript and ReactJS.
          </p>
         
          </div>    
          
         
      </section>
    )
}

/* <div className="description">
          <h2>Hello</h2>
          <h4 className="intro">Here's who I am & what I do</h4>
            
          <div className="button">
          <a href="#resume"><button className="btn-1">RESUME</button></a>
         <a href="#projects" > <button className="btn-2">PROJECTS</button> </a>
         </div>
            
          <p className='aboutme'> I'm Kainat Farooq </p>
          <p className='aboutme'>I’m a self-motivated young individual and a beginner in web-development</p>
            
          </div> */