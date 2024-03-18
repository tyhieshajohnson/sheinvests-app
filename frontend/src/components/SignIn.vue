<template>
  <div class="signIn">
    <h1>Sign In</h1>
    <label for="signIn">Username:</label>
    <input type="text" />

    <label for="signIn">Password:</label>
    <input type="text" />
    <button>Sign In</button>
  </div>
</template>

<script>
export default {
  name: "Sign In",
};
</script>

<style scoped>
.signIn div {
  margin-top: 50px;
}

.signIn {
  border: none;
  background-color: #f54a4a;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
