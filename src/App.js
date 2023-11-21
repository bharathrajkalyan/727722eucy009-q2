import React, { Component } from 'react'
import './App.css'
export default class 
 extends Component {
        constructor(props){
            super(props);
            this.state={count:0};
            this.state={name:"SKCET"};
    }
    Decrement=()=>{
        this.setState(prevState=>{
        if(prevState.count>0){
          return {count:prevState.count-1}}
          else
          {
            return {count:0
            }
          }
        });
      }
    increment=()=>
    {
        this.setState(prevState=>({count:prevState.count+1}));
    }
    
  render() {
    return (
      <div>
      <p>Name: {this.state.name}</p>
      <p>Age:{this.state.count}</p>
      <button className="a1" onClick={this.increment}><h3 className="a2"> Get Older</h3></button>
      <button className="a1" onClick={this.Decrement}> <h3 className="a2">Make Younger</h3></button>
      </div>
    )
  }
}