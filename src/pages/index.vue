<template>
   <div class="index">
     <div class="container">
       <div class="swiper-box">
         <div class="nav-menu">
           <ul class="menu-wrap">
             <li class="menu-item">
               <a href="#">手机 电话卡</a>
               <div class="children">
                  <ul v-for="(item,i) in menuList" :key="i">
                   <li v-for="(sub,j) in item" :key="j">
                     <a :href="sub?'/#/product/'+sub.id:''"><!-- 判断sub是否为第一个数组 -->
                       <img :src="sub?sub.img:require('@/assets/img/item-box-1.png')" alt="">
                       {{sub?sub.name:'小米9'}}
                     </a>
                   </li>
                 </ul>
               </div>
             </li>
             <li class="menu-item">
               <a href="#">电视 盒子</a>
               <div class="children">
               </div>
             </li>
               <li class="menu-item">
               <a href="#">笔记本 显示器 平板</a>
               <div class="children"></div>
             </li>
             <li class="menu-item">
               <a href="#">家电 插线板</a>
               <div class="children"></div>
             </li>
               <li class="menu-item">
               <a href="#">出行 穿戴</a>
               <div class="children"></div>
             </li>
             <li class="menu-item">
               <a href="#">智能 路由器</a>
               <div class="children"></div>
             </li>
               <li class="menu-item">
               <a href="#">电源 配件</a>
               <div class="children"></div>
             </li>
             <li class="menu-item">
               <a href="#">健康 儿童</a>
               <div class="children"></div>
             </li>
               <li class="menu-item">
               <a href="#">耳机 音箱</a>
               <div class="children"></div>
             </li>
             <li class="menu-item">
               <a href="#">生活 箱包</a>
               <div class="children"></div>
             </li>
           </ul>
         </div>
         <div class="swiper-container">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in slideList" :key="index">
              <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
              </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
         </div>
       </div>
       <div class="ads-box"></div>
       <div class="banner"></div>
       <div class="product-box"></div>
     </div>
     <service-bar></service-bar>
   </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper' // Swiper要大写
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true, // 开启slide阴影
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: require('../assets/img/slider/slide-1.jpg')
        },
        {
          id: '45',
          img: require('../assets/img/slider/slide-2.jpg')
        },
        {
          id: '46',
          img: require('../assets/img/slider/slide-3.jpg')
        },
        {
          id: '',
          img: require('../assets/img/slider/slide-4.jpg')
        },
        {
          id: '',
          img: require('../assets/img/slider/slide-5.jpg')
        }

      ],
      menuList: [
        [
          {
            id: 30,
            img: require('@/assets/img/item-box-1.png'),
            name: '小米cc9'
          },
          {
            id: 31,
            img: require('@/assets/img/item-box-2.png'),
            name: '小米8青春版'
          },
          {
            id: 32,
            img: require('@/assets/img/item-box-3.jpg'),
            name: 'Redmi'
          },
          {
            id: 33,
            img: require('@/assets/img/item-box-4.jpg'),
            name: '移动4G专区'
          }
        ], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../assets/sass/mixin.scss';
@import '../assets/sass/config.scss';
  .index{
    .swiper-box{
      .nav-menu{
        box-sizing: border-box; // 把padding包括在height里面
        position: absolute;
        width: 264px;
        height: 700px;
        z-index: 9;
        background-color: #55585a7a;
        .menu-wrap{
          .menu-item{
            height: 70px;
            line-height: 70px;
            &:hover{
              background-color:$colorA;
              .children{
                display:block;
              }
            }
            a{
              display: block;
              position: relative;
              font-size: 16px;
              color: #fff;
              padding-left: 30px;
              &:after{
                position: absolute;
                right:45px;
                top: 30px;
                content: '';// 占位
                @include bgImg(10px,15px,'../assets/img/icon-arrow.png')
              }
            }
            .children{
              display: none;
              width: 962px;
              height: 500px;
              background-color: $colorG;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid $colorH;
              ul{
                display: flex;
                justify-content: space-between;
                height: 80px;
                li{
                  height: 80px;
                  line-height: 80px;
                  flex: 1;
                  padding-left: 23px;
                }
                a{
                  color: $colorB;
                  font-size: 14px;
                }
                img{
                  width: 42px;
                  height: 38px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height: 700px;
        .swiper-button-prev{
          left: 274px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }

    }
  }
</style>
