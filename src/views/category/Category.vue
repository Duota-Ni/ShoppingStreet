<template>
<div>
<h2>分类</h2>
<div class="wrapper" ref="aaa">
<ul class="content">
  <button @click="btnClick">按钮</button>
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
    // console.log(document.querySelector('.wrapper'));
    // console.log(this.$refs.aaa);
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      pullUpLoad:true
    })
    this.scroll.on('scroll',(position) => {
      console.log(position);
    })
    this.scroll.on('pullingUp',() => {
      console.log('上哪加载更多');
    })
    // this.$nextTick(() => {
    //     this.scroll = new BScroll(this.$refs.aaa, {})
    //   })
  },
  methods:{
    btnClick(){
      console.log('btnclick');
    }
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