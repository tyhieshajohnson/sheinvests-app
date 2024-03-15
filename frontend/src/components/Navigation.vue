<template>
  <nav class="navbar navbar-expand-lg bg-body- w-100">
    <div class="container-fluid">
      <router-link to="/">
        <img
          class="navbar-brand"
          src="https://i.ibb.co/BLF1LVH/Screenshot-2024-03-14-160244-removebg-preview.png"
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
      <div
        class="collapse navbar-collapse"
        id="navbarNavAltMarkup"
        style="justify-content: space-between;"
      >
        <div class="navbar-nav">
          <div class="main-links">
            <router-link to="/">CRYPTO</router-link> 
            <router-link to="/learn">Learn</router-link> 
            <router-link to="/profile">Profile</router-link> 
            <router-link to="/contact">Contact</router-link> 
            <router-link to="/invest">Invest</router-link> 
            <router-link to="/admin">Admin</router-link>
          </div>
          <div class="sub-links">
            <router-link to="/signin"
              ><button class="signIn">Sign In</button></router-link
            >
            <router-link to="/signup"
              ><button class="signUp">Sign Up</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.container-fluid {
  display: flex;
  justify-content: space-evenly;
}

nav {
  padding: 30px;
  /* border-bottom: black solid 2px; */
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: black;
  margin-top: 15px;
}

nav a.router-link-exact-active {
  color: #c8a2c8;
}

.navbar-nav {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-size: 20px;
  width: 900px;
  display: flex;
  place-content: center space-evenly;
}

.main-links {
  display: flex;
  justify-content: space-evenly;
  width: 500px;
  color: black;
}

.sub-links {
  place-self: center end;
}

.signIn {
  border-radius: 7px;
  border: solid black 4px;
  background-color: white;
}

.signUp {
  border-radius: 7px;
  border: solid #c8a2c8 4px;
  background-color: white;
}

body {
  /* background-image: url('https://i.ibb.co/3y5gr9h/ty.png');  */
  background-size: cover; 
  background-repeat: no-repeat;
  }

.navbar {
  background-color: transparent !important;
}
</style>
