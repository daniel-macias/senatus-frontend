import axios from 'axios';

const API_URL = 'http://localhost:3000/graphql';

export const getPartyById = async (id) => {
  const response = await axios.post(API_URL, {
    query: `
      query {
        getPartyById(id: "${id}") {
          _id
          name
          ideology
          color
          leader
          founded
          headquarters
          website
          photoUrl
        }
      }
    `,
  });
  return response.data.data.getPartyById;
};

export const updatePartyById = async (id, updatedParty) => {
  console.log(`Updating Party with ID: ${id}`);
  
  // Create a new object excluding the _id field
  const { _id, ...dataToUpdate } = updatedParty;

  console.log('Data being sent:', dataToUpdate);

  const response = await axios.post(API_URL, {
    query: `
      mutation($id: ID!, $input: UpdatePartyInput!) {
        updateParty(id: $id, input: $input) {
          _id
          name
          ideology
          color
          leader
          founded
          headquarters
          website
          photoUrl
        }
      }
    `,
    variables: {
      id,
      input: dataToUpdate
    }
  });

  if (response.data.errors) {
    console.error('Error in updatePartyById:', response.data.errors);
    throw new Error(response.data.errors[0].message);
  }

  return response.data.data.updateParty;
};

export const createParty = async (newParty) => {
  const response = await axios.post(API_URL, {
    query: `
      mutation($input: CreatePartyInput!) {
        createParty(input: $input) {
          _id
          name
          ideology
          color
          leader
          founded
          headquarters
          website
          photoUrl
        }
      }
    `,
    variables: {
      input: newParty
    }
  });
  console.log(response.data);
  return response.data.data.createParty;
};

export const getAllParties = async () => {
  const response = await axios.post(API_URL, {
    query: `
      query {
        getAllParties {
          _id
          name
          ideology
          color
          leader
          founded
          headquarters
          website
          photoUrl
        }
      }
    `,
  });
  return response.data.data.getAllParties;
};

export const deletePartyById = async (id) => {
  await axios.post(API_URL, {
    query: `
      mutation {
        deleteParty(id: "${id}") {
          _id
        }
      }
    `,
  });
};
