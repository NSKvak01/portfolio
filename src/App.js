import React, { Component } from 'react'
import "./App.css"

export class App extends Component {
  render() {
    return (
      <div id="flex">
          <div id="home">
            <video autoPlay loop muted id="video" id="vid"> 
              <source src="https://i.imgur.com/37MESxa.mp4" type="video/mp4"/>
            </video>
            <div id="name">
              <h1 className="anim-typewriter">Hey, I'm Nastya</h1>
              <h2 className="anim-typewriter2">&lt; Full-stack Developer/UX Designer &gt;</h2>
            </div>
            <div id="header">
              {/* <a href="index.html"><img src="https://www.nastyakvak.com/uploads/1/3/4/4/134436554/published/screen-shot-2020-11-12-at-13-54-39-removebg-preview.png?1605208132" id="logo" /></a> */}
              <div id="logo">
                <div className="logo1">
                  <a href="index.html"><h1 id="logo1"> NASTY </h1></a>
                  <a href="index.html"><h1 id="logo3"> A </h1></a>
                </div>
                <div className="logo2">
                  <a href="index.html"><h1 id="logo4"> K </h1></a>
                  <a href="index.html"><h1 id="logo5"> V </h1></a>
                  <a href="index.html"><h1 id="logo2"> AK </h1></a>
                </div>
              </div>
              <div id="head">
                <a href="work.html" id="w" class="option">Work</a>
                <a href="https://nkvak.medium.com" class="option" id="b" target="_blank_">Blog</a>
                <a href="about.html" id="a" class="option">About</a>
                <a href="contact.html" id="c" class="option">Contact</a>
              </div>
            </div>
          </div>
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
        <div id="recent">
          <h1>Recent work</h1>
          
        </div>
        <div id="footer">
          <div id="contacts">
            <h3>Contact</h3>
            <p><a target="_blank" href="mailto:nastya.kvak@codeimmersives.com" class="con" id="em">Email:nastya.kvak@codeimmersives.com</a></p>
            <p><a href="tel:6469456249" class="con" id="ph">Phone: 646-945-6249</a></p>
          </div>
          <div id="links">
            <a href="https://www.instagram.com/nskvak/ " target="_blank_"><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" /></a>
            <a href="https://nkvak.medium.com/" target="_blank" ><img src="https://www.petalmodeste.com/wp-content/uploads/2020/12/unnamed.png" /></a>
            <a href="https://github.com/NSKvak01" target="_blank" ><img src="https://emmavanninen.com/github.png" /></a>
          </div>
        </div>
        </div>
    )
  }
}

export default App
