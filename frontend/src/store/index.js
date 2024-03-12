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
        console.log("the addUser axios is running now. Below is the userData variable that is sent to backend");
        console.log(userData);
        const response = await axios.post(baseUrl + 'user/add', userData);

        // if (response.status === 200) {
        //   commit('setUser', response.data);  // Assuming 'response.data' is the user data
        //   console.log(response.data.msg);
        // } else {
        //   console.error(response.data.error);
        // }
      } catch (error) {
        console.error('Error in addUser:', error);
      }
    },
  },
});