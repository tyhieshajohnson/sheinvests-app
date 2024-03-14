<template>
  <div class="learn" style="margin-top: 100px">
    <h1>Learn</h1>
  </div>
  <div class="content-container">
    <a href="https://hackingmotherhood.substack.com/p/why-more-women-need-to-get-into-crypto" style="text-decoration: none;">
      <div class="div1">
        <h2 style="color: white;">Why Women Need To Invest?</h2>
        <p>
          Women should consider entering the crypto space for its potential to
          offer financial empowerment and independence, breaking traditional
          barriers in the male-dominated financial sector.
        </p>
      </div>
    </a>

    <a href="https://www.forbes.com/advisor/in/investing/cryptocurrency/advantages-of-cryptocurrency/" style="text-decoration: none;">
      <div class="div2">
        <h2 style="color: white;">Why Crypto?</h2>
        <p>
          Crypto presents a unique opportunity for anyone, including women, to
          participate in a decentralized financial system, offering innovation,
          global accessibility, and potential for significant returns on
          investment.
        </p>
      </div>
    </a>

    <a href="https://cryptoweekly.co/crypto-female-50-awards" style="text-decoration: none;">
      <div class="div3">
        <h2 style="color: white;">Women In Crypto</h2>
        <p>
          Encouraging more women to engage in crypto fosters diversity and
          inclusion within the industry, enriching perspectives, driving
          innovation, and contributing to a more balanced and equitable future
          of finance.
        </p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.content-container {
  display: flex;
  justify-content: space-evenly;
  padding: 0 40px;
  padding: 30px;
  margin-top: 50px;
}

.div1, .div2, .div3 {
  /* #c8a2c8 */
  border: 1px solid black;
  border-radius: 20px;
  background-color: black;
  width: 400px;
  height: 300px;
  transition: transform 0.3s ease-in-out;
}

.div1:hover, .div2:hover, .div3:hover {
  transform: translateY(-20px);
}

h1, h2 {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

p {
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: #c8a2c8;
}
</style>
