<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="card">
      <van-card v-for="(item, index) in productList" :key="index" :price="item.price" :desc="item.company" :title="item.name" :thumb="item.img">
        <div slot="footer">
          <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
        </div>
    </van-card>
    </div>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import axios from 'axios';
import url from '@/service.config.js'
export default {
  data(){
    return {
      productList: []
    }
  },
  computed: {
    ...mapState(['userInfo']),
    totalPrice(){
      return this.productList.reduce((sum, elem)=>{
        sum += elem.price;
        return sum;
      }, 0) * 100;
    }
  },
  created(){
    console.log('haha')
    // 验证用户是否登录
    if(JSON.stringify(this.userInfo) === '{}'){
      this.$toast.fail('请先登录');
      setTimeout(()=>{
        this.$router.push('/profile');
      }, 1000);
    }else{
      axios({
        url: url.getCart,
        method: 'get',
        params: {
          userId: this.userInfo._id
        }
      }).then(res=>{
        for(let item of res.data){
          this.productList.push(item.productId);
        }
        console.log(this.productList)
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  methods: {
    showCart(){
      axios({
        url: url.getCart,
        method: 'get',
        params: {
          userId: this.userInfo._id
        }
      }).then(res=>{
        for(let item of res.data){
          this.productList.push(item.productId);
        }
      }).catch(err=>{
        console.log(err);
      })
    },
    onSubmit(){
      this.$toast.success('进入付款页面')
    },
    delCart(id, index){
      // 删除数据库中的数据（自行完成），如果删除成功，进入回调函数，在回调函数中如下代码
      axios({
        url: url.delCart,
        method: 'post',
        data: {
          productId: id,
        }
      }).then(res=>{
        if(res.data.code == 200){
          this.$toast.success(res.data.message)
          this.productList.splice(index, 1)
        }
      })
      
    }
  }
}
</script>

<style lang="scss">
.submit-bar{
  margin-bottom: 1rem;
}
</style>