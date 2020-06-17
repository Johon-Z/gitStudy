<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="@/assets/img/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="#">帮助中心 |</a>
      <a href="#">服务支持 |</a>
      <a href="#">线下门店 |</a>
      <a href="#">关于小米 |</a>
      <a href="#">特色服务</a>
    </div>
    <div class="copyright">
     <span> © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer',
  data () {
    return {

    }
  },

  pages: {},

  computed: {},

  methods: {}
}
</script>
<style lang='scss'>
.footer{
  // position: fixed;
  // bottom: 0;
  // right: 0;
  // left: 0;
  width:1226px;
  margin: 0 auto;
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 33px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    a{
      color: #999;
      display: inline-block;
    }
    span{
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright{
      color: #ff6600;
  }
}

</style>
