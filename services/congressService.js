import axios from 'axios'

const API_URL = 'http://localhost:3000/graphql'

export const getCongressById = async (id) => {
  const response = await axios.post(API_URL, {
    query: `
      query {
        congress(id: "${id}") {
          _id
          name
          organization
          description
          members
          sessions
        }
      }
    `,
  })
  return response.data.data.congress
}

export const updateCongressById = async (id, updatedCongress) => {
  await axios.post(API_URL, {
    query: `
      mutation {
        updateCongress(id: "${id}", input: {
          name: "${updatedCongress.name}",
          organization: "${updatedCongress.organization}",
          description: "${updatedCongress.description}"
        }) {
          _id
        }
      }
    `,
  })
}

export const createCongress = async (newCongress) => {
    const response = await axios.post(API_URL, {
      query: `
        mutation($createCongressInput: CreateCongressInput!) {
          createCongress(createCongressInput: $createCongressInput) {
            _id
            name
            organization
            description
          }
        }
      `,
      variables: {
        createCongressInput: newCongress
      }
    })
    return response.data.data.createCongress
  }

export const getAllCongresses = async () => {
    const response = await axios.post(API_URL, {
      query: `
        query {
          getAllCongresses {
            _id
            name
            organization
            description
          }
        }
      `,
    });
    return response.data.data.getAllCongresses;
  };

export const deleteCongressById = async (id) => {
  await axios.post(API_URL, {
    query: `
      mutation {
        deleteCongress(id: "${id}") {
          _id
        }
      }
    `,
  })
}
