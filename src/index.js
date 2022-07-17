import React from "react";
import { createRoot } from "react-dom/client";
import HemisphereDisplay from "./HemisphereDisplay";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

class App extends React.Component {
  state = { latitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
        console.log(this.setState({ errorMessage: error.message }));
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <HemisphereDisplay latitude={this.state.latitude} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

root.render(<App />);
