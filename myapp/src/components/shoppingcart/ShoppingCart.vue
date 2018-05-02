<template>
  <div>
    <table class="shopping-cart box">
      <tr class="sc-head" >
        <th>
          <label for="selectAll" >{{selectAll}}</label>
          <input type="checkbox" id="selectAll" @click="">
        </th>
        <th v-for="item in this.scTitleArr">{{item}}</th>
      </tr>
      <tr class="sc-list" v-for="(item, index) in this.json" ref="tab">

        <td class="sc-list-li">
          <input type="checkbox" class="selectitem" @click="item.chose =!item.chose">{{item.chose}}
        </td>
        <td>
          <img :src="item.pro_image" alt="">
        </td>
        <td>
          {{item.pro_saler}}
        </td>
        <td>
          <p class="price1">
            {{item.pro_price1}}
          </p>
          <p class="price2">
            {{item.pro_price2}}
          </p>
        </td>
        <td class="number" name="index">

          <button @click=" item.sc_num>=2 && item.sc_num-- "  >
            -
          </button>

          <span class="sc-num-count">
                        {{item.sc_num}}
                    </span>

          <button @click=" item.sc_num<=98 && item.sc_num++ " >
            +
          </button>
        </td>
        <td v-html="item.sc_num*item.price"></td>
        <td>
          <p><a href="">删除</a></p>
          <p><a href="">收藏</a></p>
        </td>
      </tr>
    </table>
    <div class="money-count">
      <div class="box">

      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'ShoppingCart',

    data () {
      return {
        scTitleArr: ['商品信息', '店铺', '单价', '数量', '金额', '操作'],
        selectAll: '全选',
        info: '商品信息',
        saler: '店铺',
        price: '单价',
        number: '数量',
        money: '金额',
        action: '操作',
        json:[
          {
            pro_id: 0,
            pro_image: 'https://gma.alicdn.com/bao/uploaded/i4/40284434/TB2Sf5mdjQnBKNjSZSgXXXHGXXa_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            pro_desc: '环球透气小白鞋女2018春季新款基础白鞋夏季韩版百搭学生平底板鞋',
            pro_price1: '￥125.00',
            pro_price2: '￥49.00',
            price: 49,
            pro_size: [],
            pro_color: [],
            pro_sale_nums: 123,
            pro_express_free: false,
            pro_commit_nums: 100,
            pro_like: 200,
            pro_saler: '名创小店',
            sc_num: 9,
            chose: false
          },
          {
            pro_id: 1,
            pro_image: 'https://gma.alicdn.com/bao/uploaded/i1/29673973/TB22W_6X1uSBuNjSsplXXbe8pXa_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            pro_desc: 'KAMILAN 卡米兰2018春季新款七分袖印花真丝',
            pro_price1: '￥122.00',
            pro_price2: '￥65.00',
            price: 65,
            pro_size: [],
            pro_color: [],
            pro_sale_nums: 123,
            pro_express_free:false,
            pro_commit_nums: 1500,
            pro_like: 2050,
            pro_saler: '名创小店',
            sc_num: 2,
            chose: false
          },
          {
            pro_id: 2,
            pro_image: 'https://gma.alicdn.com/bao/uploaded/i1/29673973/TB22W_6X1uSBuNjSsplXXbe8pXa_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            pro_desc: 'KAMILAN 卡米兰2018春季新款七分袖印花真丝',
            pro_price1: '￥123.00',
            pro_price2: '￥61.00',
            price: 61,
            pro_size: [],
            pro_color: [],
            pro_sale_nums: 123,
            pro_express_free:false,
            pro_commit_nums: 1500,
            pro_like: 2050,
            pro_saler: '名创小店',
            sc_num: 1,
            chose: false
          }
        ]
      }
    },
    mounted () {

    },
    methods: {


    },
    computed: {

    }
  }
</script>
<style scoped>
  .box{
    width: 1200px;
    margin: auto;
  }
  .shopping-cart{
    padding-top: 50px;
  }
  .shopping-cart .sc-head{
    margin-top:50px;
  }
  .shopping-cart tr{
    height: 80px;
    overflow: hidden;
    border-spacing: 2px;
  }
  .shopping-cart  tr img{
    height:80px;
  }
  .shopping-cart .sc-list{
    height:60px;
    overflow: auto;
    border: 1px solid #D2D2D2;
  }
  .price1{
    text-decoration: line-through;
    font-size: 14px;
    color: #999;
  }
  .price2{
    font-size: 18px;
    color:orangered;
  }
  button{
    width: 28px;
    height:28px;
    font-size: 18px;
    border-width:0;
    line-height: 26px;
  }
  .sc-num-count{
    display: inline-block;
    width: 30px;
  }
  .money-count{
    position: fixed;
    bottom: 0;
    width: 100%;
    height:70px;
    background-color: orangered;
  }
</style>
