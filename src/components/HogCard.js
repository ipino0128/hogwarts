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

  handleClick = () => {
    console.log(!this.state.isClicked);
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    return (
      <div className="ui eight wide column">
        <img
          src={this.getImage(this.props.hog.name)}
          onClick={this.handleClick}
        />
        <h3>{this.props.hog.name}</h3>
        <button onClick={() => this.props.handleHide(this.props.hog)}>
          HIDE ME!
        </button>
        <br />
        <br />
        <br />
        <div>
          {this.state.isClicked ? <HogDetails hog={this.props.hog} /> : null}
        </div>
      </div>
    );
  }
}

export default HogCard;
