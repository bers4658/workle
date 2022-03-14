<template>
    <div>
        <div class="body">
            {{ profiles.id }}
            <div class="profile">
                <div>
                    <img class="photo_profile" :src="userImg">
                </div>
                <div class="name">
                    {{ userProfileName }}
                </div>
                <div class="user_name">
                    @{{ userName }}
                </div>
                <div>
                    <img class="img" :src="img">
                </div>
                <div class="views">
                    <span>
                        {{ view }}
                    </span>
                    <span id="eye"></span>
                </div>
         </div>
    </div>
</div>    
</template>

<script>
import axios from 'axios'
export default {
    name: 'Profile',
    data() {
        return {
            userImg: {},
            userProfileName: {},
            userName: {},
            img: {},
            view:{},
            profiles: {}
        }; 
    },
    mounted(){  
        this.loadImg(),
        this.localStorage()
    },
    methods: {
        loadImg(){
            axios
            .get(`https://api.unsplash.com/photos/?client_id=vSZ88YrTBknu6CphDdw2FVIyBVwNW_ZR3SYuAFMc67c`)
            .then(response => {
                this.profiles = response.data[0]
            }); 
        }, 
        localStorage(){
            this.userImg = JSON.parse(localStorage.getItem('userImg'))
            this.userProfileName = JSON.parse(localStorage.getItem('userProfileName'))
            this.userName = JSON.parse(localStorage.getItem('userName'))
            this.img = JSON.parse(localStorage.getItem('img'))
            this.view = JSON.parse(localStorage.getItem('view'))
        },
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
  width: 0.7em; 
  height: 0.7em; 
  background: #8D8D8D; 
  border-radius: 70% 0 / 70%;
  transform: rotate(45deg);
  margin-right: 10px;
  margin-top: 3px;
  margin-left: 5px;
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
  background: inherit; 
}
</style>