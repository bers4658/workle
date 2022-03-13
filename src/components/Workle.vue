<template>
    <div>
        <div class="body">
            <div class="profile" v-for="profile in profiles" :key="profile.id">
                <div 
                    @click="saveIdInLocalStorage(profile)"
                    style="cursor: pointer"
                >
                    <a 
                        :href="`#/profile/${profile.id}`" 
                        target="_blank"
                    >
                        <div>
                            <img
                                class="photo_profile"
                                :src="profile.user.profile_image.small"
                            >
                        </div>
                        <div class="name">
                            {{ profile.user.name }}
                        </div>
                        <div class="user_name">
                            @{{ profile.user.username }}
                        </div>
                    </a>
                </div>
                <div>
                    <img class="img" :src="profile.urls.small">
                </div>
                <div class="views">
                    <span>
                        {{ profile.likes }}
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
    name: 'Workle',
    data() {
        return {
            profiles: {},

        }; 
    },
    mounted(){
        this.loadImg()
    },
    methods: {
        loadImg(){
            axios
            .get(`https://api.unsplash.com/photos/?client_id=vSZ88YrTBknu6CphDdw2FVIyBVwNW_ZR3SYuAFMc67c`)
            .then(response => {
                this.profiles = response.data
            });
        },
        saveIdInLocalStorage(id){
            let parsedUserId = JSON.stringify(id)
            localStorage.setItem("userId",parsedUserId)
        }
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
 #eye{
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
#eye::after{
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