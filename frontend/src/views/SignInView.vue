<template>
  <div class="signIn">
    <h1>This is an Sign In page</h1>
    <h1>Sign In</h1>
    <input type="text" />
    <button>Sign In</button>
  </div>
  <div class="signUp-container">
    <SignUp />
  </div>
</template>

<script>
import SignUp from "@/components/SignUp.vue";

export default {
  name: "Sign Up",
  components: {
    SignUp,
  },
};
</script>

<style scoped>
.signIn div {
  margin-top: 50px;
}

.signIn {
  border: none;
  background-color: #f54a4a;
  height: 150px;
}

/* If taken away, it brings the border back - do not remove until ready to  */
.signUp-container {
  margin-top: 50px;
}
</style>
