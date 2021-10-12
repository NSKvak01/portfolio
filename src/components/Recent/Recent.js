import React, { Component } from 'react'
import "./Recent.css"

export class Recent extends Component {
    render() {
        return (
            <div>
                <div id="recent">
                    <h1>Recent work</h1>
                    <div>
                        <div id="uxRecent" className="workSection">
                            <h2 className="recentSection">User Experience</h2>
                            <div className="work">
                                <div className="workItem" id="item1">
                                    Jersey Auto Trans
                                </div>
                                <div className="workItem">Go Off!</div>
                                <div className="workItem">Tatwoo</div>
                            </div>
                            
                        </div>
                        <div id="webRecent" className="workSection">
                            <h2 className="recentSection">Web Development</h2>
                            <div className="work">
                                <div className="workItem">
                                    Bocure APP
                                </div>
                                <div className="workItem">Github</div>
                                <div className="workItem">AWS coming soon</div>
                            </div>
                        </div>
                        <div id="marketRecent" className="workSection">
                            <h2 className="recentSection">Marketing</h2>
                            <div className="work">
                                <div className="workItem">Infographics</div>
                                <div className="workItem">Nintendo</div>
                                <div className="workItem">Pfizer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recent
