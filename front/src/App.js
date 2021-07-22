import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Table2 from "./components/Table2";

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
        <img className="icecream" src="https://i.imgur.com/SGmsIYU.png" alt="icecreamIllustration"/>
        <h3 className="intro-title">What’s <mark className="highlight">not</mark> <br/> on your fridge?</h3>
        <div className="input-container">
          <input
            className="input-name"
            type="text"
            placeholder="Insert item"
            name="name"
            value={this.state.itemInfo.name}
            onChange={this.handleChange}
          />
          <input
            className="input-quantity"
            type="text"
            placeholder="Quantity"
            name="quantity"
            value={this.state.guestInfo.quantity}
            onChange={this.handleChange}
          />
          <button className="add-button" onClick={this.handleClick}>Add</button>
        </div>
        
        {/* <Table data={this.state.item}/> */}
        <Table2 data={this.state.guest}/>

      </div>
    );
  }
}

export default App;