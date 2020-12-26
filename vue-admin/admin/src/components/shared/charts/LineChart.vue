<template>
   <canvas :id="canvasId"></canvas>
</template>

<script>
import Chart from "chart.js";

export default {
   name: "LineChart",
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
      let ctx = document.getElementById(this.canvasId)
      let data = []
      for (let item of this.data.data) {
         data.push({
            borderColor: item.color,
            data: item.values,
            label: item.label,
            backgroundColor: 'transparent',
         })
      }

      console.log('data', data)
      new Chart(ctx, {
         type: 'line',
         data: {
            labels: this.data.labels,
            datasets: data
         },
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
