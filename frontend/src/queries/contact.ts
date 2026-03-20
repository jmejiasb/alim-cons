import { gql } from "graphql-request";

export const CREATE_CONTACT = gql`
  mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      id
      name
      email
      phone
      message
    }
  }
`;