<template>
    <div>
        <div class="my_block">
            <div>
                <img class="my_photo" src="IMG_0594.png">
            </div>
            <div class="my_name">Горбунов Иван</div>
        </div>
        <header class="header">      
            <div>
                <img class="photo_profile" :src="profileImg">
            </div>
            <div>
                <b>Name:</b> {{ profiles.name }}
            </div>
            <div>
                <b>User name:</b> @{{ profiles.username }}
            </div>
        </header>
        <h1>Горбунов Иван</h1>
        <h1>Тестовое задание</h1>
    </div>    
</template>

<script>
import axios from 'axios'
export default {
    name: 'Profile',
    data() {
        return {
            profiles: {},
        }; 
    },
    mounted(){  
        this.localStorage(),
        this.loadImg(),
        this.loadName()
    },
    methods: {
        localStorage(){
            this.index = JSON.parse(localStorage.getItem('index'))
        },
        loadImg(){
            axios
            .get(`https://api.unsplash.com/photos/?client_id=vSZ88YrTBknu6CphDdw2FVIyBVwNW_ZR3SYuAFMc67c`)
            .then(response => {
                this.profileImg = response.data[this.index].user.profile_image.large
            }); 
        }, 
        loadName(){
            axios
            .get(`https://api.unsplash.com/photos/?client_id=vSZ88YrTBknu6CphDdw2FVIyBVwNW_ZR3SYuAFMc67c`)
            .then(response => {
                this.profiles = response.data[this.index].user
            }); 
        }  
    }
}
</script>

<style scoped>
.header{
    background: linear-gradient(to bottom, #003399 0%, #ffffff 100%);
    border-radius: 10px;
}
.my_block{
    position: absolute; 
}
    @media(max-width: 480px){
        .my_block{
            display: none;
        }
    }
.my_photo{
    position: relative;
    display: inline-block;
    margin: 20px 0px 0px 0px;
    border-radius: 100px;
    width: 30px;
    height: 30px;
}
.my_name{
    display: inline-block;
    position: relative;
    font-weight: bold;
    margin: 10px;
    color: #333333;
}
.photo_profile{
    position: relative;
    margin: 20px 0px 20px 0px;
    border-radius: 100px;
    width: 150px;
    height: 150px;
}
 h1{
    text-shadow: 0 1px 0 #ccc,
                 0 2px 0 #c9c9c9,
                 0 3px 0 #bbb,
                 0 4px 0 #b9b9b9,
                 0 5px 0 #aaa,
                 0 6px 1px rgba(0,0,0,.1),
                 0 0 5px rgba(0,0,0,.1),
                 0 1px 3px rgba(0,0,0,.3),
                 0 3px 5px rgba(0,0,0,.2),
                 0 5px 10px rgba(0,0,0,.25),
                 0 10px 10px rgba(0,0,0,.2),
                 0 20px 20px rgba(0,0,0,.15); 
    }
</style>