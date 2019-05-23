import React from "react";
import "./App.css"

export const App = () => {

    return <div className="App">
        <Header/>
        <div className="Central">
            <Navbar/>
            <Content/>
        </div>
        <Footer/>
    </div>
};

export const Header = () => {

    return <div className="Header">
        <p>Graph viz</p>
    </div>
}

export const Navbar = () => {
    return <div>
        <h1>navbar</h1>
    </div>
}

export const Content = () => {
    return <div className="Content">
        <h1>content</h1>
    </div>
}

export const Footer = () => {
    return <div className="Footer">
        <p>Graph viz @ d-kozak</p>
    </div>
}