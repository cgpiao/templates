<template>
   <canvas :id="canvasId"></canvas>
</template>

<script>
import Chart from 'chart.js'
export default {
   name: "HalfDoughnut",
   props: {
      canvasId: {
         type: String
      },
      data: {
         type: Array
      },
      legend: {
         type: Boolean,
         default: false
      }
   },
   mounted() {
      let ctx = document.getElementById(this.canvasId);
      let tmp = {
         labels: this.data.map((d) => d.label),
         datasets: [
            {
               data: this.data.map((d) => d.value),
               backgroundColor: this.data.map((d) => d.color),
               hoverBackgroundColor: this.data.map((d) => d.color),
            }
         ]
      }

      new Chart(ctx, {
         type: 'doughnut',
         data: tmp,
         options: {
            cutoutPercentage: 70,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            legend: {
               display: this.legend
            },
         }
      })
   }
}
</script>

<style scoped>

</style>
