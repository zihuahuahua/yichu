<template>
    <div class="wrap">
        <div class="header">
            <div class="head-top">
                <span>添加好友</span>
                <span>我</span>
                <span>设置</span>
            </div>
            <div class="head-mid">
                <img src="http://i4.bvimg.com/648795/04fe12a36a6edc17.png" alt="">
                <div>
                    <span>EasyHao</span>
                    <span>简介:正在努力</span>
                </div>
            </div>
            <div class="head-bot">
                <div class="head-bot-s">
                    <span>836</span>
                    <span>我的回信</span>
                </div>
                <div class="head-bot-s">
                    <span>540</span>
                    <span>我关注的人</span>
                </div>
                <div class="head-bot-s">
                    <span>260</span>
                    <span>关注我的人</span>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="sec-top">
                <div class="sec-top-t">
                    <span>我的一处</span>
                    <span>...</span>
                </div>
                <div class="sec-m-p">
                    <div class="sec-m-p-l">
                        <img src="../assets/1956975231.jpg" alt="">
                        <span>一粒</span>
                    </div>
                    <div class="sec-m-p-l">
                        <img src="../assets/675590901.jpg" alt="">
                        <span>7/12</span>
                    </div>
                </div>
            </div>
            <div class="sec-bot" v-for="comment in comments" :key='comment.id'>
                <img :src="comment.src" alt="">
                <span>{{comment.title}}</span>
                <span>{{comment.text}}</span>
                <span>{{comment.num}}></span>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer'
export default {
    name:'myself',
    components:{
        Footer
    },
    computed:{
        comments(){
            return this.$store.state.comment.Myself
        }
    }
}
</script>

<style scoped>
.wrap{
    display: flex;
    flex-direction: column;
}
.header{
    flex-grow: 0;
    padding-top: 5%;
    padding-bottom: 5%;
    border-radius: 0 0 15px 15px;
    background: linear-gradient(rgb(80, 193, 245),rgb(173, 227, 248));
}
.head-top{
    display: flex;
    justify-content: space-around;
}
.head-top>span{
    font-size: 12px;
    color: #fff;
}
.head-mid{
    display: flex;
    margin-top: 5%;
}
.head-mid>img{
    width: 15%;
    height: 15%;
    margin-left: 10%;
    margin-right: 5px;
}
.head-mid>div{
    display: flex;
    flex-direction: column;
}
.head-mid>div>span{
    font-size: 12px;
}
.head-mid>div>span:nth-child(1){
    color: #fff;
    margin-top:5px;
    font-weight: bold;
}
.head-mid>div>span:nth-child(2){
    color: rgb(92, 89, 89);
    margin-top:5px;
}
.head-bot{
    display: flex;
    width: 75%;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 5%;
}
.head-bot-s{
    display: flex;
    flex-direction:column;
}
.head-bot-s>span{
    text-align: center;
    font-size: 12px;
    color: rgb(156, 156, 156);
}
.head-bot-s>span:nth-child(1){
    font-weight: bold;
}
.section{
    flex-grow: 1;
    overflow: scroll;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 5%;
}
.sec-top{
    display: flex;
    flex-direction: column;
}
.sec-top-t{
    display: flex;
    justify-content: space-between;
}
.sec-top-t>span{
    font-size: 12px;
    color: rgb(136, 136, 136);
    font-weight: bold;
}
.sec-m-p{
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 4%;
}
.sec-m-p-l{
    display: flex;
    flex-direction: column;
    padding-left: 3%;
}
.sec-m-p-l>img{
    width: 90%;
    height: 90%;
}
.sec-m-p-l>span{
    font-size: 14px;
    color: rgb(102, 102, 102);
    margin-top: 2%;
}
.sec-bot{
    margin-top: 5%;
    display: flex;
    align-items: center;
}
.sec-bot>img{
    width: 10%;
    height: 10%;
    margin: 3% 3% 3% 0;
    flex-grow: 0;
}
.sec-bot>span{
    font-size: 12px;
}
.sec-bot>span:nth-child(2){
    font-size: 14px;
    flex-grow: 0;
}
.sec-bot>span:nth-child(3){
    flex-grow: 1;
    margin-top: 1%;
    margin-left: 4%;
    color: rgb(167, 164, 164);
}
.sec-bot>span:nth-child(4){
    flex-grow: 0;
    margin-top: 1%;
    color: rgb(167, 164, 164);
}
</style>
