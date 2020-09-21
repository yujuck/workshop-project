import React from 'react';
import './App.css';

const gameList = [
  {id : 1, name : 'select1'},
  {id : 2, name : 'select2'},
  {id : 3, name : 'select3'},
  {id : 4, name : 'select4'},
  {id : 5, name : 'select5'}
]

const personList = [
  {id : 'a', name : 'name'},
  {id : 'b', name : 'name'},
  {id : 'c', name : 'name'},
  {id : 'd', name : 'name'},
  {id : 'e', name : 'name'},
  {id : 'f', name : 'name'},
  {id : 'g', name : 'name'}
]

function Main(){
  return (
    <div className="container__main">
      <h1>2020<br/>WEB2 WORKSHOP</h1>
      <div className="container__gameScore">
        {gameList.map( list => (
          <button className="container__gameScore--btn" key={list.id}>{list.name}</button>
        ))}
      </div>
    </div>
  )
}

function PersonalScore(){
  return (
    <div className="container__personalScore">
      {personList.map( list => (
        <div className="container__personalScore--content" key={list.id}>
          <div className="container__personalScore--info">
            <p>
              <img className="container__personalScore--img" src="../user.svg"/>
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
      <div className="App">
        <div className="container">
          
          <Main />
          <PersonalScore />
          
        </div>
      </div>
    );
  }
}

export default App;
