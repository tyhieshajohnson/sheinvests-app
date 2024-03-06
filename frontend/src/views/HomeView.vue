<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="submitForm">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="formData.username" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="formData.password" required />

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { Store } from 'vuex';

export default {
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async submitForm() {
      // Dispatch the signUp action with form data
      await this.$store.dispatch('signUp', this.formData);
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>