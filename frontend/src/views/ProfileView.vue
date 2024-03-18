<template>
  <!-- <div class="signIn">
    <SignIn/>
  </div> -->

  <div class="body">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="https://i.ibb.co/QmnhXhK/ladybug-01.png" alt="Logo" class="logo" style="width: 50px; height: 50px" />
      </div>
      <div class="navbar-links">
        <div class="main-links">
          <router-link to="/">Crypto</router-link>
          <router-link to="/learn">Learn</router-link>
          <router-link to="/profile">Profile</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/invest">Invest</router-link>
          <router-link to="/admin">Admin</router-link>
        </div>
      </div>
      <div class="navbar-buttons">
        <router-link to="/signIn"><button class="signIn">Sign In</button></router-link>
        <router-link to="/signUp"><button class="signUp">Sign Up</button></router-link>
      </div>
    </nav>

    <div class="first-box">
      <img src="https://i.ibb.co/3y5gr9h/ty.png" class="100vh w-100" />
      <div class="profile" style="margin-top: 100px">
        <h1>Account Information</h1>
        <div>Investments</div>
        <!-- Display Users Current Investments + The time is was created -->
        <div v-if="typeof getUsers == 'object'">
          <h1 v-for="user in getUsers" :key="user.id">Username </h1>
          <!-- Display Users Information - except for their password -->
          <h3>Username: {{user.id}}</h3>
          <h3>Email: {{user.email}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from "@/components/SignIn.vue";

export default {
  name: "Sign In",
  components: {
    SignIn,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await this.$store.dispatch("fetchUsers");
        this.users = response.data; // Assuming your API returns an array of users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
};
</script>

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

.profile {
  position: absolute;
  top: 200px; /* Position at the top of the parent container */
  left: 50%; /* Horizontally center the profile */
  transform: translate(-50%, -100%); /* Move it upwards by its own height */
  z-index: 1; /* Ensure it's above the first box */
  text-align: center; /* Center the content horizontally */
}

.first-box {
  position: relative; /* Needed for z-index to work */
  z-index: 0; /* Ensure it's below the profile */
}

.main-links {
  font-family: "Bebas Neue", sans-serif;
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
</style>
