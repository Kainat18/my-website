import React from 'react'


export default function Projects(props){
  
  return(
    <section id="projects" className="projects-section">
  
    <p className="box"></p>
    <h1 className="project-head">PROJECTS</h1>

    <div className="grid">
    <div className="picture-div">
      <a
      href='https://postimg.cc/mt4VKjmm'
      target="_blank"
      className="project project-tile"
    > </a>
      <img
        className="project-image1"
        src='https://i.postimg.cc/mt4VKjmm/ss-card.png' 
        alt="project" 
      /> 

   <button className="p-btn1">Project 01</button> 

    </div>
   
    <div className="picture-div">
    
    <a
    href="https://replit.com/@Kainat1/Travel-Journal"
    target="_blank"
    className="project project-tile">
    </a>
    <img
      className="project-image2"
src='https://i.postimg.cc/SJpq300H/journal2.png'
      alt="project"
    />
    
    <button className="p-btn2">Project 02</button> 
  
  </div>
    
  <div className="picture-div">
    
     <a
    href="https://replit.com/@Kainat1/TASK-TRACKER"
    target="_blank"
    className="project project-tile"
  ></a>
    <img
      className="project-image3"
src='https://i.postimg.cc/Ty54Twg0/tracker2.png'
      alt="project"
    />

<button className="p-btn3">Project 03</button> 
  </div>


    
   <div className="picture-div">
      
    <a
    href="https://replit.com/@Kainat1/BOOKS-API"
    target="_blank"
    className="project project-tile"> </a>

     <img className="project-image4"
  src='https://i.postimg.cc/LqGGPf2G/API2.png' 
      alt="project"
    />
    <button className="p-btn4">Project 04</button> 
  </div> 

  </div> 
     
      
    </section>
    )
}

/*<p>Travel Journal</p>
<button className="p-btn">View Project</button> 
*/

