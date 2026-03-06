import { gql } from "graphql-request"

export const GET_EBOOKS = gql`
  query GetEbooks {
    ebooks {
      id
      title
      desc
      imgUrl
      regularPrice
      salesPrice
    }
  }
`

export const GET_EBOOK = gql`
  query GetEbook($id: String!) {
    ebook(id: $id) {
      id
      title
      desc
      imgUrl
      regularPrice
      salesPrice
    }
  }
`