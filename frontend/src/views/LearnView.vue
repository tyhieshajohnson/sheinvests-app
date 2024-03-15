<template>
  <div class="body">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="your-logo-image-url" alt="Logo" class="logo" />
      </div>
      <div class="navbar-links">
        <div class="main-links">
            <router-link to="/">CRYPTO</router-link> 
            <router-link to="/learn">Learn</router-link> 
            <router-link to="/profile">Profile</router-link> 
            <router-link to="/contact">Contact</router-link> 
            <router-link to="/invest">Invest</router-link> 
            <router-link to="/admin">Admin</router-link>
          </div>
      </div>
      <div class="navbar-buttons">
        <button class="signIn">Sign <Inp></Inp></button>
        <button class="signUp">Sign Up</button>
      </div>
    </nav>

    <div class="first-box">
      <img src="https://i.ibb.co/3y5gr9h/ty.png" class="img-background w-100 100vh"/>

      
    </div>
    
</template>

<style scoped>
/* Navbar styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.7); 
  z-index: 999; 
}

.navbar-logo {
  margin-right: auto; 
}

.navbar-links {
  display: flex;
}

.navbar-links router-link {
  margin-right: 20px;
}

.navbar-buttons button {
  margin-left: 20px;
}

.content-container {
  display: flex;
  justify-content: space-evenly;
  padding: 0 40px;
  padding: 30px;
  margin-top: 50px;
}

.div1, .div2, .div3 {
  /* #c8a2c8 */
  border: 1px solid black;
  border-radius: 20px;
  background-color: black;
  width: 400px;
  height: 300px;
  transition: transform 0.3s ease-in-out;
}

.div1:hover, .div2:hover, .div3:hover {
  transform: translateY(-20px);
}

h1, h2 {
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
  color: #c8a2c8;
}
</style>
