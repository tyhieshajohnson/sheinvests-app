<template>
    <div class="signUp">
      <h1>Sign Up</h1>
      <input
        type="text"
        v-model="userData.username"
        placeholder="Create A Username"
      />
      <input
        type="text"
        v-model="userData.email"
        placeholder="Add Your Email Address"
      />
      <input
        type="password"
        v-model="userData.passwords"
        placeholder="Create New Password"
      />
      <button @click="signUp">Sign Up</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Import Axios library
  
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
        try {
          // Make sure the password field is named correctly
          this.userData.password = this.userData.passwords;
  
          // Make the API request to add the user
          const response = await axios.post(
            "https://sheinvests-app-api.onrender.com/user/add",
            this.userData
          );
  
          // Check the response for success
          if (response.status === 201) {
            console.log("User added successfully!");
            // Optionally, you can handle the token or other data from the response here
          } else {
            console.log("User NOT added successfully!");
            // Optionally, handle the error or show a message to the user
          }
        } catch (error) {
          console.error(`Error in signUp component: ${error.message}`);
          // Optionally, handle the error or show a message to the user
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .signUp {
    border: none;
    background-color: #9a7fae;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>  