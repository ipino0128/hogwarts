import React from "react";
import HogDetails from "./HogDetails";

class HogCard extends React.Component {
  state = {
    isClicked: false,
  };

  getImage = (hogName) => {
    let formattedName = hogName.split(" ").join("_").toLowerCase();
    return require(`../hog-imgs/${formattedName}.jpg`);
  };

  showDetails = () => {
    // console.log(!this.state.clicked);
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div className="ui eight wide column">
        <img
          src={this.getImage(this.props.hog.name)}
          onClick={this.showDetails}
        />
        <h3>{this.props.hog.name}</h3>
        <button onClick={() => this.props.handleHide(this.props.hog)}>
          Hide Hog
        </button>
        <div>
          {this.state.clicked ? <HogDetails hog={this.props.hog} /> : null}
        </div>
      </div>
    );
  }
}

export default HogCard;
