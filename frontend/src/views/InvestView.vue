<template>
  <div>
    <nav class="navbar">
      <div class="navbar-logo">
        <img
          src="https://i.ibb.co/QmnhXhK/ladybug-01.png"
          alt="Logo"
          class="logo"
          style="width: 50px; height: 50px"
        />
      </div>
      <div class="navbar-links">
        <div class="main-links">
          <router-link style="color: #c8a2c8" to="/">Crypto</router-link>
          <router-link style="color: #c8a2c8" to="/learn">Learn</router-link>
          <router-link style="color: #c8a2c8" to="/profile"
            >Profile</router-link
          >
          <router-link style="color: #c8a2c8" to="/contact"
            >Contact</router-link
          >
          <router-link style="color: #c8a2c8" to="/invest">Invest</router-link>
          <router-link style="color: #c8a2c8" to="/admin">Admin</router-link>
        </div>
      </div>
      <div class="navbar-buttons">
        <router-link to="/signIn"
          ><button class="signIn">Sign In</button></router-link
        >
        <router-link to="/signUp"
          ><button class="signUp">Sign Up</button></router-link
        >
      </div>
    </nav>

    <div class="first-box">
      <img
        src="https://i.ibb.co/jGp7BLs/tybackground-03.png"
        class="w-100 100vh"
        alt=""
      />

      <div class="overlay">
        <h1>Investments</h1>
        <div v-if="investments.length === 0">
          <p>No investments found for this user.</p>
        </div>
        <div v-else>
          <table>
            <thead>
              <tr>
                <th>Investment</th>
                <th>Crypto Name</th>
                <th>Amount</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="investment in $store.state.selectedInvestment"
                :key="investment.id"
              >
                <td>{{ investment.id }}</td>
                <td>{{ investment.crypto_name }}</td>
                <td>{{ investment.amount }}</td>
                <td>{{ investment.created_at }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Make an investment -->
        <div>
          <h1>Purchase Your Coin:</h1>
          <div>
            <h2>Buy Bitcoin:</h2>
            <button>Buy</button>

            <h2>Buy Ripple</h2>
            <button>Buy</button>

            <h2>Buy Litecoin</h2>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters } from "vuex";
import {useCookies} from 'vue3-cookies'
const { cookies } = useCookies();
import axios from "axios";

export default {
  data() {
    return {
      investmentData: {
        crypto_name: "",
        amount: "",
        created_at: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getInvestments"]), 
    investments() {
      return this.getInvestments; 
    },
  },
  methods: {
    async fetchInvestmentById() {
      let { id } = useCookies().cookies.get('user');
      console.log(id);
      this.$store.dispatch("fetchInvestmentById", id);
      // console.log('this is after the dispatch action');
    },
  },
  mounted() {
    this.fetchInvestmentById();
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
}

.navbar-logo {
  margin-right: auto;
}

.navbar-links {
  display: flex;
}

.navbar-links router-link {
  margin-right: 20px;
}

.navbar-buttons button {
  margin-left: 20px;
}

.crypto {
  border: none;
  background-color: black;
  height: 500px;
  width: 500px;
  margin-left: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
}

.first-box {
  position: relative;
}

.overlay {
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 100%;
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
}

.main-links {
  font-family: "Bebas Neue", sans-serif;
}

.signIn {
  border-radius: 7px;
  border: solid black 4px;
  background-color: white;
}

.signUp {
  border-radius: 7px;
  border: solid #c8a2c8 4px;
  background-color: white;
}
</style>
