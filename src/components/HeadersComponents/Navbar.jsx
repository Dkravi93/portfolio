import { AppBar, Toolbar, Typography, Box, Button, Hidden, IconButton} from '@material-ui/core'
import {Styles} from './HeadersStyles';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';


export default function Navbar() {
    const classes = Styles();
    const navlinks = [
        { label: 'Home',Id: 'Home'},
        { label: 'Skills', Id: 'Skills'}, 
        { label: 'Projects', Id: 'Projects'}, 
        { label: 'Contact',Id: 'Contact'},
 
    ];
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
    <Box className= {classes.navhide} component={Hidden} smUp>
       <IconButton color='inherit'>
           <MenuOpenRoundedIcon/>
       </IconButton>
    </Box>
  </Toolbar>
</AppBar>
  )
}
