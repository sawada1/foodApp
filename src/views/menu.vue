<template>
    <div class=" menu">
      <h1>our menu</h1>
      <div class="container themenu">
       <h2>wake up early, eat fresh and healthy</h2>
       <div class="thelist">
       <div class="theimg" @click="theActive = 1; " :class="{'active': theActive == 1}">
        <img src="../assets/images/menu-1.png" alt="">
        <span>all</span>
       </div>
       <div class="theimg" @click="theActive = 2; " :class="{'active': theActive ==2 }">
        <img src="../assets/images/menu-2.png" alt="">
        <span>breakfast</span>
       </div>
       <div class="theimg" @click="theActive = 3; " :class="{'active': theActive == 3}">
        <img src="../assets/images/menu-3.png" alt="">
        <span>lunch</span>
       </div>
       <div class="theimg" @click=" theActive = 4 " :class="{'active': theActive == 4}">
        <img src="../assets/images/menu-4.png" alt="" >
        <span>dinner</span>
       </div>
       </div>
       <div class="themain">
        <div class=" allitems">
        <div class="item "  :class="{'active': theActive == 2}">
        <img src="../assets/images/dish/1.png" alt="">
         <div>
          <span>5</span>
          <i class="fa-solid fa-star"></i>
         </div>
         <h4>fresh chieken veggies</h4>
          <p>150 calrories</p>
          <hr>
          <div class="price">
           <h3>price: <span>500</span></h3>
           <i class="fa-solid fa-plus"></i>
          </div>
       </div>
       <div class="item"  :class="{'active': theActive == 2}">
        <img src="../assets/images/dish/2.png" alt="">
         <div>
          <span>5</span>
          <i class="fa-solid fa-star"></i>
         </div>
         <h4>fresh chieken veggies</h4>
          <p>150 calrories</p>
          <hr>
          <div class="price">
           <h3>price: <span>500</span></h3>
           <i class="fa-solid fa-plus"></i>
          </div>
       </div>
       <div class="item" :class="{'active': theActive == 2}" >
        <img src="../assets/images/dish/3.png" alt="">
         <div>
          <span>5</span>
          <i class="fa-solid fa-star"></i>
         </div>
         <h4>fresh chieken veggies</h4>
          <p>150 calrories</p>
          <hr>
          <div class="price" >
           <h3>price: <span>500</span></h3>
           <i class="fa-solid fa-plus"></i>
          </div>
       </div>
       <div class="item"  :class="{'active': theActive == 2,'active':theActive ==3}" >
        <img src="../assets/images/dish/4.png" alt="">
         <div>
          <span>5</span>
          <i class="fa-solid fa-star"></i>
         </div>
         <h4>fresh chieken veggies</h4>
          <p>150 calrories</p>
          <hr>
          <div class="price">
           <h3>price: <span>500</span></h3>
           <i class="fa-solid fa-plus"></i>
          </div>
       </div>
       <div class="item"  :class="{'active': theActive == 3,'active':theActive ==4}" >
        <img src="../assets/images/dish/5.png" alt="">
         <div>
          <span>5</span>
          <i class="fa-solid fa-star"></i>
         </div>
         <h4>fresh chieken veggies</h4>
          <p>150 calrories</p>
          <hr>
          <div class="price">
           <h3>price: <span>500</span></h3>
           <i class="fa-solid fa-plus"></i>
          </div>
       </div>
       <div class="item"  :class="{'active': theActive == 3,'active':theActive ==4}" >
        <img src="../assets/images/dish/6.png" alt="">
         <div>
          <span>5</span>
          <i class="fa-solid fa-star"></i>
         </div>
         <h4>fresh chieken veggies</h4>
          <p>150 calrories</p>
          <hr>
          <div class="price">
           <h3>price: <span>500</span></h3>
           <i class="fa-solid fa-plus"></i>
          </div>
       </div>
     
       </div>  
       </div>
        <div class="container checks">
         <img src="../assets/images/pizza.png" alt="">
         <div>
         <h2>chicken pepproni</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quibusdam odit atque accusamus architecto expedita vel? Est magnam eveniet
           commodi aliquid consectetur quo, illo consequuntur, officiis ea incidunt
            rerum voluptatibus. Nisi, magnam incidunt ea aspernatur dicta sint quae at sapiente 
         voluptatibus dolore dolorum sunt inventore et in quidem, error, recusandae fugiat?</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quibusdam odit atque accusamus architecto expedita vel? Est magnam eveniet
           commodi aliquid consectetur quo, illo consequuntur, officiis ea incidunt
            rerum voluptatibus. Nisi, magnam incidunt ea aspernatur dicta sint quae at sapiente 
         voluptatibus dolore dolorum sunt inventore et in quidem, error, recusandae fugiat?</p>     
         </div>
    
        </div>
    
        <div class="container checks">
         <div>
            <h2>roll sushi</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quibusdam odit atque accusamus architecto expedita vel? Est magnam eveniet
           commodi aliquid consectetur quo, illo consequuntur, officiis ea incidunt
            rerum voluptatibus. Nisi, magnam incidunt ea aspernatur dicta sint quae at sapiente 
         voluptatibus dolore dolorum sunt inventore et in quidem, error, recusandae fugiat?</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quibusdam odit atque accusamus architecto expedita vel? Est magnam eveniet
           commodi aliquid consectetur quo, illo consequuntur, officiis ea incidunt
            rerum voluptatibus. Nisi, magnam incidunt ea aspernatur dicta sint quae at sapiente 
         voluptatibus dolore dolorum sunt inventore et in quidem, error, recusandae fugiat?</p>     
         </div>
         <img src="../assets/images/sushi.png" alt="">

        </div>
    
      </div>  
    </div>
