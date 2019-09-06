import React, { Component } from 'react';
import Bins from '../api/bins';
import { Meteor } from 'meteor/meteor';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const link = {
      text: this.state.text,
      author: Meteor.user(),
      _createdAt: new Date()
    };
    Bins.insert(link);
    this.setState({text:''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <textarea rows="10" cols="50" value={this.state.text} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }
}
