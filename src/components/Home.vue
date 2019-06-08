<template>
  <div>
  <header>
  <i class='iconfont i'>&#xe663;</i>
    <span>VIP中心</span>
  <b class='iconfont b'>&#xe605;</b>
  </header>
  <section>
  <div class="first" >
   <div :class="flag? 'left': 'right'" @click='dianL'><h1>{{top}}</h1><p>适合独立摄影师</p></div>
   <div :class="flag? 'right': 'left'" @click='dianR'><h1>{{bottom}}</h1><p>适合小型工作室</p></div>
  </div>
  <div class="second">
  <h1>{{edition}}<span class="one">(适合</span><b>{{content}}</b><span class="one">)</span></h1>
  <ul class='list'>
  <li v-for='(item,index) in list'><i class='iconfont c' :class="(edition==='高级版' &&(index<4||index===9)||edition==='定制版')? 'red': 'gray'">&#xe605;</i><h3 >标题{{item}}</h3></li>
  </ul>
  </div>
  
  </section>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      list:[1,2,3,4,5,6,7,8,9,10],
      flag:true,
      top:'高级版',
      bottom:'定制版',
      edition:'高级版',
      content:'独立摄影师',
      content1:'小型工作室',
    }
   
  },
  methods:{
    change(index){

    },
    dianL(){
      this.flag=true;
      this.edition=this.top;
    },
    dianR(){
      this.flag=false;
      this.edition=this.bottom;
      this.content=this.content1;
  }
}
}
</script>
<style scoped lang="scss" >
@font-face {
  font-family: 'iconfont';  /* project id 1232717 */
  src: url('//at.alicdn.com/t/font_1232717_gqcwym76att.eot');
  src: url('//at.alicdn.com/t/font_1232717_gqcwym76att.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1232717_gqcwym76att.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1232717_gqcwym76att.woff') format('woff'),
  url('//at.alicdn.com/t/font_1232717_gqcwym76att.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1232717_gqcwym76att.svg#iconfont') format('svg');
}
.i{
    font-size: .36rem;
}
.b{
    font-size: .2rem;
}
.c{
    font-size: .5rem;
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header{
   height:.44rem;
   line-height:.44rem;
   display:flex;
   background:#fff;
   font-weight:100;
   text-align:center;
   justify-content:space-between;
   border-bottom:.04rem solid #ccc;
   span{
     font-size:.16rem;
   }
   b{
     margin-right:.1rem;
   }
}
section{
   height:100%; 
   background:#fff;
}

.first{
  display:flex;
  .right,.left{
  flex:1;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  height:1.5rem;
  margin:.2rem .2rem .1rem .1rem;
  font-weight:100;
}
.left{
  border:.02rem solid #f6a69a;
  text-align:center;
  background:#fff8f6;
  color:#fd4d57;
  p{
    color:#ff9194;
  }
}
.right{
  border:.02rem solid #eeeeee;
  text-align:center;
  background:#f6f6f6;
  color:#363636;
  p{
    color:#b5b5b5;
  }  
}
// .active{
//   border:.02rem solid #f6a69a;
//   text-align:center;
//   background:#fff8f6;
//   color:#fd4d57;
//   p{
//     color:#ff9194;
//   }
// }
}

.second{
  border-top:.04rem solid #ccc;
  height:3rem;
  border-bottom:.04rem solid #ccc;
  h1{
    margin:.4rem 0 0 .2rem;
    color:#000;
    .one{
      color:#ccc;
    }
    b{
      color:pink;
    }
  }
  .list{
    height:1rem;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    // flex-direction: column;
    justify-content:space-around;
    text-align:center;
    
    li{
     padding:.08rem;
    }
    .gray{
      color:gray;
    }
     .red{
      color:red;
    }
  }
}
</style>
