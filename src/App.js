import React, { Component } from 'react';
import './App.css';
import CardDisplay from './components/CardDisplay';
import Header from './components/Header';
import cards from './cards.json';

class App extends Component {
    state = {
        score: 0,
        topScore: 0,
        cardsArr: cards,
        clickedArr: []
    }

    handleClick = e => {
        const id = e.target.dataset.id;
        const tempArr = this.state.clickedArr;

        if (tempArr.find(ele => ele === id)) {
            this.setState({
                score: 0,
                clickedArr: [],
                cardsArr: this.shuffleCards(cards)
            });
        } else {
            tempArr.push(id);
            this.setState({
                score: this.state.score + 1,
                topScore: this.state.score === this.state.topScore ? this.state.topScore + 1 : this.state.topScore,
                clickedArr: tempArr,
                cardsArr: this.shuffleCards(cards)
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
                <CardDisplay
                    cardsArr={this.state.cardsArr}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default App;