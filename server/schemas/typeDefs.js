const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    savedDogs: [Dog]!
  }
  type Dog {
    _id: ID!
    name: String
    breed: String
    disposition: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    User: [User]!
    user(userId: ID!): User
    me: User
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!, zip: String!): Auth
    
    login(email: String!, password: String!): Auth
    
    removeBook(bookId: String!): User
   
    saveDog(dogId: ID!): User
    }
`;

module.exports = typeDefs;
