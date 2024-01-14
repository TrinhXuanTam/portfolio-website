import { gql } from '@apollo/client';

export const getWorkExperience = gql`
  query workExperiences {
    about {
      data {
        attributes {
          workExperience(sort: "to:desc") {
            title
            company
            location
            from
            to
          }
        }
      }
    }
  }
`;
