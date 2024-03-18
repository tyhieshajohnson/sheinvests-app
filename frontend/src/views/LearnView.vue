<template>
  <div>
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
        <button class="signIn">Sign In</button>
        <button class="signUp">Sign Up</button>
      </div>
    </nav>

    <div class="first-box">
      <img src="https://i.ibb.co/3y5gr9h/ty.png" class="img-background w-100 100vh" />
      <div class="learn">
        <h1 style="display: flex; justify-content: center;">Learn</h1>
        <p>Here is the platform to learn more about Crypto</p>
      </div>
      <div class="content-container">
        <a href="https://hackingmotherhood.substack.com/p/why-more-women-need-to-get-into-crypto" style="text-decoration: none;">
          <div class="div1" style="padding: 30px;">
            <h2 style="color: white;">Why Women Need To Invest?</h2>
            <p>
              Women should consider entering the crypto space for its potential to offer financial empowerment and independence, breaking traditional barriers in the male-dominated financial sector.
            </p>
          </div>
        </a>

        <a href="https://www.forbes.com/advisor/in/investing/cryptocurrency/advantages-of-cryptocurrency/" style="text-decoration: none;">
          <div class="div2" style="padding: 30px;">
            <h2 style="color: white;">Why Crypto?</h2>
            <p>
              Crypto presents a unique opportunity for anyone, including women, to participate in a decentralized financial system, offering innovation, global accessibility, and potential for significant returns on investment.
            </p>
          </div>
        </a>

        <a href="https://cryptoweekly.co/crypto-female-50-awards" style="text-decoration: none;">
          <div class="div3" style="padding: 30px;">
            <h2 style="color: white;">Women In Crypto</h2>
            <p>
              Encouraging more women to engage in crypto fosters diversity and inclusion within the industry, enriching perspectives, driving innovation, and contributing to a more balanced and equitable future of finance.
            </p>
          </div>
        </a>
      </div>
    </div>
    <RouterView/>
  </div>
</template>

<script>
import { Store } from "vuex";
import { RouterView } from "vue-router";

export default {
  name: "LearnView",
  components: {
    RouterView,
},
};
</script>

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

.first-box {
  position: relative;
  z-index: 0;
}

.content-container {
  display: flex;
  justify-content: space-evenly;
  padding: 0 40px;
  padding: 30px;
  position: absolute;
  top: 200px; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.learn {
  position: absolute;
  top: 100px; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.div1, .div2, .div3 {
  border: 5px solid #c8a2c8;
  border-radius: 20px;
  background-color: black;
  width: 300px;
  height: 400px;
  transition: transform 0.3s ease-in-out;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.div1:hover, .div2:hover, .div3:hover {
  transform: translateY(-20px);
}

h1, h2 {
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
  color: #c8a2c8;
  display: flex;
  justify-content: center;
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
