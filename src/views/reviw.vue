<template>
    <div>
    <div class="text">
        <h1>what our customers say about us</h1>
       <img src="../assets/images/title-shape.svg" alt="">    
    </div>
     <div class=" testimon">
      <div class="image1">
       <img src="../assets/images/testimonial-img.png" alt="">
      </div>
      <div class="container allboxess">
       <div class="theboxx">
          <div class="pic">
            <img src="../assets/images/testimonials/kk.jpg" alt="">
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
          <h3>khaled sawada</h3>
          <p>Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Nostrum, soluta! Nisi ipsa
            illum distinctio consectetur?</p>
       </div>
       <div class="theboxx">
          <div class="pic">
            <img src="../assets/images/testimonials/t1.jpg" alt="">
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
          <h3>khaled sawada</h3>
          <p>Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Nostrum, soluta! Nisi ipsa
            illum distinctio consectetur?</p>
       </div>
       <div class="theboxx">
          <div class="pic">
            <img src="../assets/images/testimonials/t2.jpg" alt="">
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
          <h3>khaled sawada</h3>
          <p>Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Nostrum, soluta! Nisi ipsa
            illum distinctio consectetur?</p>
       </div>
       <div class="theboxx">
          <div class="pic">
            <img src="../assets/images/testimonials/t3.jpg" alt="">
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
          <h3>khaled sawada</h3>
          <p>Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Nostrum, soluta! Nisi ipsa
            illum distinctio consectetur?</p>
       </div>
      </div>
     </div>

     <div class="faq">
     <div class="text">
        <h1>frequnelty asked questiosns</h1>
       <img src="../assets/images/title-shape.svg" alt=""> 
     </div>
     <div class="container questions">
      <div class="quistion">
       <div class="ask">
        <h3>what are the login hours ?</h3>
        <i @click="check1 = !check1" class="fa-solid fa-chevron-down"></i>
        <hr>
        <p v-if="check1">Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Eum harum soluta perspiciatis
          perferendis quia, vitae nobis dolores 
        assumenda unde! Autem iusto atque quas 
        delectus rem, amet modi culpa soluta illo?</p>
       </div>
      </div>
      <div class="quistion">
       <div class="ask">
        <h3>what are the login hours ?</h3>
        <i @click=" check2 = !check2" class="fa-solid fa-chevron-down"></i>
        <hr>
        <p v-if="check2">Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Eum harum soluta perspiciatis
          perferendis quia, vitae nobis dolores 
        assumenda unde! Autem iusto atque quas 
        delectus rem, amet modi culpa soluta illo?</p>
       </div>
      </div>
      <div class="quistion">
       <div class="ask">
        <h3>what are the login hours ?</h3>
        <i @click="check3 = !check3" class="fa-solid fa-chevron-down"></i>
        <hr>
        <p v-if="check3">Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Eum harum soluta perspiciatis
          perferendis quia, vitae nobis dolores 
        assumenda unde! Autem iusto atque quas 
        delectus rem, amet modi culpa soluta illo?</p>
       </div>
      </div>
      <div class="quistion">
       <div class="ask">
        <h3>what are the login hours ?</h3>
        <i @click=" check4 = !check4" class="fa-solid fa-chevron-down"></i>
        <hr>
        <p v-if="check4">Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Eum harum soluta perspiciatis
          perferendis quia, vitae nobis dolores 
        assumenda unde! Autem iusto atque quas 
        delectus rem, amet modi culpa soluta illo?</p>
       </div>
      </div>
      <div class="quistion">
       <div class="ask">
        <h3>what are the login hours ?</h3>
        <i @click="check5 =!check5" class="fa-solid fa-chevron-down"></i>
        <hr>
        <p v-if="check5">Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Eum harum soluta perspiciatis
          perferendis quia, vitae nobis dolores 
        assumenda unde! Autem iusto atque quas 
        delectus rem, amet modi culpa soluta illo?</p>
       </div>
      </div>
      <div class="quistion">
       <div class="ask">
        <h3>what are the login hours ?</h3>
        <i @click="check6 = !check6" class="fa-solid fa-chevron-down"></i>
        <hr>
        <p v-if="check6" class="active">Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Eum harum soluta perspiciatis
          perferendis quia, vitae nobis dolores 
        assumenda unde! Autem iusto atque quas 
        delectus rem, amet modi culpa soluta illo?</p>
       </div>
      </div>
     </div>
     </div>

    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        let check1 = ref(false);
        let check2 = ref(false);
        let check3 = ref(false);
        let check4 = ref(false);
        let check5 = ref(false);
        let check6 = ref(false);
        return{
            check1,
            check2,
            check3,
            check4,
            check5,
            check6,
        }
    }
}


</script>

<style lang="scss" scoped>
.text{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 20px;
    h1{
        color: #f1f1f1f1;
        font-size: 25px;
    }
}
.testimon{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .image1{
        img{
            width: 400px;
        }
    }
    .allboxess{
        margin: 50px 0px;
        display: grid;
        grid-template-columns: repeat(2 , 1fr);
        gap: 30px;
        .theboxx{
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.469);
            background-color: #fff;
            margin: 40px 0px;
            padding: 30px 50px;
            position: relative;
            border-radius: 20px;
            cursor: pointer;
            .pic{
                display: flex;
                align-items: center;
                position: relative;
                width: 100%;
                justify-content: space-around;
                .stars{
                    i{
                        color: var(--maincolor);
                    }
                }
            }
            img{
                position: absolute;
                left: -10%;
                bottom: 20%;
                width: 110px;
                border-radius: 50%;
            }
        }
    }
}

.faq{

    .questions{
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        gap: 20px;
        .quistion{
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.464);
          padding: 10px;
          display: flex;
          align-items: center;
          flex-direction: column;
          background-color: #fff;
          border-radius: 30px;
          position: relative;
          overflow: hidden;
          .ask{

            h3{
              
            }
            // width: 100%;
            // display: flex;
            // align-items: center;
            // justify-content: space-between;
            // padding: 10px;
            i{
                font-size: 18px;
                cursor: pointer;
            }
          }
          p{
            // height: 0px;
            // transform: translateY(500px);
            // &.active{
            // height: fit-content;
            // transform: translateY(0px);
            // }
          }

        }
    }
}

@media (max-width:769px){
    .testimon{
        .allboxess{
            grid-template-columns: repeat(1 , 1fr);
        }
    }
}
@media (max-width:993px){
    .faq{
        .questions{
        grid-template-columns: repeat(2 , 1fr);
    }
    }
  
}
@media (max-width:768px){
    .faq{
        .questions{
        grid-template-columns: repeat(1 , 1fr);
    }
    }
  
}
</style>