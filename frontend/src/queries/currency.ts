import { gql } from 'graphql-request';

export const GET_USD_RATE = gql`
  query UsdRate {
    usdRate
  }
`;