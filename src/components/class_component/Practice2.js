import React from 'react';

class Practice2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    );
  };

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className="ui container">
          Error: {this.state.errorMessage}
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div className="ui container">
          Laditude: {this.state.lat}
        </div>
      );
    }

    return (
      <div className="ui container">
        Loading
      </div>
    );
  };
}

export default Practice2;