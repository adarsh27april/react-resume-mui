import React from 'react'

export default function Project({ accentColor }) {
   return (
      <div>
         <div
            style={{
               color: accentColor,
               fontWeight: '700',
               fontSize: '18px',
               marginBottom: '4mm',
               // marginTop: '6mm',
            }}
         >
            P R O J E C T S
         </div>
         <div
            style={{
               paddingLeft: '7mm',
               color: 'black'
            }}
         >
            <b>E-Book Library</b>
            <p style={{
               paddingLeft: '3mm',
               // marginBottom: ''
               marginTop: '1mm',
            }}>
               It is an online e-Book Library from where users can issue and
               read the book of their choice, with a book issue time limit. So
               overall it will be a destination for book lovers and authors to
               publish their content without the fear of privacy.
            </p>
            <b>Blockchian based online voting system</b>
            <p style={{
               paddingLeft: '3mm',
               // marginBottom: ''
               marginTop: '1mm',
            }}>
               Project in Progress, building using tech stack
               Web3Js,ReactJS, Solidity, NodeJS, Truffle, deploying on
               rinkeby testnet.
            </p>
            <b>Country Detail React App </b>: https://country-detail-react.netlify.app/
            <p style={{
               paddingLeft: '3mm',
               marginBottom: '0',
               marginTop: '1mm',
            }}>

               A ReactJS web app which can search for a country by API
               calls, show some general details like it's flag, official name,
               capital, languages spoken, land cover.It has an interactive
               Bing Map for the searched country & a weather card for it's
               capital embedded in it.
            </p>
         </div >
      </div>
   )
}
