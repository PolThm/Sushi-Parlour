import React, {Component} from "react";
import "./Group07.css";

class Group07 extends Component {
  state = {
    nbOfPeople: null,
    date: null,
    time: null,
    name: null,
    email: null,
    phone: null
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="g07 container bg-SPDarkGray md:bg-transparent">
        <h2 className="py-16 text-center font-goodDogCool text-5xl sm:text-6xl">Discover</h2>
        <form onSubmit={this.handleSubmit} className="pb-16">
          <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <label className="label1">
              How many people?
              <input type="text" name="nbOfPeople" value={this.state.nbOfPeople} onChange={this.handleChange} placeholder="2 people"/>
            </label>
            <label className="label2">
              When is your date?
              <input type="text" name="date" value={this.state.date} onChange={this.handleChange} placeholder="17-02-2020"/>
            </label>
            <label className="label3">
              Time
              <input type="text" name="time" value={this.state.time} onChange={this.handleChange} placeholder="10:00am"/>
            </label>
            <label className="label4">
              Name
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Full name"/>
            </label>
            <label className="label5">
              Email
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email address"/>
            </label>
            <label className="label6">
              Phone
              <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Your phone"/>
            </label>
          </div>

          <div className="mt-10 text-center">
            <input type="submit" value="Submit" className="submitButton"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Group07;
