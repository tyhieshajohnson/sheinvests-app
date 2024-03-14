<template>
    <!-- <div class="signIn">
    <SignIn/>
  </div> -->

  <div class="profile" style="margin-top: 100px;">
    <h1>Account Information</h1>
  </div>
</template>

<script>
import SignIn from "@/components/SignIn.vue";

export default {
  name: "Sign In",
  components: {
    SignIn,
  },
};
</script>

<style scoped>
.signIn {
  border: none;
}

h1 {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

p {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
</style>