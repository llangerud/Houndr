const { AuthenticationError } = require("apollo-server-express");
const { User, Dog } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log("queryme called");

      if (context.user) {
        return User.findOne({ _id: context.user._id });
        // .populate('myDogs');
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //search all the users and get the ones who match breed//front end query FIND_DOGS
    users: async (parent, { dogBreed }) => {
      console.log("find Dogs");
      console.log(dogBreed);
      const users = await User.find({ "myDogs.breed": dogBreed });
      console.log(users);

      return users || [];
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, zip }) => {
      const user = await User.create({ username, email, password, zip });
      const token = signToken(user);
      console.log("addUser resolver called");

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      console.log("login called");
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);

      return { token, user };
    },

    updateProfile: async (parent, { username, email, zip }, context) => {
      if (context.user) {
        const updatedProfile = await User.findOneAndUpdate(
          { _id: context.user._id },
          { username, email, zip },
          { new: true }
        );
        return updatedProfile;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addDog: async (
      parent,
      { name, breed, about, image, age, fixed },
      context
    ) => {
      console.log("addDog called");
      console.log(image);
      const dog = { name, breed, about, image, age, fixed };
      console.log(dog);
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { myDogs: dog } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    deleteDog: async (parent, { index }, context) => {
      const user = await User.findById(context.user._id);
      if (!user) {
        throw new AuthenticationError('User not found');
      }
      user.myDogs.splice(index, 1)
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;
