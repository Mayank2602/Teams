/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";

function Help () {
    const useStyles = makeStyles((theme) => ({
        mainClass: {
          flexWrap: "wrap",
          display: "flex",
          "& > *": {
            height: theme.spacing(15),
            margin: theme.spacing(5),
            width: theme.spacing(15),
          },
        },
      }));
      
      const classes = useStyles();
    let message = `Simplifying your medical needs everyday`;
    return (
      <div  style={{display:'flex',flexDirection:'column'}}>
        <Paper elevation={3} >
        </Paper>
        <Paper variant="outlined" square /> 
        <h1 style={{margin:'1rem auto'}}>How to use this website</h1>
            <div style={{border:'solid 1px black', margin:'2rem auto',minHeight:'100px',minWidth:'1000px',padding:'10px',justifyItems:'center'}}>
               <ul>
               <li>You can begin using medEZ , once you login with your google account. </li>
               <li>Grant permission to your calender to enable dosage updates on your connected devices</li> 
               </ul>
            </div>
            <div style={{border:'solid 1px black', margin:'2rem auto',minHeight:'100px',minWidth:'1000px',padding:'10px',justifyItems:'center'}}>
                There are a 3 functional sections in the navigation bar
                <ol>
                    <li>Upload</li>
                    <li>Search</li>
                    <li>Calender</li>
                </ol>
                <p>Let us dive into these one by one </p>
            </div>
            <div>
                <h3>Upload</h3>
                <p>
                   1.  Click on the upload button in your navbar. It will ask you to choose a file. 
                   2.  Upload your prescription as an image or a pdf file. 
                   3.  medEZ extracts the medicine names from the prescription once you hit submit.
                   4.  Hit compare to reach the page to actually buy medicines.
                   5.  You will be given a drop down list with the names of the medicines, toggle between medicines from this list
                </p>
            </div>
            <div>
                <h3>Search</h3>
                <p>
                    In this section , you can manually type the name of a medicine and medEZ will fetch it's best prices across the internet.
                </p>
            </div>
            <div>
                <h3>Calender</h3>
                <p>
                    Use the calender to schedule updates and dosage reminders for your medication.
                </p>
            </div>
    </div>
    )
}

export default Help;