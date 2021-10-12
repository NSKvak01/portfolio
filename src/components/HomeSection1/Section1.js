import React, { Component } from 'react'
import "./Section1.css"

export class Section1 extends Component {
    render() {
        return (
            <div>
            <div id="home">
            <video autoPlay loop muted id="vid"> 
              <source src="https://i.imgur.com/37MESxa.mp4" type="video/mp4"/>
            </video>
            <div id="name">
              <h1 className="anim-typewriter">Hey, I'm Nastya</h1>
              <h2 className="anim-typewriter2">&lt; Full-stack Developer/UX Designer &gt;</h2>
            </div>
            
          </div> 
            </div>
        )
    }
}

export default Section1
