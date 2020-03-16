import React from 'react';
import './style.css';
import Navbar from '../Navbar';
import Scorebar from '../Scorebar';

const Header = (props) => {
    return (
        <header>
            <Navbar />
            <Scorebar 
                score={props.score} 
                topScore={props.topScore}
                clickedArr = {props.clickedArr}
            />
        </header>
    )
}

export default Header;