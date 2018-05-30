# dissertation

纯属自己瞎写
　　
<template>
  <div class="my_l">
    <hr>
    <header class="top_bar">
      <a onclick="window.history.go(-1)" class="icon_back"></a>
      <h3 class="cartname"> 银 泰 网 站 用 户 登 录 </h3>
    </header>
    <main class="user_login_box">
      <div class="login_dialog">
        <div class="_username">
          <input type="text" name="username" placeholder="请输入用户名" class="user_input" v-model="username"/>
        </div>
        <div class="_username u_passwd">
          <input type="password" name="password" placeholder="请输入密码" class="user_input" v-model="password"/>
        </div>

        <div class="login_box">
          <a @click="goLogin()" class="btn_login">登录</a>
        </div>
        <div class="go_reg_box">
          <router-link tag="span" to="/reg">快速注册</router-link>
        </div>
      </div>
    </main>

  </div>
</template>
<script>

  export default{
    data(){
      return{
        username: '',
        password: '',
        userInfo: {}
      }
    },
    methods:{
      goLogin(){
        let _this = this;
        if(_this.username == '') {
          alert('请输入用户名');
        } else if (_this.password == '') {
          alert('请输入密码');
        } else {
          _this.$http.post('/login', {
            loginName: _this.username,
            loginPawd: _this.password,
          }).then( (res)=> {
            console.log(_this.password);
            if(res.status == 200){
                console.log(1, res)
              _this.userInfo = res.data;
                console.log(2, _this.userInfo)
              if(_this.userInfo.status == 1) {
                //LOGIN success
                window.sessionStorage.userInfo = JSON.stringify(_this.userInfo);
                console.log(3, _this.$store);
                _this.$store.dispatch('setUserInfo', _this.userInfo);
                let redirect = decodeURIComponent(_this.$route.query.redirect || '/home');
                console.log(4, redirect)
                _this.$router.push({
                  path: redirect
                });
              }else{
                alert(_this.userInfo.msg);
              }
            }else{
              alert('请求出现错误');
            }
            console.log(res);
          },(err)=>{
            console.log(err);
          });
        }

      }
    }
  }
  </script>
<style scoped>
  @import '../../assets/css/login.css';
  *{
    margin: 0;
    padding: 0;
    font-family: Arial;
  }


</style>