</template>

<script>
import {ref} from 'vue'
export default {

    setup(){
      let theActive = ref(1);
      let dataItem = ref(null);
      const print = () =>{
        console.log(dataItem.value);
      }
      
      return{theActive , dataItem , print}
    }
}

</script>

<style lang="scss" scoped>
 h1{
    text-align: center;
    color: #fff;
 }
 h2{
  text-align: center;
 }
 .menu{
    margin: 50px 0px;
    .themenu{
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
        gap: 20px;
        width: 100%;
        .thelist{
          width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            background-color: #fff;
            padding: 20px;
            border-radius: 20px;
            .theimg{
              width: 100%;
                display: flex;
                align-items: center;
                gap: 20px;
                padding: 10px;
                border-radius: 20px;
                cursor: pointer;
                &.active{
                    background-color: var(--maincolor);
                }
            }
        }

        .allitems{
            
            i{
                color: var(--maincolor);
                font-size: 18px;
            }
            display: grid;
            grid-template-columns: repeat(3 , 1fr);
            gap: 10px;
            margin-bottom: 100px;
            .item{
            display: flex;
          align-items: center;
          flex-direction: column;
          width: 380px;
          justify-content: flex-end;
          gap: 10px;
          border-radius: 50px;
          padding: 20px;
          margin: 100px 10px;
          position: relative;
          background-color: #fff;
          height: 500px;
          cursor: pointer;
          transition: 0.7s;
          &.shrink{
            // width: 0em;
            // margin: -1em;
            // transform: translateX(-500%);
            opacity: 0;
          }
          &.active{
            display: none;
          }
          &:hover{
            transform: translateY(-10px);
          }
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.528);
          img{
            position: absolute;
            top: -20%;
            z-index: 11111;
          }
           .price{
            width: 100%;
            display: flex;
            align-items: center;
            padding: 20px;
            justify-content: space-between;
            i{
                color:#fff;
                background-color: var(--maincolor);
                padding: 20px;
                cursor: pointer;
                border-radius: 50%;
            }
            // gap: 20px;
          }
        }
        }
       
    }
    .checks{
        margin-bottom: 80px;
        display: flex;
        align-items: center;
        gap: 30px;
        img{
            width: 400px;
        }
        p{
          color: gray;
        }
        h2{
            font-size: 40px;
            color: #fff;
        }
    }
  
 }

 @media (max-width: 1120px){
    .menu{
        .themenu{
            .allitems{
        grid-template-columns: repeat(2 , 1fr);
    }
    
        }
 
    }
 
 }
 @media (max-width: 820px){
    .menu{
        .themenu{
            .allitems{
        grid-template-columns: repeat(1 , 1fr);
    }

        }
 
    }
 
 }
 @media (max-width: 770px){
  .checks{
    flex-direction: column;
    align-items: center;
  }
  .menu{
    .themenu{
      flex-direction: column;
      .thelist{
        flex-direction: column;
      }
    }
  }
 }

</style>