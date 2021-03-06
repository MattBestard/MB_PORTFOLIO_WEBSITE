import React from 'react';
import NavBar from './navBar.js';
import HomePagePicture from './homePagePicture.js';

class HomePage extends React.Component {
    render() {
        return(
        <div className="home-page">
            <NavBar />
            <HomePagePicture />
        </div>
        );
    }
}

export default HomePage;