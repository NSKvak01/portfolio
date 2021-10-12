import React, { Component } from 'react'
import "./Nav.css"

export class Nav extends Component {
    render() {
        return (
            <div>
               <div id="header">
              <div id="logo">
                <div className="logo1">
                  <a href="/"><h1 id="logo1"> NASTY </h1></a>
                  <a href="/"><h1 id="logo3"> A </h1></a>
                </div>
                <div className="logo2">
                  <a href="/"><h1 id="logo4"> K </h1></a>
                  <a href="/"><h1 id="logo5"> V </h1></a>
                  <a href="/"><h1 id="logo2"> AK </h1></a>
                </div>
              </div>
              <div id="head">
                <a href="/work" id="w" class="option">Work</a>
                <a href="https://nkvak.medium.com" class="option" id="b" target="_blank_">Blog</a>
                <a href="/about" id="a" class="option">About</a>
                <a href="/contact" id="c" class="option">Contact</a>
              </div>
            </div> 
            </div>
        )
    }
}

export default Nav
