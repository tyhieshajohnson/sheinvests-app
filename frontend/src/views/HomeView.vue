<template>
  <div class="body">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="your-logo-image-url" alt="Logo" class="logo" />
      </div>
      <div class="navbar-links">
        <div class="main-links">
            <router-link to="/">CRYPTO</router-link> 
            <router-link to="/learn">Learn</router-link> 
            <router-link to="/profile">Profile</router-link> 
            <router-link to="/contact">Contact</router-link> 
            <router-link to="/invest">Invest</router-link> 
            <router-link to="/admin">Admin</router-link>
          </div>
      </div>
      <div class="navbar-buttons">
        <button class="signIn">Sign <Inp></Inp></button>
        <button class="signUp">Sign Up</button>
      </div>
    </nav>

    <div class="first-box">
      <img src="https://i.ibb.co/3y5gr9h/ty.png" class="img-background w-100 100vh"/>
      <div class="img-container">
        <img
          src="https://i.ibb.co/VwXrR6q/lady.png"
          class="img-home"
        />
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
            WELCOME TO SHEINVESTS – WHERE FINANCIAL EMPOWERMENT MEETS THE CRYPTO <br>
            WORLD. WE'RE MORE THAN A PREDICTION PLATFORM; SHEINVESTS IS A 
            COMMUNITY-DRIVEN SPACE FOCUSED ON EDUCATING AND EMPOWERING WOMEN IN <br>
            THE DIGITAL ASSET REALM. WITH OUR BELIEF IN KNOWLEDGE AS THE KEY TO <br>
            FINANCIAL INDEPENDENCE, WE'RE DEDICATED TO BRIDGING THE GENDER GAP <br>
            IN CRYPTO. SHEINVESTS PROVIDES MARKET INSIGHTS, TREND ANALYSES, AND <br>
            REAL-TIME PREDICTIONS, SUPPORTING WOMEN OF ALL LEVELS IN THE DYNAMIC <br>
            CRYPTO WORLD. JOIN US ON THIS JOURNEY TO BREAK BARRIERS, BUFILD A <br>
            COMMUNITY, AND CONFIDENTLY NAVIGATE THE BLOCKCHAIN AND DIGITAL ASSET <br>
            SPACE.
          </p>
        </div>
      </div>
    </div>

    <div style="margin-top: 200px;">
      <h1>Chart</h1>
    </div>
    </div>

    <RouterView/>

    <!-- CRYPTO CHART -->
    <!-- <div class="chart" style="margin-top: 600px;">
      <h1>CHART</h1>
      <div class="chart-display" style="border: 1px solid grey; border-radius: 20px;">
        <div>
          <h1>CoinGecko Crypto Chart</h1>
          <ul>
            <li v-for="coin in cryptoData" :key="coin.id">
              {{ coin.name }} ({{ coin.symbol }}): {{ coin.current_price }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <RouterView />
  </div> -->
</template>

<script>
import { Store } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
      },
      cryptoData: [],
    };
  },
  mounted() {
    this.fetchCryptoData();
  },
  methods: {
    async submitForm() {
      // Dispatch the signUp action with form data
      await this.$store.dispatch("signUp", this.formData);
    },
    async fetchCryptoData() {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=zar&days=30&interval=daily&precision=full",
          {
            params: {
              data: "",
            },
          }
        );

        this.cryptoData = response.data;
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
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
    width: 700px;
  }

  .content-container {
    position: absolute;
    top: 10%;
    left: 1000px;
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
