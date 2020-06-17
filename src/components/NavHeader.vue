<template>
   <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="#">小米商城</a>
          <a href="#">MIUI</a>
          <a href="#">协议规则</a>
          <a href="#">云服务</a>
        </div>
        <div class="topbar-user">
          <!-- <a href="#" v-if="username">{{username}}}</a> //判断是否有存在用户-->
          <a href="#"  @click="login">登录</a>
          <a href="#" v-if="username">注册</a>
          <a href="#" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="#"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-1.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-2.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-3.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-4.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-5.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-6.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children">
              <ul>
                  <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Redmi 10x</div>
                    <div class="pro-price">999</div>
                  </a>
                  </li>
                    <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Redmi 10x</div>
                    <div class="pro-price">999</div>
                  </a>
                  </li>
                    <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Redmi 10x</div>
                    <div class="pro-price">999</div>
                  </a>
                  </li>
                    <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Redmi 10x</div>
                    <div class="pro-price">999</div>
                  </a>
                  </li>
                    <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Redmi 10x</div>
                    <div class="pro-price">999</div>
                  </a>
                  </li>
                    <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Redmi 10x</div>
                    <div class="pro-price">999</div>
                  </a>
                  </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
           <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                   <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米10pro</div>
                    <div class="pro-price">4000</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                   <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米10pro</div>
                    <div class="pro-price">4000</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                   <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="@/assets/img/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">小米10pro</div>
                    <div class="pro-price">4000</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" id="">
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      username: 'jack',
      phoneList: []
    }
  },
  // filters: { //过滤器
  //   currency (val) {
  //     if (!val) return '0.00'
  //     return '￥' + val.toFixed(2) + '元'
  //   }
  // },
  mounted () {
    this.getProductList()
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    getProductList () {
      this.axios.get('./products', {
        params: {
          categoryId: '100012'
        }
      }).then((res) => {
        if (res.list.lenght > 6) {
          this.phoneList = res.list.slice(0, 6)
        }
      })
    },
    goToCart () {
      this.$router.push('/cart')// 跳转路由
    }
  }
}
</script>
<style lang='scss' scoped>//注意不是sass
@import '../assets/sass/base.scss';
@import '../assets/sass/mixin.scss';
@import '../assets/sass/config.scss';
  .header {
    font-size: 16px;
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333;
      color: #b0b0b0;
      .container{
        width: 1226px;
        margin-right: auto;
        margin-left: auto;
        // @include flex();
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .my-cart{
          width: 110px;
          background-color: #ff6600;
          text-align: center;
          color:#fff;
          .icon-cart{
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url('../assets/img/icon-cart.png') no-repeat center;
            background-size: contain;
            margin-right: 8px;
          }
        }
      }
    }
    .nav-header{
      .container{
        position: relative; //方便下拉菜单定位
        height: 112px;
        @include flex();
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #FF6600;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before{
              content:'';
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('../assets/img/mi-logo.png') no-repeat center;
              background-size: contain;
              transition: margin 0.5s;
            }
             &:after{
              content:'';
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('../assets/img/mi-home.png') no-repeat center;
              background-size: contain;
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin 0.5s;
            }
          }
        }
        .header-menu{
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu{
            display: inline-block;
            color: #333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-left: 20px;
            span{
              cursor: pointer;
            }
            &:hover{  //下拉菜单
              color: $colorA;
              .children{
                height: 220px;
                opacity: 1;
              }
            }
            .children{
              opacity: 0;
              overflow: hidden;
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              // height: 220px;
              border-top: 1px solid $colorH;
              box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
              background-color: #fff;
              z-index: 10;
              transition: all 1s;
              .product{
                position: relative;
                font-size: 12px;
                line-height: 12px;
                float: left;
                width: 16.6%;
                height: 220px;
                text-align: center;
                a{
                  display: inline-block;// 把a元素撑开
                }
                img{
                  height: 111px;
                  width: auto;
                  margin-top: 26px;
                }
                .pro-img{
                  height: 137px;
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price{
                  color: $colorA;
                }
                &:before{
                  content:'';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before{
                  display: none;
                }
              }
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            input{
              box-sizing: border-box;
              border: none;
              border-left: 1px solid #e0e0e0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a{
              display: inline-block;
              width: 18px;
              height: 18px;
              background: url('../assets/img/icon-search.png') no-repeat center;
              background-size: contain;
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>
