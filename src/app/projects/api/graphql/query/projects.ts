import { gql } from '@apollo/client';

export const projectsOverview = gql`
  query projectsOverview {
    projects {
      data {
        id
        attributes {
          name
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          roles {
            value
          }
        }
      }
    }
  }
`;
