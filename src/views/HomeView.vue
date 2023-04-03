<template>
  <div class="container home">
    <img class="img berry" src="../assets/images/berry.png" alt="">
        <div class="container landing">
          <div class="text">
           <h1>welcome to our <span>restaurant</span></h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit quos eum facilis molestias hic nihil, aperiam minus. Omnis explicabo dolore
             cumque enim quisquam!
            Quisquam nisi quam beatae accusantium, doloribus voluptate.</p>
            <button class="btn btn-warning">check our menu</button>
          </div>
          <div class="image">
          <img src="../assets/images/main-b.jpg" alt="">
          </div>
        </div>
        <img class="img leaf" src="../assets/images/leaf.png" alt="">
  </div>
   <div class="brands">
     <!-- <span>trusted by 70+ compaines</span> -->
     <div class="brandsImg">
      <img src="../assets/images/brands/b1.png" alt="">
      <img src="../assets/images/brands/b2.png" alt="">
      <img src="../assets/images/brands/b3.png" alt="">
      <img src="../assets/images/brands/b4.png" alt="">
      <img src="../assets/images/brands/b5.png" alt="">
     </div>
   </div>

   <div class="container book">
     <h3>book table</h3>
     <h2>opening table</h2>
     <div class="lists">
      <div class="boxx">
       <h5>monday to tuesday</h5>
       <p>9:00am-22:00pm</p>
      </div>
      <div class="boxx">
        <i class="fa-solid fa-phone"></i>     
          <h4>+201021189596</h4>
      </div>
      <div class="boxx">
       <h5>friday to sunday</h5>
       <p>11:00am-20:00pm</p>
      </div>
     </div>
   </div>


   <div class="subscribe">
    <h2>subscribe our newsletter</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Itaque aliquid, repellat nemo corrupti tempore ducimus.</p>
    <div class="inp">
     <input type="email" placeholder="enter your email here">
     <span>submit</span>
    </div>
   </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>



<style lang="scss">
.landing{
  display: flex;
  align-items: center;
  gap: 30px;
  .text{
     display: flex;
     flex-direction: column;
     gap: 20px;
     text-align: center;
     h1{
      font-size: 40px;
      span{
        color: var(--maincolor);
      }
     }
     p{
      font-size: 18px;
     }
     button{
      // width: 10%;
      text-align: center;
      font-size: 20px;
      color: #fff;
     }
  }
  .image{
    img{
      width:500px;
      clip-path: circle(50% at 50% 50%);
      animation: animate 5s linear infinite;
    }
    @keyframes animate {
      0%{
        filter: hue-rotate(0deg);
        transform: translateY(0rem);
      }
      50%{
        transform: translateY(3rem);
      }
      100%{
        transform: translateY(0rem);
        filter: hue-rotate(360deg);
      }
    }

  }
}

.img{
  width: 150px;
  z-index: -11;
  filter: blur(3px);
  &.leaf{
    position: absolute;
    left: 0;
  }
  &.berry{
    position: absolute;
    right: 0;
  }
}


  .brands{
    margin-top: 80px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      margin-top: 50px;
      font-size: 30px;
    }
    .brandsImg{
    // display: flex;
    // align-items: center;
    // justify-content: center;
    display: grid;
    grid-template-columns: repeat(5 , 1fr);
      img{
        width: 250px;
        cursor: pointer;
        filter:grayscale(100%);
        transition: 0.5s;
        &:hover{
          filter: grayscale(0%);
        }
      }
    }
  }
  .book{
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('../assets/images/table-leaves-shape.png');
    background-size: contain;
    background-color: #fff;
    gap: 20px;
    padding: 50px;
    width: 90%;
    h3{
      background-color: #ccc;
      padding: 10px 15px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.479);
      border-radius: 20px;
      font-size: 30px;
      color: var(--maincolor);
    }
    h2{
      font-size: 30px;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        top: 110%;
        background-color: var(--maincolor);
        height: 3px;
        width: 100%;
      }
    }
    .lists{
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      .boxx{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        border-right: 3px dotted #333;
        padding: 30px;
        i{
          background-color: #ccc;
          padding: 20px;
          border-radius: 50%;
          font-size: 18px;
          color: var(--maincolor);
          cursor: pointer;
        }
        p{
          font-size: 20px;
        }
        h5{
          font-size: 22px;
        }
      }
    }
  }
  .subscribe{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    border-radius: 50px;
    background-image: url('../assets/images/news.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: 0%;
    width: 100%;
    color: #fff;
    height: 100%;
    text-align: center;
    h2{
      font-size: 30px;
    }
    p{
      font-size: 20px;
    }
    .inp{
      width: 90%;
      background-color: #fff;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 20px;
      padding: 10px;
      input{
        width: 90%;
        text-align: center;
        margin: 0px 5px;
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 18px;
        padding: 10px;
        color: #333;
      }
      span{
        width: 20%;
        text-align: center;
        font-size: 20px;
        background-color: var(--maincolor);
        padding: 20px;
        border-radius: 50px;
        cursor: pointer;
        margin-top: 20px;
      }
    }
  }
  @media (max-width: 1115px){
    .brands{
      .brandsImg{
      grid-template-columns: repeat(4,1fr);
    }
    }
  }
  @media(max-width: 992px){
    .book{
      .lists{
        flex-direction: column;
      }
    }
  }
  @media (max-width:940px){
    .landing{
      flex-direction: column;
    }
    .brands{
      .brandsImg{
      grid-template-columns: repeat(3,1fr);
    }
    }
  }
  @media (max-width:740px){
    .brands{
      .brandsImg{
      grid-template-columns: repeat(2,1fr);
    }
    }
  }
  @media (max-width:769px){
  .subscribe{
    .inp{
      flex-direction: column;
      width: 100%;
      span{
        width: 40%;
      }
    }
  }
  }



  @media(max-width:520px){
     .home{
      .landing{
        width: 100%;
        .text{
          width: 100%;
          h1{
            font-size: 30px;
          }
          p{
            width: 100%;
            font-size: 20px;
          }
          button{
            width: 100%;
          }
        }
        .image{
        width: 100%;
        img{
          width: 100%;
        }
        }
      }
     }  
     .brands{
      .brandsImg{
        grid-template-columns: repeat(1 , 1fr);
      }
     }
     .book{
      h3{
        // padding: 10px 80px;
      }
      h2{
        margin-bottom: 50px;
      }
      .lists{
        gap: 50px;
      }
     }
  }
</style>