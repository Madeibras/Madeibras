import GlobalStyle from "./GlobalStyle"
import Home from "Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Roof from "Pages/Roof"
import Login from "Pages/Login/Login"
import ThankPageForm from "Pages/ThankPage"
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
                <Route path="/Construcao" element={<Home/>} />
                <Route path="/Telhado" element={<Roof />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/obrigado" element={<ThankPageForm />} />
            </Routes>
        </Router>
    )
}