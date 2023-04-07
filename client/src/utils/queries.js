import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      zip
      savedDogs {
        name
        breed 
        image
        
        
      }
    }

  }
`;

export const ALL_DOGS = gql`
  query allDogs {
    profiles {
      _id
      name
      breed
      image
      description
    }
  }`;

  }`;

export const GET_BREED = gql`
  query searchDog {
    dog {
      breed
    }
  }`

