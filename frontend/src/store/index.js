import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
// import { useCookies } from 'vue3-cookies'
// const {cookies} = useCookies()
import router from '@/router'
import authentication from '@/service/authentication.js'
const baseURL = 'https://sheinvests-app-api.onrender.com/'
export default createStore({
  state: {
    users: null,
    user: null,
    investments: null,
    investment: null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.users = value
    },
    setInvestments(state, value) {
      state.investments = value
    },
    setInvestment(state, value) {
      state.investments = value
    },
  },
  actions: {
    async signUp(context, payload) {
      try {
        let { data } = (await axios.post(`${baseURL}users/add`, payload)).data;
        if (data) {
          context.dispatch('fetchUsers');
          sweet({
            title: 'Registration',
            text: data.msg,
            icon: "success",
            timer: 4000
          });
          router.push({ username: 'login' });
        }
      } catch (e) {
        sweet({
          title: 'Registration Error!',
          text: 'Registration Incomplete',
          icon: "error",
          timer: 4000
        });
      }
    },
    async fetchUsers(context) {
      try{
        let { results } = (await axios.get(`${baseURL}users`)).data
        if(results) {
          context.commit('setUsers', results)
        }
      }catch(e) {
        sweet({
          title: 'Retrieving All Users Error!',
          text: 'Users Not Found',
          icon: "error",
          timer: 4000
        })
      }
    },
    async fetchUser(context, payload) {
      try{
        let {result} = (await axios.get(`${baseURL}users/${payload.id}`)).data
        if(result) {
          context.commit('setUser', result)
        }else {
          sweet({
            title: 'Retrieving Specific User Error!',
            text: 'User Not Found',
            icon: "info",
            timer: 4000
          })
        }
      }catch(e) {
        sweet({
          title: 'Retrieving Specific User Error!',
          text: 'User Does Not Exist',
          icon: "error",
          timer: 4000
        })
      }
    },
    async updateUser(context, payload) {
      try{
        let {msg} = await axios.patch(`${baseURL}users/update/${payload.id}`)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'User Update Successful',
            text: msg,
            icon: "success",
            timer: 4000
          })
        }
      }catch(e) {
        sweet({
          title: 'User Update Error!',
          text: 'User Update Unsuccessful',
          icon: "error",
          timer: 4000
        })
      }
    },
    async delUser({ commit }, payload) {
      try {
        console.log('This is running');
        const response = await axios.delete(`${baseURL}invest/delete/:user_id${payload.id}`);
        
        // Optionally, you can commit a mutation or handle the response in any way you need
        // For example, committing a mutation:
        // commit('DELETE_PRODUCT', payload.prodID);
  
        console.log('Investment deleted successfully', response);
      } catch (error) {
        console.error('Error deleting investment', error);
        // Optionally, you can commit an error mutation or handle the error in any way you need
        // For example, committing an error mutation:
        // commit('SET_ERROR', error.message);
      }
    },
    async signIn(context, payload) {
      try{
       const {msg, token, result} = (await axios.post(`${baseURL}users/login`, payload)).data
       if(result){
        context.commit('setUser', {msg, result})
        cookies.set('LegitUser', {
          msg, token, result
        })
        AuthenticateUser.applyToken(token)
        sweet({
          title: msg,
          text: `Great Seeing You Again,
          ${result?.username}`,
          icon: "success",
          timer: 2000
        })
          router.push({name: 'home'})
        }else {
          sweet({
            title: 'Login Error',
            text: msg,
            icon: "info",
            timer: 4000
          })
        }
      }catch(e) {
        sweet({
          title: 'Login Error',
          text: 'Try Again, She Invests Wants You!',
          icon: "error",
          timer: 4000
        })
      }
    },
    async fetchInvestments(context) {
      try{
        let {results} =
        (await axios.get(`${baseURL}investments`)).data
        if(results) {
          context.commit('setInvestments', results)
        }
      }catch(e) {
        sweet({
          title: 'Product Retrieval Error!',
          text: 'Product Retrieval Unsuccessful',
          icon: "error",
          timer: 4000
        })
      }
    },
    async fetchInvestment(context, payload) {
      try{
        let {result} = (await axios.get(`${baseURL}investment/${payload.id}`)).data
        if(result) {
          context.commit('setInvestment', result)
        }else {
          sweet({
            title: 'Product Single View Error!',
            text: 'Product Single View Unsuccessful',
            icon: "info",
            timer: 4000
          })
        }
      }catch(e) {
        sweet({
          title: 'Product Single View Error!',
          text: 'Product Single View Unsuccessful',
          icon: "error",
          timer: 4000
        })
      }
    },
},
async postInvestment({ commit }, newItem) {
  try {
    await axios.post(baseUrl + '/invest/add', newItem);
    commit('fetchInvestments');
  } catch (error) {
    console.error(error);
    window.location.reload()
  }
},
 async deleteInvestment({commit}, prodID){
  await axios.delete(baseUrl+`/invest/delete${id}`)
  window.location.reload()
 },

modules: {
    
}});







































// import { createStore } from 'vuex';
// import axios from 'axios'
// import sweet from 'sweetalert'
// // import { useCookies } from 'vue3-cookies'
// // const {cookies} = useCookies()
// // import router from '@/router'

// const baseUrl = 'https://sheinvests-app-api.onrender.com/';
// const COIN_GECKO_API = 'https://api.coingecko.com/api/v3/';

// export default createStore({
//   state: {
//     users: [],
//     user: [],
//     cryptoData: [],
//     message: [],
//   },
//   getters: {
//   },
//   mutations: {
//     setUser(state, value) {
//       state.users = value;
//     },
//     setUsers(state, data) {
//       state.users = value;
//     },
//     setMessage(state, message) {
//       state.message = message;
//     },
//     setCryptoData(state, value) {
//       state.cryptoData = value;
//     },
//   },
//   actions: {
//     async addUser(context, payload) {
//       try {
//         const res = await axios.post('/user', payload); // Replace '/user' with your actual backend API endpoint
//         const { msg, error } = res.data;
    
//         if (msg) {
//           context.commit("setMessage", msg);
//         } else {
//           context.commit("setMessage", error);
//         }
//       } catch (error) {
//         console.error('Error in adding user:', error.message);
//         context.commit("setMessage", 'Internal Server Error');
//       }
//     },
//     async fetchUsers(contect, payload){
//       try{
//             let { results } = (await axios.get(`${baseURL}users`)).data
//             if(results) {
//               context.commit('setUsers', results)
//             }
//           }
//     },

//     // CRYPTO CHART CALL
//     async fetchCryptoData({ commit }) {
//       try {
//         const response = await axios.get(`${COIN_GECKO_API}global`, {
//           params: {
//           },
//         });

//         // Check if the response is successful
//         if (response.status === 200) {
//           commit('setCryptoData', response.data); // Assuming the response.data contains crypto data
//           console.log('Crypto data fetched successfully:', response.data);
//         } else {
//           console.error('Unexpected error:', response.data.error);
//           throw new Error('Unexpected error occurred.'); // Throw an error to be caught by the component
//         }
//       } catch (error) {
//         console.error('Error in fetchCryptoData:', error);
//         throw error; // Re-throw the error to be caught by the component
//       }
//     },
//   },
// });
