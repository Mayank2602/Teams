/* eslint-disable jsx-a11y/anchor-is-valid */


function Help () {

    return (
      <div  style={{display:'flex',flexDirection:'column',
                    background: '#ECE8F0',
                    background: '-webkit-linear-gradient(top left, #ECE8F0, #4A249F)',
                    background: '-moz-linear-gradient(top left, #ECE8F0, #4A249F)',
                    background: 'linear-gradient(to bottom right, #ECE8F0, #4A249F)'}}>
        <h1 style={{margin:'1rem auto',  
                    fontSize: '70px',
                     fontWeight:'600',
                    backgroundImage: 'linear-gradient(to right, #553c9a, #AD3E25)',
                    color: 'transparent',
                    backgroundClip: 'text',
                    webkitBackgroundClip: 'text'}}>How to use this website</h1>
            <div style={{border:'solid 1px black', margin:'2rem auto',minHeight:'100px',minWidth:'1000px',padding:'10px',justifyItems:'center',boxShadow:'0 8px 8px -4px lightblue',background:'#eee'}}>
               <ul>
               <li>You can begin using medEZ , once you login with your google account. </li>
               <li>Grant permission to your calender to enable dosage updates on your connected devices</li> 
               </ul>
            </div>
            <div style={{border:'solid 1px black', margin:'2rem auto',minHeight:'100px',minWidth:'1000px',padding:'10px',justifyItems:'center',boxShadow:'0 8px 8px -4px lightblue',background:'#eee'}}>
                There are a 3 functional sections in the navigation bar
                <ol>
                    <li>Upload</li>
                    <li>Search</li>
                    <li>Calender</li>
                </ol>
                <p>Let us dive into these one by one </p>
            </div>
            <div style={{border:'solid 1px black', margin:'2rem auto',minHeight:'100px',minWidth:'1000px',padding:'10px',justifyItems:'center',boxShadow:'0 8px 8px -4px lightblue',background:'#eee'}}>
                <h3>Upload</h3>
                <p>
                   1.  Click on the upload button in your navbar. It will ask you to choose a file. <br/>
                   2.  Upload your prescription as an image or a pdf file. <br/>
                   3.  medEZ extracts the medicine names from the prescription once you hit submit.<br/>
                   4.  Hit compare to reach the page to actually buy medicines.<br />
                   5.  You will be given a drop down list with the names of the medicines, toggle between medicines from this list<br/>
                </p>
            </div>
            <div style={{border:'solid 1px black', margin:'2rem auto',minHeight:'100px',minWidth:'1000px',padding:'10px',justifyItems:'center',boxShadow:'0 8px 8px -4px lightblue',background:'#eee'}}>

                <h3>Search</h3>
                <p>
                    In this section , you can manually type the name of a medicine and medEZ will fetch it's best prices across the internet.
                </p>
            </div>
            <div style={{border:'solid 1px black', margin:'2rem auto',minHeight:'100px',minWidth:'1000px',padding:'10px',justifyItems:'center',boxShadow:'0 8px 8px -4px lightblue',background:'#eee'}}>

                <h3>Calender</h3>
                <p>
                    Use the calender to schedule updates and dosage reminders for your medication.
                </p>
            </div>
    </div>
    )
}

export default Help;