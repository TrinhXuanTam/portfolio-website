import { gql } from '@apollo/client';

export const getCvFile = gql`
  query cvFile {
    about {
      data {
        attributes {
          cv {
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
