const { AuthenticationError } = require('apollo-server-express');
const { User, Dog} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

   me: async (parent, args, context) => {
    console.log('queryme called')
    
    if (context.user) {
      return User.findOne({ _id: context.user._id })
    //   .populate('dogs');
    }
    throw new AuthenticationError('You need to be logged in!');
  },
},



  Mutation: {
    addUser: async (parent, { username, email, password, zip }) => {
      const user = await User.create({ username, email, password, zip });
      const token = signToken(user);
      console.log('addUser resolver called');

      return { token, user };
    },
  
    login: async (parent, { email, password }) => {
      console.log('login called')
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
     
      return { token, user };
    },


     
      
      addDog: async (parent, { dog }, context) => {
        console.log('addDog called');
        console.log(context.user._id);
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id  },
            { $addToSet: { myDogs: dog } },
            { new: true, runValidators: true }
          );
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

 }
    }
  


module.exports = resolvers;
