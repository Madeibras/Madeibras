import GlobalStyle from "./GlobalStyle"
import Home from "Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function RouterDOM () {
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    )
}