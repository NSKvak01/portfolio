import React, { Component } from 'react'
import "./Footer.css"

export class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer">
          <div id="contacts">
            <h3>Contact</h3>
            <p><a target="_blank" href="mailto:nastya.kvak@codeimmersives.com" class="con" id="em">Email:nastya.kvak@codeimmersives.com</a></p>
            <p><a href="tel:6469456249" class="con" id="ph">Phone: 646-945-6249</a></p>
          </div>
          <div id="links">
            <a href="https://www.instagram.com/nskvak/ " target="_blank_"><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" className="social"/></a>
            <a href="https://nkvak.medium.com/" target="_blank" ><img src="https://www.petalmodeste.com/wp-content/uploads/2020/12/unnamed.png" className="social"/></a>
            <a href="https://github.com/NSKvak01" target="_blank" ><img src="https://emmavanninen.com/github.png" className="social"/></a>
          </div>
        </div>
            </div>
        )
    }
}

export default Footer
