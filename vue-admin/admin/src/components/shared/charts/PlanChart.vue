<template>
   <div>
      <canvas id="plan-chart"/>
   </div>
</template>

<script>
import Chart from 'chart.js'
export default {
   name: "PlanChart",
   mounted() {
      let ctx = document.getElementById('plan-chart').getContext('2d')
      new Chart(ctx, {
         type: 'bar',
         data: {
            labels: [
               '党小组会议', '党支部委员会会议', '党支部党员大会'
            ],
            datasets: [
               {
                  label: '',
                  data: [24, 12, 4, 0],
                  backgroundColor: ['red', 'yellow', 'blue']
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
