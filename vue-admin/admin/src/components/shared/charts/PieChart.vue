<template>
   <canvas :id="canvasId" class="w-full  h-full"></canvas>
</template>

<script>
import Chart from 'chart.js'
export default {
   name: "PieChart",
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
      let ctx = document.getElementById(this.canvasId).getContext('2d');
      let data = {
         labels: this.data.labels,
         datasets: [
            {
               data: this.data.values,
               backgroundColor: this.data.colors,
               hoverBackgroundColor: this.data.colors,
            }
         ]
      }

      new Chart(ctx, {
         type: 'pie',
         data: data,
         options: {
            legend: {
               display: this.legend
            },
            aspectRatio: 1,
         }
      })
   }
}
</script>

<style scoped>

</style>
