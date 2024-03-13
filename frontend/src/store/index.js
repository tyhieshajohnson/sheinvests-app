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
    cryptoData: [],
    message: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    setUser(state, data) {
      state.users = data;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setCryptoData(state, data) {
      state.cryptoData = data;
    },
  },
  actions: {
    async addUser(context, payload) {
      try {
        const res = await axios.post('/user', payload); // Replace '/user' with your actual backend API endpoint
        const { msg, error } = res.data;
    
        if (msg) {
          context.commit("setMessage", msg);
        } else {
          context.commit("setMessage", error);
        }
      } catch (error) {
        console.error('Error in adding user:', error.message);
        context.commit("setMessage", 'Internal Server Error');
      }
    },    

    // CRYPTO CHART CALL
    async fetchCryptoData({ commit }) {
      try {
        const response = await axios.get(`${COIN_GECKO_API}global`, {
          params: {
          },
        });

        // Check if the response is successful
        if (response.status === 200) {
          commit('setCryptoData', response.data); // Assuming the response.data contains crypto data
          console.log('Crypto data fetched successfully:', response.data);
        } else {
          console.error('Unexpected error:', response.data.error);
          throw new Error('Unexpected error occurred.'); // Throw an error to be caught by the component
        }
      } catch (error) {
        console.error('Error in fetchCryptoData:', error);
        throw error; // Re-throw the error to be caught by the component
      }
    },
  },
});
