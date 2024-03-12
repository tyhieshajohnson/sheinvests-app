<template>
  <div class="signUp">
    <h1>Sign Up</h1>
    <input type="text" v-model="userData.username" placeholder="Create A Username" />
    <input type="text" v-model="userData.email" placeholder="Add Your Email Address" />
    <input type="text" v-model="userData.passwords" placeholder="Create New Password" />
    <!-- Create an @Click -->
    <button @click="addUser">Sign Up</button>
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
  async addUser() {
    try {
      console.log(`This is the addUser in the signUp component. The following is the username to be used by fetch: ${this.userData.username}`);
      
      const response = await fetch('https://sheinvests-app-api.onrender.com/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.userData),
      });

      if (!response.ok) {
        // Check for network errors or other issues
        if (response.status === 0) {
          throw new Error('Network error: Unable to connect to the server.');
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Unexpected error occurred.');
        }
      }

      const responseData = await response.json();
      console.log(responseData.msg);
      // Optionally, you can redirect to another page or perform other actions after successful user addition.
    } catch (e) {
      console.error(`Error in the signUp component: ${e.message}`);
    }
  },
},
}
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
