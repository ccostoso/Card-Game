import React from 'react';
import './style.css';

const Card = props => {
    return (
        <section className="col-3 m-0">
            <article className="card my-1 mx-auto" onClick={props.handleClick}>
                <img src={props.src} className="card-img-top" alt={props.name}/>
                {/* <div className="card-body">{props.text}</div> */}
            </article>
        </section>
    )
}

export default Card;