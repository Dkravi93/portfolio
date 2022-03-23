import { AppBar, Toolbar, Typography, Box, Button, Hidden} from '@material-ui/core'
import {Styles} from './HeadersStyles';
// import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';


export default function Navbar() {
    const classes = Styles();
    const navlinks = [
        { label: 'Home',Id: 'Home'},
        { label: 'Skills', Id: 'Skills'}, 
        { label: 'Projects', Id: 'Projects'}, 
        { label: 'Contact',Id: 'Contact'},
 
    ];
    const handleNavHide = () => {
      document.getElementById("tr").style.display = "flex";
      document.getElementById("tr").style.flexDirection = "column";
      document.getElementById("tr").style.backgroundColor = "white";
    }
  return (
    <AppBar position="fixed" className={classes.Navbar} id={classes.project_sectHome}>
    <Toolbar className={classes.Toolbar}>
    <Typography component="h6">
      {"<Coders/>"}
    </Typography>
    {}
    <Box component={Hidden} xsDown>
        <Box className={classes.nav_bar}>
        {navlinks.map((item,i)=>{
            return (<Button key={i} className={classes.navlinks}>
            <a  style={{textDecoration: 'none', color: 'white'}} href={`#project_sect${item.Id}`}>{item.label}</a>
            </Button>);
        })}
        </Box>    
    </Box>
    <Box className= {classes.navhide}  component={Hidden} smUp>

           <button style={{position: 'relative',right: '0vw'}} onClick={handleNavHide}>&#9776;</button>

       <div id='tr' style={{position: 'absolute',textAlign: 'center',top:'6vh',right: '0vw',display: 'none',zIndex:"1",overflow: 'visible', width:'100px'}}>
             <a href= '#Home'style={{textDecoration: 'none', color: 'black'}}>Home</a><br/>
             <a  href= '#project_sectSkills'style={{textDecoration: 'none', color: 'black'}}>Skills</a><br/>
             <a href= '#project_sectProjects'style={{textDecoration: 'none', color: 'black'}}>Projects</a><br/>
             <a href= '#project_sectContact'style={{textDecoration: 'none', color: 'black'}}>Contact</a><br/>
       </div>
    </Box>
  </Toolbar>
</AppBar>
  )
}
