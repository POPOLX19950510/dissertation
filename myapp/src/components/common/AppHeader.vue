<template>
  <div class="header">
    <ul class="bar">
      <li>
        <i class="iconfont icon-shouye1"></i>
        <p>首页</p>
      </li>
      <li>
        <i class="iconfont icon-shouye11"></i>
        <p>活动</p>
      </li>
      <li>
        <i class="iconfont icon-icon8"></i>
        <p>分类</p>
      </li>
      <li>
        <i class="iconfont icon-shouye8"></i>
        <p>购物车</p>
      </li>
      <li>
        <i class="iconfont icon-shouye4"></i>
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'AppHeader',
    data () {
      return {}
    }
  }
</script>

<style scoped >
  .header{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .header .bar{
    height: 70px;
    width: 100%;
    background-color: #D2D2D2;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .header .bar li{
    /*height: 100%;*/
    list-style: none;
    display: block;
    width: 20%;
    border-left:1px #fff solid;
  }
  .header .bar li i.iconfont{
    font-size: 30px;
  }
  .header .bar li p{
    font-size: 14px;
  }
</style>
