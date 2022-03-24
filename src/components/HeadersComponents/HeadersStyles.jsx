// import { keyframes } from '@emotion/react';
import {makeStyles} from '@material-ui/core';
import {Theme} from '../HeadersComponents/Theme';
import Image from '../images/unsplash.jpg';

export const Styles = makeStyles((theme) =>({
    heady: {
        width: '100%',
        minHeight: '100vh',
        height: "auto",
        background: `linear-gradient(to bottom right, #04303140, #00606473),url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    Navbar: {
        boxShadow: "none",
        backgroundColor : Theme.colors.primary,
        color: '#fff'
    },
    Stick:{
        top: '0vh',
        position: 'fixed',
        width: '100%',
        zIndex:'9',
        color: '#fff'
    },
    headcontent: {
        width: '100%',
         minHeight: '90vh',
         height: "auto",
         paddingTop:'5vh',
         display: "flex",
         flexFlow: 'column wrap',
         alignItems: 'center',
         color: 'white',
         fontFamily: 'roboto',
         textAlign: 'center',
         justifyContent: 'center',
         [theme.breakpoints.down('xs')]: {
            paddingTop:'10vh'
        }
    },
    headTitle: {
        fontSize: '4rem',
        color: 'white',
        
    },
    headDesc: {
        fontSize: '2rem',
        color: 'white',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
        }
    },
    Toolbar : {
        display: 'flex',
        flexFlow : "row wrap",
        justifyContent : "space-between"
    },
    navlinks: {
        color: Theme.colors.base2,
        "&:after":{
            display: "block",
            overflow: "visible"
        }
    },
    decorator: {
        display: 'flex',
        fontWeight: 'bolder',
        fontFamily: "roboto",
        position: 'relative',
        width: "100px",
        marginTop: '50px',
        "&:before" : {
            width: "50px",
            height: "50px",
            backgroundColor:Theme.colors.base1,
            content: '""',
            borderRadius: "50%",

        },

    },
    decoratorText: {
        position: 'absolute',
        lineHeight:"40px",
        left: "20px",

    },
    decoratorArrow: {
        position: 'absolute',
        lineHeight:"45px",
        left: "100px",
        animationName: "upDown",
        animationDuration:"0.7s",
        animationIterationCount: "infinite",
    },
    '@global':{
        "@keyframes upDown":{
            "0%":{
                padding:"0px",
                transform: "scale(0)"
            },
            "100%":{
                paddingTop:"10px",
                transform: "scale(1)"
            }
        }
    },
    Image: {
        width: "140px",
        height: "145px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "50%",
        textAlign: "center",
        position: "relative",
        top: "0vh",
        backgroundColor:Theme.colors.base2,
        marginBottom : '40px',
        border: '4px solid #27AE60',
        [theme.breakpoints.down('xs')]: {
            width: "100px",
            height: "115px",
            top: "3vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            content: '""',
        },
        [theme.breakpoints.down('xm')]: {
            width: "100px",
            display: "flex",
            alignItems: "center",
            height: "115px",
            top: "0vh",
            left: "8vw",
            content: '""',
        }
    },
    nav_bar  : {
        textDecoration: "none"
    },
    navhide: {
        display : "none",
        "&:hover" : {
                display: "flex",
                overflow: "visible"
            },
    },
    
   
}));