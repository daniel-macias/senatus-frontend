import axios from 'axios'

const API_URL = 'http://localhost:3000/graphql'

export const getCongressById = async (id) => {
  const response = await axios.post(API_URL, {
    query: `
      query getCongressById($id: ID!) {
        getCongressById(id: $id) {
          _id
          name
          organization
          description
          members {
            _id
            name
            party {
              _id
              name
              color
            }
          }
        }
      }
    `,
    variables: {
      id: id,
    },
  });
  return response.data.data.getCongressById;
};

export const updateCongressById = async (id, updatedCongress) => {
  const response = await axios.post(API_URL, {
    query: `
      mutation($id: String!, $updateCongressInput: UpdateCongressInput!) {
        updateCongress(id: $id, updateCongressInput: $updateCongressInput) {
          _id
          name
          organization
          description
        }
      }
    `,
    variables: {
      id,
      updateCongressInput: updatedCongress // Send only the fields that need updating
    }
  });
  return response.data.data.updateCongress;
};

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
