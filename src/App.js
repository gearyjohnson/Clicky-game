import React, { Component } from 'react';
import Card from  "./components/Card";
import Wrapper from  "./components/Wrapper";
import Score from  "./components/Score";
import cards from  "./components/cards.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    cards,
    clickedCardsIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedCardsIds = this.state.clickedCardsIds;

    if(clickedCardsIds.includes(id)){
      this.setState({ clickedCardsIds: [], score: 0, status: "You lost, try again"});
      return;
    }else{
      clickedCardsIds.push(id)
      
      if(clickedCardsIds.length === 8){
        this.setState({Score: 8, status: "You Won!!!!",
      clickedCardsIds: []});
      console.log("You Win");
      return;
      }
  
  this.setState({ cards, clickedCardsIds, score: clickedCardsIds.length, status: " " });

  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
}

// Map over this.state.cards and render a Card component for each card object
render() {
return (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Clicky Game</h1>
      <p className="App-intro">
        Try not to click the same image twice!
      </p>
    </header>
    <Score total={this.state.score}
           goal={8}
           status={this.state.status}
           />
    <Wrapper>
      {this.state.cards.map(card => (
        <Card
          shuffleScoreCard={this.shuffleScoreCard}
          id={card.id}
          key={card.id}
          image={card.image}
        />
      ))}
    </Wrapper>
    <footer>
      <p>Copyright<a href="ht" target="" rel=""></a>.</p>
    </footer>
  </div>
  );
 }
}
export default App;
