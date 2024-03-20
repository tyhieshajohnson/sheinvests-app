<template lang="">
  <div style="padding: 100px">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { Chart } from "chart.js";

let chart;

const createChart = async () => {
  const ctx = document.getElementById("myChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Ethereum", "Litecoin", "Bitcoin"],
      datasets: [
        {
          label: "Ethereum",
          data: [250000, 230000, 600400, 450000, 50000, 600000, 550000],
          fill: false,
          borderColor: "rgb(178, 216, 178)",
        },
        {
          label: "Litecoin",
          data: [430000, 400000, 500000, 60000, 260000, 390000, 590000],
          fill: false,
          borderColor: "rgb(138, 43, 226)",
        },
        {
          label: "Bitcoin",
          data: [100000, 260000, 560000, 400000, 340000, 500000, 380000],
          fill: false,
          borderColor: "rgb(0, 0, 128)",
        }
      ],
    },
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      scales: {
        y: {
          min: 0,
          max: 600000,
        },
      },
    },
  });
}

const updateData = () => {
  const ethData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100000) + 400000);
  const ltcData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100000) + 400000);
  const btcData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100000) + 400000);

  chart.data.datasets[0].data = ethData;
  chart.data.datasets[1].data = ltcData;
  chart.data.datasets[2].data = btcData;

  chart.update();
}

onMounted(() => {
  createChart();
  setInterval(updateData, 2000); // Update every 2 seconds
});

// need to figure out how to implement in the backend.. 
</script>
