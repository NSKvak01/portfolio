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
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="https://i.imgur.com/mOlsKqC.jpg" className="workItem" alt="Avatar" style={{width:"300px"}} />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src="https://i.imgur.com/DBzpfSY.png" className="workItem" width="300" id="jat"/>
                                    </div>
                                </div>
                            </div>  
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="https://i.imgur.com/LIrNyzL.png" className="workItem" alt="Avatar" style={{width:"200px"}} />
                                    </div>
                                    <div className="flip-card-back">
                                <img src="https://i.imgur.com/mNj7uI0.png" className="workItem" alt="GoOFF!" width="340" />
                                    </div>
                                </div>
                            </div>  
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="https://pbs.twimg.com/profile_images/1344247030965706752/LZEg2N4V_400x400.jpg" className="workItem" alt="Avatar" style={{width:"200px"}} />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src="https://i.imgur.com/4oFJjY2.png" className="workItem" alt="Tatwoo" width="320" />
                                    </div>
                                </div>
                            </div>  
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
