import React from 'react'
export default function Education({ accentColor }) {
   return (
      <div
      >
         <div
            style={{
               color: accentColor,
               fontWeight: '700',
               fontSize: '18px',
               marginBottom: '4mm'
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
            <div>
               <b>Bachelor of Technology (B.Tech)</b>,
               <p style={{
                  paddingLeft: '3mm',
                  // marginBottom: ''
                  marginTop: '1mm',
               }}>
                  Computer Science & Engineering<br />
                  Indian Institute Of Information Technology, Pune<br />
                  August 2019 - Currently<br />
                  CGPA: 7.55/10
               </p>
            </div>
            <div>
               <b>Senior Secondary (XII), Science</b>
               <p style={{
                  paddingLeft: '3mm',
                  // marginBottom: ''
                  marginTop: '1mm',
               }}>
                  Tulsi Vidya Niketan, Varanasi (CBSE board)<br />
                  2016 - 2018<br />
                  Percentage: 87.00%
               </p>
            </div>
            <div>
               <b>Secondary (X)</b>
               <p style={{
                  paddingLeft: '3mm',
                  marginBottom: '0',
                  marginTop: '1mm',
               }}>
                  St. Mary's School, Ghazipur (ICSE board)<br />
                  2014 - 2016<br />
                  Percentage: 85.00%<br />
               </p>
            </div>
         </div>
      </div>
   )
}
