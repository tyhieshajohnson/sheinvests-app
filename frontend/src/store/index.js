import { createStore } from 'vuex';
import axios from 'axios'
// import sweet from 'sweetalert'
// import { useCookies } from 'vue3-cookies'
// const {cookies} = useCookies()
// import router from '@/router'

const baseUrl = 'https://sheinvests-app-api.onrender.com/';
const COIN_GECKO_API = 'https://api.coingecko.com/api/v3/';

export default createStore({
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    setUser(state, data) {
      state.users = data;
    },
  },
  actions: {
    async addUser({ commit }, userData) {
      try {
        console.log('Attempting to add user:', userData);

        const response = await axios.post(baseUrl + 'user/add', userData);

        console.log('Response from server:', response);

        // Ensure that the response.data contains the expected user information
        if (response.status === 201) {
          // Assuming 'response.data' contains user information
          commit('setUser', [response.data]); // Assuming the response.data is an array
          console.log(response.data.msg); // Adjust accordingly based on your backend response
          return response.data; // Return the user data for further processing in the component
        } else if (response.status === 400) {
          console.error(response.data.message); // User already exists or missing fields
          throw new Error(response.data.message); // Throw an error to be caught by the component
        } else {
          console.error('Unexpected error:', response.data.error);
          throw new Error('Unexpected error occurred.'); // Throw an error to be caught by the component
        }
      } catch (error) {
        console.error('Error in addUser:', error);
        throw error; // Re-throw the error to be caught by the component
      }
    },
  },
});
