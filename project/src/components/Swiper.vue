<template>
  <div class="wrap">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" >
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data(){
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[{
        id:'001',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/c6/2467595fffc3b302.jpg_750x200_bc88db3a.jpg'
      },{
        id:'002',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'
      }]
    }
  }
};
</script>

<style scoped lang="less">
.wrap  /deep/ .swiper-pagination-bullet-active{
  background: #fff;
}
.swiper-img {
  width: 100%;
}

</style>
