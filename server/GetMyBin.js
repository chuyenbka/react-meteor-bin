import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';

Meteor.methods({
    'getMyBin' : function() {
        return Links.find({'author._id': Meteor.userId()}).fetch();
    }
});