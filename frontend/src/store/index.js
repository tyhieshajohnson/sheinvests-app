import { createStore } from 'vuex';
import axios from 'axios';

const baseUrl = 'https://sheinvests-app-api.onrender.com/';

export default createStore({
  state: {
    users: [], // Store users data here
  },
  getters: {},
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
  },
  actions: {
    async addUser({ commit }, userData) {
      try {
        const response = await axios.post(baseUrl + '/user/add', userData);
        return response.data.insertId;
      } catch (error) {
        console.error('Error adding user:', error);
        throw error; // Re-throw the error for handling in the component
      }
    },
    async signUp({ dispatch }, formData) {
      try {
        const insertId = await dispatch('addUser', formData);

        // Optionally, handle the insertId or dispatch other actions
        // For example, you might want to dispatch fetchUsers() to update the user list after a new user is added.
        dispatch('fetchUsers');

        // Optionally, use the insertId for further processing
        console.log('User successfully added with ID:', insertId);

        // Reload the page after a successful signup
        window.location.reload();
      } catch (error) {
        console.error('Error signing up:', error);
      }
    },
    async fetchUsers({ commit }) {
      // Add logic to fetch users if needed
    },
  },
});

