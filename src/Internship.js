import React from 'react'

export default function Internship({ accentColor }) {
   return (
      <div>
         <div
            style={{
               color: accentColor,
               fontWeight: '700',
               fontSize: '18px',
               marginBottom: '6mm'
            }}
         >
            I N T E R N S H I P
         </div>
         <div
            style={{
               paddingLeft: '7mm',
               color: 'black'
            }}
         >
            <b>Web Development Intern</b>
            <br />
            <u>The Sparks Foundation</u>,<br />
            <p style={{
               paddingLeft: '3mm',
               // marginBottom: ''
            }}>
               May 2021 - Jun 2021<br />
               I worked as a Web Development Intern here and made a
               server-side rendered web application for Basic Banking
               System the website also implements CRUD operations in
               NodeJS, I have also used MongoDB as Database.
            </p>
            {/* <br /><br /> */}

            <b>Full Stack(MERN) Web Development Intern</b>,<br />
            <u>WebKnot Technologies Private Limited</u>,<br />
            <p style={{
               paddingLeft: '3mm',
               // marginBottom: ''
            }}>
               April 2022 - Present<br />
            </p>
         </div>
      </div>
   )
}
