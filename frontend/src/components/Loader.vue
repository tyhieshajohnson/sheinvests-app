<template>
  <div class="loader-container w-80 vh-80">
    <img class="loader-image w-100 100vh" src="https://i.ibb.co/mFQSqVq/SHE-INVESTS-1.png"  alt="">
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
export default {
  name: 'Loader',
  props: {
    msg: String
  }
}
</script>

<!-- CSS -->
<style scoped>
.loader-container {
  background-color: white;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
}

.loader-image {
  width: 500px;
  height: 500px;
  margin-top: 200px;
  margin-bottom: 202px;
}
  
  @media only screen and (max-width: 600px) {
  .loader-container {
    background-color: #141414;
    width: 100%;
    height: 100%;
  }

}
</style>