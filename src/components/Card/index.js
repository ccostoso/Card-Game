import React from 'react';
import './style.css';

const Card = props => {
    return (
        <section className="col-3">
            <article className="card my-1 mx-auto" onClick={props.handleClick}>
                <img 
                    src={props.src} 
                    className="card-img-top"
                    data-id={props.id} 
                    alt={props.name}/>
                {/* <div className="card-body">{props.text}</div> */}
            </article>
        </section>
    )
}

export default Card;