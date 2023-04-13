import { gql } from "@apollo/client";

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
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $zip: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      zip: $zip
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($username: String!, $email: String!, $zip: String!) {
    updateProfile(
      username: $username
      email: $email 
      zip: $zip
      ) {
        _id
        username
        email
        zip
        
      }
    }
 
`;

export const ADD_DOG = gql`
  mutation addDog(
    $name: String!
    $breed: String!
    $about: String!
    $image: String
    $age: String!
    $fixed: String!
  ) {
    addDog(
      name: $name
      breed: $breed
      about: $about
      image: $image
      age: $age
      fixed: $fixed
    ) {
      username
      myDogs {
        name
        breed
        about
        image
        age
        fixed
      }
    }
  }
`;

export const DELETE_DOG = gql`
  mutation deleteDog($index: Int!) {
    deleteDog(index: $index) 
    {
      username 
        myDogs {
          name
        }
      }
    }
`;
