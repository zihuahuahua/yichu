<template>
    <div class="wrap">
        <header>
            <router-link active-class='h-oneActive' to='/topic'>推荐 DYNAMC</router-link>
            <router-link active-class='h-twoActive' to='/circledesk'>圆桌 CHAT</router-link>
        </header>
        <section>
            <div class="sec-bot" v-for="comment in comments" :key="comment.id">
                <img :src="comment.src" alt="">
                <div class="word">
                    <div class="title">{{comment.title}}</div>
                    <div class="text">{{comment.body}}</div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer'
export default {
    name:'circleDesk',
    components:{
        Footer
    },
    computed:{
        comments(){
            return this.$store.state.comment.circleDesk
        }
    }
}
</script>

<style scoped>
.wrap{
    display: flex;
    flex-direction: column;
}
.wrap header{
    background-image: url('../assets/u48.png');
    background-repeat: no-repeat;
    background-size:cover;
    padding-top: 20px;
    flex-shrink: 0;
    padding-bottom: 13px;
    flex-grow: 0;
    display: flex;
    justify-content: space-around;
}
.wrap header>a{
    color: #000;
    width: 50px;
    text-align: center;
    font-size: 12px;
}
.wrap .h-oneActive{
    color: #fff;
}
.wrap .h-twoActive{
    color: #fff;
}
.wrap section{
    flex-grow: 1;
    overflow: scroll;
}
.sec-bot{
    display: flex;
}
.sec-bot>img{
    width: 10%;
    height: 10%;
    margin: 20px;
}
.word{
    margin-top: 15px;
}
.title{
    font-size: 14px;
}
.text{
    font-size: 12px;
    color: rgb(129, 129, 129);
    font-weight: bold;
    margin-top: 10px;
}
</style>
