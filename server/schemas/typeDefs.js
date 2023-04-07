const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    myDogs: [Dog]!
  }
  type Dog {
    _id: ID!
    name: String
    breed: String
    about: String
    image: String
    age: Int
    fixed: Boolean
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
  }


  input DogInput {
    name: String!
    breed: String!
    about: String!
    image: String!
    age: Int!
    fixed: Boolean!
  }

   

  type Mutation {
    addUser(username: String!, email: String!, password: String!, zip: String!): Auth
    
    login(email: String!, password: String!): Auth
    
    addDog(dog: DogInput!): User
       
    }
`;

module.exports = typeDefs;
