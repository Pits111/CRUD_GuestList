import React, { Component } from "react";
import "./App.css";
import ListDetails from "./components/ListDetails";
//import List from "./components/List";

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

  deleteItems = (id) => {
    fetch(`/guests/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      },
    });
    this.setState({ guest: this.state.guest.filter((it) => it.id !== id )});
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.guestData !== this.state.guestData) {
      this.sendGuests();
    }
  }

  render() {
    return (
      <div className="App">
        <img 
        className="balloons"
        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Balloons-aj.svg"
        alt="birthdayballoons"
        />
        <h1 className="intro-title"
        >This is my Kids Birthday Guest List Manager</h1>
        <div className="input-container">
          <input
            className="input-name"
            type="text"
            placeholder="Name of Guest"
            name="name"
            value={this.state.guestInfo.name}
            onChange={this.handleChange}
          />
          <input
            className="input-age"
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.guestInfo.age}
            onChange={this.handleChange}
          />
         
        </div>
        <ListDetails data={this.state.guest} deleteGuest={this.deleteGuest}/>
        <div className="button-container">
            <button className="add-button" onClick={this.handleClick}>Add</button>
            <button className="delete-button" onClick={this.handleClick}>Delete</button>
          </div>
      </div>
    );
  }
}

export default App;