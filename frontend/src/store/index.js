import { createStore } from 'vuex';

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
      // Assuming you have an API endpoint for fetching users
      const response = await fetch('/users');
      const data = await response.json();
      commit('setUsers', data.result);
    },
    // Add an action to handle form submission
    async signUp({ dispatch }, formData) {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Optionally, handle the response or dispatch other actions
      // For example, you might want to dispatch fetchUsers() to update the user list after a new user is added.
      dispatch('fetchUsers');
    },
  },
});
