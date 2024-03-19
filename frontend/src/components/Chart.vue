<template lang="">
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { Chart } from "chart.js";

onMounted(() => {
  const ctx = document.getElementById("myChart").getContext("2d");
  this.chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Ethereum", "Litecoin", "Bitcoin"],
      datasets: [
        {
          label: "Ethereum",
          data: [65, 23, 80, 45, 50, 67, 88],
          fill: false,
          borderColor: "rgb(178, 216, 178)",
        },
        {
          label: "Litecoin",
          data: [43, 67, 79, 81, 26, 39, 100],
          fill: false,
          borderColor: "rgb(138, 43, 226)",
        },
        {
          label: "Bitcoin",
          data: [10, 26, 56, 87, 34, 50, 89],
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
          // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100,
        },
      },
    },
  });
});
</script>

