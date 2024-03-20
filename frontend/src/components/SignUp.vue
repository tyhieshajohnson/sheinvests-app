<template>
  <div class="body">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="https://i.ibb.co/QmnhXhK/ladybug-01.png" alt="Logo" class="logo" style="width: 50px; height: 50px" />
      </div>
      <div class="navbar-links">
        <div class="main-links">
          <router-link to="/" style="color: #c8a2c8;">Crypt</router-link>
          <router-link to="/learn" style="color: #c8a2c8;">Learn</router-link>
          <router-link to="/profile" style="color: #c8a2c8;">Profile</router-link>
          <router-link to="/contact" style="color: #c8a2c8;">Contact</router-link>
          <router-link to="/invest" style="color: #c8a2c8;">Invest</router-link>
          <router-link to="/admin" style="color: #c8a2c8;">Admin</router-link>
        </div>
      </div>
      <div class="navbar-buttons">
        <router-link to="/signin"><button class="signIn">Sign In</button></router-link>
        <router-link to="/signup"><button class="signUp">Sign Up</button></router-link>
      </div>
    </nav>

    <div class="first-box">
      <img src="https://i.ibb.co/R6C2p5K/tybackground-04.png" class="w-100 100vh" />

      <div class="overlay">
        <h1 style="display: flex; justify-content: center;">Sign Up</h1>
        <div class="signIn-div">
        <h1 style="color: #c8a2c8;">JOIN THE FAMILY</h1>

        <label for="signUp" style="color: white;">Username:</label>
        <input type="username" v-model="userData.username" placeholder="Username" />

        <label for="signUp" style="color: white;">Email:</label>
        <input type="email" v-model="userData.email" placeholder="Email">

        <label for="signUp" style="color: white;">Password:</label>
        <input type="password" v-model="userData.password" placeholder="Password" />

        <button @click="signUp">Sign Up</button>
      </div>
      <div class="signUp-container" style="display: flex; justify-content: center;">
        <RouterLink to="signIn" style="text-decoration: none; color: white;">Already Have An Account? Sign In</RouterLink>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      userData: {
        username: "",
        email: "",
        passwords: "",
      },
    };
  },
  methods: {
    async signUp() {
      const payload = {
        username: this.userData.username,
        email: this.userData.email,
        passwords: this.userData.passwords,
      };

      try {
        await this.$store.dispatch("addUser", payload);
        console.log("User signed not successfully!");
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    },
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

.signIn-div div {
  /* margin-top: 50px; */
  position: absolute;
  /* top: 10%; */
  left: 1000px;
  transform: translate(-50%, -50%);
  text-align: center;
  /* height: 20px; */
  margin-top: 260px;
}

.signIn-div {
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

/* If taken away, it brings the border back - do not remove until ready to  */
.signUp-container {
  margin-top: 50px;
}

p {
  font-size: 13px;
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: black;
}

h1, label {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  color: black;
}

.main-links {
  font-family: "Bebas Neue", sans-serif;
}

input, button{
  border-radius: 10px;
}
</style>
