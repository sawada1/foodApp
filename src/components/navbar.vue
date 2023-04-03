<template>
    <div>
        <div class=" navbarr">
         <div class="logo">
         <router-link to="/">
            <img src="../assets/logo.png" alt="">         
         </router-link>
         </div>
         <div class="list" :class="{'active': check}">
            <i @click="toggle" class="fa-solid fa-xmark close"></i>
          <ul>
          <li> 
          <router-link to="/" >
           home
          </router-link>
          </li>
          <li> 
          <router-link to="/about" >
            about       
          </router-link>
          </li>
          <li> 
          <router-link to="/menu"  >
            menu       
          </router-link>
          </li>
          <li> 
          <router-link to="/gallery"  >
            gallery       
          </router-link>
          </li>
          <li> 
          <router-link to="/blogs"  >
            blogs      
          </router-link>
          </li>
          <li>
            <router-link to="/review"  >
            review     
          </router-link>
          </li>
         
          </ul>
          <div class="serachBar">
           <div class="input">
               <input type="search" placeholder="search here...">
               <i class="fa-solid fa-magnifying-glass"></i>           
           </div>
           <div class="cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>3</span>
           </div>
          </div>
         </div>
         <div class="mainbar">
            <i class="fa-solid fa-user"></i>
         <div class="bar">
            <i @click="toggle"  class="fa-solid fa-bars"></i>         
         </div>     
         </div>
    
        </div>
    </div>
</template>

<script>
 import {ref } from 'vue';
 export default {
  setup(){
    let check = ref(false);
    let activee = ref(1);
    let toggle = () =>{
        check.value = !check.value
    }



    return{toggle , check , activee}
  }
 }
</script>

<style lang="scss" scoped>
.navbarr{
    position: relative;
    color: var(--maincolor);
    background-color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 11111111;
    .list{
        display: flex;
        gap: 10px;
        align-items: center;
        .close{
            display: none;
        }
        ul{
            display: flex;
            align-items: center;
            li{
                margin: 0px 10px;
                a{
                    font-size: 18px;
                    padding: 10px; 
                    transition: 0.5s;
                    text-decoration: none;
                    color: #333;
                    border-radius: 20px;
                    &:hover{
                      box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.478);
                      color: var(--maincolor);
                    }


               &.router-link-exact-active {
               box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.478);
            color: var(--maincolor);

              }
  
                }
            }
        }
        .serachBar{
            display: flex;
            align-items: center;
            gap: 30px;
            .input{
                position: relative;
                input{
                    border: none;
                    outline: none;
                    background-color: transparent;
                    font-size: 16px;
                }
                padding: 10px;
                border-radius: 20px;
                box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.387);
            }
            .cart{
                position: relative;
                span{
                    position: absolute;
                    top: -21%;
              font-size: 20px;             
                    border-radius: 50%;
                }
            }
        }

    }
    i{
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.451);
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
    }
    .bar{
        display: none;
    }
}

@media (max-width:1100px){
    .navbarr{
        .list{
            gap: 5px;
            ul{
                gap: 5px;
                li{
                    margin: 5px;
                    a{
                        font-size: 18px;
                    }
                }

            }
            .serachBar{
                gap: 10px;
            }
        }
        i{
            font-size: 15px;
        }
    }
}

@media(max-width:1040px){
    .navbarr{
        .serachBar{
         input{
            width: 100px;
            font-size: 10px;
            padding: 0px;
         }
     }
    }
   
}
@media(max-width:940px){
 .navbarr{
    .list{
        ul{
            li{
                a{
                    font-size: 15px;
                }
            }
        }
    }
 }
}
@media(max-width:860px){
 .navbarr{
    i{
        color: #222;
    }
    .list{
        transition: 0.5s;
        transform: translateX(150%);
        justify-content: space-around;
        background-color: var(--maincolor);
        padding: 30px;
        position: fixed;
        top: 0%;
        right: 0px;
        height: 100vh;
        z-index: 2222;
        flex-direction: column;
        .close{
            display: block;
            position: absolute;
            top: 10px;
            left: 30px;
        }
        ul{
            gap: 20px;
            flex-direction: column;
            li{
                a{
                font-size: 20px;
                color: #fff;


                &:hover{
                      box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.478);
                      color: #fff;
                    }


               &.router-link-exact-active {
               box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.478);
            color: #fff;    

              }
            }
            }
           
        }
        .serachBar{
            flex-direction: column;
            gap: 20px;
           
            input{
                background-color: #fff;
                width: 200px;
                color: #fff;
            }
        }
    }
    i{
        font-size: 20px;
    }
    .mainbar{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .bar{
        display: block;
    }
    .list.active{
        transform: translateX(0);
    }
 }
}

</style>