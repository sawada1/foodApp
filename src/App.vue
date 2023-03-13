<template>
 <navbar/>
  <router-view/>
  <div class="footer">
   <div class="cont">
    <div class="box">
     <div class="logo">
     <img src="./assets/logo.png" alt="">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
       Nam veniam ducimus reiciendis error laboriosam possimus?</p>
       <div class="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
       </div>
     </div>
    </div>
    <div class="box">
    <h2>open hours</h2>
    <div class="time">
      <i class="fa-regular fa-clock"></i>
      <span>mon-tue 9am - 22pm </span>
    </div>
    <div class="time">
      <i class="fa-regular fa-clock"></i>
      <span>mon-tue 9am - 22pm </span>
    </div>
    </div>
    <div class="box">
    <h2>links</h2>
    <div class="thelinks">
     <span>home</span>
     <span>about</span>
     <span>menu</span>
     <span>gallery</span>
     <span>blog</span>
     <span>contact</span>
    </div>
    </div>
    <div class="box">
    <h2>company</h2>
    <div class="thelinks">
     <span>terms and conditions</span>
     <span>private policy</span>
     <span>cookie policy</span>
    </div>
    </div>
   </div>
   <h4>copyright @ 2023 created by <span>khaled sawada</span></h4>
  </div>
</template>




<script>
import navbar from './components/navbar.vue'
export default {
  components:{
    navbar,
  }
}
</script>
<style lang="scss">
:root{
  --maincolor: rgb(255, 174, 24);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
body{
  background-color: #ccc;
  overflow-x: hidden;
}

a{
  color: #333;
}



.footer{
  i{
    color: var(--maincolor);
  }
  background-color: #fff;
  padding: 30px;
  margin-top: 30px;
  .cont{
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 20px;
   .box{
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
      font-size: 20px;
    }
    .icons{
      display: flex;
      align-items: center;
      gap: 30px;
      i{
        background-color: #333;
        padding: 20px;
        border-radius: 50%;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transition: 0.5s;
        &:hover{
          background-color: var(--maincolor);
        }
      }
    }

    .time{
      display: flex;
      align-items: center;
      gap: 5px;
      span{
        font-size: 20px;
      }
    
    }
    .thelinks{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      span{
       cursor: pointer;
       font-size: 18px;
       transition: 0.5s;
       &:hover{
        color: var(--maincolor);
       }
      }
    }
   }
  }
  h4{
    margin-top: 30px;
    text-align: center;
    span{
      color: var(--maincolor);
    }
  }
}
@media (max-width:1008px){
  .footer{
    .cont{
      grid-template-columns: repeat(3 , 1fr);
    }
  }
}
@media (max-width:807px){
  .footer{
    .cont{
      grid-template-columns: repeat(2 , 1fr);
    }
  }
}
@media (max-width:740px){
  .footer{
    text-align: center;
    .cont{
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
@media (max-width:380px){
  .footer{
    .cont{
        .box{
          .icons{
            flex-direction: column;
          }
        }
    }
  }
}
</style>
