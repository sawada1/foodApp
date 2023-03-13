<template>
    <div>
        <div class="text">
         <h1 style="color:#f1f1f1">our blogs</h1>
         <img src="../assets/images/title-shape.svg" alt="">
        </div>
        <div class="container blogs">
         <div class="blog">
          <img src="../assets/images/blog/blog1.jpg" alt="">
          <span>septmeber 15 2023</span>
          <h5>energy drink which you can make at home</h5>
          <p>Lorem, ipsum dolor sit amet
           consectetur adipisicing elit.
            Labore et quas reiciendis iure molestias ullam!</p>
            <button class="btn btn-outline-warning">read more</button>
         </div>
         <div class="blog">
          <img src="../assets/images/blog/blog2.jpg" alt="">
          <span>septmeber 15 2023</span>
          <h5>energy drink which you can make at home</h5>
          <p>Lorem, ipsum dolor sit amet
           consectetur adipisicing elit.
            Labore et quas reiciendis iure molestias ullam!</p>
            <button class="btn btn-outline-warning">read more</button>
         </div>
         <div class="blog">
          <img src="../assets/images/blog/blog3.jpg" alt="">
          <span>septmeber 15 2023</span>
          <h5>energy drink which you can make at home</h5>
          <p>Lorem, ipsum dolor sit amet
           consectetur adipisicing elit.
            Labore et quas reiciendis iure molestias ullam!</p>
            <button class="btn btn-outline-warning">read more</button>
         </div>
         <div class="blog">
          <img src="../assets/images/blog/blog1.jpg" alt="">
          <span>septmeber 15 2023</span>
          <h5>energy drink which you can make at home</h5>
          <p>Lorem, ipsum dolor sit amet
           consectetur adipisicing elit.
            Labore et quas reiciendis iure molestias ullam!</p>
            <button class="btn btn-outline-warning">read more</button>
         </div>
         <div class="blog">
          <img src="../assets/images/blog/blog2.jpg" alt="">
          <span>septmeber 15 2023</span>
          <h5>energy drink which you can make at home</h5>
          <p>Lorem, ipsum dolor sit amet
           consectetur adipisicing elit.
            Labore et quas reiciendis iure molestias ullam!</p>
            <button class="btn btn-outline-warning">read more</button>
         </div>
         <div class="blog">
          <img src="../assets/images/blog/blog3.jpg" alt="">
          <span>septmeber 15 2023</span>
          <h5>energy drink which you can make at home</h5>
          <p>Lorem, ipsum dolor sit amet
           consectetur adipisicing elit.
            Labore et quas reiciendis iure molestias ullam!</p>
            <button class="btn btn-outline-warning">read more</button>
         </div>
         <div class="blog">
          <img src="../assets/images/blog/blog1.jpg" alt="">
          <span>septmeber 15 2023</span>
          <h5>energy drink which you can make at home</h5>
          <p>Lorem, ipsum dolor sit amet
           consectetur adipisicing elit.
            Labore et quas reiciendis iure molestias ullam!</p>
            <button class="btn btn-outline-warning">read more</button>
         </div>
         <div class="blog">
          <img src="../assets/images/blog/blog2.jpg" alt="">
          <span>septmeber 15 2023</span>
          <h5>energy drink which you can make at home</h5>
          <p>Lorem, ipsum dolor sit amet
           consectetur adipisicing elit.
            Labore et quas reiciendis iure molestias ullam!</p>
            <button class="btn btn-outline-warning">read more</button>
         </div>
         <div class="blog">
          <img src="../assets/images/blog/blog3.jpg" alt="">
          <span>septmeber 15 2023</span>
          <h5>energy drink which you can make at home</h5>
          <p>Lorem, ipsum dolor sit amet
           consectetur adipisicing elit.
            Labore et quas reiciendis iure molestias ullam!</p>
            <button class="btn btn-outline-warning">read more</button>
         </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.text{
    text-align: center;
    margin: 70px 0px;
}

.blogs{
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    gap: 30px;
    .blog{
        img{
            object-fit: contain;
            width: 100%;
        }
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.491);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 15px;
        background-color: #fff;
        border-radius: 30px;
        margin: 20px 10px;
        transition: 0.5s;
        &:hover{
            transform: translateY(-10px);
        }
    }
}


@media (max-width:992px){
    .blogs{
        grid-template-columns: repeat(2 , 1fr);
    }
}
@media (max-width:768px){
    .blogs{
        grid-template-columns: repeat(1 , 1fr);
    }
}
</style>