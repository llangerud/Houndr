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



export const SAVE_DOG = gql`
mutation saveDog($dogId: ID!) {
  saveDog(dog: $dog) {
    _id
    name
    breed
    image
    savedDogs {
      _id
    }
  }
}`;

