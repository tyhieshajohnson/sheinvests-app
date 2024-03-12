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
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
        userData: {
            username: "",
            email: "",
            passwords: "",
        }
    };
  },
  methods: {
    async addUser(){
        try{
            console.log(`This is the addUser in the signUp component. The following is the username to be used by the axios: ${this.userData.username.username}`);
            this.$store.dispatch('addUser', this.userData);
        } catch(e){consolle.log(`This is the signUp component. The following error was found: ${e}`)}
    }
    // async addUser() {
    //   try {
    //     const response = await axios.post("user/add", this.userData
    //     );
    //     if (response.status === 200) {
    //       console.log(response.data.msg);
    //     } else {
    //       console.error(response.data.error);
    //     }
    //   } catch (error) {
    //     console.error("Error in addUser:", error);
    //   }
    // },
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
