<template>
   <div class="w-full h-full  entry flex flex-col justify-center items-center entry">
      <div class="panel flex flex-col w-1/2  rounded-xl bg-white items-center">
         <div class="header text-gray-700 flex text-lg items-center">
            <img src="../assets/images/ic_logo.png" width="32" height="32"/>
            <span class="ml-2">淮北市相山区智慧党建管理平台</span>
         </div>
         <div class="flex-1 flex flex-col justify-center">
            <div class="choices flex flex-row w-2/ justify-between3">
               <div @click="$router.push({name: 'dashboard'})" class="flex flex-col items-center cursor-pointer">
                  <img src="../assets/images/ic_admin.png" width="128" height="118">
                  <div class="mt-5">后台管理系统</div>
               </div>
               <div class="divider">

               </div>
               <div class="flex flex-col items-center cursor-pointer">
                  <img src="../assets/images/ic_bigdata.png" width="128" height="118">
                  <div class="mt-5">数据大屏展示</div>
               </div>
            </div>
         </div>

      </div>
   </div>
</template>

<script>
export default {
   name: "Entry"
}
</script>

<style scoped lang="scss">
.entry {
   width: 100vw;
   height: 100vh;
   background-image: url("../assets/images/pic_login_bg.png");
   background-repeat: no-repeat;
   background-position: center;
   background-size: 100% 100%;
}
.panel {
   height: 50%;
   padding: 2em;
   .header {
      .text {
         font-size: 24px;

         color: #737A87;
      }
   }
   .choices {
      .divider {
         width: 2px;
         height: 118px;
         background: #D8D8D8;
         border-radius: 4px;
         margin-left: 100px;
         margin-right: 100px;
      }
   }
}
</style>
