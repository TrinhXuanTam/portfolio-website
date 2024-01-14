import { gql } from '@apollo/client';

export const getExtras = gql`
  query extras {
    about {
      data {
        attributes {
          extra {
            title
            text
          }
        }
      }
    }
  }
`;
