import { gql } from '@apollo/client';

export const REMOTES_QUERY = gql`
  {
    remotes {
      jobs(where: { company: { name: "Apollo" } }) {
        title
        id
        company {
          name
        }
      }
    }
  }
`;
