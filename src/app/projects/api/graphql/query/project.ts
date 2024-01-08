import { gql } from '@apollo/client';

export const projectsOverview = gql`
  query projectsOverview {
    projects {
      data {
        id
        attributes {
          Name
          Thumbnail {
            data {
              attributes {
                url
                name
                ext
              }
            }
          }
          Roles {
            Value
          }
        }
      }
    }
  }
`;
