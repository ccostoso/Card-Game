import React from 'react';
import './style.css';
import Card from '../Card';
import cards from './../../cards.json';

class CardDisplay extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        cardArr: [],
        clickedArr: []
    }

    handleClick = (e) => {
        const id = e.target.dataset.key;
        const tempArr = this.state.clickedArr;

        if (tempArr.find(ele => ele === id)) {
            this.setState({
                score: 0,
                clickedArr: []
            });
        } else {
            tempArr.push(id);
            this.setState({
                score: this.state.score + 1,
                topScore: this.state.score === this.state.topScore ? this.state.topScore + 1 : this.state.topScore,
                clickedArr: tempArr
            });
        };
    }

    render() {
        return (
            <div>
                <p>Score: {this.state.score}</p>
                <p>Top Score: {this.state.topScore}</p>
                <p>Clicked: {JSON.stringify(this.state.clickedArr)}</p>
                <section className="row">
                    {cards.map(card => <Card 
                        src={card.src} 
                        name={card.name} 
                        id={card.id}
                        key={card.id} 
                        handleClick={this.handleClick} 
                        isClicked={false} 
                    />)}
                </section>
            </div>
        )
    }
}

export default CardDisplay;