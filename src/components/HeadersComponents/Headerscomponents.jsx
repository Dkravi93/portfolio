import React, { useEffect as Effect, useState as State} from 'react';
import {Box,Typography} from '@material-ui/core'
import {Styles} from './HeadersStyles';
import Navbar from './Navbar';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Image from '../images/deepak.jpg';



export default function headerscompnents() {

  const classes = Styles();
  const items = [
    { label: 'Deepak',Id: 'Home'},
    { label: 'a UI/UX Designer', Id: 'Skills'}, 
    { label: 'a Web Developer', Id: 'Projects'}, 
    { label: 'Traveller',Id: 'Contact'},
];

    const [count,setCount] = State(0);
    const [res,setRes] = State("");

    const handleClick = () => {
      window.open("https://drive.google.com/file/d/1P4FqPrXjUN68MbXfyXO7Uyjd0vPyGAkM/view?usp=sharing");
    };
  
    Effect(() => {
      const timer = setTimeout(() => {
            if(count === 3){
              return setCount(0);
            }
              const t = items[count].label;
              setRes(t);
              setCount((p)=>{
                return (p+1);
              });
      }, 2000);
      return () => clearTimeout(timer);
    }, [count]);

  return (
    <Box className={classes.heady} >
      <Navbar />
       <Box className={classes.headcontent}>
         <Box className={classes.Image}>
           <img src={Image} width={140} height={215} alt="imafg"/>
         </Box>
           <Typography variant="h4" component="h4" className={classes.headerTitle}>
             Hi, I'm {res}
           </Typography>
           <Typography variant="h5" component="h6" className={classes.headerDesc}>
             Welcome to my website!,
             <br/>
             I Design And Build User Interface, Based On Your Need...
           </Typography>
           <br />
           <Typography>
             
           <button onClick={handleClick} style={{
             backgroundColor: 'rgba(9, 198, 245, 0.897)',
             borderRadius: "7px",
             border: "1px solid rgba(9, 198, 245, 0.897)",
             padding: "8px",
             cursor: 'pointer',
             boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'
           }}>Resume</button>
           </Typography>
           <Box className={classes.decorator}>
           <Typography className={classes.decoratorText}>
             <span><a href="#about" style= {{textDecoration: 'none', color: 'white'}}> About me</a></span> 
           </Typography>
           <Typography className={classes.decoratorArrow}>
           <ArrowDownwardRoundedIcon/>    
           </Typography>
           </Box>
      </Box>
    </Box>
  )
}
