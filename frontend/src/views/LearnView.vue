<template>
  <div class="body">
    <!-- Navbar -->
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
        src="https://i.ibb.co/SR2mB64/tybackground-06.png"
        class="img-background w-100 100vh"
      />
      <div class="learn">
        <h1 style="display: flex; justify-content: center">Learn</h1>
        <p>Here is the platform to learn more about Crypto</p>
      </div>
      <div class="content-container">
        <a
          href="https://hackingmotherhood.substack.com/p/why-more-women-need-to-get-into-crypto"
          style="text-decoration: none"
        >
          <div class="div1" style="padding: 30px">
            <h5 style="color: white">Why Women Need To Invest?</h5>
            <p>
              Women should consider entering the crypto space for its potential
              to offer financial empowerment and independence, breaking
              traditional barriers in the male-dominated financial sector.
            </p>
          </div>
        </a>

        <a
          href="https://www.forbes.com/advisor/in/investing/cryptocurrency/advantages-of-cryptocurrency/"
          style="text-decoration: none"
        >
          <div class="div2" style="padding: 30px">
            <h5 style="color: white">Why Crypto?</h5>
            <p>
              Crypto presents a unique opportunity for anyone, including women,
              to participate in a decentralized financial system, offering
              innovation, global accessibility, and potential for significant
              returns on investment.
            </p>
          </div>
        </a>

        <a
          href="https://cryptoweekly.co/crypto-female-50-awards"
          style="text-decoration: none"
        >
          <div class="div3" style="padding: 30px">
            <h5 style="color: white">Women In Crypto</h5>
            <p>
              Encouraging more women to engage in crypto fosters diversity and
              inclusion within the industry, enriching perspectives, driving
              innovation, and contributing to a more balanced and equitable
              future of finance.
            </p>
          </div>
        </a>
      </div>

      <!-- About -->
      <div class="about-container">
        <h1  style="display: flex; justify-content: center">About Us</h1>
        <div class="about">
          <p>
            Welcome to SheInvests – where financial empowerment meets the crypto
            world. We're more than just a prediction platform; SheInvests is a
            community-driven space focused on educating and empowering women in
            the digital asset realm. At SheInvests, we firmly believe in
            knowledge as the key to financial independence. That's why we're
            dedicated to bridging the gender gap in crypto, providing market
            insights, trend analyses, and real-time predictions tailored to the
            needs of women at all levels in the dynamic crypto world. Our
            mission is to empower women to confidently navigate the blockchain
            and digital asset space. We're committed to breaking barriers and
            building a supportive community where women can thrive and succeed.
            Join us on this journey of financial empowerment. Together, let's
            pave the way for a more inclusive and diverse crypto landscape.
            Welcome to SheInvests – where women lead the way in the world of
            finance.
          </p>
        </div>
      </div>
    </div>
    <RouterView />
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

.about-container {
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.about {
  background-color: black;
  border-radius: 7px;
  padding: 30px;
  border: 5px solid #c8a2c8;
  border-radius: 20px;
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

.div1,
.div2,
.div3 {
  border: 5px solid #c8a2c8;
  border-radius: 20px;
  background-color: black;
  width: 300px;
  height: 200px;
  transition: transform 0.3s ease-in-out;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.div1:hover,
.div2:hover,
.div3:hover {
  transform: translateY(-20px);
}

h1,
h2, h5 {
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

.body {
  position: relative;
  min-height: 100vh;
}

.main-content {
  padding-bottom: 100px; /* Adjust this value to give space for the footer */
}
</style>
