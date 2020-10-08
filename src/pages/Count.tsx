import { observer } from 'mobx-react';
import React from 'react';
import { useObserver } from 'mobx-react';
import { Link } from 'react-router-dom';
import {point1, point2, gameResult} from '../store'
import './Count.css';

/* type alias */
type members1 = {
  id: String;
  name: string;
};

type members2 = {
  id: String;
  name: string;
}

const members1 = [
  {id : 'aa', name : 'name1'},
  {id : 'bb', name : 'name2'},
  {id : 'cc', name : 'name3'},
  {id : 'cc', name : 'name4'},
]

const members2 = [
  {id : 'dd', name : 'name5'},
  {id : 'ee', name : 'name6'},
  {id : 'ff', name : 'name7'},
  {id : 'ff', name : 'name8'},
]

const Team1 = () =>{
  return (
    <div className="container__teamMember1">
      {members1.map( (member, index) => (
        <div className="container__teamMember--content" key={index}>
          <p>
            <img className="container__teamMember--img" src="../user.svg"  alt={member.id}/>
            <span className="container__teamMember--name">{member.name}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

const Team2 = () =>{
  return (
    <div className="container__teamMember2">
      {members2.map( (member, index) => (
        <div className="container__teamMember--content" key={index}>
          <p>
            <img className="container__teamMember--img" src="../user.svg" alt={member.id}/>
            <span className="container__teamMember--name">{member.name}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

/**
 * state를 생성하기 위해, constructor, super 코드를 쓰는 대신
 * state를 해당 클래스의 속성 방식으로 사용!
 * 
 * ※ 주의 ※
 * state 속성 옆에 반드시 인터페이스를 명시해주어야 할 것!
 * 그래야만 constructor 안에서 state를 선언한 것과 같은 효과를 보인다.
 */

/* interface */
// interface CountProps {
//   count1 : number,
//   count2 : number,
// }

const Count:React.FunctionComponent = () => {

  const increase1 = () => {
    return point1.increase();
  }
  const increase2 = () => {
    return point2.increase();
  }
  const winner = () => {
    if(gameResult.round === 1 && point1.number > point2.number) {
      gameResult.game1_winner = 'team1'
    } else if(gameResult.round === 1 && point1.number < point2.number){
      gameResult.game1_winner = 'team2'
    } else if(gameResult.round === 2 && point1.number > point2.number) {
      gameResult.game2_winner = 'team1'
    } else if(gameResult.round === 2 && point1.number < point2.number){
      gameResult.game2_winner = 'team2'
    } else if(gameResult.round === 3 && point1.number > point2.number) {
      gameResult.game3_winner = 'team1'
    } else if (gameResult.round === 3 && point1.number < point2.number){
      gameResult.game3_winner = 'team2'
    } else if(gameResult.round === 4 && point1.number > point2.number) {
      gameResult.game4_winner = 'team1'
    } else if(gameResult.round === 4 && point1.number < point2.number){
      gameResult.game4_winner = 'team2'
    }
  }
  return useObserver(() =>(
    <div className="Count">
      <Team1 />
      <div className="container__teamScore">
        <div className="container__teamScore--wrap">
          <p className="container__teamScore--count" onClick={increase1}>{point1.number}</p>
          <p className="container__teamScore--bar">:</p>
          <p className="container__teamScore--count" onClick={increase2}>{point2.number}</p>
        </div>
        <Link to="/">
          <button className="finish-btn" onClick={winner}>finish</button>
        </Link>
        
      </div>
      <Team2 />
    </div>
  ))
}

export default Count;