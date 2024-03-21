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
          <router-link to="/" style="color: #c8a2c8">Crypt</router-link>
          <router-link to="/learn" style="color: #c8a2c8">Learn</router-link>
          <router-link to="/profile" style="color: #c8a2c8">Profile</router-link>
          <router-link to="/contact" style="color: #c8a2c8">Contact</router-link>
          <router-link to="/invest" style="color: #c8a2c8">Invest</router-link>
          <router-link to="/admin" style="color: #c8a2c8">Admin</router-link>
        </div>
      </div>
      <div class="navbar-buttons">
        <router-link to="/signin" class="navbar-button">
          <button class="signIn">Sign In</button>
        </router-link>
        <router-link to="/signup" class="navbar-button">
          <button class="signUp">Sign Up</button>
        </router-link>
      </div>
    </nav>

    <div class="first-box">
      <img src="https://i.ibb.co/R6C2p5K/tybackground-04.png" class="w-100 100vh" />

      <div class="signup-container overlay">
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="userData.username" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="userData.email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="userData.passwords" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      userData: {
        username: '',
        email: '',
        passwords: ''
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    async handleSubmit() {
      try {
        await this.register(this.userData);
      } catch (error) {
        console.error('Error during registration:', error);
        // Handle error if needed
      }
    }
  }
}
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

p {
  font-size: 13px;
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: black;
}

h1,
label {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  color: black;
}

.main-links {
  font-family: "Bebas Neue", sans-serif;
}

input,
button {
  border-radius: 10px;
}
</style>
