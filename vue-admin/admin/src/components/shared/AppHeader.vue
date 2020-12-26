<template>
   <div class="bg-white w-full h-full shadow items-center flex justify-between px-6">
      <div class="header">
         {{appName}}
      </div>
      <a-dropdown>
         <a class="ant-dropdown-link ">
            <span class="flex justify-center items-center">
               {{ username }} <DownOutlined class="ml-3"/>
            </span>
         </a>
         <template v-slot:overlay>
            <a-menu>
               <a-menu-item>
                  <a @click="logout">退出</a>
               </a-menu-item>
            </a-menu>
         </template>
      </a-dropdown>
   </div>
</template>

<script>
import {DownOutlined} from '@ant-design/icons-vue';
import {APP_NAME, LS_USERNAME} from "@/constants";

export default {
   name: "AppHeader",
   components: {DownOutlined},
   data: function () {
      return {
         appName: APP_NAME,
         username: LS_USERNAME,
      }
   },
   methods: {
      logout() {
         localStorage.clear()

         this.$router.replace({name: 'login'})
      }
   }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/dimens";

.header {
   padding-left: 40px;
   font-size: 24px;
   font-family: PingFangSC-Regular, PingFang SC;
   font-weight: 400;
   color: #737A87;
}
</style>
