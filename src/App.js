import React from "react";
import FriendCard from "./components/FriendCard";
import TitleCard from "./components/TitleCard";
import Wrapper from "./components/Wrapper";
import Scorekeeper from "./components/Scorekeeper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends,
    score: 0,
    topscore: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffle(this.state.friends)});
}
shuffle = friends => {
    let i = friends.length - 1;
    while (i > 0) {
        const j = Math.floor(Math.random() * (i + 1));
        const temporary = friends[i];
        friends[i] = friends[j];
        friends[j] = temporary;
        i--;
    }
    return friends;
}

clicked = id => {
  let guessCorrect = false;
  const newData = this.state.friends.map(friend =>{
      const newItem = {...friend}
      if (newItem.id === id) {
          if (!newItem.clicked) {
              newItem.clicked = true;
              guessCorrect = true;
          }
      }
      return newItem;
  });
  guessCorrect ? this.handleCorrect(newData) : this.gameOver(newData);
}
handleCorrect = data => {
  this.setState({
      friends: this.shuffle(data),
      score: this.state.score + 1
  })
}
gameOver = friends => {
  if (this.state.score > this.state.topscore) {
      this.setState({topscore: this.state.score})}
  const resetData = friends.map(friend => ({ ...friend, clicked: false }));
  alert(`OH NO YOU SUCK, your score is : ${this.state.score}`);
  this.setState({ 
      score: 0,
      friends: resetData
  })
}

  render() {
    return (
      <Wrapper>
        <Scorekeeper score={this.state.score} topscore={this.state.topscore}/>
        <TitleCard title="Clicky Game" inst="Click on an image to earn points, but don't click on any more than once!"/>
        {this.state.friends.map(friend => (
          <FriendCard
          clicked={this.clicked}
          key={friend.id}
          id={friend.id}
          image={friend.image}
            />
        ))}
      </Wrapper>
    );
  }
}

export default App;
