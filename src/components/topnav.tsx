import React from 'react';

const HeroTopNav = () => {
    return (
        <div className="hero-topnav" style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="hero-topnav__logo">
                <h1>UNWORDS!</h1>
            </div>
            <div className="hero-topnav__menu">
                <a href="#home"><button style={{ marginRight: "10px" }}>Home</button></a>
                <a href="#dict"><button style={{ marginRight: "10px" }}>Dictionary</button></a>
                <a href="#about"><button style={{ marginRight: "10px" }}>About us</button></a>
                <a href="#contact"><button>Contact us</button></a>
            </div>
        </div>
    );
}

export {
    HeroTopNav
};