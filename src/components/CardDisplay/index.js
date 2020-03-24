import React from 'react';
import './style.css';
import Card from '../Card';

const CardDisplay = props => {
    return (
        <section className="row mx-0">
            {props.cardsArr.map(card => <Card
                src={card.src}
                name={card.name}
                id={card.id}
                key={card.id}
                handleClick={props.handleClick}
            />)}
        </section>
    )
}

export default CardDisplay;