<template>
  <div class="body">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="https://i.ibb.co/QmnhXhK/ladybug-01.png" alt="Logo" class="logo" style="width: 50px; height: 50px" />
      </div>
      <div class="navbar-links">
        <div class="main-links">
          <router-link to="/" style="color: #c8a2c8;">Crypto</router-link>
          <router-link to="/learn" style="color: #c8a2c8;">Learn</router-link>
          <router-link to="/profile" style="color: #c8a2c8;">Profile</router-link>
          <router-link to="/contact" style="color: #c8a2c8;">Contact</router-link>
          <router-link to="/invest" style="color: #c8a2c8;">Invest</router-link>
          <router-link to="/admin" style="color: #c8a2c8;">Admin</router-link>
        </div>
      </div>
      <div class="navbar-buttons">
        <router-link to="/signIn"><button class="signIn">Sign In</button></router-link>
        <router-link to="/signUp"><button class="signUp">Sign Up</button></router-link>
      </div>
    </nav>

    <div class="first-box">
      <img src="https://i.ibb.co/R6C2p5K/tybackground-04.png" class="w-100 100vh" />

      <div class="overlay">
        <h1 style="display: flex; justify-content: center;">Sign In</h1>
        <div class="signIn-div">
        <h1 style="color: #c8a2c8;">WE MISSED YOU, <br> WELCOME BACK</h1>

        <label for="signIn" style="color: white;">Username:</label>
        <input type="text" v-model="username" placeholder="Username" />

        <label for="signIn" style="color: white;">Password:</label>
        <input type="password" v-model="password" placeholder="Password" />

        <button @click="loginUser">Sign In</button>
      </div>
      <div class="signUp-container" style="display: flex; justify-content: center;">
        <RouterLink to="signUp" style="text-decoration: none; color: white;">Don't Have An Account? Create One</RouterLink>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import sweet from 'sweetalert';
import router from '@/router';
import {mapGetters} from "vuex";

export default {
  name: "login",
  data() {
    // return {
    //   username: "",
    //   passwords: "",
    // };
    return{
     Data:{
      username:"",
      passwords:"",
     },
    };
  },
  computed:{
    ...mapGetters(["getCurrentUser"]),
  },
  methods:{
    async loginUser(){
      const user = {...this.Data};
      try{
        await this.$store.dispatch("login",user);
        this.clearForm();
        // this.$router.push({name:})
      } catch(error){
        console.log('Login error:', error);
        Swal.fire({
          icon:"error",
          title:"Login Failed",
          text:error.message || "Failed to login. Please try again",
        });
      }
    },
    clearForm(){
      this.Data ={
        username:"",
        passwords:"",
      };
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
