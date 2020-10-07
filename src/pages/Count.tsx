import { observer } from 'mobx-react';
import React from 'react';
import {PointStore} from '../stores/PointStore';
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

function Team1(){
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

function Team2(){
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

const pointState = new PointStore(10);

@observer
class Count extends React.Component<{}>{

  constructor(props:{}){
    super(props);
    this.addPoint = this.addPoint.bind(this);
  }

  // state:CountProps = {
  //   count1 : 0,
  //   count2 : 0
  // };
  
  // add1 = ()=>{
  //   this.setState({
  //     count1 : this.state.count1+1
  //   });
  // };
  // add2 = ()=>{
  //   this.setState({
  //     count2 : this.state.count2+1
  //   });
  // };

  moveHome = ()=>{
    document.location.href = "/"
  }

  render(){
    return (
      <div className="Count">
        <Team1 />
        <div className="container__teamScore">
          <div className="container__teamScore--wrap">
            {/* <p className="container__teamScore--count" onClick={this.add1}>{this.state.count1}</p>
            <p className="container__teamScore--bar">:</p>
            <p className="container__teamScore--count" onClick={this.add2}>{this.state.count2}</p> */}
            <p className="container__teamScore--count" onClick={()=> this.addPoint() }></p>
            <div>{pointState.getPoint()}</div>
          </div>
          <button onClick={this.moveHome}>finish</button>
        </div>
        <Team2 />
      </div>
    ); 
  }

  addPoint(){
    const point = pointState.getPoint();
    pointState.setPoint(point +1);
    console.log(pointState.getPoint())
  }
}

export default Count;