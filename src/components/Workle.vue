<template>
    <div>
        <div class="header">
            <img class="photo_profile" src="IMG_0594.png">
            <div class="name">Тестовое задание</div>
            <div class="user_name">Горбунов Иван</div>  
            <h1>Workle</h1>
            
        </div>
        <div class="body">
            <div class="profile" v-for="profile in profiles" :key="profile.id">
                <div style="cursor: pointer">
                    <a
                        target="blank"
                        :href="`#/profile/${profile.id}`"
                        @click="saveLocalStorage(profile)">
                        <div>
                            <img class="photo_profile" :src="profile.user.profile_image.small">
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
         <div class="footer">
            <ul @click="addCounter()">
                <li><a href="#" @click="counter--">...</a></li>
                <li><a class="block" id="block_1" href="#" @click="counter = 1">1</a></li>
                <li><a class="block" id="block_2" href="#" @click="counter = 2">2</a></li>
                <li><a class="block" id="block_3" href="#" @click="counter = 3">3</a></li>
                <li><a class="block" id="block_4" href="#" @click="counter = 4">4</a></li>
                <li><a class="block" id="block_5" href="#" @click="counter = 5">5</a></li>
                <li><a href="#" @click="counter++">...</a></li>
            </ul>   
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
            counter: 1
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
        saveLocalStorage(profile){
            this.saveProfileImageInLocalStorage(profile.user.profile_image.small)
            this.saveProfileNameInLocalStorage(profile.user.name)
            this.saveUserNameInLocalStorage(profile.user.name)
            this.saveImageInLocalStorage(profile.urls.small)
            this.saveViewInLocalStorage(profile.likes)
        },
        saveProfileImageInLocalStorage(img){
            let parsedUserImg = JSON.stringify(img)
            localStorage.setItem("userImg",parsedUserImg)
        },
        saveProfileNameInLocalStorage(name){
            let parsedProfileUserName = JSON.stringify(name)
            localStorage.setItem("userProfileName",parsedProfileUserName)
        },
        saveUserNameInLocalStorage(userName){
            let parsedProfileUserName = JSON.stringify(userName)
            localStorage.setItem("userName",parsedProfileUserName)
        },
        saveImageInLocalStorage(img){
            let parsedImg = JSON.stringify(img)
            localStorage.setItem("img",parsedImg)
        },
        saveViewInLocalStorage(view){
            let parsedView = JSON.stringify(view)
            localStorage.setItem("view",parsedView)
        },
        addCounter(){
            let blocks = document.querySelectorAll('.block')
            for(let i = 1; i < blocks.length; i++) {
                blocks[i].addEventListener('click', () => {
                    this.counter = i
                    this.claerActiveBlock(blocks)
                    blocks[i].classList.add('active')             
                })
            }
        },
        claerActiveBlock(blocks){
            blocks.forEach((blockColor) => {
                blockColor.classList.remove('active')
            })
        }
    },
}
</script>

<style scoped>
.header {
    max-width: 1000px;
    position: relative;
	height: 50px;
	background-color: #a1a1a1;
	margin: 0px auto 0px auto;
    width: 900px;
    color: #1b0a4b;
}
    @media (max-width: 1000px){
        .header{
            width: 660px;
        }
    }
    @media (max-width: 768px){
        .header{
            width: 440px;
        }
    }
    @media (max-width: 480px){
        .header{
            width: 320px;
        }
    }
    .header h1 {
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
        position: relative;
        float: right;
        margin: 3px 10px 0px 0px ;
        
    }
.body{
    max-width: 1000px;
    margin: 0px auto 0 auto
}
    @media( max-width: 1000px ){
        .body{
            max-width: 768px;
        }
    }
    @media( max-width: 768px){
        .body{
            max-width: 480px;
        }
    }
    @media(max-width:480px ){
        .body{
            max-width: 320px;
        }
    }
.profile{
    display: inline-block;
    margin: 0px 10px 0px 10px;
    width: 440px;
    height: 380px;
}
    @media (max-width: 1000px){
        .profile{
            width: 320px;
            height: 230px;
        }
    }
    @media (max-width: 768px){
        .profile{
            width: 440px;
            height: 380px;
        }
    }
    @media (max-width: 480px){
        .profile{
            width: 320px;
            height: 230px;
        }
    }
.photo_profile{
    float: left;
    margin: 10px;
    border-radius: 100px;
    width: 30px;
    height: 30px;
}
    @media(max-width: 320px){
        .name{
            float: none;
        }
    }
.name{
    position: absolute;
    font-weight: bold;
    float: left;
    margin: 10px 0px 0px 50px;
}
    @media(max-width: 320px){
        .name{
            display: none;
        }
    }
.user_name{
    position: absolute;
    float: left;
    margin: 25px 0px 0px 50px;
}
    @media(max-width: 320px){
        .user_name{
            display: none;
        }
    }
.img{
    width: 440px;
    height: 300px;
}
    @media (max-width: 1000px){
        .img{
            width: 320px;
            height: 230px;
        }
    }
    @media (max-width: 768px){
        .img{
            width: 440px;
            height: 300px;
        }
    }
    @media (max-width: 480px){
        .img{
            width: 320px;
            height: 230px;
        }
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
.footer {
    max-width: 1000px;
    position: relative;
	height: 45px;
	background-color: #a1a1a1;
    position: relative;
	margin: 20px auto 0px auto;
    width: 900px;
}
    @media (max-width: 1000px){
        .footer{
            width: 660px;
        }
    }
    @media (max-width: 768px){
        .footer{
            width: 440px;
        }
    }
    @media (max-width: 480px){
        .footer{
            width: 320px;
        }
    }
ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: 25px;
    background-color: #fff;
    box-shadow: 0 15px 20px rgba(0,0,0,.5), 0 0 0 4px #727272;
}
ul li {
    list-style: none;
}
ul li a {
    display: block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: #fff;
    color: #262626;
    text-decoration: none;
    border-radius: 4px;
    margin: 5px;
    box-shadow: inset 0 5px 10px rgba(0,0,0,.1), 0 2px 5px rgba(0,0,0,.5);
}
ul li:first-child a {
    border-radius: 20px 0 0 20px;
}
ul li:last-child a {
    border-radius: 0 20px 20px 0;
}
ul li a.active,
ul li a:hover {
    background-color: #4e4e4e;
    color: #fff
}
</style>