import {Mongo} from 'meteor/mongo';

Meteor.methods({
	'bins.insert': function(){
		return Bins.insert({
			createdAt: new Date(),
			content: '',
			sharedWith: [],
			ownerId: this.userId
		});
	},
	'bins.remove': function(bin){
		return Bins.remove(bin);
	},
	'bins.update': function(bin, content){
		//if u wanna update something in mongo you prob have to use mongo modifiers
		return Bins.update(bin._id, {$set: { content } });
	},
	'bins.share': function(bin, email){
		return Bins.update(bin._id, {$push:{sharedWith: email}})
	}
});

export const Bins = new Mongo.Collection('bins');