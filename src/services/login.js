import axios from 'axios';

export default {
  login: (credentials) => {
    console.log('dude', credentials);
    axios({url: '/api/login', method: 'POST', data: credentials})
      .then(response => console.log('woo', response))
      .catch(error => console.log('agh', error))
  },
};
