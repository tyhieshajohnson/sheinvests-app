import { createStore } from 'vuex';
// import axios from 'axios';
import sweet from 'sweetalert';
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router';
import authentication from '@/service/authentication.js';
const baseURL = 'https://sheinvests-app-api.onrender.com/';
import axios from 'axios';

export default createStore({
  state: {
    users: [],
    user: [],
    investments: [],
    investment: [],
    crypto: [],
    selectedUser: null,
    userData: null,
    markets: [],
    orders: [],
  },
  getters: {
    getSelectedUser: (state) => state.selectedUser,
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, user) {
      state.user = user;
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
    setSelectedUser(state, value){
      state.selectedUser = value;
    },
    setUserData(state, value) {
      state.userData = value;
    },
    setMarkets(state, value) {
      state.markets = value;
    },
    setOrders(state, value) {
      state.orders = value;
    },
  },
  actions: {
    async addUser(context, payload) {
      try {
        const response = await fetch(`${baseURL}users/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
    
        if (response.ok) {
          const data = await response.json();
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
        } else {
          sweet({
            title: 'Registration Error!',
            text: 'Registration Incomplete',
            icon: 'error',
            timer: 4000,
          });
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
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(`${baseURL}users`);
        commit('setUsers', response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    },
  
    async fetchUserById({ commit }, userId) {
      try {
        const response = await axios.get(`${baseURL}user/${userId}`);
        commit('setSelectedUser', response.data);
      } catch (error) {
        console.error('Error fetching user by ID:', error.message);
        throw error;
      }
    },
  },
  
    async editUser({ commit }, { userId, userData }) {
      try {
        await axios.put(`/user/edit/${userId}`, userData);
      } catch (error) {
        console.error('Error editing user:', error.message);
      }
    },
  
    async deleteUser({ commit }, userId) {
      try {
        await axios.delete(`${baseURL}/user/delete/${userId}`);
        commit('fetchUsers');
      } catch (error) {
        console.error('Error deleting user:', error.message);
      }
    },
      // Start of SignIn
      async login ({commit}, userData) {
        console.log(userData);
        try {
          const response = await fetch(`${baseURL}user/login`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        
          const data = await response.json();
      
          // Check if response contains a token
          if (response.ok) {
            commit ('setUser', data);
      
            // Set user in state
            // context.commit('setUser', { msg, result });
      
            // Set cookies
            document.cookie = `auth=${data.token}; path=/`;
            document.cookie = `user=${JSON.stringify(data.user)}; path=/`;
            // cookies.set('LegitUser', { msg, token, result });
      
            // Show success message
            sweet({
              title: data.message,
              text: `Great Seeing You Again, ${data.user.username}`,
              icon: 'success',
              timer: 2000,
            });
      
            // Redirect to home page
            router.push({ name: 'profile' });
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
            text: 'Try Again, Server Error!',
            icon: 'error',
            timer: 4000,
          });
        }
      },

      // Logout
        logout({ commit }) {
          // Clear the JWT from cookies
          document.cookie = `auth=; expires=${now.toUTCString()}; path=/;`;
    
          // Clear user data from Vuex state if needed
          commit('clearUserData'); // Define a mutation to clear user data if needed
    
          // Redirect to the login page
          router.push({ name: 'sigin' });
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
    // SignUp
    async register(context, payload) {
      try {
        const response = await fetch(`${baseURL}user/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
    
        if (response.ok) {
          const data = await response.json();
          if (data) {
            context.dispatch('fetchUser', { id: data.user.id });
            sweet({
              title: 'Registration',
              text: data.message,
              icon: 'success',
              timer: 4000,
            });
            router.push({ name: 'login' });
          }
        } else {
          const errorData = await response.json();
          sweet({
            title: 'Registration Error!',
            text: errorData.message || 'Registration Incomplete',
            icon: 'error',
            timer: 4000,
          });
        }
      } catch (error) {
        console.error('Registration Error:', error);
        sweet({
          title: 'Registration Error!',
          text: 'Registration Incomplete',
          icon: 'error',
          timer: 4000,
        });
      }
    },  
    
    // INVESTMENTS
    async addInvestment({ commit }, investmentData) {
      try {
        await axios.post('/invest/add', investmentData);
        commit('fetchInvestments');
      } catch (error) {
        console.error('Error adding investment:', error.message);
      }
    },
  
    async fetchInvestments({ commit }) {
      try {
        const response = await axios.get('/investments');
        commit('setInvestments', response.data);
      } catch (error) {
        console.error('Error fetching investments:', error.message);
      }
    },
  
    async fetchInvestmentById({ commit }, investmentId) {
      try {
        const response = await axios.get(`${baseURL}/investments/${investmentId}`);
        commit('setSelectedInvestment', response.data);
      } catch (error) {
        console.error('Error fetching investment by ID:', error.message);
      }
    },
  
    async editInvestment({ commit }, { investmentId, investmentData }) {
      try {
        await axios.put(`${baseURL}/investments/edit/${investmentId}`, investmentData);
      } catch (error) {
        console.error('Error editing investment:', error.message);
      }
    },
  
    async deleteInvestment({ commit }, investmentId) {
      try {
        await axios.delete(`${baseURL}/investments/delete/${investmentId}`);
        commit('fetchInvestments');
      } catch (error) {
        console.error('Error deleting investment:', error.message);
      }
    },

    // CRYPTO
    async addCrypto({ commit }, cryptoData) {
      try {
        await axios.post('${baseURL}/crypto/add', cryptoData);
        commit('fetchCryptos');
      } catch (error) {
        console.error('Error adding crypto:', error.message);
      }
    },
  
    async fetchCryptos({ commit }) {
      try {
        const response = await axios.get('/crypto');
        commit('setCryptos', response.data);
      } catch (error) {
        console.error('Error fetching cryptos:', error.message);
      }
    },
  
    async fetchCryptoById({ commit }, cryptoId) {
      try {
        const response = await axios.get(`${baseURL}/crypto/${cryptoId}`);
        commit('setSelectedCrypto', response.data);
      } catch (error) {
        console.error('Error fetching crypto by ID:', error.message);
      }
    },
  
    async editCrypto({ commit }, { cryptoId, cryptoData }) {
      try {
        await axios.put(`${baseURL}/crypto/edit/${cryptoId}`, cryptoData);
      } catch (error) {
        console.error('Error editing crypto:', error.message);
      }
    },
  
    async deleteCrypto({ commit }, cryptoId) {
      try {
        await axios.delete(`${baseURL}/crypto/delete/${cryptoId}`);
        commit('fetchCryptos');
      } catch (error) {
        console.error('Error deleting crypto:', error.message);
      }
    },
    
    // MARKETS
    async addMarket({ commit }, marketData) {
      try {
        await axios.post(`${baseURL}/markets/add`, marketData);
        commit('fetchMarkets');
      } catch (error) {
        console.error('Error adding market:', error.message);
      }
    },
  
    async fetchMarkets({ commit }) {
      try {
        const response = await axios.get(`${baseURL}/markets`);
        commit('setMarkets', response.data);
      } catch (error) {
        console.error('Error fetching markets:', error.message);
      }
    },
  
    async fetchMarketById({ commit }, marketId) {
      try {
        const response = await axios.get(`${baseURL}/markets/${marketId}`);
        commit('setSelectedMarket', response.data);
      } catch (error) {
        console.error('Error fetching market by ID:', error.message);
      }
    },
  
    async editMarket({ commit }, { marketId, marketData }) {
      try {
        await axios.put(`${baseURL}/markets/edit/${marketId}`, marketData);
      } catch (error) {
        console.error('Error editing market:', error.message);
      }
    },
  
    async deleteMarket({ commit }, marketId) {
      try {
        await axios.delete(`${baseURL}/markets/delete/${marketId}`);
        commit('fetchMarkets');
      } catch (error) {
        console.error('Error deleting market:', error.message);
      }
    },

    // ORDERS
    async addOrder({ commit }, orderData) {
      try {
        await axios.post(`${baseURL}/orders/add`, orderData);
        commit('fetchOrders');
      } catch (error) {
        console.error('Error adding order:', error.message);
      }
    },
  
    async fetchOrders({ commit }) {
      try {
        const response = await axios.get(`${baseURL}/orders`);
        commit('setOrders', response.data);
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      }
    },
  
    async fetchOrderById({ commit }, orderId) {
      try {
        const response = await axios.get(`${baseURL}/orders/${orderId}`);
        commit('setSelectedOrder', response.data);
      } catch (error) {
        console.error('Error fetching order by ID:', error.message);
      }
    },
  
    async editOrder({ commit }, { orderId, orderData }) {
      try {
        await axios.put(`${baseURL}/orders/edit/${orderId}`, orderData);
      } catch (error) {
        console.error('Error editing order:', error.message);
      }
    },
  
    async deleteOrder({ commit }, orderId) {
      try {
        await axios.delete(`${baseURL}/orders/delete/${orderId}`);
        commit('fetchOrders');
      } catch (error) {
        console.error('Error deleting order:', error.message);
      }
    },
  },
  // plugins: [(store) => store.dispatch("initializeCurrentUser")],
);
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}