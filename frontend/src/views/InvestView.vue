<template>
  <div class="body">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <img
          src="https://i.ibb.co/QmnhXhK/ladybug-01.png"
          alt="Logo"
          class="logo"
          style="width: 50px; height: 50px"
        />
      </div>
      <div class="navbar-links">
        <div class="main-links">
          <router-link to="/" style="color: #c8a2c8">Crypt</router-link>
          <router-link to="/learn" style="color: #c8a2c8">Learn</router-link>
          <router-link to="/profile" style="color: #c8a2c8"
            >Profile</router-link
          >
          <router-link to="/contact" style="color: #c8a2c8"
            >Contact</router-link
          >
          <router-link to="/invest" style="color: #c8a2c8">Invest</router-link>
          <router-link to="/admin" style="color: #c8a2c8">Admin</router-link>
        </div>
      </div>
      <div class="navbar-buttons">
        <button class="signIn">Sign In</button>
        <button class="signUp">Sign Up</button>
      </div>
    </nav>

    <!-- <div class="first-box">
      <img
        src="https://i.ibb.co/R6C2p5K/tybackground-04.png"
        class="w-100 100vh"
      />

      <div class="overlay">
        <div class="crypto">
          <h1>Invest In Crypto Today</h1>
          <h3></h3>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Market ID</th>
                <th>Order Type</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody v-if="orders">
              <tr v-for="order in orders" :key="orders.order_id">
                <td>{{ order.order_id }}</td>
                <td>{{ order.user_id }}</td>
                <td>{{ order.market_id }}</td>
                <td>{{ order.order_type }}</td>
                <td>{{ order.quantity }}</td>
                <td>{{ order.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Crypto",
  data() {
    return { orders: [] };
  },
  async created() {
    try {
      const response = await axios.get("user/invest");
      this.orders = response.data;
    } catch (error) {
      console.error(error);
    }
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
