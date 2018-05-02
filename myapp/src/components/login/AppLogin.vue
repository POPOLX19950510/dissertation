<template>
  <div class="login">
    <div class="login-box">
      <!-- 登录 或者 注册 -->
      <div class="change_mode">
        <button class="col-lg-3 col-sm-3 col-xs-3" @click="loginBtn">  用户登录  </button>
        <button class="col-lg-3 col-sm-3 col-xs-3" @click="loginTelBtn">  手机登录  </button>
        <button class="col-lg-3 col-sm-3 col-xs-3" @click="regBtn">  {{reg}}  </button>
      </div>

      <!--用户昵称密码 登录-->
      <form @submit.prevent="submit_login" method="post" id="login_in">
        <div class="login-box-text">
          <span class="col-lg-3 col-sm-4 col-xs-4"> {{username}} </span>
          <input class="col-lg-9 col-sm-8 col-xs-8" type="text" name="" value="" placeholder="请输入用户名" v-model="loginData.username"/>
        </div>
        <div class="login-box-text">
          <span class="col-lg-3 col-sm-4 col-xs-4"> {{password}} </span>
          <input class="col-lg-9 col-sm-8 col-xs-8" type="password" name="" placeholder="请输入密码" v-model="loginData.password"/>
        </div>
        <button class="col-12">
          {{login}}
        </button>
      </form>

      <!--用户手机号密码 登录-->
      <form @submit.prevent="submit_login_tel" method="post" id="login_in_tel">
        <div class="login-box-text ">
          <span class="col-lg-3 col-sm-4 col-xs-4"> {{tel}} </span>
          <input class="col-lg-9 col-sm-8 col-xs-8" type="text" name="" value="" maxlength="11" placeholder="请输入手机号" v-model="loginTelData.tel"/>
        </div>
        <div class="login-box-text ">
          <span class="col-lg-3 col-sm-4 col-xs-4"> {{password}} </span>
          <input class="col-lg-9 col-sm-8 col-xs-8" type="password" name="" placeholder="请输入密码" v-model="loginTelData.password"/>
        </div>
        <button class="col-12">
          {{login}}
        </button>
      </form>

      <!--注册新用户-->
      <form @submit.prevent="submit_req" method="post" id="login_registered">
        <div class="login-box-text ">
          <span class="col-lg-3 col-sm-4 col-xs-4"> {{username}} </span>
          <input class="col-lg-9 col-sm-8 col-xs-8" type="text" name="" id="name" value="" placeholder="用户名" v-model="regData.username"/>
        </div>
        <div class="login-box-text containe">
          <span class="col-lg-3 col-sm-4 col-xs-4"> {{password}} </span>
          <input class="col-lg-9 col-sm-8 col-xs-8" type="password" name="" value="" placeholder="密码" v-model="regData.password"/>
        </div>
        <div class="login-box-text ">
          <span class="col-lg-3 col-sm-4 col-xs-4"> {{password2}} </span>
          <input class="col-lg-9 col-sm-8 col-xs-8" type="password" name="" value="" placeholder="确认密码" v-model="regData.password2"/>
        </div>
        <div class="login-box-text ">
          <span class="col-lg-3 col-sm-4 col-xs-4"> {{email}} </span>
          <input class="col-lg-9 col-sm-8 col-xs-8" type="email" name=""  value="" placeholder="请输入电子邮箱" v-model="regData.email">
        </div>
        <div class="login-box-text ">
          <span class="col-lg-3 col-sm-4 col-xs-4"> {{tel}}  </span>
          <input class="col-lg-9 col-sm-8 col-xs-8" type="tel" name="" value="" placeholder="请输入手机号" v-model="regData.tel" maxlength="11">
        </div>
        <input type="hidden" name="userid" value="201804" v-model="regData.id" >
        <input type="hidden" name="regtime" value="" v-model="regData.time">
        <input type="hidden" name="root" value="1" v-model="regData.root">
        <button class="col-12">
          {{reg}}
        </button>
      </form>

    </div>
    <div class="msg">
      <div class="warning contain">
        <p class="">
          {{msg}}
        </p>
        <button @click="confrim" class="col-12">确定</button>
      </div>

    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import $ from 'jquery'
  export default{
    data() {
      return {
        loginData: {},
        regData: {},
        loginTelData: {},
        msg: '欢迎登陆!!!',
        reg: '立即注册',
        login: '登录',
        username: '用户名',
        password: '密码',
        password2: '确认密码',
        email: '电子邮箱',
        tel: '手机号码'
      }
    },
    methods: {
      handleClick: function() {
        this.$toast('Hello world!')
      },
      loginBtn: function () {
        $('#login_in').show()
        $('#login_registered').hide()
        $('#login_in_tel').hide()
      },
      regBtn: function () {
        $('#login_in').hide()
        $('#login_registered').show()
        $('#login_in_tel').hide()
      },
      loginTelBtn: function () {
        $('#login_in').hide()
        $('#login_registered').hide()
        $('#login_in_tel').show()
      },
      confrim: function () {
        $('.msg').hide()
      },
      // 显示输入提示信息
      msgs: function(msg) {
          console.log(msg);
        this.msg = msg;
        $('.msg').show()
        console.log(this.msg)
      },
      submit_login() {
        const name = this.loginData.username
        const pass = this.loginData.password
        if (name === undefined) {
          msgs('请输入用户名!!')
        } else if (pass === undefined) {
          msgs('请输入密码!!!')
        }
        // 数据库操作语句
        const url = '/api/login';
        this.$http.post(url, {
          user_name: this.loginData.username,
          user_pass: this.loginData.password
        }, {}).then(function (data) {
          console.log('请求成功! ', data.body);
          const content = data.body;
          if (content.length !== 0) {msgs('登录成功！')}
          else {msgs('账户密码错误！')}
        }, function (response) {
          console.log(response);
        })
      },
      submit_login_tel() {
        const tel  = this.loginTelData.tel
        const pass = this.loginTelData.password
        if ( tel === undefined ) {
          msgs('请输入手机号!!!')
        } else if ( (tel.length !== 11)|| !(/^1[3|4|5|8][0-9]\d{4,8}$/.test(tel))) {
          msgs('请输入正确的手机号!!!')
        } else if (pass === undefined) {
          msgs('请输入密码!!!')
        }
        var url = '/api/login_tel';
        this.$http.post(url, {
          user_tel:  this.loginTelData.tel,
          user_pass: this.loginTelData.password
        }, {}).then(function (data) {
          const content = data.body
          if ( content.length !== 0 ) {
          } else {
            msgs('账户密码错误!!!')
          }
        }, function (response) {
          console.log(response);
        })
      },
      submit_req() {
        const reg_id = this.regData.id;
        const reg_name = this.regData.username;
        const reg_tel = this.regData.phone;
        const reg_psw = this.regData.password;
        const reg_root = this.regData.root;
        if (reg_psw !== this.regData.password2) {
         msg('两次输入密码不正确!')
        }
        else if (reg_root === undefined){
          this.regData.root = 0;
        }
        else if(reg_id === undefined){
          this.regData.id = '110'
        }
        else if (reg_name.length <= 6 ) {
          msg('用户名太短，请重新输入！！！')
        }
        else {
          var url = '/api/addUser';
          this.$http.post(url, {
            user_ID: this.regData.id,
            user_name: this.regData.username,
            user_pass: this.regData.password,
            user_tel: this.regData.tel,
            user_regTime: this.regData.time,
            user_root: this.regData.root
          }, {}).then(function (data) {
            console.log("注册请求成功！", data.body);
            if (data.body.affectedRows > 0) {
              msg("注册成功！");
              $('#login_in').show()
              $('#login_registered').hide()
              $('#login_in_tel').hide()
            }
          }, function (response) {
            console.log(response);
          })
        }
      }
    },
    mounted(){
      this.methods.msg("hello")
      $('.msg').show()
    }
  }
