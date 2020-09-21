import React from 'react';
import './Count.css';
import { count } from 'console';

const members1 = [
  {id : 'aa', name : 'name'},
  {id : 'bb', name : 'name'},
  {id : 'cc', name : 'name'},
]

const members2 = [
  {id : 'dd', name : 'name'},
  {id : 'ee', name : 'name'},
  {id : 'ff', name : 'name'},
]

function Team1(){
  return (
    <div className="container__teamMember1">
      {members1.map( member => (
        <div className="container__teamMember--content">
          <p>
            <img className="container__teamMember--img" src="../user.svg"/>
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
      {members1.map( member => (
        <div className="container__teamMember--content">
          <p>
            <img className="container__teamMember--img" src="../user.svg"/>
            <span className="container__teamMember--name">{member.name}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

interface CountProps {
  count1 : number,
  count2 : number,
}

class Count extends React.Component{

  state = {
    count1 : 0,
    count2 : 0
  };
  
  add1 = ()=>{
    console.log('add');
    this.setState({
      count1 : this.state.count1+1
    });
  };
  add2 = ()=>{
    console.log('add');
    this.setState({
      count2 : this.state.count2+1
    });
  };

  render(){
    return (
      <div className="Count">
        <Team1 />
        <div className="container__teamScore">
          <div className="container__teamScore--wrap">
            <p className="container__teamScore--count" onClick={this.add1}>{this.state.count1}</p>
            <p className="container__teamScore--bar">:</p>
            <p className="container__teamScore--count" onClick={this.add2}>{this.state.count2}</p>
          </div>
          <button>finish</button>
        </div>
        <Team2 />
      </div>
    ); 
  }
}

export default Count;