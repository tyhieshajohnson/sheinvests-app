<template>
  <div class="body">
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
      <img src="https://i.ibb.co/3y5gr9h/ty.png" class="w-100 100vh" />

      <div class="overlay">
        <!-- <div class="admin" style="color: white">
          <h1>WELCOME ADMIN</h1> -->
        <!-- Call username of the person logged in -->
        <!-- <h3>Username: {{ username }}</h3>
          <h3>Email: {{ email }}</h3>
        </div> -->

        <div class="users">
          <h1>Users</h1>
          <!-- User Table -->
          <table class="table" v-if="typeof fetchUsers == 'object'">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in fetchUsers" :key="user.id">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.passwords }}</td>
                <td>
                  <button @click="showEditModal(user)">Edit User</button>
                </td>

                <td>
                  <button @click="delUser(user.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Modal for editing user -->
          <div class="modal" :class="{ 'is-active': isEditModalActive }">
            <div class="modal-background" @click="closeEditModal"></div>
            <div class="modal-content">
              <div class="box">
                <h2>Edit User</h2>
                <label for="edit-username">Username:</label>
                <input
                  id="edit-username"
                  v-model="editedUser.username"
                  placeholder="Enter Username"
                />
                <label for="edit-email">Email:</label>
                <input
                  id="edit-email"
                  v-model="editedUser.email"
                  placeholder="Enter Email"
                />
                <label for="edit-password">Password:</label>
                <input
                  id="edit-password"
                  v-model="editedUser.password"
                  placeholder="Enter Password"
                />
                <button @click="editUser">Save Changes</button>
                <button @click="closeEditModal">Cancel</button>
              </div>
            </div>
            <button
              class="modal-close is-large"
              aria-label="close"
              @click="closeEditModal"
            ></button>
          </div>
          <!-- End of Edit Modal -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      editedUser: {
        id: null,
        username: "",
        email: "",
        password: "",
      },
      isEditModalActive: false,
      investmentAmount: 0,
      selectedCrypto: "Bitcoin",
      creationTime: "",
    };
  },
  computed: {
    fetchUsers() {
      return this.$store.state.users;
    },
    // fetchUserById() {
    //   return this.$store.state.users;
    // },
  },
  methods: {
    methods: {
      // Show edit modal with user data
      showEditModal(user) {
        this.editedUser = { ...user };
        this.isEditModalActive = true;
      },
      // Edit user
      async editUser() {
        if (!this.editedUser.id) {
          alert("Please select a user to edit");
          return;
        }
        try {
          const payload = { ...this.editedUser };
          await this.$store.dispatch("editUser", payload); // Dispatch editUser action
          this.closeEditModal();
        } catch (error) {
          console.error("Error editing user:", error);
          alert("Error editing user. Please try again.");
        }
      },
      // Delete user
      delUser(id) {
        const confirmDelete = window.confirm(
          "Are you sure you want to delete this user?"
        );
        if (confirmDelete) {
          try {
            this.$store
              .dispatch("deleteUser", id) // Dispatch deleteUser action
              .then(() => {
                alert("User has been deleted.");
              })
              .catch((error) => {
                console.error("Error deleting user:", error);
                alert("Error deleting user. Please try again.");
              });
          } catch (error) {
            console.error("Error deleting user:", error);
            alert("Error deleting user. Please try again.");
          }
        }
      },
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    // this.$store.dispatch("fetchUserById");
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

p {
  font-size: 13px;
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: black;
}

h1 {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  color: black;
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

.modal {
  display: none;
}

.modal.is-active {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.body {
  position: relative;
}

.first-box {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

.admin,
.users,
.investments {
  /* position: relative; */
  z-index: 1; /* Ensure these divs are above the background */
  padding: 20px;
  border-radius: 10px;
}
</style>
