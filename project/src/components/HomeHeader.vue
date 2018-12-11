<template>
  <div>
    <header>
      <div class="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
        </div>
      <div class="header-right">
        城市
        <span class="iconfont">&#xe64a;</span>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name:'HomeHeader'
}
</script>
<style lang="less" scoped>
  // sytle下面引入文件使用@import，如：@import '../assets/styles/reset.css'
  // 1rem = html font-size = 50px
  header {
    display: flex;
    line-height: .86rem;
    background: #00bcd4;
    color: #fff;
    .header-left {
      width: .64rem;
      float: left;
    }
    .header-input {
      flex: 1;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: .2rem;
      height: .64rem;
      line-height: .64rem;
      background: #fff;
      color: #ccc;
      text-align: left;
      border-radius: .1rem;
    }
    .header-right {
      width: 1.24rem;
      float: right;
      text-align: center;
    }
  }
</style>

