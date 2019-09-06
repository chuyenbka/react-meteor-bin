import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Bins from '../api/bins';

class Info extends Component {
  render() {
    console.log('this.props.bins', this.props.bins);

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>
          {this.props.bins.map((bin) => <li> {bin.text} </li> )}
        </ul>
      </div>
    );
  }

}

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('bins');
  return {
    bins: Bins.find().fetch(),
  };
})(Info);
