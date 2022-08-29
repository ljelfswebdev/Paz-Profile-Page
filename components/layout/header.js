import React from 'react';


const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src="./images/Logo.png" alt="logo" className="header-left-image"/>
            </div>
            <div className="header-center">
                <div className="header-center-search">
                    <input type="text" placeholder="Search Beer" className="header-center-search" />
                </div>
                <div className="header-center-number">
                    Open Monday-Fridays <br/>
                    9am-5pm
                </div>
                
            </div>
            <div className="header-right">

                <div className="header-right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="header-right-icon-svg" fill="#fff">
                        <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
                    </svg>
                    <p className="header-right-icon-text">
                        Account
                    </p>
                </div>

                <div className="header-right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="header-right-icon-svg" fill="#fff">
                        <path d="M432 96H384V64c0-17.67-14.33-32-32-32H64C46.33 32 32 46.33 32 64v352c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64v-32.08l80.66-35.94C493.5 335.1 512 306.5 512 275V176C512 131.8 476.2 96 432 96zM160 368C160 376.9 152.9 384 144 384S128 376.9 128 368v-224C128 135.1 135.1 128 144 128S160 135.1 160 144V368zM224 368C224 376.9 216.9 384 208 384S192 376.9 192 368v-224C192 135.1 199.1 128 208 128S224 135.1 224 144V368zM288 368c0 8.875-7.125 16-16 16S256 376.9 256 368v-224C256 135.1 263.1 128 272 128S288 135.1 288 144V368zM448 275c0 6.25-3.75 12-9.5 14.62L384 313.9V160h48C440.9 160 448 167.1 448 176V275z"/>
                    </svg>
                    <p className="header-right-icon-text">
                        Favourites
                    </p>
                </div>

                <div className="header-right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="header-right-icon-svg" fill="#fff">
                        <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
                    </svg>
                    <p className="header-right-icon-text">
                        Contact 
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Header;