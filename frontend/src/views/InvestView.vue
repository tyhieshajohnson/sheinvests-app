<template>
  <div>
    <h1>Investments</h1>
    <div v-if="investments.length === 0">
      <p>No investments found for this user.</p>
    </div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Crypto Name</th>
            <th>Amount</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="investment in investments" :key="investment.id">
            <td>{{ investment.id }}</td>
            <td>{{ investment.crypto_name }}</td>
            <td>{{ investment.amount }}</td>
            <td>{{ investment.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      investments: [], // Initialize an empty array to store investments
    };
  },
  methods: {
    async fetchInvestment(user_id) {
      try {
        const response = await axios.get(`${baseURL}investment/${user_id}`);
        if (response.data && response.data.length > 0) {
          this.investments = response.data;
        } else {
          this.showAlert('info', 'Product Single View Unsuccessful');
        }
      } catch (error) {
        this.showAlert('error', 'Product Single View Unsuccessful');
      }
    },
    showAlert(icon, text) {
      // Implement your alert function here
    },
  },
  mounted() {
    const user_id = 1; // Replace with the user id you want to fetch investments for
    this.fetchInvestment(user_id);
  },
};
</script>

<style scoped>
.crypto {
  border: none;
  background-color: black;
  height: 500px;
  width: 500px;
  margin-left: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
}

.first-box {
  position: relative;
}

.overlay {
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 100%;
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
}
</style>
