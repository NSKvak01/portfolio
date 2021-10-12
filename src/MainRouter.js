import React, { Component } from 'react'
import{BrowserRouter as Router, Route} from "react-router-dom"
import Homepage from './components/Homepage/Homepage'
import Nav from "./components/Nav/Nav"
import ContactPage from "./components/ContactPage/ContactPage"

const MainRouter = (props) => {
    return (
        <Router>
            <Nav />
            <React.Fragment >
                <Route exact path="/" component={Homepage} />
                <Route exact path="/contact" component={ContactPage} />
                {/* <Route exact path="/no" component={No} /> */}
            </React.Fragment>
        </Router>
    )
}

export default MainRouter
