<template>
   <a-layout class="h-full bg-gray-100 flex flex-row">
      <a-layout-sider theme="light" class="shadow-r">
         <AppNavigation></AppNavigation>
      </a-layout-sider>
      <a-layout class="flex-1">
         <a-layout-header>
            <AppHeader></AppHeader>
         </a-layout-header>
         <a-layout-content class="main-content relative">
            <slot></slot>
         </a-layout-content>
      </a-layout>
   </a-layout>
</template>

<script>
import AppHeader from "@/components/shared/AppHeader";
import AppNavigation from "@/components/shared/AppNavigation";

export default {
   name: "AppLayout",
   components: {AppNavigation, AppHeader}
}
</script>

<style lang="scss">
@import "../../assets/styles/dimens";

.ant-layout-header {
   padding: 0 !important;
   height: $h-header;
}

.main-content {
   padding: $py-main $px-main;
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
}
</style>
