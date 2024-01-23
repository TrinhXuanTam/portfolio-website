import { gql } from '@apollo/client';

export const projectsOverview = gql`
  query projectsOverview {
    projects(sort: "id:desc") {
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
