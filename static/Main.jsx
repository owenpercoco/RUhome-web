import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const io = require('socket.io-client');
const socket = io();




class Main extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
	
	socket.on('generate', (payload) => this.SocketGenerateBoard(payload));
    }
	
  render() {
	
	
    return (
	<div>
	Hello World
	</div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


export default Main;


