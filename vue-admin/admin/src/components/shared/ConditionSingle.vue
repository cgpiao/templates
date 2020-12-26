<template>
   <div class="flex condition box-border pl-5 pr-5 bg-white">
      <div class="flex-1">
         <slot name="condition">
         </slot>
      </div>
      <slot name="action"></slot>
   </div>
</template>

<script>
export default {
   name: "ConditionSingle"
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/dimens";
.condition {
   height: $h-condition;
   align-items: center;
}
</style>
