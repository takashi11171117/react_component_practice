import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class Practice2 extends React.Component {
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
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
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return (
      <div className="ui container">
        <Spinner message="Please accept location request!" />
      </div>
    );
  };
}

export default Practice2;