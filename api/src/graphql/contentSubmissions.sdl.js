export const schema = gql`
  type ContentSubmission {
    id: Int!
    userId: String!
    entryId: String!
    sentenceCount: Int!
    createdAt: DateTime!
  }

  type Query {
    contentSubmissions: [ContentSubmission!]! @requireAuth
    contentSubmission(id: Int!): ContentSubmission @requireAuth
  }

  input CreateContentSubmissionInput {
    userId: String!
    entryId: String!
    sentenceCount: Int!
  }

  input UpdateContentSubmissionInput {
    userId: String
    entryId: String
    sentenceCount: Int
  }

  type Mutation {
    createContentSubmission(
      input: CreateContentSubmissionInput!
    ): ContentSubmission! @requireAuth
    updateContentSubmission(
      id: Int!
      input: UpdateContentSubmissionInput!
    ): ContentSubmission! @requireAuth
    deleteContentSubmission(id: Int!): ContentSubmission! @requireAuth
  }
`