import React from 'react'

export default function Skill({ accentColor }) {
   const skill = [
      "JavaScript",
      "CSS",
      "Node.js",
      "ReactJS",
      "C Programming",
      "C++ Programming",
      "Python",
      "Core Java",
      "MySQL",
      "Blockchain",
      "Solidity",
      "OOPs",
   ]

   const styleObj = {
      width: "max-content",
      height: "auto",
      borderRadius: "6px",
      border: '1px solid rgba(255, 255, 255, 0.6)',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      color: accentColor,
      // alignItems: 'center',
      // justifyContent: 'center',
      padding: '7px',
      margin: '2mm',
   }

   return (
      <div style={{
         color: "white",
         width: '100%',
         margin: '3mm'
      }}>
         <div
            style={{ fontSize: '18px', }}
         >
            Skill Summary
         </div>
         <br />
         <div
            style={{
               marginLeft: '2mm'
            }}
         >
            <span style={styleObj}>{skill[0]}</span>
            <span style={styleObj}>{skill[1]}</span>
            <br /><br /><br />
            <span style={styleObj}>{skill[2]}</span>
            <span style={styleObj}>{skill[3]}</span>
            <br /><br /><br />
            <span style={styleObj}>{skill[4]}</span>
            <span style={styleObj}>{skill[6]}</span>
            <br /><br /><br />
            <span style={styleObj}>{skill[5]}</span>
            <br /><br /><br />
            <span style={styleObj}>{skill[7]}</span>
            <span style={styleObj}>{skill[9]}</span>
            <br /><br /><br />
            <span style={styleObj}>{skill[10]}</span>
            <span style={styleObj}>{skill[11]}</span>
         </div>
         {/* </div> */}

         {/* ··· */}
         <br /><br /><br />

         <div style={{ fontSize: '18px', }}>
            Tools
         </div>
         <br />
         <div
            style={{
               marginLeft: '2mm'
            }}>
            <span style={styleObj}>VS Code</span>
            <span style={styleObj}>Git</span>
            <span style={styleObj}>GitHub</span>
         </div>
      </div >
   )
}
