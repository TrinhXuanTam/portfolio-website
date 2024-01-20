import { gql } from '@apollo/client';

export const getContact = gql`
  query contact {
    contact {
      data {
        attributes {
          email
          phone
        }
      }
    }
  }
`;

export const getProfiles = gql`
  query profiles {
    contact {
      data {
        attributes {
          linkedinUrl
          githubUrl
        }
      }
    }
  }
`;
