import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: "",
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
    window.navigator.geolocation.getCurrentPosition(
      //here we calling callback function
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent = () => {
    //all wrapup in a function

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} time={this.state.time} />;
    }
    return <Loader message="Please accept the location request" />;
  };

  render() {
    return <div className="container">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
