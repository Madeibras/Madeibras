import GlobalStyle from "./GlobalStyle"
import Home from "Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Roof from "Pages/Roof"
import Login from "Pages/Login/Login"
import ReactGA from 'react-ga'
import { useEffect } from "react"

export default function RouterDOM (props: any) {

    useEffect(() => {
        ReactGA.initialize('UA-249773033-1')

        //to report page view
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <Router basename={props.basename}>
            <GlobalStyle />
            <Routes >
                <Route path="/Construcao" element={<Home id="/Construcao" />} />
                <Route path="/Telhado" element={<Roof id="/Telhado" />} />
                <Route path="/Loginadm" element={<Login />} />
            </Routes>
        </Router>
    )
}