import React from 'react';
import './style.css';

const Card = props => {
    return (
        <article className="card" onClick={props.handleClick}>
            <img src={props.src} className="card-img-top" alt={props.name}/>
            <div className="card-body">{props.text}</div>
        </article>
    )
}

export default Card;