import { createStore } from 'vuex';
import axios from 'axios';
import sweet from 'sweetalert';
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router';
import authentication from '@/service/authentication.js';
const baseURL = 'https://sheinvests-app-api.onrender.com/';

export default createStore({
  state: {
    users: [],
    user: [],
    investments: [],
    investment: [],
    crypto: [],
  },
  getters: { 
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setInvestments(state, value) {
      state.investments = value;
    },
    setInvestment(state, value) {
      state.investment = value;
    },
    setCrypto(state, value) {
      state.crypto = value;
    },
  },
  actions: {
    async addUser(context, payload) {
      try {
        const  data  = (await axios.post(`${baseURL}users/add`, payload)).data;
        if (data) {
          context.dispatch('fetchUser', { id: data.user.id });
          sweet({
            title: 'Registration',
            text: data.msg,
            icon: 'success',
            timer: 4000,
          });
          router.push({ name: 'login' });
        }
      } catch (e) {
        sweet({
          title: 'Registration Error!',
          text: 'Registration Incomplete',
          icon: 'error',
          timer: 4000,
        });
      }
    },
    async fetchUsers(context) {
      // console.log("Fetching users...");
      try {
        const results = (await axios.get(`${baseURL}users`)).data;
        if (results) {
          context.commit('setUsers', results);
          // console.log("Fetching users...");
        }
      } catch (e) {
        sweet({
          title: 'Retrieving All Users Error!',
          text: 'Users Not Found',
          icon: 'error',
          timer: 4000,
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        const  result  = (await axios.get(`${baseURL}users/${payload.id}`)).data;
        if (result) {
          context.commit('setUser', result);
        } else {
          sweet({
            title: 'Retrieving Specific User Error!',
            text: 'User Not Found',
            icon: 'info',
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: 'Retrieving Specific User Error!',
          text: 'User Does Not Exist',
          icon: 'error',
          timer: 4000,
        });
      }
    },
    async updateUser(context, payload) {
      try {
        const msg = await axios.patch(`${baseURL}users/update/${payload.id}`, payload);
        if (msg) {
          context.dispatch('fetchUsers');
          sweet({
            title: 'User Update Successful',
            text: msg,
            icon: 'success',
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: 'User Update Error!',
          text: 'User Update Unsuccessful',
          icon: 'error',
          timer: 4000,
        });
      }
    },
      async delUser(context, payload) {
        try {
          const response = await axios.delete(`${baseURL}user/delete/${payload.id}`);
          console.log('User deleted successfully', response);
          context.dispatch('fetchUsers');
        } catch (error) {
          console.error('Error deleting user', error);
          sweet({
            title: 'Error Deleting User',
            text: 'Unable to delete the user',
            icon: 'error',
            timer: 4000,
          });
        }
      },
      async signIn(context, payload) {
        try {
          const response = await fetch(`${baseURL}users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
        
          const data = await response.json();
      
          // Check if response contains a token
          if (data.token) {
            const { msg, token, result } = data;
      
            // Set user in state
            context.commit('setUser', { msg, result });
      
            // Set cookies
            cookies.set('LegitUser', { msg, token, result });
      
            // Apply token to axios headers
            AuthenticateUser.authentication(token);
      
            // Show success message
            sweet({
              title: msg,
              text: `Great Seeing You Again, ${result?.username}`,
              icon: 'success',
              timer: 2000,
            });
      
            // Redirect to home page
            router.push({ name: 'home' });
          } else {
            // Show error message if token is not present in response
            sweet({
              title: 'Login Error',
              text: data.message || 'Unknown error occurred',
              icon: 'info',
              timer: 4000,
            });
          }
        } catch (error) {
          // Show error message if request fails
          sweet({
            title: 'Login Error',
            text: 'Try Again, She Invests Wants You!',
            icon: 'error',
            timer: 4000,
          });
        }
      },          
    async fetchInvestments(context) {
      try {
        let { results } = (await axios.get(`${baseURL}investments`)).data;
        if (results) {
          context.commit('setInvestments', results);
        }
      } catch (e) {
        sweet({
          title: 'Product Retrieval Error!',
          text: 'Product Retrieval Unsuccessful',
          icon: 'error',
          timer: 4000,
        });
      }
    },
    async fetchInvestment(context, payload) {
      try {
        let { result } = (await axios.get(`${baseURL}investment/${payload.user_id}`)).data;
        if (result) {
          context.commit('setInvestment', result);
        } else {
          sweet({
            title: 'Product Single View Error!',
            text: 'Product Single View Unsuccessful',
            icon: 'info',
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: 'Product Single View Error!',
          text: 'Product Single View Unsuccessful',
          icon: 'error',
          timer: 4000,
        });
      }
    },
    async postInvestment(context, newItem) {
      try {
        await axios.post(`${baseURL}/invest/add`, newItem);
        context.dispatch('fetchInvestments');
      } catch (error) {
        console.error(error);
        sweet({
          title: 'Error Posting Investment',
          text: 'Unable to post the investment',
          icon: 'error',
          timer: 4000,
        });
      }
    },
    async deleteInvestment(context, prodID) {
      try {
        await axios.delete(`${baseURL}/invest/delete/${user_id}`);
        context.dispatch('fetchInvestments');
      } catch (error) {
        console.error('Error deleting investment', error);
        sweet({
          title: 'Error Deleting Investment',
          text: 'Unable to delete the investment',
          icon: 'error',
          timer: 4000,
        });
      }
    },

    // fetch crypto
    async fetchCrypto(context) {
      // console.log("Fetching users...");
      try {
        const results = (await axios.get(`${baseURL}crypto`)).data;
        if (results) {
          context.commit('setCrypto', results);
          console.log("Fetching crypto...");
        }
      } catch (e) {
        sweet({
          title: 'Retrieving All Crypto Error!',
          text: 'Users Not Found',
          icon: 'error',
          timer: 4000,
        });
      }
    },
  },
  modules: {},
});