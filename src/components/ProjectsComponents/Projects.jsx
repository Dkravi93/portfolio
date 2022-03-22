import React from 'react'
import "./projects.css";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

export default function Projects() {
  return (
    <div id="project">
        <div id="about">
            
        <h2>About</h2>
            <p>Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled and experienced at building and maintaining MERN based web applications.
                 Looking forward to collaborate in a progressive and challenging work environment.</p>
            <span className= "small_div">
                <LocationOnRoundedIcon/>
                <p>Bangalore,India</p>
                <EmailRoundedIcon/>
                <p>Dpakravi93@gmail.com</p>
                <CallRoundedIcon/>
                <p>+918210192330</p>
            </span>
        </div>
     
        <div id="project_sectSkills" style= {{textAlign: 'center', marginTop:'80px'}}>
            <h1>Skills & Interests</h1>
        
        <div id="project_sect2"> 
        
        
         <div className= "Skills">
             <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"  alt="imageSkills" />
             <div >Html</div>
         </div>
         <div className= "Skills">
             <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" style={{width:"80px"}}  alt="imageSkills" />
             <div >CSS</div>
         </div>
         <div className= "Skills">
             <img src= "https://portfolio-saravanakumarjn.vercel.app/static/media/javascript.fd46ca41.svg"  alt="imageSkills" />
             <div >JavaScript</div>
         </div>
         <div className= "Skills">
             <img src= "https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png" alt="imageSkills" />
             <div>NodeJS</div>
         </div>
         <div className= "Skills">
             <img src= "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"  alt="imageSkills" />
             <div >Redux</div>
         </div>
         <div className= "Skills">
             <img src= "https://portfolio-saravanakumarjn.vercel.app/static/media/mongodb.153b7b44.svg"  alt="imageSkills" />
             <div>MongoDb</div>
         </div>
         <div className= "Skills">
             <img src= "https://portfolio-saravanakumarjn.vercel.app/static/media/react.e27571ea.svg"  alt="imageSkills" />
             <div>React</div>
         </div>
         <div className= "Skills">
             <img src= "https://portfolio-saravanakumarjn.vercel.app/static/media/github-icon.04ed74f3.svg"   alt="imageSkills" />
             <div >GitHub</div>
         </div>
         <div className= "Skills">
             <img src= "https://ak.picdn.net/shutterstock/videos/1052373691/thumb/4.jpg"  alt="imageSkills" />
             <div >DataStructure</div>
         </div>
         <div className= "Skills">
             <img src= "https://fd-development.com/images/expressjs.png"  alt="imageSkills" />
             <div >Express</div>
         </div>                 
        </div>
        </div>
        <div id="project_sectProjects">
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
        </div>
        <hr/>
        <div id="project_sectContact">
            Projects
        </div>
        <hr/>
    
    </div>
  )
}
