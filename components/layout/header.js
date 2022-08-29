import React from 'react';


const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src="./images/Logo.png" alt="logo"/>
            </div>
            <div className="header-center">
                <div className="header-center-search">
                    Search bar goes here
                </div>
                <div className="header-center-number">
                    Open Monday-Fridays <br/>
                    9am-5pm
                </div>
                
            </div>
            <div className="header-right">Icons go here</div>
        </div>
    );
};

export default Header;