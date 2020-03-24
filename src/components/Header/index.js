import React from 'react';
import './style.css';
// import Navbar from '../Navbar';
import Scorebar from '../Scorebar';

const Header = (props) => {
    return (
        <header className="py-4 mb-4">
            {/* <Navbar /> */}
            <h3 className="text-center">Pokémon Mystery Dungeon: the Clicky Game!</h3>
            <Scorebar 
                score={props.score} 
                topScore={props.topScore}
                clickedArr = {props.clickedArr}
            />
        </header>
    )
}

export default Header;