import axios from 'axios'

const API_URL = 'http://localhost:3000/graphql'

export const createMember = async (newMember) => {
  const response = await axios.post(API_URL, {
    query: `
      mutation($input: CreateMemberInput!) {
        createMember(input: $input) {
          _id
          name
          party {
            _id
          }
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

export const getAllMembersWithParty = async () => {
  const response = await axios.post(API_URL, {
    query: `
      query {
        getAllMembersWithParty {
          _id
          name
          party{
            name,
            color
          }
          position
          startDate
          endDate
          bio
        }
      }
    `,
  })
  if (response.data && response.data.data && response.data.data.getAllMembersWithParty) {
    return response.data.data.getAllMembersWithParty;
  } else {
    throw new Error('Failed to fetch members with party');
  }
}

export const getMemberById = async (id) => {
  const response = await axios.post(API_URL, {
    query: `
      query {
        getMemberById(id: "${id}") {
          _id
          name
          party {
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
          position
          photoUrl
          startDate
          endDate
          bio
        }
      }
    `,
  });
  return response.data.data.getMemberById;
};

export const updateMemberById = async (id, updatedMember) => {
  // Prepare the data to be sent
  const { _id, ...rest } = updatedMember;

  // If party exists in the updatedMember, we send the ID
  if (rest.party && typeof rest.party === 'object') {
    rest.party = rest.party._id;
  }

  const response = await axios.post(API_URL, {
    query: `
      mutation($id: ID!, $input: UpdateMemberInput!) {
        updateMember(id: $id, input: $input) {
          _id
          name
          position
          party {
            _id
            name
            color
          }
          photoUrl
          startDate
          endDate
          bio
        }
      }
    `,
    variables: {
      id,
      input: rest
    }
  });
  console.log(response.data.data.updateMember);
  return response.data.data.updateMember;
};