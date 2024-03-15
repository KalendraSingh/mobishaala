import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

export default function Right() {
    return (
        <div>
            <div className="video-container">
                <iframe className='video'
                    src="https://www.youtube.com/embed/jg5d59ligW4?si=YVKGr3kcGvCZ4NIj"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                >
                </iframe>
                <br />
                <div style={{ textAlign: "center" }}>
                    <button className='Button'>Buy</button>
                </div>
            </div>
            <div className='button-container'>
                <p>Institute/Teacher</p>
                <button className='Button'>Get Started</button>
                <p>Student</p>
                <button className='Button'>Download App</button>
                <br />
                <button className='Button-talk'>
                    <FaWhatsapp />
                    Talk to Us</button>
            </div>
        </div>
    )
}
