<template>
   <div class="login-page">
      <div class="login-panel">
         <div class="panel-left">
            <img src="../assets/images/pic_login_panel.png" width="330" height="330"/>
         </div>
         <div class="panel-right px-8 pt-12 pb-20 px-5">
            <h2 class="text-gray-700 flex text-lg items-center">
               <img src="../assets/images/ic_logo.png" width="32" height="32"/>
               <span class="ml-2">淮北市相山区智慧党建管理平台</span>
            </h2>
            <div class="form">
               <a-row class="relative mt-5">
                  <input v-model="username" placeholder="请输入用户名" style="width: 280px"/>
                  <img src="../assets/images/ic_account.png" class="absolute"/>
               </a-row>
               <a-row class="relative mt-5">
                  <input v-model="password" placeholder="请输入您的密码" type="password" style="width: 280px"/>
                  <img src="../assets/images/ic_password.png" class="absolute"/>
               </a-row>
               <a-row class="relative mt-5 flex items-center">
                  <input v-model="captcha" placeholder="请输入验证码" style="width: 140px"/>
                  <img src="../assets/images/ic_captcha.png" class="absolute"/>
                  <svg v-html="svg" v-if="svg" style="width: 150px; height: 50px" @click="refreshToken"
                       class="cursor-pointer"/>
               </a-row>
               <a-row class="pos-r mt-10 align-self-start">
                  <a-button type="danger" @click="handleLogin">登录</a-button>
               </a-row>
               <!--               <a-row class="pos-r mt-30 align-self-start" v-if="false">-->
               <!--                  <span>如果您想不起来密码请点</span>-->
               <!--                  <el-link type="primary" href="/forget-password">忘记密码</el-link>-->
               <!--               </a-row>-->
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import {LS_TOKEN, LS_USERNAME, LS_USERID} from "../constants";
import {reactive} from "@vue/reactivity";
import agent from "@/agent";
import {onMounted} from "@vue/runtime-core";

export default {
   name: "Login",
   setup() {
      const refreshToken = async () => {
         let data = await agent.auth.getCaptcha();
         state.code = data.data.code;
         state.svg = data.data.svg;
      };
      let state = reactive({
         code: '',
         svg: '',
         refreshToken,
      });
      onMounted(refreshToken)
      return state
   },
   data: function () {
      return {
         captcha: '',
         password: 'admin',
         username: 'admin',
      }
   },
   methods: {
      handleLogin() {
         if (!this.username) {
            this.$warning({
               content: '请输入用户名',
            });
            return false;
         }
         if (!this.password) {
            this.$warning({
               content: '请输入密码',
            });
            return false;
         }
         if (!this.captcha) {
            this.$warning({
               content: '请输入验证码',
            });
            return
         }
         if (this.captcha.toUpperCase() !== this.code.toUpperCase()) {
            this.$warning({
               content: '验证码不正确',
            });
            return false;
         }
         let params = {
            userName: this.username,
            userPwd: this.password,
         };
         (async () => {
            let data = await agent.auth.login(params)
            if (data.success) {
               localStorage.setItem(LS_TOKEN, data.data.token);
               localStorage.setItem(LS_USERNAME, data.data.userName);
               localStorage.setItem(LS_USERID, data.data.userId);
               this.$router.replace({name: 'entry'});
            } else {
               this.$warning({
                  content: '用户名或密码错误',
               });
            }
         })()
      }
   }
}
</script>

<style scoped lang="scss">
.login-page {
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: url("../assets/images/pic_login_bg.png");
   background-repeat: no-repeat;
   background-position: center;
   background-size: 100% 100%;

   .login-panel {
      width: 850px;
      height: 500px;
      border-radius: 16px;
      display: flex;

      .panel-left {
         flex: 48;
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         border-top-left-radius: 10px;
         border-bottom-left-radius: 10px;
         background: rgba(255, 255, 255, 0.69);

         img {
            opacity: 1;
         }
      }

      .panel-right {
         flex: 34;
         height: 100%;
         display: flex;
         flex-direction: column;
         background: white;
         border-top-right-radius: 10px;
         border-bottom-right-radius: 10px;

         & > span {
            font-size: 17px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(88, 108, 149, 1);
         }

         input {
            height: 40px;
            width: 280px;
            border-radius: 4px;
            border: 1px solid #DCDFE6;
            padding-left: 44px;
            outline-width: 0px;

            &:focus {
               border: 1px solid #409Eff;
            }
         }

         .form {
            img {
               left: 10px;
               top: 10px;
               width: 24px;
               height: 24px;
            }
         }

      }
   }
}
</style>
