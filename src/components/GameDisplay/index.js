import React from 'react';
import './style.css';
import Card from '../Card';
import Header from '../Header';
import cards from './../../cards.json';

class GameDisplay extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        cardsArr: cards,
        clickedArr: []
    }

    handleClick = (e) => {
        const id = e.target.dataset.key;
        const tempArr = this.state.clickedArr;
        const shuffledCards = this.shuffleCards(cards);

        if (tempArr.find(ele => ele === id)) {
            this.setState({
                score: 0,
                clickedArr: [],
                cardsArr: shuffledCards
            });
        } else {
            tempArr.push(id);
            this.setState({
                score: this.state.score + 1,
                topScore: this.state.score === this.state.topScore ? this.state.topScore + 1 : this.state.topScore,
                clickedArr: tempArr,
                cardsArr: shuffledCards
            });
        };
    }

    shuffleCards = cards => {
        for (let i = 0; i < cards.length; i++)  {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }

        return cards;
    }

    render() {
        return (
            <div>
                <Header 
                    score={this.state.score}
                    topScore={this.state.topScore}
                    />
                <section className="row">
                    {this.state.cardsArr.map(card => <Card 
                        src={card.src} 
                        name={card.name} 
                        id={card.id}
                        key={card.id} 
                        handleClick={this.handleClick}
                    />)}
                </section>
            </div>
        )
    }
}

export default GameDisplay;