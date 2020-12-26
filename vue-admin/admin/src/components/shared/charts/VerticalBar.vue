<template>
   <canvas :id="canvasId"></canvas>
</template>

<script>
import Chart from "chart.js";

export default {
   name: "VerticalBar",
   props: {
      canvasId: {
         type: String
      },
      data: {
         type: Object
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
               minBarLength: 2,
               backgroundColor: this.data.map((d) => d.color),
            }
         ]
      }

      new Chart(ctx, {
         type: 'bar',
         data: tmp,
         options: {
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
