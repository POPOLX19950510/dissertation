<template>
  <div class="title">
    <i class="iconfont icon-xiangshangjiantou" @click="returnTop" v-if="!this.scrollWatch"></i>
    <img src="../../assets/logo.jpg" class="logo"/>
    <!--输入框搜索功能-->
    <div class="searchBox">
      <input type="text" class="searchBox-input" placeholder="请输入商品名称或店铺名称" name="search">
      <span><i class="iconfont icon-sousuo"></i></span>
    </div>
    <button><i class="icon-font icon-shouye7"></i>登录</button>
    <ul class="right-menu">
     <li @click="toggle(index)" ref="tab" v-for="(nav,index) in routerArr">
       <div>
         <i :class="nav.logo"></i>{{nav.name}}
       </div>
     </li>
    </ul>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Router from 'vue-router'
  Vue.use(Router)
  export default {
    name: 'AppTitle',
    data() {
      return{
        routerArr: [
          {name: '首页', to: '/', logo: 'iconfont icon-shouye1'},
          {name: '抢先', to: '/limitbuy', logo: 'iconfont icon-shouye11'},
          {name: '分类', to: '/category', logo: 'iconfont icon-icon8'},
          {name: '购物车', to: '/shoppingcart', logo: 'iconfont icon-shouye8'},
          {name: '我的银泰', to: '/userinfo', logo: 'iconfont icon-shouye4'}
        ],
        scrollWatch: true,
        title: '银泰商城',
        number: '18340801337'
      }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      toggle(i) {
        for (let j in this.routerArr) {
          this.$refs.tab[j].style.color = 'gray'
        }
        this.$refs.tab[i].style.color = 'pink'
        this.$router.push(this.routerArr[i].to)
        console.log(this.routerArr[i].to)
      },
      returnTop(){
        document.documentElement.scrollTop = 0
        window.pageYOffset = 0
         document.body.scrollTop = 0
      },
      /* 判断当前屏幕的滑动距离 当大于800 就出现 ' 回到顶部的箭头图标' */
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 500) {
          this.scrollWatch = false
        } else {
          this.scrollWatch = true
        }
      }
    }
  }
</script>
<style scoped>

  .title{
    width: 1200px;
    margin: auto;
    left: 0;
    right: 0;
    position: fixed;
    height: 50px;
    box-shadow: 0 0 0 0 rgba(0, 7, 123, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  }
  .title .logo{
    width:50px;
    height: 50px;

  }
  .searchBox-input{
    width: 300px;
    height: 35px;
    font-size: 18px;
    padding-left: 20px;
    border-radius: 17px 0 0 17px;
    border: 1px solid #ddd;
    border-image-width: 1px;
  }
  input.searchBox-input:focus {
    outline: -webkit-focus-ring-color auto 5px;
    outline-color: -webkit-focus-ring-color;
    outline-style: none;
    outline-width: 5px;
  }
  .searchBox span{
    display: inline-block;
    width: 50px;height:35px;
    border: 1px solid #D2D2D2;
    border-radius: 0 17px 17px 0;
    position: relative;
    top:2px;
    left:-5px;
    background-color: #ddd;
  }
  .searchBox span i {
    font-size: 24px;
    color: white;
    line-height: 35px;
  }

  .title .right-menu{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .title .right-menu li{
    list-style: none;
    font-size: 18px;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }
  .title .right-menu li:hover{
    transform: scale(1.1);
    color: pink;
    transition: all 0.5s;
  }
  .title .right-menu li i{
    font-size: 22px;
  }
  @keyframes style1 {
    0% {transform: scale(1); }
    100% {transform: scale(1.2); }
  }
  i.icon-xiangshangjiantou{

    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 17%;
    border: 1px solid #fff;
    font-size: 40px;
    font-weight: 900;
    color: aliceblue;
    background-color: gray;
    opacity: 0.7;
    position: fixed;
    bottom: 20px;
    right:20px;
  }
</style>
