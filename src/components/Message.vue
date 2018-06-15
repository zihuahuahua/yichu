<template>
    <div class="wrap">
        <div class="header">
            <router-link to='/shouye'>返回</router-link>
            <router-link to="/message" active-class='bangdan'>榜单</router-link>
            <router-link to="/messagehour" active-class='bangdan'>榜单</router-link>
            <span></span>
        </div>
        <div class="section" v-for="comment in comments" :key='comment.id'>
            <div class="box">
                <div class="sec-top">
                    <div class="pic"><img :src="comment.src" alt=""></div>
                    <span>{{comment.name}}</span>
                    <span>推荐话题:一处精选</span>
                </div>
                <div class="sec-mid">
                    <p>{{comment.text}}</p>
                </div>
                <div class="sec-bot">
                    <span>评论</span>
                    <span>回答 {{ comment.num}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'message',
    computed:{
        comments(){
            return this.$store.state.comment.message
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
    padding-top: 7%;
    padding-bottom: 3%;
    padding-left: 3%;
    background-image: url('../assets/u48.png');
    display: flex;
    justify-content: space-between;
}
.header>span,.header>a{
    font-size: 12px;
    color: rgb(130, 168, 87);
    font-weight: bold;
}
.header>span:nth-child(2){
    margin-left:-12%;
}
.header>.bangdan{
    color: #fff;
}
.section{
    display: flex;
    flex-grow: 1;
    }
.box{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 2%;
    padding-bottom: 2%;
    border-bottom: 5px solid rgb(231, 227, 227);
}
.sec-top{
    display: flex;
}
.pic{
    width: 8%;
    height: 8%;
    margin: 2%;
}
.pic>img{
    width: 100%;
    height: 100%;
}
.sec-top>span{
    font-size: 12px;
    margin-top: 3%;
    color: rgb(173, 177, 177);
}
.sec-top>span:nth-child(2){
    width: 30%;
    font-weight: bold;
}
.sec-top>span:nth-child(3){
    margin-left: 4%;
    flex-grow: 1;
    text-decoration: underline;
}
.sec-mid{
    margin-top: -3%;
}
.sec-mid>p{
    margin-left: 2%;
    font-size: 14px;
    color: rgb(98, 99, 99);
    font-weight: 500;
}
.sec-bot{
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin:  0 auto;
}
.sec-bot>span{
    font-size: 12px;
    color: rgb(150, 151, 151);
}
</style>
