<template>
   <div class="w-full h-full flex">
      <div class="flex flex-col">
         <div v-for="(item, index) in data" :key="item.text" class="h-8 flex items-center">
            <span>{{index + 1}}</span>
            <span class="ml-2">{{item.text}}</span>
         </div>
      </div>
      <div class="flex flex-col flex-1 px-4">
         <div v-for="item in data" :key="item.text"  class="h-8 flex flex-col justify-center">
            <div class="rounded-xl" :style="{height: '12px', width: getPercentage(item.value), backgroundColor: item.color}"></div>
         </div>
      </div>
      <div class="flex flex-col">
         <div v-for="item in data" :key="item.text" class="h-8 flex flex-col justify-center">
            {{showOrigin ? item.value : getPercentage(item.value)}}
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "HorizontalPercentage",
   props: {
      data: {
         type: Array
      },
      showOrigin: {
         type: Boolean,
         default: false
      }
   },
   computed: {
      max() {
         let max = 0
         for (let item of this.data) {
            if (item.value > max) {
               max = item.value
            }
         }
         return max
      }
   },
   methods: {
      getPercentage(value) {
         return (value*100 / this.max) + '%'
      }
   }
}
</script>

<style scoped>

</style>
