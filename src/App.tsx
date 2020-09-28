import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Count from './pages/Count';
import ImageGame from './game/ImageGame';
import './App.css';


type gameList = {
  id : number;
  name : string;
}
const gameList = [
  {id : 1, name : '이미지 게임'},
  {id : 2, name : '고요속의 외침'},
  {id : 3, name : '몸으로 말해요'},
  {id : 4, name : '1초 노래 듣고 맞추기'},
]

type personList = {
  id : string;
  name : string;
}
const personList = [
  {id : 'a', name : 'name1'},
  {id : 'b', name : 'name2'},
  {id : 'c', name : 'name3'},
  {id : 'd', name : 'name4'},
  {id : 'e', name : 'name5'},
  {id : 'f', name : 'name6'},
  {id : 'g', name : 'name7'},
  {id : 'g', name : 'name8'},
]

function Main(){
  return (
    <div className="container__main">
      <h1>2020<br/>WEB2 WORKSHOP</h1>
      <div className="container__gameScore">
          {gameList.map( list => (
            <button className="container__gameScore--btn" key={list.id}>
                <Link to="/count">{list.name}</Link>
            </button>
          ))}
      </div>
    </div>
  )
}

function PersonalScore(){
  return (
    <div className="container__personalScore">
      {personList.map( (list, index) => (
        <div className="container__personalScore--content" key={index}>
          <div className="container__personalScore--info">
            <p>
              <img className="container__personalScore--img" src="../user.svg"  alt={list.id}/>
              <span className="container__personalScore--name">{list.name}</span>
            </p>
          </div> 
          <p className="container__personalScore--score">
            <span>1</span>
          </p>
        </div>
      ))}
    </div>
  )
}

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route path="/">
              <Main />
              <PersonalScore />
            </Route>
            <Route path="/count" component={Count}></Route>
            <button className="container__imgGameBtn">
              <Link to="/game">
                이미지게임<br/>
                바로가기
              </Link>
            </button>
            <Route path="/game" component={ImageGame}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
