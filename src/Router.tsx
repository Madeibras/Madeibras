import GlobalStyle from "./GlobalStyle"
import Home from "Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Roof from "Pages/Roof"


export default function RouterDOM () {

    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/Telhado" element={<Home/>} />
                <Route path="/" element={<Roof/>} />
            </Routes>
        </Router>
    )
}