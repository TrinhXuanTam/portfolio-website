import { gql } from '@apollo/client';

export const projectsOverview = gql`
  query projectsOverview {
    projects {
      data {
        id
        attributes {
          name
          briefDescription
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          roles {
            name
          }
        }
      }
    }
  }
`;
