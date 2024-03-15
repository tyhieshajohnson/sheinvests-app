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
.signUp {
  border: none;
  background-color: #9a7fae;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
