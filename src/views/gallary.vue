<template>
    <div>
        <h1 style="color: #f1f1f1">our gallery</h1>
        <swiper
        :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
   
    :autoplay="{
        delay: 3000,
     disableOnInteraction: false,
    }"



    
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img src="../assets/images/bt1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bt2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bt3.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bt4.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bt1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bt2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bt3.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bt4.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bt1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bt2.jpg" alt=""></swiper-slide>

  </swiper>
  
    </div>


<div class="main">
    <div class="sec-title text-center mb-5">
                                    <p style="color:#f1f1f1" class="sec-sub-title mb-3">Our Team</p>
                                    <h2 style="color:#f1f1f1" class="h2-title">Meet our Chefs</h2>
                                    <div class="sec-title-shape mb-4">
                                        <img src="../assets/images/title-shape.svg" alt="">
                                    </div>
                                </div>
    <swiper
        :modules="modules"
    
    :slides-per-view="3"
    :space-between="50"
    :breakpoints="{
        0:{
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
    }"
    navigation
    :autoplay="{
        delay: 3000,
     disableOnInteraction: false,
    }"



    
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >

            
               
                       <swiper-slide>
                       <div class="theChef">
                       <img src="../assets/images/chef/c1.jpg" alt="">
                       <div class="text">
                        <h3>khaled sawada</h3>
                        <div class="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                       </div>
                       </div>
                       </swiper-slide>
                       <swiper-slide>
                       <div class="theChef">
                       <img src="../assets/images/chef/c2.jpg" alt="">
                       <div class="text">
                        <h3>khaled sawada</h3>
                        <div class="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                       </div>
                       </div>
                       </swiper-slide>
                       <swiper-slide>
                       <div class="theChef">
                       <img src="../assets/images/chef/c3.jpg" alt="">
                       <div class="text">
                        <h3>khaled sawada</h3>
                        <div class="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                       </div>
                       </div>
                       </swiper-slide>
                       <swiper-slide>
                       <div class="theChef">
                       <img src="../assets/images/chef/c4.jpg" alt="">
                       <div class="text">
                        <h3>khaled sawada</h3>
                        <div class="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                       </div>
                       </div>
                       </swiper-slide>
                       <swiper-slide>
                       <div class="theChef">
                       <img src="../assets/images/chef/c1.jpg" alt="">
                       <div class="text">
                        <h3>khaled sawada</h3>
                        <div class="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                       </div>
                       </div>
                       </swiper-slide>
                       <swiper-slide>
                       <div class="theChef">
                       <img src="../assets/images/chef/c2.jpg" alt="">
                       <div class="text">
                        <h3>khaled sawada</h3>
                        <div class="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                       </div>
                       </div>
                       </swiper-slide>
                       <swiper-slide>
                       <div class="theChef">
                       <img src="../assets/images/chef/c3.jpg" alt="">
                       <div class="text">
                        <h3>khaled sawada</h3>
                        <div class="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                       </div>
                       </div>
                       </swiper-slide>
                       <swiper-slide>
                       <div class="theChef">
                       <img src="../assets/images/chef/c4.jpg" alt="">
                       <div class="text">
                        <h3>khaled sawada</h3>
                        <div class="icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                       </div>
                       </div>
                       </swiper-slide>
                
           
              <!-- <div class="swiper-button-wp">
                                <div class="swiper-button-prev swiper-button">
                                    <i class="uil uil-angle-left"></i>
                                </div>
                                <div class="swiper-button-next swiper-button">
                                    <i class="uil uil-angle-right"></i>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div> -->
</swiper>
</div>
  

</template>

<script>




import {ref} from 'vue'
// Import Swiper Vue.js components
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay , EffectFade } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide ,  } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
// import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const swiperOptions = ref({
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    })
    return {
      onSwiper,
      onSlideChange,
      swiperOptions,
      modules: [Navigation, Pagination, Scrollbar, A11y , Autoplay, EffectFade],
    };
  },
};

</script>




<style lang="scss" scoped>
// .swiper{
//     width: 1000px;
//     height: 400px;
//     overflow: visible;
// }
h1{
    text-align: center;
    margin: 100px 0px;
}
.swiper-slide{
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: center;
}
.swiper-slide img{
    width: 90%;
    text-align: center;
    height: 100%;
}

.theChef{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.307);
    border-radius: 50px;
    gap: 30px;
    width: 700px;
    img{
        object-fit: cover;
        width: 100%;
        padding: 5px;
        border-radius: 50px;
             
    }
    .icons{
        display: flex;
        align-items: center;
        width: 100%;
        // justify-content: center;
        padding: 30px;
        // gap: 30px;
        i{
            font-size: 30px;
        background-color: #ccc;
        color: var(--maincolor);
        padding: 10px;
        border-radius: 50%;
        margin: 0px 10px;
        cursor: pointer;
        }
        
    }
}

.main{
    margin-top: 200px;
    margin-bottom: 100px;
    p{
        font-size: 40px;
    }
    h2{
        font-size: 50px;
    }
}


</style>