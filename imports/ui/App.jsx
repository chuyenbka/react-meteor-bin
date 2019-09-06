import React from 'react';
import Hello from './Hello.jsx';
import ListBin from './ListBin.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Create from './Create';

class App extends React.Component {
  renderListBin = () => {
    return  this.props.currentUser ? (
      <div>
        <ListBin />
        <Create />
      </div> 
    ) : '';
  }
  render() {
    return (
      <div>
        <AccountsUIWrapper />
        {
           this.renderListBin()
        }
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(App);
