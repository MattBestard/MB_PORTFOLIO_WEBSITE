import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
            <div className="nav-bar">
                <div className="nav-button">Home</div>
                <div className="nav-button">News</div>
                <div className="nav-button">Projects</div>
                <div className="nav-button">Contact</div>
            </div>
        );
    }
}

export default NavBar;