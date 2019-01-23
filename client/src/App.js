import React, { Component } from 'react';
import './App.css';
import Page from './Components/Page'

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    /*
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
    */

    fetch('/api/daily')
      .then(response => response.json())
      .then(json => this.setState({ data: json }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Page>

        </Page>
      </div>
    );
  }
}

export default App;
