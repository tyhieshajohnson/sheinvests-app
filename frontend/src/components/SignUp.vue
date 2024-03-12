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
      type="text"
      v-model="userData.passwords"
      placeholder="Create New Password"
    />
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
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
        console.log("Attempting to sign up:", this.userData);

        await this.$store.dispatch("addUser", this.userData);

        console.log("User NOT added successfully!");
      } catch (error) {
        console.error(`Error in signUp component: ${error.message}`);
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
