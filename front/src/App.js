import React, { Component } from "react";
import "./App.css";
import List from "./components/List";
import ListDetails from "./components/ListDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guest: [],
      guestInfo: { name: "", age: "" },
      guestData: {},
    };
  }

  fetchGuest = () => {
    fetch("/guests")
      .then((res) => res.json())
      .then((data) => this.setState({ guest: data }));
  };

  componentDidMount() {
    this.fetchGuest();
  }

  handleChange = (e) => {
    this.setState({
      guestInfo: { ...this.state.guestInfo, [e.target.name]: e.target.value },
    });
  };

  handleClick = () => {
    this.setState({
      guestData: this.state.guestInfo,
      guestInfo: { name: "", age: "" },
    });
  };

  sendGuests = () => {
    fetch("/guests", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state.guestData),
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          guest: [...this.state.guest, data],
        })
      );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.guestData !== this.state.guestData) {
      this.sendGuests();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="input-container">
          <input
            className="input-name"
            type="text"
            placeholder="First and last name"
            name="name"
            value={this.state.guestInfo.name}
            onChange={this.handleChange}
          />
          <input
            className="input-age"
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.guestInfo.quantity}
            onChange={this.handleChange}
          />
          <button className="add-button" onClick={this.handleClick}>Add</button>
        </div>
        <ListDetails data={this.state.guest}/>
      </div>
    );
  }
}

export default App;