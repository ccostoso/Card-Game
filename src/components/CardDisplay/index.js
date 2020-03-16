import React from 'react';
import './style.css';
import Card from '../Card';
import cards from './../../cards.json';

class CardDisplay extends React.Component {
    state = {
        score: 0,
        topScore: 0
    }

    handleClick = () => {
        this.setState({
            score: this.state.score + 1
        })
    }

    render() {
        return (
            <div>
                {this.state.score}
                <section className="row">
                    {cards.map(card => <Card src={card.src} name={card.name} key={card.id} handleClick={this.handleClick}/>)}
                </section>
            </div>
        )
    }
}

export default CardDisplay;