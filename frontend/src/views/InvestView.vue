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
          <router-link to="/">Crypto</router-link>
          <router-link to="/learn">Learn</router-link>
          <router-link to="/profile">Profile</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/invest">Invest</router-link>
          <router-link to="/admin">Admin</router-link>
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
                <th>ID</th>
                <th>Crypto Name</th>
                <th>Amount</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="investment in investments" :key="investment.id">
                <td>{{ investments.id }}</td>
                <td>{{ investments.crypto_name }}</td>
                <td>{{ investments.amount }}</td>
                <td>{{ investments.created_at }}</td>
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
import axios from "axios";

export default {
  data() {
    return {
      investments: [], // Initialize an empty array to store investments
    };
  },
  methods: {
    async fetchInvestment(user_id) {
      try {
        const response = await axios.get(`${baseURL}investment/${user_id}`);
        if (response.data && response.data.length > 0) {
          this.investments = response.data;
        } else {
          this.showAlert("info", "Product Single View Unsuccessful");
        }
      } catch (error) {
        this.showAlert("error", "Product Single View Unsuccessful");
      }
    },
    showAlert(icon, text) {
      // Implement your alert function here
    },
  },
  mounted() {
    const user_id = 1; // Replace with the user id you want to fetch investments for
    this.fetchInvestment(user_id);
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
</style>
