<template>
  <div class="index">
    <div class="pic1 box">
      <img src="../../assets/img/TB1DS2IIXXXXXcOXFXXSutbFXXX.jpg" class="col-4"/>
      <img src="../../assets/img/TB1Fsy.hamWBuNjy1XaSutCbXXa.jpg" class="col-4"/>
      <img src="../../assets/img/TB1J0GZa_XYBeNkHFrdwu3iuVXa.png" class="col-4"/>
    </div>
    <div class="pic-title">
      <p class="pic-title-box box container-fuild">
        <span class="title-block "></span>
        <span> {{titleArr[1]}} </span>
      </p>

    </div>

    <div class="pic2 box ">

<!-- 产品介绍 -->
      <div class="box2 col-lg-2 col-sm-3 col-xs-6 " v-for="item in this.json">
        <!--<a :href="item.pro_image" alt=""></a>-->
        <img :src="item.pro_image" alt="">
        <p class="pro-desc">
          <span class="pro-free" v-if="item.pro_express_free"> {{text3}} </span>
          <span> {{item.pro_desc}} </span>
        </p>

<!-- 产品价格 -->
        <p>
          <span class="old-price"> {{item.pro_price1}} </span>
          <br><span class="new-price"> {{item.pro_price2}} </span>
        </p>

<!-- 销量和评价数量 -->
        <div class="pro-salecommit-num">
          <p class="pro-commit">
            <span> {{text1}} </span>
            <span> {{item.pro_sale_nums}} </span>
          </p>

          <p class="pro-sale">
            <span> {{text2}} </span>
            <span> {{item.pro_commit_nums}} </span>
          </p>
        </div>

      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'Ytindex1',
    data () {
      return {
        text1: '评价',
        text2: '销量',
        text3: '包邮',
        titleArr: ["时尚", "品质", "实惠", "热卖", "猜你喜欢" ],
        json: [
          {
            pro_id: 1001,
            pro_image: 'https://gma.alicdn.com/bao/uploaded/i4/40284434/TB2Sf5mdjQnBKNjSZSgXXXHGXXa_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            pro_desc: '环球透气小白鞋女2018春季新款基础白鞋夏季韩版百搭学生平底板鞋',
            pro_price1: '￥125.00',
            pro_price2: '￥49.00',
            pro_size: [],
            pro_color: [],
            pro_sale_nums: 123,
            pro_express_free: false,
            pro_commit_nums: 100,
            pro_like:200,
          },
          {
            pro_id: 1,
            pro_image: 'https://gma.alicdn.com/bao/uploaded/i1/29673973/TB22W_6X1uSBuNjSsplXXbe8pXa_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            pro_desc: 'KAMILAN 卡米兰2018春季新款七分袖印花真丝',
            pro_price1: '￥122.00',
            pro_price2: '￥65.00',
            pro_size: [],
            pro_color: [],
            pro_sale_nums: 123,
            pro_express_free:false,
            pro_commit_nums: 150,
            pro_like: 2050,
          },
          {
            pro_id: 2,
            pro_image: 'https://gma.alicdn.com/bao/uploaded/i1/29673973/TB22W_6X1uSBuNjSsplXXbe8pXa_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            pro_desc: 'KAMILAN 卡米兰2018春季新款七分袖印花真丝',
            pro_price1: '￥122.00',
            pro_price2: '￥65.00',
            pro_size: [],
            pro_color: [],
            pro_sale_nums: 123,
            pro_express_free:true,
            pro_commit_nums: 1500,
            pro_like: 2050,
          },
          {
            pro_id: 2,
            pro_image: 'https://gma.alicdn.com/bao/uploaded/i1/29673973/TB22W_6X1uSBuNjSsplXXbe8pXa_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            pro_desc: 'KAMILAN 卡米兰2018春季新款七分袖印花真丝',
            pro_price1: '￥122.00',
            pro_price2: '￥65.00',
            pro_size: [],
            pro_color: [],
            pro_sale_nums: 123,
            pro_express_free:false,
            pro_commit_nums: 1500,
            pro_like: 2050,
          },
          {
            pro_id: 2,
            pro_image: 'https://gma.alicdn.com/bao/uploaded/i1/29673973/TB22W_6X1uSBuNjSsplXXbe8pXa_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            pro_desc: 'KAMILAN 卡米兰2018春季新款七分袖印花真丝',
            pro_price1: '￥122.00',
            pro_price2: '￥65.00',
            pro_size: [],
            pro_color: [],
            pro_sale_nums: 123,
            pro_express_free:false,
            pro_commit_nums: 1500,
            pro_like: 2050,
          },
          {
            pro_id: 4,
            pro_image: 'https://gma.alicdn.com/bao/uploaded/i1/29673973/TB22W_6X1uSBuNjSsplXXbe8pXa_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            pro_desc: 'KAMILAN avagaisg卡米兰2018春季新款七分袖印花真丝',
            pro_price1: '￥132.00',
            pro_price2: '￥12.00',
            pro_size: [],
            pro_color: [],
            pro_sale_nums: 1323,
            pro_express_free:false,
            pro_commit_nums: 1200,
            pro_like: 210,
          }

        ]
      }
    },
    mounted () {

    },
    methods: {

    }

  }
</script>
<style scoped>
  .index{
    padding-top: 50px;
  }
  .box{
    width: 1200px;
    margin: auto;
  }
  .index .pic1{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .index .pic1 img {
  }

  .index .pic-title{
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
    text-align: left;
    border-bottom: 1px solid #dedede;
    border-top: 1px solid #dedede;
  }
  .index .pic-title span.title-block{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: orangered;
    border-radius: 50%;

  }
  .index .pic2{
    display: flex;
    align-items: center;
    /*justify-content: space-between;*/
  }
  .index .pic2 .box2{
    height: 320px;
    padding: 10px;
    border: 1px solid #D2D2D2;
  }
  .index .pic2 .box2:hover{
    border: 1px solid orangered;
  }
  .index .pic2 .box2 p{
    text-align: left;
    margin-bottom: 0;
  }
  .index .pic2 .box2 img{
    width: 100%;
  }
  .index .pic2 .box2 p.pro-desc{
    font-size: 14px;
    color: #2c3e50;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
  }
  .index .pic2 .box2 p.pro-desc:hover{
    text-decoration: underline;
  }
  .index .pic2 .box2 p span.pro-free{
    background-color: greenyellow;
    color: white;
    display: inline-block;
    border-radius: 5px;
  }
  .index .pic2 .box2 div.pro-salecommit-num{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  }
  .index .pic2 .box2 div.pro-salecommit-num p span:nth-child(2n+1){
    color: #999;
  }
  .index .old-price{
    font-size: 12px;
    color: #666;
    text-decoration: line-through;;
    text-align: left;
  }
  .index .new-price{
    font-size: 18px;
    color: red;
    text-align: left;
  }
</style>
