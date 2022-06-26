import React from 'react'


export default function Projects(props){
  
  return(
    <section id="projects" className="projects-section">
  
    <p className="box"></p>
    <h1 className="project-head">PROJECTS</h1>

    <div className="grid">
    <div className="picture-div">

      <img
        className="project-image1"
        src='https://i.postimg.cc/k5QmKVDJ/Screenshot-36.png' 
        alt="project" 
      /> 

      <a
      href='https://bussiness-card.kainat1.repl.co/'
      target="_blank"
      className="project project-tile"
    > 
  <button className="p-btn1">Project 01</button> </a>

    </div>
   
    <div className="picture-div">
     <img
      className="project-image2"
src='https://i.postimg.cc/FK3YqM4s/Screenshot-33.png'
      alt="project"
    />
    
    <a
    href="https://replit.com/@Kainat1/Travel-Journal"
    target="_blank"
    className="project project-tile">
    <button className="p-btn2">Project 02</button> </a>
  
  </div>
    
  <div className="picture-div">
    
    <img
      className="project-image3"
      src='https://i.postimg.cc/9QV5VmJs/Screenshot-34.png'
      alt="project"
    />

<a
    href="https://replit.com/@Kainat1/TASK-TRACKER"
    target="_blank"
    className="project project-tile"
  ><button className="p-btn3">Project 03</button> </a>
  </div>


    
   <div className="picture-div">
      
     <img className="project-image4"
  src='https://i.postimg.cc/s2XLDvSH/Screenshot-35.png' 
      alt="project"
    />
    <a
    href="https://replit.com/@Kainat1/BOOKS-API"
    target="_blank"
    className="project project-tile"> 
<button className="p-btn4">Project 04</button> </a>
  </div> 

  </div> 
     
      
    </section>
    )
}

/*<p>Travel Journal</p>
<button className="p-btn">View Project</button> 
*/

