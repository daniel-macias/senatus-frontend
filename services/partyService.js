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
          socialMedia {
            platform
            url
          }
        }
      }
    `,
  });
  return response.data.data.getPartyById;
};

export const updatePartyById = async (id, updatedParty) => {
  await axios.post(API_URL, {
    query: `
      mutation {
        updateParty(id: "${id}", input: {
          name: "${updatedParty.name}",
          ideology: "${updatedParty.ideology}",
          color: "${updatedParty.color}",
          leader: "${updatedParty.leader}",
          founded: "${updatedParty.founded}",
          headquarters: "${updatedParty.headquarters}",
          website: "${updatedParty.website}",
          photoUrl: "${updatedParty.photoUrl}",
          socialMedia: ${JSON.stringify(updatedParty.socialMedia)}
        }) {
          _id
        }
      }
    `,
  });
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
          socialMedia {
            platform
            url
          }
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
          socialMedia {
            platform
            url
          }
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
