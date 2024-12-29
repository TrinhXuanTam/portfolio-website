import { gql } from '@apollo/client';

export const getEducation = gql`
  query education {
    about {
      data {
        attributes {
          education(sort: "to:desc") {
            title
            institution
            location
            from
            to
            icon {
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
  }
`;
