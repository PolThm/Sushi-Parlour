import React, {Component} from "react";
import "./Group07.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import TimePicker from 'react-bootstrap-time-picker';

class Group07 extends Component {
  state = {
    nbOfPeople: 2,
    startDate: new Date(),
    time: '10:00apm',
    name: '',
    email: '',
    phone: '',


  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  };

  handleChangeDate = (date) => {
    this.setState({startDate: date});
  };

  handleChangeTime = (time) => {
    this.setState({time});
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="g07 container bg-SPDarkGray md:bg-transparent">
        <h2 className="pt-16 pb-8 text-center font-goodDogCool text-5xl sm:text-6xl">Book here</h2>
        <form onSubmit={this.handleSubmit} className="pb-20">
          <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <label className="label1">
              How many people?
              <select name="nbOfPeople" value={this.state.nbOfPeople} onChange={this.handleChange} placeholder="2 people" className="inputPeople">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <i className="fas fa-chevron-down"/>
            </label>
            <label className="label2">
              When is your date?
              <DatePicker selected={this.state.startDate} onChange={this.handleChangeDate}/>
              <i className="fas fa-calendar-alt"/>
            </label>
            <label className="label3">
              Time
              <TimePicker onChange={this.handleChangeTime} value={this.state.time} start="10:00" end="21:00" step={15} className="inputTime"/>
              <i className="fas fa-clock"/>
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

          <div className="pb-2 mt-10 md:mt-0 text-center">
            <input type="submit" value="Submit" className="submitButton"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Group07;
