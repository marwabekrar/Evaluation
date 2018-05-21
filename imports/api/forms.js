import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

// Creates a new Mongo collections and exports it
export const Forms = new Mongo.Collection('forms');

//Roles.addUsersToRoles('GqqGaxYtePn8JQHkd', 'admin', Roles.GLOBAL_GROUP);



if(Meteor.isServer) {
  Meteor.publish('forms', function(){
    
    return Forms.find({userId: this.userId});
  });
}



Meteor.methods({
  'forms.insert'(firstname,lastname,email,phone,address,city,province,postalCode,country,comment ){
    
   new SimpleSchema({
        firstname: {
                  type: String,
                  label: 'Your first name',
                  min:1,
                  max:200
                },
        lastname: {
                  type: String,
                  label: 'Your last name',
                  min:1,
                  max:200
                },
         email: {
                  type: String,
                  label: 'Your email',
                  regEx: SimpleSchema.RegEx.EmailWithTLD
                },
         phone:{
                  type: String,
                  regEx: SimpleSchema.RegEx.Phone
         },
        address:{
               type: String,
               min: 1
             },
        city:{
                type: String,
                min: 1
             },
        province:{
                type: String,
                min: 1
             },
        postalCode:{
              type: String,
              min: 1,
              regEx: SimpleSchema.RegEx.ZipCode
             },
        country:{
             type: String,
             min: 1
             },
        comment:{
            type: String,
             min: 1
             }
        
   }).validate({firstname,lastname,email,phone,address,city,province,postalCode,country,comment});
   
    
    Forms.insert({
      _id: shortid.generate(),
      userId:this.userId,
      firstname,
      lastname,
      email,
      phone,
      address,
      city,
      province,
      postalCode,
      country,
      comment,
      createdAt: moment().valueOf()
    });
   
    
  }
  });