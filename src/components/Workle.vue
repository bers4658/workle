<template>
    <div>
        <header class="header">
            <img class="photo_profile" src="IMG_0594.png">
            <div class="name">Тестовое задание</div>
            <div class="user_name">Горбунов Иван</div>  
            <h1>Горбунов Иван</h1>
        </header>
        <main class="main">
            <div v-for="(profile, index) in profiles" :key="profile.id" class="profile">
                <div style="cursor: pointer">
                    <a target="blank"
                        :href="`#/profile/${profile.id}`"
                        @click="saveLocalStorage(index)">
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
        </main> 
        <footer class="foter_container">           
            <div v-for="(page, index) in profiles" :key="page" class="page">
                <a @click="clickButton(page)">
                    <ul v-bind:class="{'active': page.isActivePage}">
                        {{ index + 1 }} 
                    </ul>
                </a>
            </div>            
        </footer>
    </div>
</template>

<script> 
import axios from 'axios'
export default {
    name: 'Workle',
    data() {
        return {
            profiles: {}
        }; 
    },
    mounted(){
        this.loadPage()
    },
    methods: {
        loadPage(){
            axios
            .get(`https://api.unsplash.com/photos/?client_id=vSZ88YrTBknu6CphDdw2FVIyBVwNW_ZR3SYuAFMc67c`)
            .then(response => {
                this.profiles = response.data
                this.profiles[0].isActivePage = true
            });
        },
        saveLocalStorage(index){
            let parsedIndex = JSON.stringify(index)
            localStorage.setItem("index",parsedIndex)
        },
        clickButton(page){
            for(let i = 0; i < this.profiles.length; i++){
                this.profiles[i].isActivePage = false
            }
            page.isActivePage = true
        }
    }
}
</script>

<style scoped>
.header{
    max-width: 1000px;
    position: relative;
	height: 50px;
    margin: 0px auto 0px auto;
    width: 900px;
    color: #1b0a4b;
    border-radius: 300px;
    background-image: radial-gradient(
                                        circle at 0% 0%,
                                        #ffffff 0, 
                                        #ffffff 12.5%, 
                                        #ffffff 25%, 
                                        #ffffff 37.5%, 
                                        #ffffff 50%, 
                                        #e5efec 62.5%, 
                                        #cee1da 75%, 
                                        #bcd5c8 87.5%,
                                        #adcab8 100%);
	
}
    @media(max-width: 1000px){
        .header{
            width: 660px;
        }
    }
    @media(max-width: 768px){
        .header{
            width: 440px;
        }
    }
    @media(max-width: 480px){
        .header{
            width: 320px;
        }
    }
    .header h1{
        position: relative;
        float: right;
        margin: 3px 10px 0px 0px ;
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
.main{
    max-width: 1000px;
    margin: 0px auto 100px auto
}
    @media(max-width: 1000px ){
        .main{
            max-width: 768px;
        }
    }
    @media(max-width: 768px){
        .main{
            max-width: 480px;
        }
    }
    @media(max-width:480px ){
        .main{
            max-width: 320px;
        }
    }
.profile{
    display: inline-block;
    margin: 0px 10px 10px 10px;
    width: 440px;
    height: 380px;
}
    @media(max-width: 1000px){
        .profile{
            width: 320px;
            height: 230px;
        }
    }
    @media(max-width: 768px){
        .profile{
            width: 440px;
            height: 380px;
        }
    }
    @media(max-width: 480px){
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
    color: #333333;
}
    @media(max-width: 320px){
        .name{
            display: none;
        }
    }
.user_name{
    position: absolute;
    float: left;
    margin: 27px 0px 0px 50px;
    color: #8D8D8D;
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
    @media(max-width: 1000px){
        .img{
            width: 320px;
            height: 230px;
        }
    }
    @media(max-width: 768px){
        .img{
            width: 440px;
            height: 300px;
        }
    }
    @media(max-width: 480px){
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
    margin: 3px 10px 0px 5px;
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
.foter_container{
    width: 100%;
    height: 60px;
    background: rgba(18, 18, 18, 0.8);
    backdrop-filter: blur(50px);
    transform: translateZ(0px);
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding: 0px 0px 0px 0px ; 
}
.page{
    padding: 0px 0px 0px 0px;
    margin: 0px 10px 0px 0px ;
    font-weight: bold;
    cursor: pointer;
    width: 30px;
    height: 0px;
    background-color: rgba(18, 18, 18, 0.6);
    border-radius: 5px;
    color:  #fff;
    display: inline-block;
}
ul{
    margin: 10px 0px 0px 0px;
    padding: 10px 0px 10px 0px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    background-color:  rgba(18, 18, 18, 0);
    border-radius: 5px;
}
ul:hover{
    background-color: rgb(36, 36, 36, 0.8);
    backdrop-filter: blur(50px);
    transform: translateZ(0px);
    color: #fff;
}
.active{
    background-color: rgb(36, 36, 36, 0.8);
}
a{
    color:rgba(18, 18, 18, 0) ;
}
</style>