</script>
<style scoped>
  .login{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    margin: 0 auto;
  }
  .login .login-box{
    width: 100%;
    box-sizing: border-box;
    max-width: 500px;
    /*padding: 40px 20px;*/
    margin: auto;
    margin-top: 20px;
    background-color: #fff;
  }
  .login-box .change_mode{
    margin: auto;
    width: 100%;
    max-width: 450px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login-box form{
    max-width: 450px;
    margin: auto;
    /*margin-top:20px;*/
  }
  .login-box .login-box-text{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .login-box .login-box-text span {
    text-align: right;
    line-height: 40px;
    display: block;
    margin: 10px 0;
  }
  .login-box input {
    height: 40px;
    display: block;
    margin: 10px 0;
    border: 1px solid #dedede;
    border-radius: 6px;
    outline: none;
    font-family: "arial rounded mt bold";
    padding-left: 10px;
    font-size: 18px;
  }

  .login #login_registered,
  .login #login_in_tel {
    display: none;
  }

  .login span.warning{
    font-size: 14px;
    color: red;
  }
  .login div.msg{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: none;
  }
  .login div.msg div.warning{
    width: 300px;
    height: 160px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    color: red;
    font-size: 18px;
    position: absolute;
    margin: auto;
    top: 0;  bottom: 0;  left: 0;  right: 0;
  }
  .Login div.msg div.warning p{
    height: 110px;
    line-height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .login div.msg div.warning button{
    padding: 4px 14px;
    font-size: 18px;
    border-radius: 8px;
    background-color: orangered;
    color: #fff;
    border-width: 0;
  }
  .Login div.msg div.warning button:focus {
    outline-style: none;
  }
  @media screen and (width: 375px){
    .login{
      padding-top: 0;
    }
    .login .login-box{
      margin-top: 0;
      height: 100%;
    }
    .login .login-box from{
      height: 100%;
    }

    .login-box .login-box-text span,
    .login-box-text input{
      font-size: 14px;
      height: 35px;
    }
    button{
      border-radius: 5px;
      line-height: 35px!important;
      margin: 20px 0;
      background-color: orangered;
    }
  }
  button{
    border-radius: 10px;
    line-height: 40px!important;
    margin: 20px 0;
    color: orangered;
  }
</style>
