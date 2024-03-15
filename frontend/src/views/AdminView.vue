<template>
  <div class="admin">
    <h1>This is an Admin page</h1>
  </div>

  <div>
    <h1>Users</h1>
    <table class="table" v-if="typeof getUsers == 'object'">
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
        <tr v-for="user in getUsers" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.passwords }}</td>
          <td>
            <button @click="showEditModal(user)">Edit User</button>
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
          <input id="edit-username" v-model="editedUser.username" placeholder="Enter Username">
          <label for="edit-email">Email:</label>
          <input id="edit-email" v-model="editedUser.email" placeholder="Enter Email">
          <label for="edit-password">Password:</label>
          <input id="edit-password" v-model="editedUser.password" placeholder="Enter Password">
          <button @click="editUser">Save Changes</button>
          <button @click="closeEditModal">Cancel</button>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeEditModal"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedUser: {
        id: null,
        username: '',
        email: '',
        password: ''
      },
      isEditModalActive: false
    };
  },
  computed: {
    getUsers() {
      return this.$store.state.users;
    },
  },
  methods: {
    showEditModal(user) {
      // Set the user properties to be edited
      this.editedUser = { ...user };
      // Activate the modal
      this.isEditModalActive = true;
    },
    async editUser() {
      if (!this.editedUser.id) {
        alert('Please select a user to edit');
        return;
      }
      try {
        const payload = { ...this.editedUser };
        await this.$store.dispatch("updateUser", payload);
        // Reset editedUser object after editing
        this.editedUser = { id: null, username: '', email: '', password: '' };
        // Close the modal
        this.isEditModalActive = false;
      } catch (error) {
        console.error('Error updating user:', error);
        sweet({
          title: 'User Update Error!',
          text: 'User Update Unsuccessful',
          icon: 'error',
          timer: 4000,
        });
      }
    },
    closeEditModal() {
      // Reset editedUser object and close the modal
      this.editedUser = { id: null, username: '', email: '', password: '' };
      this.isEditModalActive = false;
    }
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  }
</script>

<style scoped>
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
</style>
