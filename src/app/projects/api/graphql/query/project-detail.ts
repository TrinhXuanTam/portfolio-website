import { gql } from '@apollo/client';

export const projectDetail = gql`
  query projectDetail($id: ID!) {
    project(id: $id) {
      data {
        attributes {
          name
          description
          briefDescription
          roles {
            name
          }
          responsibilities {
            name
          }
          technologies {
            name
          }
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
