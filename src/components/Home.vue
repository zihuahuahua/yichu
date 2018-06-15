<template>
  <div class="wrap">
    <div>
      <mt-swipe @change="handleChange" :auto="0" :show-indicators="false">
        <mt-swipe-item><img src="../assets/u5.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/u7.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/u9.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/u11.jpg" alt=""><router-link to="denglu"><span></span></router-link></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import { Swipe,SwipeItem } from 'mint-ui'
export default {
  
  name:'home',
  components:{
    Swipe,
    SwipeItem
  },
  methods: {
  handleChange(index) {
    
  }
}
}
</script>

<style>
.wrap {
  width:100%;
  height: 100vh;
}
.mint-swipe{
  height:100vh;
}
.mint-swipe-item>img{
  width:100%;
}
.mint-swipe-item{
  position: relative;
}
.mint-swipe-item>a{
    position: absolute;
    left:36%;
    bottom:14%;
    width: 118px;
    height: 90px;
}
.mint-swipe-item>a>span{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
