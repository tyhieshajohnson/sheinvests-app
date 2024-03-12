<template>
    <div class="signIn">
    <SignIn/>
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
</style>