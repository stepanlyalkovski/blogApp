import React from 'react';

export default class App extends React.Component {
  render() {

    const testTitle = () => 'FrontCamp initial project';
    return (
      <div style={{textAlign: 'center'}}>
        <h1>{testTitle()}</h1>
      </div>);
  }
}