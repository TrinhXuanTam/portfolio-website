import { gql } from '@apollo/client';

export const getCvFile = gql`
  query cvFile {
    about {
      data {
        attributes {
          CV {
            data {
              attributes {
                url
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`;
