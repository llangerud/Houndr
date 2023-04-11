const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    zip: String
    myDogs: [Dog]!
  }
  type Dog {
    _id: ID!
    name: String
    breed: String
    about: String
    image: String
    age: String
    fixed: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    User: [User]!
    user(userId: ID!): User
    me: User
    searchDog: Dog
    users(dogBreed: String): [User]
  }


  input DogInput {
    name: String!
    breed: String!
    about: String!
    image: String
    age: String!
    fixed: String!
  }


  

   

  type Mutation {
    addUser(username: String!, email: String!, password: String!, zip: String!): Auth
    
    login(email: String!, password: String!): Auth
    


    updateProfile(username: String!, email: String!, zip: String!): User

    addDog(name: String!, breed:String!, about:String!, image:String, age:String!, fixed: String!): User

    deleteDog(dogId: ID!): User
       
    }
`;

module.exports = typeDefs;
