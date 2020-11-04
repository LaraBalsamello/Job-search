import { gql } from '@apollo/client';

export const COMPANIES_QUERY = gql`
  {
    companies {
      name
      logoUrl
      websiteUrl
      jobs {
        id
        cities {
          name
          country {
            name
          }
        }
        commitment {
          title
        }
        title
        company {
          logoUrl
          websiteUrl
          name
          id
        }
      }
    }
  }
`;
