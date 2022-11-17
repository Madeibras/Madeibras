import GlobalStyle from "./GlobalStyle"
import Home from "Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Roof from "Pages/Roof"
import Login from "Pages/Login/Login"

export default function RouterDOM (props: any) {

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