<template>
   <div>
      <canvas id="organize-life-chart"/>
   </div>
</template>

<script>
import Chart from 'chart.js'
export default {
   name: "OrganizeLifeChart",
   mounted() {
      let ctx = document.getElementById('organize-life-chart').getContext('2d')

      const gradient = ctx.createLinearGradient(0, 400,0,0);
      gradient.addColorStop(1, '#FF4739');
      gradient.addColorStop(0, '#fffdfd');
      new Chart(ctx, {
         type: 'line',
         data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            datasets: [
               {
                  borderColor: 'red',
                  backgroundColor: gradient,
                  // label: '全年组织生活次数',
                  data: [1, 3, 4, 8, 6, 5, 4, 4, 6, 7, 5, 7]
               }
            ]
         },
         options: {
            legend: {
               display: false
            },
         }
      });
   }
}
</script>

<style scoped>

</style>
