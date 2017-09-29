import axios from 'axios';

export default {
  login: async (credentials) => {
    let response
    try {
      response = await axios({url: '/api/login', method: 'POST', data: credentials})
    } catch(e) {
      throw new Error(e)
    }
    return response
  },
};
