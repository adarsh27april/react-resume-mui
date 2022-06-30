import React from 'react'
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Contact({ accentColor }) {
   return (<>

      <div style={{ fontSize: '25px', color: "white", textAlign: 'center' }}>
         Adarsh<br />
         Kumar Singh
      </div>
      <br />
      <div
         style={{
            color: "white",
            // margin: '2mm'
         }}>
         <div style={{ fontSize: '18px', margin: '2mm' }}>
            Contact
         </div>
         {/* <br /> */}
         <div
            style={{ margin: '4mm' }}
         >
            <span style={{ fontSize: '15px', }}>
               Email: </span><br />
            adarshkumar27april@gmail.com
            <br /><br />
            <span style={{ fontSize: '15px', }}>
               Linked-In: </span><br />
            https://www.linkedin.com/in/adarsh-kumar-singh-6b4242193/
            <br /><br />
            <span style={{ fontSize: '15px', }}>
               GitHub: </span><br />
            https://github.com/adarsh27april
            <br /><br />
         </div>
      </div>
   </>)
}
