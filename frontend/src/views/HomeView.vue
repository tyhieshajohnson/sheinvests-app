<template>
  <div class="body">
    <div class="first-box">
      <!--<img src="https://i.ibb.co/3y5gr9h/ty.png" class="img-background w-100 vh100"/> -->
      <div class="img-container">
        <img
          src="https://i.ibb.co/VwXrR6q/lady.png"
          class="img-home"
        />
      </div>

      <div class="content-container">
        <div class="head-container">
          <h1 style="margin-left: 250px;">SHE INVESTS</h1>
          <h3 style="font-size: small; margin-left: 250px;">
            WHERE WOMEN THRIVE, CRYPTO UNFOLDS, <br>AND FINANCIAL FUTURES FLOURISH.
          </h3>
        </div>

        <div class="intro-container">
          <p style="margin-left: 250px;">
            WELCOME TO SHEINVESTS – WHERE FINANCIAL EMPOWERMENT MEETS THE CRYPTO <br>
            WORLD. WE'RE MORE THAN A PREDICTION PLATFORM; SHEINVESTS IS A <br>
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
    </div>

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
.first-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .img-container {
    flex: 1;
   width: 400px;
   height: 400px;
   margin-top: 10px;
   margin-left: 100px;
  }

  .img-container img {
    width: 700px;
  }

  .content-container {
    flex: 0 0 55%; /* Adjust width as needed */
    width: 10px;
    height: 20px;
    margin-top: 200px;
  }

  .content-container h1, h3 {
    font-size: 50px;
  }

  h3 {
    font-weight: 300px;
    font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: black;
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
