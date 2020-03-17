import React from 'react';

const Scorebar = props => {
    return (
        <section className="row">
            <span className="col-6 text-center">Score: {props.score}</span>
            <span className="col-6 text-center">Top Score: {props.topScore}</span>
        </section>
    )
}

export default Scorebar;