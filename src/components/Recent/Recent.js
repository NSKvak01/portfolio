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
                                    <a href="https://jattruck.com" target="_blank">
                                        <img src="https://i.imgur.com/mOlsKqC.jpg" className="workItem" alt="Avatar" style={{width:"300px"}} />
                                        </a>
                                    </div>
                                    <div className="flip-card-back">
                                        <a href="https://jattruck.com" target="_blank">
                                            <img src="https://i.imgur.com/DBzpfSY.png" className="workItem" width="300" id="jat"/>
                                        </a>
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
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <a href="https://nskvak01.github.io/final-project/" target="_blank"> 
                                            <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" className="workItem" alt="Avatar" style={{width:"300px"}} />
                                        </a>
                                    </div>
                                    <div className="flip-card-back">
                                        <a href="https://nskvak01.github.io/final-project/" target="_blank"> 
                                            <img src="https://i.imgur.com/7rTiBht.png" className="workItem" width="300" id="jat"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <a href="https://bocure.kvaknastya.com/" target="_blank" >
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" className="workItem" alt="Avatar" style={{width:"200px"}} />
                                        </a>
                                    </div>
                                    <div className="flip-card-back">
                                        <a href="https://bocure.kvaknastya.com/" target="_blank">
                                            <img src="https://i.imgur.com/rA0gWSL.png" className="workItem" alt="Tatwoo" width="320" />
                                        </a>
                                    </div>
                                </div>
                            </div> 
                            
                            </div>
                        </div>
                        <div id="marketRecent" className="workSection">
                            <h2 className="recentSection">Marketing</h2>
                            <div className="work">
                            <div className="highlight-card">
                                <a href="https://docs.google.com/presentation/d/12ndKK6qne9CXRydPnY74jJF-Ig-ol0ewqtKSR4rsEhs/edit?usp=sharing" target="_blank"> 
                                    <img src="https://www.freepik.com/blog/app/uploads/2017/01/02previa-3.jpg" className="workItem" alt="Avatar" style={{width:"300px"}} />
                                </a>
                            </div>

                            <div className="highlight-card">
                                <a href="https://docs.google.com/presentation/d/1iBx35nvZyNEJdD1D7DFWyXjT9MA8SUzt18jIJStJuRM/edit?usp=sharing" target="_blank" >
                                    <img src="https://cpha.com/wp-content/uploads/2020/05/Pfizer-Logo.jpg" className="workItem" alt="Avatar" style={{width:"200px"}} />
                                </a>
                            </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recent
