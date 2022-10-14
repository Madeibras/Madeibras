import GlobalStyle from "./GlobalStyle"
import Home from "Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Roof from "Pages/Roof"


export default function RouterDOM (props: any) {

    return (
        <Router basename={props.basename}>
            <GlobalStyle />
            <Routes >
                <Route path="/" element={<Home/>} />
                <Route path="/Telhado" element={<Roof/>} />
            </Routes>
        </Router>
    )
}