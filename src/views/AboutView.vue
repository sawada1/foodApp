<template>
  <div class="container about">
    <h1>about us</h1>
    <div class="container thebox">
     <h2>discover our restaurant story</h2>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
     Cupiditate numquam sit quo nisi adipisci libero facere,
      iste explicabo aspernatur maiores! Expedita, repellat molestiae! 
     Fugiat perferendis laborum natus exercitationem necessitatibus. Eligendi?</p>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
     Cupiditate numquam sit quo nisi adipisci libero facere,
      iste explicabo aspernatur maiores! Expedita, repellat molestiae! 
     Fugiat perferendis laborum natus exercitationem necessitatibus. Eligendi?</p>
     <img src="../assets/images/about.jpg" alt="">
     <div class="thebtn">
      <i class="fa-solid fa-play"></i>
      <span>watch the recipe</span>
     </div>
     <div class="thevideo">
      <video control src="../assets/images/video.mp4" ></video>
     </div>
    </div>
  </div>
</template>


<script>

</script>


<style lang="scss" scoped>

.about{
  margin-top: 50px;
  margin-bottom: 50px;
}
  h1{
    text-align: center;
    color: #f1f1f1f1;
  }

  .thebox{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    .thevideo{
      // width: 100%;
      video{
        width: 100%;
      }
    }
    h2{
      color: #f1f1f1f1;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        width: 100%;
        background-color: var(--maincolor);
        top: 120%;
        height: 3px;
      }
    }
    p{
      font-size: 20px;
      color: #fff;
    }
    img{
      width: 100%;
      border-radius: 50px;
    }
    .thebtn{
      display: flex;
      align-items: center;
      gap: 20px;
      i{
        cursor: pointer;
        padding: 20px;
        font-size: 20px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.5s;
        &:hover{
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.404);
        }
      }
      span{
        font-size: 20px;
      }
    }
  }

</style>
