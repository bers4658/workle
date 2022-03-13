<template>
    <div>
      {{ userId }}
    <a href="#/general"> Назад
    </a>

        <!-- <div class="profile">
                
                    
                        <div>
                            <img class="photo_profile" :src="userId.user.profile_image.small">
                        </div>
                        <div class="name">
                            {{ userId.user.name }}
                        </div>
                        <div class="user_name">
                            {{ userId.user.username }}
                        </div>
                    
               
                <div>
                    <img class="img" :src="userId.urls.small">
                </div>
                <div class="views">
                    <span>
                        51 200
                    </span>
                    <span id="eye"></span>
                </div>
        </div> -->
        
    </div>
</template>



<script>
export default {
    name: 'Profile',
    data() {
        return {
            userId: ""
        }; 
    },
    mounted(){  
        this.userId = JSON.parse(localStorage.getItem('userId'))
    },
}
</script>

<style scoped>
.body{
    max-width: 1000px;
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;
}

.profile{
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    margin: 0px 10px 0px 10px;
    width: 320px;
    height: 312px;
    
}
.photo_profile{
    
    float: left;
    margin: 10px;
    border-radius: 100px;
    width: 30px;
    height: 30px;
}
.name{
    position: absolute;
    font-weight: bold;
    float: left;
    margin-top: 10px;
    margin-left: 50px;

}

.user_name{
    position: absolute;
    float: left;
    margin-top: 25px;
    margin-left: 50px;
}

.img{
    width: 320px;
    height: 230px;


 }

 .views{
    float: right;
    color: #8D8D8D;
 }

 #eye {
  display: inline-block;
  position: relative;
  width: 0.7em; /* ширина элемента */ 
  height: 0.7em; /* высота элемента */ 
  background: #8D8D8D; /* цвет иконки как цвет текста */ 
  border-radius: 70% 0 / 70%;
  transform: rotate(45deg);
  
  margin-right: 10px;
  margin-top: 3px;
}
#eye::before,
#eye::after {
  content: "";
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  background: #fff;
  border-radius: 100%;
}
#eye::after {
  width: 30%;
  height: 30%;
  top: 35%;
  left: 35%;
  background: inherit; /* цвет зрачка как у родителя */ 
}
</style>