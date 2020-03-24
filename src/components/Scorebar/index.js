import React from 'react';

const Scorebar = props => {
    return (
        <section className="row mx-0">
            <span className="col-6 text-center">Score: {props.score}</span>
            <span className="col-6 text-center">Top Score: {props.topScore}</span>
        </section>
    )
}

export default Scorebar;