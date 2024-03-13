<template>
  <div class="admin">
    <h1>This is an Admin page</h1>
  </div>

  <div>
    <h1>Users</h1>
    <table class="table" v-if="users">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">username</th>
          <th scope="col">email</th>
          <th scope="col">password</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id">
        <tr>
          <th scope="row">{{ users.id }}</th>
          <!--  users.id -->
          <td>User1</td>
          <!-- users.username -->
          <td>UserEmail</td>
          <!-- users.email -->
          <td>UserPasswords</td>
          <!-- users.password -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    user() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers")
  },
};
</script>
