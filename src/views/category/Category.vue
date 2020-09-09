<template>
<div>
<h2>分类</h2>
<div class="wrapper" ref="aaa">
<ul class="content">
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
  <li>lalal</li>
</ul>
</div>
</div>
  
</template>

<script>
// category使用better-scroll
import BScroll from 'better-scroll'
export default {
  name:"Category",
  // data(){
  //   return{
  //     scroll:null
  //   }
  // },
  //组件创建完成后调用
  // created(){
  //   this.scroll = new BScroll('.wrapper',{

  //   })
  // }
  mounted(){
    console.log(document.querySelector('.wrapper'));
    console.log(this.$refs.aaa);
    // this.scroll = new BScroll(document.querySelector('.wrapper'),{

    // })
    this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.aaa, {})
      })
  }
}
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: pink;

  overflow: hidden;
  /* overflow-y:scroll; */
}

</style>