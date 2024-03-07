<template>
  <nav class="navbar navbar-expand-lg bg-body-">
    <div class="container-fluid">
      <router-link to="/">
        <img
          class="navbar-brand"
          src="https://i.ibb.co/9ZCJ0pD/Gradient-Minimalistic-Futuristic-Logo-1-removebg-preview.png"
          style="width: 50px; height: 50px"
        />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/">Home</router-link>
          <router-link to="/learn">Learn</router-link>
          <router-link to="/profile">Profile</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/invest">Invest</router-link>
          <router-link to="/admin">Admin</router-link>
          <router-link to="/signin"
            ><button class="signIn">Sign In</button></router-link
          >
          <router-link to="/signup"
            ><button class="signUp">Sign Up</button></router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

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
  color: #f54a4a;
}

.signIn {
  border-radius: 7px;
  border: solid black 4px;
  background-color: white;
}

.signUp {
  border-radius: 7px;
  border: solid #f54a4a 4px;
  background-color: white;
}
</style>
