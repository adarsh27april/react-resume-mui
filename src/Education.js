import React from 'react'
export default function Education({ accentColor }) {
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
            E D U C A T I O N A L&nbsp;&nbsp;&nbsp;H I S T O R Y
         </div>
         <div
            style={{
               paddingLeft: '7mm',
               color: 'black'
            }}
         >
            <b>Bachelor of Technology (B.Tech)</b>,<br />
            <p style={{
               paddingLeft: '3mm',
               // marginBottom: ''
            }}>
               Computer Science & Engineering<br />
               Indian Institute Of Information Technology, Pune<br />
               August 2019 - Currently<br />
               CGPA: 7.55/10
            </p>
            {/* <br /><br /> */}
            <b>Senior Secondary (XII), Science</b><br />
            <p style={{
               paddingLeft: '3mm',
               // marginBottom: ''
            }}>
               Tulsi Vidya Niketan, Varanasi (CBSE board)<br />
               2016 - 2018<br />
               Percentage: 87.00%
            </p>
            {/* <br /><br /> */}
            <b>Secondary (X)</b><br />
            <p style={{
               paddingLeft: '3mm',
               // marginBottom: ''
            }}>
               St. Mary's School, Ghazipur (ICSE board)<br />
               2014 - 2016<br />
               Percentage: 85.00%<br />
            </p>
         </div>
      </div>
   )
}
