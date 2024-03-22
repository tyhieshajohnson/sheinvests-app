<template>
  <div class="body">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <img
          src="https://i.ibb.co/BHhZfHn/ladybug-02-1.png"
          alt="Logo"
          class="logo"
          style="width: 50px; height: 50px"
        />
      </div>
      <div class="navbar-links">
        <div class="main-links">
          <router-link style="color: #c8a2c8" to="/">Crypto</router-link>
          <router-link style="color: #c8a2c8" to="/learn">Learn</router-link>
          <router-link style="color: #c8a2c8" to="/profile"
            >Profile</router-link
          >
          <router-link style="color: #c8a2c8" to="/contact"
            >Contact</router-link
          >
          <router-link style="color: #c8a2c8" to="/invest">Invest</router-link>
          <router-link style="color: #c8a2c8" to="/admin">Admin</router-link>
        </div>
      </div>
      <div class="navbar-buttons">
        <router-link to="/signIn"
          ><button class="signIn">Sign In</button></router-link
        >
        <router-link to="/signUp"
          ><button class="signUp">Sign Up</button></router-link
        >
      </div>
    </nav>

    <div class="first-box">
      <!-- Profile image -->
      <img src="https://i.ibb.co/3y5gr9h/ty.png" class="100vh w-100" />

      <!-- Display user information -->
      <div class="profile" style="margin-top: 100px">
        <h1>Account Information</h1>
        <div class="logout-container">
          <button class="logout" @click="logout">Logout</button>
        </div>
        <div v-if="typeof fetchUserById == 'object'">
          <div v-for="user in fetchUserById" :key="user.id">
            <p>Username: {{ user.username }}</p>
            <p>Email: {{ user.email }}</p>
          </div>
          <!-- Update Account Button -->
          <button @click="openUpdateModal">Update Account</button>
          <!-- Delete Account Button -->
          <button @click="deleteAccount">Delete Account</button>
        </div>
      </div>
    </div>

    <!-- Update Account Modal -->
    <div class="modal" :class="{ 'is-active': isUpdateModalActive }">
      <div class="modal-background" @click="closeUpdateModal"></div>
      <div class="modal-content">
        <div class="box">
          <h2>Update Account</h2>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input" type="text" v-model="updatedUsername" />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" v-model="updatedEmail" />
            </div>
          </div>
          <button class="button is-primary" @click="updateAccount">
            Update
          </button>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeUpdateModal"
      ></button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isUpdateModalActive: false,
      updatedUsername: "",
      updatedEmail: "",
    };
  },
  computed: {
    fetchUsers(){
      return this.$store.state.users;
    }
  },
  methods: {
    logout() {
      const now = new Date();
      document.cookie = `auth=; expires=${now.toUTCString()}; path=/;`;
      this.$router.push({ name: "signin" });
    },
    openUpdateModal() {
      console.log("Opening modal...");

      if (this.selectedUser) {
        this.updatedUsername = this.selectedUser.username;
        this.updatedEmail = this.selectedUser.email;
      }
      console.log("isUpdateModalActive:", this.isUpdateModalActive);
      this.isUpdateModalActive = true;
    },
    closeUpdateModal() {
      this.isUpdateModalActive = false;
    },
    updateAccount() {
      console.log("Updated Username:", this.updatedUsername);
      console.log("Updated Email:", this.updatedEmail);
      this.closeUpdateModal();
    },
    deleteAccount() {
      console.log("Account deleted.");
    },
    fetchUserById() {
      // Dispatch the action to fetch user by ID from Vuex store
      this.$store.dispatch("fetchUserById");
    },
  },
  mounted() {
    this.$store.dispatch("fetchUserById")
  },
};
</script>

<style scoped>
.logout {
  border: none;
  border-radius: 7px;
  background-color: black;
  color: white;
}
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