import React, { Component } from 'react';
import {RaisedButton} from 'material-ui';
import './App.css';

class Start extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(testnet) {
    this.props.initializeWallet(this.props.privateKey, this.props.testnet);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><span role="img" aria-label="rocket">🚀</span></h1>
          <h1 className="App-title">STELLAR Wallet</h1>
        </header>

        <h1>This wallet isn't "real" yet because it doesn't meet the minimum balance requirements </h1>
        <h4> Be patient, wait a few seconds and then hit the 'Refresh' button and it will load :)</h4>
        <RaisedButton
          label="Refresh"
          primary={true}
          style={{marginTop: 10}}
          onClick={this.onSubmit}
        />
      </div>
    );
  }
}

export default Start;
