import axios from 'axios'

const API_URL = 'http://localhost:3000/graphql'

export const createMember = async (newMember) => {
  const response = await axios.post(API_URL, {
    query: `
      mutation($input: CreateMemberInput!) {
        createMember(input: $input) {
          _id
          name
          party
          position
          photoUrl
          startDate
          endDate
          bio
        }
      }
    `,
    variables: {
      input: newMember
    }
  })
  return response.data.data.createMember
}

export const getAllMembers = async () => {
  const response = await axios.post(API_URL, {
    query: `
      query {
        getAllMembers {
          _id
          name
          party
          position
          startDate
          endDate
          bio
        }
      }
    `,
  })
  return response.data.data.getAllMembers
}
