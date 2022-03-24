import {  Toolbar, Typography, Box, Button, Hidden} from '@material-ui/core'
import {Styles} from './HeadersStyles';
import styled from 'styled-components'


const Rapper = styled.div`
position: 'sticky';
background-color: rgba(9, 198, 245, 0.897);
`;
const goToTop = () => window.scrollTo(0, 0);

export default function Navbar() {
    const classes = Styles();
    const navlinks = [
        { label: 'Home',Id: 'Home'},
        { label: 'Skills', Id: 'Skills'},
        { label: 'Education', Id: 'Education'},
        { label: 'Projects', Id: 'Projects'}, 
        { label: 'Contact',Id: 'Contact'},
 
    ];
    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });


    const handleNavHide = () => {
      var menu = document.getElementById("tr");
      menu.style.display = "flex";
      menu.style.flexDirection = "column";
      menu.style.backgroundColor = "rgba(9, 198, 245, 0.897)";
      menu.style.margin = "5px";
      menu.style.animationDuration= "100ms";
      
    }

    
  return (
    <Rapper className={classes.Stick} id='project_sectHome'>
    <Toolbar className={classes.Toolbar}>
    <Typography component="h6">
      {<span id="project_sectHome">{'<Coders/>' }</span>}
    </Typography>
    <Box component={Hidden} xsDown>
        <Box className={classes.nav_bar}>
        {navlinks.map((item,i)=>{
            return (<Button key={i} className={classes.navlinks}>
            <a  style={{textDecoration: 'none', color: 'white'}} onClick={()=>(item.Id==="Home"?goToTop():null)} href={`#project_sect${item.Id}`}>{item.label}</a>
            </Button>);
        })}      
        </Box>    
    </Box>
    <Box className= {classes.navhide}  component={Hidden} smUp>

           <button style={{position: 'relative',right: '0vw'}} onMouseOver={handleNavHide} onMouseOut={()=>{
             document.getElementById("tr").style.display = "none";
           }}>&#9776;
           <div id='tr' style={{position: 'absolute',textAlign: 'center',top:'2.5vh',right: '-1vw',display: 'none',zIndex:"1",overflow: 'visible', width:'120px'}}>
             <a href= '#project_sectHome' onClick={()=>goToTop()} style={{textDecoration: 'none', color: 'black'}}>Home</a><br/>
             <a  href= '#project_sectSkills'style={{textDecoration: 'none', color: 'black'}}>Skills</a><br/>
             <a  href= '#project_sectEducation'style={{textDecoration: 'none', color: 'black'}}>Education</a><br/>
             <a href= '#project_sectProjects'style={{textDecoration: 'none', color: 'black'}}>Projects</a><br/>
             <a href= '#project_sectContact'style={{textDecoration: 'none', color: 'black'}}>Contact</a><br/>
           </div> 
           
           </button>

       
    </Box>
  </Toolbar>
  </Rapper>
  )
}
