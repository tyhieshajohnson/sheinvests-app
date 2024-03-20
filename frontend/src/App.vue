<template>
  <!-- Navigation Bar -->
  <!-- <Navigation /> -->
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
body {
  margin: 0 !important;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #c8a2c8;
}
</style>
