<template>
    <div class="wrap">
        <div class="header">
            <span>←</span>
            <span>文章</span>
            <span></span>
        </div>
        <div class="section">
            <div class="sec-top">
                <span>|</span>
                <span>分类</span>
            </div>
            <div class="sec-mid">
                <div class="sec-mid-t">
                    <div class="pic">
                        <img src="../assets/timg (4).jpeg" alt="">
                        <div class="mengban"></div>
                        <span>早安故事</span>
                    </div>
                    <div class="pic">
                        <img src="../assets/timg (5).jpeg" alt="">
                        <div class="mengban"></div>
                        <span>晚安故事</span>
                    </div>
                </div>
                <div class="sec-mid-t sec-mid-tt">
                    <div class="pic">
                        <img src="../assets/192284667.jpg" alt="">
                        <div class="mengban"></div>
                        <span>奇妙物语</span>
                    </div>
                    <div class="pic">
                        <img src="../assets/490443102.jpg" alt="">
                        <div class="mengban"></div>
                        <span>读心术</span>
                    </div>
                </div>
            </div>
            <div class="sec-bot">
                <div class="sec-bot-t">
                    <span>|</span>
                    <span>热门文章</span>
                </div>
                <div class="sec-bot-b" v-for="post in posts" :key='post.id'> 
                    <img :src="post.src" alt="">
                    <div class="sec-bot-b-r">
                        <span>{{post.title}}</span>
                        <span>{{post.text}}</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer'
export default {
    name:'Article',
    components:{
        Footer
    },
    computed:{
        posts(){
            return this.$store.state.comment.article
        }
    }
}
</script>

<style scoped>
.warp{
    display: flex;
    flex-direction: column;
}
.header{
    background-image: url('../assets/u48.png');
    padding-top: 5%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 4%;
    flex-grow: 0;
}
.header>span{
    font-size: 14px;
    color: rgb(95, 175, 48);
    font-weight: bold;
}
.section{
    flex-grow: 1;
    overflow: scroll;
}
.sec-top{
    line-height: 300%;
    padding-left: 3%;
    display: flex;
}
.sec-top>span{
    color: rgb(95, 175, 48);
}
.sec-top>span:nth-child(2){
    font-size: 12px;
    margin-top: 1%;
    margin-left: 1%;
    font-weight: bold;
}
.sec-mid{
    display: flex;
    flex-direction: column;
}
.sec-mid-t{
    width: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.sec-mid-tt{
    margin-top: 2%;
}
.pic{
    width: 49%;
    position: relative;
}
.pic>img{
    width: 100%;
    height: 100%;
}
.pic>.mengban{
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    top:0;
    left: 0;
    opacity: .5;
}
.pic>span{
    position: absolute;
    font-size: 12px;
    top:50%;
    left:50%;
    margin-top: -9px;
    margin-left: -24px;
    color: #fff;
    opacity: .7;
}
.sec-bot{
    display: flex;
    flex-direction: column;
}
.sec-bot-t{
    line-height: 300%;
    padding-left: 3%;
    display: flex;
}
.sec-bot-t>span{
    color: rgb(95, 175, 48);
}
.sec-bot-t>span:nth-child(2){
    font-size: 12px;
    margin-top: 1%;
    margin-left: 1%;
    font-weight: bold;
}
.sec-bot-b{
    display: flex;
    margin-top: 2%;
    margin-left: 3%;
}
.sec-bot-b>img{
    width: 40%;
    height: 20%;
}
.sec-bot-b-r{
    display: flex;
    flex-direction: column;
    margin-left: 2%;
}
.sec-bot-b-r>span:nth-child(1){
    font-size: 14px;
    font-weight: bold;
    color: rgb(96, 100, 96);
    margin-top: 10%;
}
.sec-bot-b-r>span:nth-child(2){
    font-size: 12px;
    margin-top: 5%;
    color: rgb(182, 189, 182);
}
</style>
