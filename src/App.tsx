import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImageGame from './game/ImageGame';
import Count from './pages/Count'
import { point1, point2, gameResult } from './store'
import './App.css';

const App = () => {

  type gameList = {
    id : number;
    name : string;
  }
  const gameList = [
    {id : 1, name : '이미지 게임'},
    {id : 2, name : '고요속의 외침'},
    {id : 3, name : '몸으로 말해요'},
    {id : 4, name : '1초 노래 듣고 맞추기'},
  ];

  const roundChange = () => {
    gameResult.round++
    point1.number = 0;
    point2.number = 0;
  }

  useEffect(() => {

    if(gameResult.game1_winner === 'team1') {
      let btn1 = document.getElementsByClassName('gameScore-btn1')[0];
      btn1.classList.add('red')
    } else if(gameResult.game1_winner === 'team2') {
      let btn1 = document.getElementsByClassName('gameScore-btn1')[0];
      btn1.classList.add('blue')
    }

    if(gameResult.game2_winner === 'team1') {
      let btn2 = document.getElementsByClassName('gameScore-btn2')[0];
      btn2.classList.add('red')
    } else if(gameResult.game2_winner === 'team2') {
      let btn2 = document.getElementsByClassName('gameScore-btn2')[0];
      btn2.classList.add('blue')
    }

    if(gameResult.game3_winner === 'team1') {
      let btn2 = document.getElementsByClassName('gameScore-btn3')[0];
      btn2.classList.add('red')
    } else if(gameResult.game3_winner === 'team2') {
      let btn2 = document.getElementsByClassName('gameScore-btn3')[0];
      btn2.classList.add('blue')
    }

    if(gameResult.game4_winner === 'team1') {
      let btn2 = document.getElementsByClassName('gameScore-btn4')[0];
      btn2.classList.add('red')
    } else if(gameResult.game4_winner === 'team2') {
      let btn2 = document.getElementsByClassName('gameScore-btn4')[0];
      btn2.classList.add('blue')
    }

  })

  return (
    <div className="Main">
      <div className="Main__wrap">
        <h1>2020<br/>WEB2 WORKSHOP</h1>
        {gameList.map(list => (
          <div>
            <Link to="/count">
              <button className={'gameScore-btn'+`${list.id}`} key={list.id} onClick={roundChange}>
                {list.name}
              </button>
            </Link>
          </div>
        ))
        }   
      </div>   
    </div>
  )
}

export default App;
