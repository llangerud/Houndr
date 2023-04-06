import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $zip: String!) {
    addUser(username: $username, email: $email, password: $password, zip: $zip) {
      token
      user {
        _id
        username
      }
    }
  }
`;



export const ADD_DOG = gql`
mutation addDog($dog: DogInput!) {
  addDog(dog: $dog) {
    _id
    name
    breed
    about
    image
    age
    fixed
  }
}`;


