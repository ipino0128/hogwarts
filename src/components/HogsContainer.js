import React from "react";
import HogCard from "./HogCard";

class HogsContainer extends React.Component {
  state = {
    filter: "All",
    hiddenHog: null,
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      filter: e.target.value,
    });
  };

  hogsOptions = () => {
    let hogsList;
    switch (this.state.filter) {
      case "All":
        hogsList = this.props.hogs;
        break;
      case "Alphabetical":
        hogsList = this.props.hogs.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Weight":
        hogsList = this.props.hogs.sort((a, b) => a.weight - b.weight);
        break;
      case "Greased":
        hogsList = this.props.hogs.filter((hog) => hog.greased === true);
        break;
    }
    return hogsList;
  };

  handleHide = (hog) => {
    // console.log(hog);
    this.setState({
      hiddenHog: hog,
    });
  };

  render() {
    let filteredHogs = this.hogsOptions();
    if (this.state.hiddenHog) {
      let index = filteredHogs.indexOf(this.state.hiddenHog);
      if (index > -1) {
        filteredHogs.splice(index, 1);
      }
    }
    console.log(filteredHogs);
    return (
      <div className="ui grid container">
        <div className="row">
          Filter:
          <select onChange={this.handleChange}>
            <option value="All">All</option>
            <option value="Alphabetical">Alphabetical</option>
            <option value="Weight">Weight</option>
            <option value="Greased">Greased</option>
          </select>
        </div>
        <div className="row">
          {filteredHogs.map((hog, index) => (
            <HogCard key={index} hog={hog} handleHide={this.handleHide} />
          ))}
        </div>
      </div>
    );
  }
}

export default HogsContainer;
