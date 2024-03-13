<template>
  <div class="body">
    <div class="first-box">
      <div class="img-container">
        <img
          src="https://i.ibb.co/rZGK9Sw/1-removebg-preview.png"
          class="img-home"
        />
      </div>

      <div class="content-container">
        <div class="head-container">
          <h1 style="margin-top: 10px">SHE INVESTS</h1>
          <h3 style="font-size: small">
            WHERE WOMEN THRIVE, CRYPTO UNFOLDS, AND FINANCIAL FUTURES FLOURISH.
          </h3>
        </div>

        <div class="intro-container">
          <p>
            WELCOME TO SHEINVESTS – WHERE FINANCIAL EMPOWERMENT MEETS THE CRYPTO
            WORLD. WE'RE MORE THAN A PREDICTION PLATFORM; SHEINVESTS IS A
            COMMUNITY-DRIVEN SPACE FOCUSED ON EDUCATING AND EMPOWERING WOMEN IN
            THE DIGITAL ASSET REALM. WITH OUR BELIEF IN KNOWLEDGE AS THE KEY TO
            FINANCIAL INDEPENDENCE, WE'RE DEDICATED TO BRIDGING THE GENDER GAP
            IN CRYPTO. SHEINVESTS PROVIDES MARKET INSIGHTS, TREND ANALYSES, AND
            REAL-TIME PREDICTIONS, SUPPORTING WOMEN OF ALL LEVELS IN THE DYNAMIC
            CRYPTO WORLD. JOIN US ON THIS JOURNEY TO BREAK BARRIERS, BUFILD A
            COMMUNITY, AND CONFIDENTLY NAVIGATE THE BLOCKCHAIN AND DIGITAL ASSET
            SPACE.
          </p>
        </div>
      </div>
    </div>

    <!-- CRYPTO CHART -->
    <div class="chart">
      <h1>CHART</h1>
      <div>
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
  </div>
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
.chart {
  margin-top: 20px;
}

.first-box {
  display: flex;
  margin-top: 100px;
}

.img-container {
  flex: 1;
}

.content-container {
  flex: 1;
  padding: 0 40px;
  padding: 30px;
}

.body {
  background-color: #ffffff;
}

.img-container {
  overflow: hidden;
}

.img-home {
  width: 500px;
  margin-top: 30px;
}

h1 {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

p {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.content-container {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
}

.head-container {
  margin-top: 150px;
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

  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
  }

  p {
    font-family: "Bebas Neue", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
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
