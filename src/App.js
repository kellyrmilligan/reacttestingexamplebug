import 'isomorphic-fetch';
import React, { Component } from 'react';
import Modal from 'react-modal';

import logo from './logo.svg';

import './App.css';

class App extends Component {

	state = {
		isLoading: false
	}

	makeRequest() {
		return fetch('/search/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin'
        })
	}

	afterOpenFn() {
	}

	onRequestClose() {
	}

	componentDidMount () {
    this.setState({
      isLoading: true
    })

		this.makeRequest()
      .then(() => {
        this.setState({
          isLoading: false,
        })
      }, () => {
				this.setState({
          isLoading: false
        })
			})
	}
  render() {

		console.log('calling render and document is', document)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
					{this.state.isLoading &&
						<p>Loading...</p>
					}
        </div>
				<Modal
				  isOpen={this.state.isLoading}
				  onAfterOpen={this.afterOpenFn}
				  onRequestClose={this.requestCloseFn}
				  contentLabel="Modal"
				>
  				<h1>Modal Content</h1>
  				<p>Etc.</p>
				</Modal>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
