<template>
  <div class="body">
    <div style="overflow: hidden">
      <h1 style="margin-top: 10px">SheInvests</h1>
      <img
        src="https://i.ibb.co/rZGK9Sw/1-removebg-preview.png"
        class="img-home"
      />
    </div>

    <div style="margin-top: 20px; margin-bottom: 20px;">
      <p>
        Welcome to SheInvests – where financial empowerment meets the world of
        cryptocurrency! We are not just a crypto prediction platform; we're a
        community-driven space dedicated to educating and empowering women in
        the exciting realm of digital assets. At SheInvests, we believe that
        knowledge is the key to financial independence, and we are committed to
        bridging the gender gap in the crypto landscape. Our platform offers
        market insights, trend analyses, and real-time predictions to help you
        make informed decisions in the dynamic world of cryptocurrencies. We
        understand that the crypto space can be overwhelming, especially for
        those new to the game, and that's why we've curated a wealth of
        educational resources tailored specifically for women. Whether you're a
        seasoned investor or just dipping your toes into the crypto waters,
        SheInvests provides a supportive environment for women to learn, grow,
        and thrive in the digital economy. Join us on this exciting journey as
        we navigate the crypto market together, breaking barriers and building a
        community of empowered women who confidently navigate the world of
        blockchain and digital assets. Welcome to SheInvests – where your
        financial future takes center stage!
      </p>
    </div>
    <div>
      <router-link to="/contact">
          <img src="https://i.ibb.co/qnmjQqw/2-removebg-preview-1.png" style="width: 150px;">
      </router-link>
    </div>
    <RouterView/>
  </div>
</template>

<script>
import { Store } from "vuex";

export default {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      // Dispatch the signUp action with form data
      await this.$store.dispatch("signUp", this.formData);
    },
  },
};
</script>

<style scoped>
.body {
  background-color: #ffffff;
  background-image: linear-gradient(
    180deg,
    #ffffff 1%,
    #f54a4a56 76%,
    #f54a4a56 76%
  );
  background-image: no-repeat;
}

.img-home {
  width: 300px;
}

h1{
  font-family: "Darker Grotesque", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

p{
  font-family: "Darker Grotesque", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
</style>
