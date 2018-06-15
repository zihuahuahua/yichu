<template>
    <div class="wrap">
        <header>
            <router-link active-class='h-oneActive' to='/topic'>推荐 DYNAMC</router-link>
            <router-link active-class='h-twoActive' to='/circledesk'>圆桌 CHAT</router-link>
        </header>
        <section>
            <div class="box">
                <div class="box1">
                    <img src="../assets/952279518.jpg" alt="">
                </div>
            </div>
            <div class="box" v-for="comment in comments" :key="comment.id">
                <div class="sec-bottom">
                    <div class="sec-b-t">
                        <div class="sec-b-t-l">
                            <div>
                                <img :src="comment.src" alt="">
                                <span>{{comment.name}}}</span>
                            </div>
                            <span>{{comment.title}}</span>
                        </div>
                    </div>
                    <p>{{comment.text}}</p>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer'
export default {
    name:'topic',
    components:{
        Footer
    },
    computed:{
        comments(){
            return this.$store.state.comment.topic
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
.srap section{
    flex-grow: 1;
    overflow: scroll;
}
.box{
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 8px solid #f0f0f0;
}
.box1{
    padding-left: 3%;
}

.sec-bottom{
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    padding-left: 5%;
}
.sec-b-t{
    display: flex;
    justify-content: space-between;
}
.sec-b-t>img{
    width:8%;
    height:8%;
    margin-right: 8%;
}
.sec-b-t-l{
    display: flex;
    flex-direction: column;
}
.sec-b-t-l>span{
    font-size: 12px;
}
.sec-b-t-l>div>img{
    width: 15%;
}
.sec-b-t-l>div>span{
    font-size: 12px;
    margin-left: 5px;
    color: rgb(165, 165, 165);
}
.sec-bottom>p{
    font-size: 12px;
    color: rgb(167, 164, 163);
}
</style>
