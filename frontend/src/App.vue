<template>
  <!-- Navigation Bar -->
  <Navigation />
  <router-view />
  <Footer />
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import { RouterView } from "vue-router";

export default {
  name: "HomeView",
  components: {
    Navigation,
    Footer,
    RouterView
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #F54A4A;
}
</style>
