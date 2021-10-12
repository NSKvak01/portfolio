import React, { Component } from 'react'
import "./Skillset.css"

export class Skillset extends Component {
    render() {
        return (
            <div>
                <div id="skillset">
          <h2>Nice to meet you.</h2>
          <h4>I’m a UX designer, web developer, and problem-solver who provides crafted solutions based on users’ needs and problems identified through research. With my previous marketing experience, I bring the growth mindset to the table that drives me to embrace challenges and positively influence team members to achieve more remarkable results.</h4>
          <div id="skills">
            <div id="ux">
              <img className="icon" src="../icons/web-design.png" />
              <h2 className="title">UX/UI Designer</h2>
              <h3 className="description">I am a problem-solver who provides crafted solutions based on users’ needs and problems identified through research.</h3>
              <h3 className="column">Things I enjoy designing:</h3>
              <h3 className="h3">UX, UI, Web, APPs, Mobile</h3>
              <h3 className="column">Design Tools:</h3>
              <div className="list">
                <h3>Balsamiq Mockups</h3>
                <h3>Figma</h3>
                <h3>Axure</h3>
                <h3>InVision</h3>
                <h3>Marvel</h3>
                <h3>Sketch</h3>
                <h3>WIX</h3>
                <h3>Miro</h3>
                <h3>Notion</h3>
              </div>
            </div>
            <div id="web">
              <img className="icon" src="../icons/coding.png" />
              <h2 className="title">Full-stack Developer</h2>
              <h3 className="description  description2">I love solving problems by coding from scratch, building websites, and creating algorithms.</h3>
              <h3 className="column">Languages I speak:</h3>
              <h3 className="h3">Python, JS, HTML, CSS</h3>
              <h3 className="column">Dev tools:</h3>
              <div className="list">
                <h3>MongoDB</h3>
                <h3>React</h3>
                <h3>NodeJS</h3>
                <h3>ExpressJS</h3>
                <h3>GitHub</h3>
                <h3>Terminal</h3>
                <h3>Amazon Web Services</h3>
                <h3>Bootstrap</h3>
                <h3>Twilio</h3>
              </div>
            </div>
            <div id="market">
              <img className="icon" src="../icons/infographic.png" />
              <h2 className="title">Marketeer</h2>
              <h3 className="description">I obtained Master in Marketing Intelligence and use my experience and knowledge in content creation and UX design processes.</h3>
              <h3 className="column">Marketing experience:</h3>
              <h3 className="h3">Junior Strategic Planner at Stein IAS</h3>
              <h3 className="column">Marketing tools and methods:</h3>
              <div className="list">
                <h3>SPSS</h3>
                <h3>SAS</h3>
                <h3>SQL</h3>
                <h3>Google Analytics</h3>
                <h3>Python</h3>
                <h3>T-test</h3>
                <h3>Multiple Linear Regression</h3>
                <h3>ANOVA</h3>
              </div>

            </div>
          </div>
        </div>
            </div>
        )
    }
}

export default Skillset
