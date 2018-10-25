import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
            <div class="nav-bar">
                <div class="nav-button">Home</div>
                <div class="nav-button">News</div>
                <div class="nav-button">Projects</div>
                <div class="nav-button">Contact</div>
            </div>
        );
    }
}

export default NavBar;