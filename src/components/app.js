import React, { Component } from 'react';
import MultSimple from './mult_simple';

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="row">
      	<div className="col-md-10 col-md-offset-1">
      		<h1>Multiplication Exercise</h1>
      	</div>
      </div>
      <MultSimple />
      </div>
    );
  }
}
