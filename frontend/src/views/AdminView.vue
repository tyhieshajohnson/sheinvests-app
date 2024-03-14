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
          <th scope="col">passwords</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="user in getUsers" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.passwords }}</td>
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
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
