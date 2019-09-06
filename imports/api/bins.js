import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export default Bins = new Mongo.Collection('bin');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('bins', function tasksPublication() {
      return Bins.find({'author._id': Meteor.userId()});
    });
  }
