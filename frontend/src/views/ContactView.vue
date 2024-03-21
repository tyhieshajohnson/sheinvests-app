<!-- HTML -->
<template>
  <div class="contact body vh-1000 w-100">
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
      <img
        src="https://i.ibb.co/jGp7BLs/tybackground-03.png"
        class="w-100 100vh"
        alt=""
      />

      <div
        class="contact-container"
        style="font-family: 'Bebas Neue', sans-serif"
      >
        <div class="contact-heading">
          <h1
            style="
              font-family: 'Bebas Neue', sans-serif;
              display: flex;
              justify-content: center;
              padding-top: 50px;
              color: white;
            "
          >
            Contact Us
          </h1>
          <p
            style="
              font-family: 'Bebas Neue', sans-serif;
              display: flex;
              justify-content: center;
              color: black;
            "
          >
            Let's Have Coffee
          </p>
        </div>
      </div>
      <!-- Icons -->
      <div class="icon-container row" style="padding-top: 20px">
        <!-- Location -->
        <div class="icon-1 col">
          <!-- <i class="fa-solid fa-map-pin" style="color: #ffdb58"></i> -->
          <p
            style="
              font-family: 'Bebas Neue', sans-serif;
              color: black;
              font-family: 'Bebas Neue', sans-serif;
            "
          >
            <i class="fa-solid fa-map-pin" style="color: #c8a2c8"></i>
            Cape Town
          </p>
        </div>
        <!-- Phone Number -->
        <div class="icon-2 col">
          <!-- <i class="fa-solid fa-mobile" style="color: #ffdb58"></i> -->
          <p
            style="
              font-family: 'Bebas Neue', sans-serif;
              color: black;
              font-family: 'Bebas Neue', sans-serif;
            "
          >
            <i class="fa-solid fa-mobile" style="color: #c8a2c8"></i>+27 76 077
            5241
          </p>
        </div>
        <!-- Email -->
        <div class="icon-3 col">
          <!-- <i class="fa-solid fa-paper-plane" style="color: #ffdb58"></i> -->
          <p
            style="
              font-family: 'Bebas Neue', sans-serif;
              color: black;
              font-family: 'Bebas Neue', sans-serif;
            "
          >
            <i class="fa-solid fa-paper-plane" style="color: #c8a2c8"></i>
            info@sheinvests.co.za
          </p>
        </div>
      </div>
      <!-- Bootstrap Form -->
      <div id="form-container" class="form-container">
        <form
          class="needs-validation contactForm"
          id="contactForm"
          novalidate
          action="https://formspree.io/f/xnqkenro"
          method="POST"
        >
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label
                for="validationCustom01"
                style="font-family: 'Bebas Neue', sans-serif"
                >First name</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                name="firstName"
                placeholder="First name"
                value="Jane"
                style="font-family: 'Bebas Neue', sans-serif"
                required
              />
              <div
                class="valid-feedback"
                style="font-family: 'Bebas Neue', sans-serif"
              >
                Looks good!
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label
                for="validationCustom02"
                style="font-family: 'Bebas Neue', sans-serif"
                >Last name</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                name="lastName"
                placeholder="Last name"
                value="Doe"
                style="font-family: 'Bebas Neue', sans-serif"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label
                for="validationCustom03"
                style="font-family: 'Bebas Neue', sans-serif"
                >Phone Number</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                name="phoneNumber"
                placeholder="Phone Number"
                style="font-family: 'Bebas Neue', sans-serif"
                required
              />
              <div
                class="invalid-feedback"
                style="font-family: 'Bebas Neue', sans-serif"
              >
                Please provide a valid phone number.
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label
                for="validationCustom04"
                style="font-family: 'Bebas Neue', sans-serif"
                >Comment</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom04"
                name="comment"
                placeholder="Comment"
                style="font-family: 'Bebas Neue', sans-serif"
                required
              />
              <div
                class="invalid-feedback"
                style="font-family: 'Bebas Neue', sans-serif"
              >
                Let Me Know?
              </div>
            </div>
          </div>
          <button
            class="btn btn-dark"
            type="submit"
            style="font-family: 'Bebas Neue', sans-serif"
          >
            Submit form
          </button>
        </form>
      </div>
      <!-- End of Form -->
    </div>
  </div>
</template>

<!-- JavaScript -->
<script></script>

<!-- CSS -->
<style scoped>
/* Remove unnecessary styling */
.body {
  background-color: white;
}

/* Remove unnecessary styling */
.icon-2 {
  padding-left: 90px;
}

/* Remove unnecessary styling */
.icon-container {
  display: flex;
  justify-content: center;
}

/* Remove unnecessary styling */
.icon-container .col:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease-in-out;
}

/* Remove unnecessary styling */
#form-container {
  width: 550px;
  height: 500px;
  border-radius: 24px;
  background-color: #c8a2c8;
}

/* Remove unnecessary styling */
form {
  padding-left: 200px;
  padding-top: 75px;
}

/* Keep necessary styling */
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

/* Keep necessary styling */
.navbar-logo {
  margin-right: auto;
}

/* Keep necessary styling */
.navbar-links {
  display: flex;
}

/* Keep necessary styling */
.navbar-links router-link {
  margin-right: 20px;
}

/* Keep necessary styling */
.navbar-buttons button {
  margin-left: 20px;
}

/* Keep necessary styling */
.main-links {
  font-family: "Bebas Neue", sans-serif;
}

/* Keep necessary styling */
.signIn {
  border-radius: 7px;
  border: solid black 4px;
  background-color: white;
}

/* Keep necessary styling */
.signUp {
  border-radius: 7px;
  border: solid #c8a2c8 4px;
  background-color: white;
}

/* Adjust positioning */
.first-box {
  position: relative;
}

/* Adjust positioning */
.contact .contact-container {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; /* Center text */
  padding: 20px;
  border-radius: 10px;
}

/* Adjust positioning */
.contact .icon-container {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.contact #form-container {
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center; /* Center form */
}

#form-container {
  background-color: rgba(200, 162, 200, 0.224);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
