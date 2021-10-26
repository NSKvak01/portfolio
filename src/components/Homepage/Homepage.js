import React, { Component } from 'react'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Skillset from '../Skillset/Skillset'
import Section1 from '../HomeSection1/Section1'
import Recent from '../Recent/Recent'

export class Homepage extends Component {
    render () {
        return (
            <div id="flex">
                <Section1 />
                <Skillset />
                <Recent />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Homepage
