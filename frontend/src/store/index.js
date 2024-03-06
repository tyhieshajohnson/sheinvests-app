import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: [], // Store users data here
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('/users');
        commit('setUsers', response.data.result);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async signUp({ dispatch }, formData) {
      try {
        const response = await axios.post('/users', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Optionally, handle the response or dispatch other actions
        // For example, you might want to dispatch fetchUsers() to update the user list after a new user is added.
        dispatch('fetchUsers');
      } catch (error) {
        console.error('Error signing up:', error);
      }
    },
  },
});
