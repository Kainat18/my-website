import React from 'react'


export default function Footer(){
    return(
        <footer>
     <p className="copyright">&copy; 2023 created by kainat farooq</p>
     
     <div className="div-p"> 
     

       <div>
        <p className="parah">Write</p>
        <p className="sub-parah">kainatfarooqmunara@gmail.com</p>
        </div>
       
       <div>
        <p className="parah">Follow</p>
        
        <p className="icons">
        <a href='www.twitter.com' target="_blank" >
        <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        
        <a href='www.facebook.com' target="_blank" >
        <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        
        <a href="www.instagram.com" target="_blank">
        <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        
        <a href="https://github.com/Kainat18" target="_blank">
        <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
        </p>
        
       </div>
        
        </div>
       </footer>
    )
}