<template>
  <div class="body">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="https://i.ibb.co/QmnhXhK/ladybug-01.png" alt="Logo" class="logo" style="width: 50px; height: 50px" />
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
        <router-link to="/signIn"><button class="signIn">Sign In</button></router-link>
        <router-link to="/signUp"><button class="signUp">Sign Up</button></router-link>
      </div>
    </nav>

    <div class="first-box">
      <img
        src="https://i.ibb.co/3y5gr9h/ty.png"
        class="img-background w-100 100vh"
      />
      <div class="img-container">
        <img src="https://i.ibb.co/VwXrR6q/lady.png" class="img-home" />
      </div>

      <div class="content-container">
        <div class="head-container">
          <h1>SHE INVESTS</h1>
          <h3>
            WHERE WOMEN THRIVE, CRYPTO UNFOLDS, AND FINANCIAL FUTURES FLOURISH.
          </h3>
        </div>

        <div class="intro-container">
          <p>
            WELCOME TO SHEINVESTS – WHERE FINANCIAL EMPOWERMENT MEETS THE CRYPTO
            <br />
            WORLD. WE'RE MORE THAN A PREDICTION PLATFORM; SHEINVESTS IS A
            COMMUNITY-DRIVEN SPACE FOCUSED ON EDUCATING AND EMPOWERING WOMEN IN
            <br />
            THE DIGITAL ASSET REALM. WITH OUR BELIEF IN KNOWLEDGE AS THE KEY TO
            <br />
            FINANCIAL INDEPENDENCE, WE'RE DEDICATED TO BRIDGING THE GENDER GAP
            <br />
            IN CRYPTO. SHEINVESTS PROVIDES MARKET INSIGHTS, TREND ANALYSES, AND
            <br />
            REAL-TIME PREDICTIONS, SUPPORTING WOMEN OF ALL LEVELS IN THE DYNAMIC
            <br />
            CRYPTO WORLD. JOIN US ON THIS JOURNEY TO BREAK BARRIERS, BUILD A
            <br />
            COMMUNITY, AND CONFIDENTLY NAVIGATE THE BLOCKCHAIN AND DIGITAL ASSET
            <br />
            SPACE.
          </p>
        </div>
      </div>
    </div>

    <!-- CRYPTO CHART -->
    <div class="crypto" style="margin-top: 100px;">
      <h1>CRYPTOCURRENCY</h1>
      <div class="line-chart">
        <div class="icons">
          <!-- Ethereum -->
          <i class="fa-brands fa-ethereum"></i>
          <!-- Litecoin -->
          <i class="fa-solid fa-litecoin-sign"></i>
          <!-- Bitcoin -->
          <i class="fa-brands fa-bitcoin"></i>
        </div>
        <Chart />
      </div>
    </div>
    <!-- Investment Section -->
    <!-- <div class="investments">
      <h1>Investment</h1>
      <label for="amount">Amount:</label>
      <input type="number" id="amount" v-model="investmentAmount" />
      <label for="crypto">Select Crypto:</label>
      <select id="crypto" v-model="selectedCrypto">
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ethereum">Ethereum</option>
        <option value="Ripple">Ripple</option>
      </select>
      <label for="creation-time">Creation Time:</label>
      <input type="datetime-local" id="creation-time" v-model="creationTime" />
    </div> -->
    <RouterView />
  </div>
</template>

<script>
import Chart from "../components/Chart.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Chart,
  },
  mounted() {
    // this.fetchCryptoData();
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch("signUp", this.formData);
    },
  },
};
</script>

<!-- CSS -->
<style scoped>
/* Navbar styles */
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

.img-background-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}

.img-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  margin-top: 90px;
  margin-left: 100px;
}

.img-container img {
  width: 800px;
}

.content-container {
  position: absolute;
  top: 10%;
  left: 1100px;
  transform: translate(-50%, -50%);
  text-align: center;
  height: 20px;
  margin-top: 260px;
}

.content-container h1 {
  font-size: 50px;
}

h3 {
  font-weight: 300px;
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: black;
  font-size: 10px;
}

p {
  font-size: 13px;
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: black;
}

h1 {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  color: black;
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

.fa-brands, .fa-solid {
  width: 500px;
}

/* Media Query */
@media only screen and (max-width: 375px) and (max-height: 812px) {
  .first-box {
    display: inline;
  }

  .img-container {
    flex: none;
  }

  .content-container {
    flex: none;
    padding: 30px;
  }

  .body {
    background-color: #ffffff;
    display: block; /* Adjust display property as needed */
  }

  .img-container {
    overflow: hidden;
  }

  .img-home {
    width: 200px;
    margin-top: 30px;
  }

  h1,
  p {
    font-family: "Bebas Neue", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
  }

  .content-container {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
  }

  .intro-container {
    margin-top: 40px;
  }

  .head-container {
    margin-top: 20px;
  }
}
</style>
