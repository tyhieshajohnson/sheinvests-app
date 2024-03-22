<template>
  <div>
    <Loader v-if="loading" />
    <div class="body" v-show="!loading">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg">
        <div class="navbar-logo container-fluid">
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
            <router-link style="color: #c8a2c8" to="/invest"
              >Invest</router-link
            >
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
              WHERE WOMEN THRIVE, CRYPTO UNFOLDS, AND FINANCIAL FUTURES
              FLOURISH.
            </h3>
          </div>

          <div class="intro-container">
            <p>
              WELCOME TO SHEINVESTS – WHERE FINANCIAL EMPOWERMENT MEETS THE
              CRYPTO
              <br />
              WORLD. WE'RE MORE THAN A PREDICTION PLATFORM; SHEINVESTS IS A
              COMMUNITY-DRIVEN SPACE FOCUSED ON EDUCATING AND EMPOWERING WOMEN
              IN
              <br />
              THE DIGITAL ASSET REALM. WITH OUR BELIEF IN KNOWLEDGE AS THE KEY
              TO
              <br />
              FINANCIAL INDEPENDENCE, WE'RE DEDICATED TO BRIDGING THE GENDER GAP
              <br />
              IN CRYPTO. SHEINVESTS PROVIDES MARKET INSIGHTS, TREND ANALYSES,
              AND
              <br />
              REAL-TIME PREDICTIONS, SUPPORTING WOMEN OF ALL LEVELS IN THE
              DYNAMIC
              <br />
              CRYPTO WORLD. JOIN US ON THIS JOURNEY TO BREAK BARRIERS, BUILD A
              <br />
              COMMUNITY, AND CONFIDENTLY NAVIGATE THE BLOCKCHAIN AND DIGITAL
              ASSET
              <br />
              SPACE.
            </p>
          </div>
        </div>
      </div>

      <!-- CRYPTO CHART -->
      <div class="crypto" style="margin-top: 100px">
        <h1 style="display: flex; justify-content: center">CRYPTOCURRENCY</h1>
        <h1 style="display: flex; justify-content: center">
          Our Prediction Market
        </h1>
        <!-- View Crypto -->
        <div>
          <router-link
            class="invest-route"
            to="/invest"
            style="
              display: flex;
              justify-content: center;
              text-decoration: underline;
            "
            >Click To Invest In Crypto</router-link
          >
        </div>
      </div>
      <div class="line-chart">
        <Chart />
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script>
import Chart from "../components/Chart.vue";
import axios from "axios";
import Loader from "../components/Loader.vue";

export default {
  name: "HomeView",
  components: {
    Chart,
    Loader,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 4000);
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

h1,
.invest-route {
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

.fa-brands,
.fa-solid {
  width: 500px;
}

.loader + .body {
  opacity: 1;
  transition: opacity 0.5s ease-in;
}

@media only screen and (max-width: 375px) and (max-height: 812px) {
  /* Nav */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
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
    flex-direction: column;
  }

  .navbar-links router-link {
    margin-right: 20px;
  }

  .navbar-buttons button {
    margin-left: 20px;
  }

  h3,
  p,
  h1,
  .invest-route,
  .main-links {
    font-family: "Bebas Neue", sans-serif;
    color: black;
    font-weight: normal;
    font-style: normal;
    font-size: xx-small;
  }

  .signIn,
  .signUp {
    border-radius: 7px;
    border: solid black 4px;
    background-color: white;
    margin-top: 10px;
  }
  /* End of Nav */

  .first-box {
    display: block; /* Change to block to stack elements */
  }

  .img-background-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .img-container {
    flex: none;
    overflow: hidden; /* Add overflow: hidden */
  }

  .img-container img {
    position: absolute;
    top: 0;
    width: 50%;
    height: auto;
  }

  .content-container {
    justify-self: column;
    flex: none;
    padding: 30px;
    text-align: center;
  }

  .body {
    background-color: #ffffff;
    display: block;
  }

  .img-home {
    width: 100%;
    margin-top: 30px;
  }

  .content-container {
    position: relative;
    top: auto;
    transform: none;
    margin-top: 20px;
  }

  .content-container h1 {
    font-size: 18px;
  }
}
</style>
