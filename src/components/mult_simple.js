import React, { Component } from 'react';

export default class MultiplySimple extends Component {
  constructor(props) {
  	super(props);
  	this.state = { op1: Math.floor(Math.random()*11), op2: Math.floor(Math.random()*13), ans: ''};
  }
  checkAns() {
  	if (this.state.op1 * this.state.op2 == this.state.ans)
  		console.log("correct");
  	else
  		console.log("wrong!!!!");
  	this.setState({op1: Math.floor(Math.random()*11)});
  	this.setState({op2: Math.floor(Math.random()*13)});
  	this.setState({ans: ''});
  }
  render() {
    return (
      <div className="row mult-simple" >
      	<div className="col-md-2 col-md-offset-3">
      		<p>{this.state.op1} &times; {this.state.op2}</p>
      	</div>
      	<div className="col-md-2">
      		<p>=</p>
      	</div>
      	<div className="col-md-2 ">
          <input type="number" onChange={(e)=>this.setState({ans: e.target.value})} placeholder="Answer" value={this.state.ans} />
        </div>
      	<div className="col-md-1">
      	  <button type="submit" className="btn btn-primary" onClick={this.checkAns.bind(this)}>OK</button>
      	</div>
      </div>
    );
  }
}
