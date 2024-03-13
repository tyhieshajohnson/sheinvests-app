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
      <tbody v-for="user in users" :key="users.id">
        <tr>
          <th scope="row">{{ user.id }}</th>
          <td>{{ users.username }}</td>
          <td>{{ users.email }}</td>
          <td>{{ users.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    getUsers() {
      return this.$store.state.users;
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchUsers");
  },
};
</script>
