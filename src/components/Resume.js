import React from 'react'


export default function Resume(){
  return(
    <section className="Resume-section" id="resume">
     
       <p className="R-box"></p><h1 className="main-h">Resume</h1>

      <div className="main-div">
    <p className="top-h">Education</p>
  
      <div className="resume-div" >
      <div className="education">
      <h4>SSC</h4>
      <h5>Mama Baby Care School</h5>
      <p>Class of 2018</p>

      <h4>HSC</h4>
      <h5>NCR-CET College</h5>
      <p>Class of 2021</p> </div>
        
      </div>
      
      <p className="top-h">Independent Courses and Certfications</p>
      <div className="resume-div2" >
        
      <ul className="list-style">
        
      <li><span>Responsive-Web Design(HTML & CSS)</span>   -FreeCodeCamp</li>
      <li><span>JavaScript Algorithm and Data Structures</span> -FreeCodeCamp</li>
      <li><span>React course for Beginners</span> -Scrimba</li>
      </ul>
        
     <div className="cert">
      <h4>Certificates :</h4>
      <p><a href="https://www.freecodecamp.org/certification/kainat18/responsive-web-design">Responsive-Web Design(HTML & CSS)</a></p>
<a href="https://www.freecodecamp.org/certification/kainat18/javascript-algorithms-and-data-structures">JavaScript Algorithm and Data Structures</a>
     </div>
        
    <div className="resume-div3" > 
    <h2>Technical Skills</h2>
      <p>HTML</p>
  <div className="container">
  <div className="skills html"></div>
  </div>

<p>CSS</p>
<div className="container">
  <div className="skills css"></div>
</div>

<p>JavaScript</p>
<div className="container">
  <div className="skills js"></div>
</div>

<p>React</p>
<div className="container">
  <div className="skills react"></div>
</div>


     </div> 
    </div>
      </div>

      
    </section>
  )
}