import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

function Left() {

  return (
    <div>
      <h1 className='main-heading'>Mobishaala</h1>
      <p className='paragraph'>Create your <span className='span-style'>Digital Classroom</span> in 5 mins for <span className='span-style'>FREE</span><br/>& connect to 1+ Million Students.</p>

      <br/>
  
      <ul className='ul-container'>
        <li>No technical knowledge required</li>
        <li>Quickly setup live clas, tests,notes, ebooks, and more.</li>
        <li>Read out to millions of students anywhere,anytime.</li>
      </ul>

    <div className='destop'>
    <p>Institute/Teacher</p>
      <button className='Button'>Get Started</button>
      <p>Student</p>
      <button className='Button'>Download App</button>
      <br/>
      <button className='Button-talk'>
      <FaWhatsapp />
        Talk to Us</button>
    </div>
    </div>
  )
}
export default Left