<template>
    <div class="wrap">
        <header>
            <img src="../assets/u48.png" alt="">
            <img src="../assets/u50.png" alt="">
        </header>
        <section>
            <img src="../assets/192284667.jpg" alt="">
            <div class="sec-top">
                <router-link to='./music'><img src="../assets/音乐.png" alt=""></router-link>
                <router-link to='./shouye'><img src="../assets/播放.png" alt=""></router-link>
                <router-link to='./Article'><img src="../assets/清单.png" alt=""></router-link>
                <router-link to='./shouye'><img src="../assets/收音机.png" alt=""></router-link>
                <router-link to='./message'><img src="../assets/排行榜.png" alt=""></router-link>
            </div>
            <div class="mid">
                <div class="mid-same" v-for="comment in comments " :key="comment.id">
                    <div class="mid-t">
                        <div>{{comment.left}}</div>
                        <div><span>{{comment.right}}</span> <img :src="cir[comment.id-1]" alt=""></div>
                    </div>
                    <div class="left">
                        <div class="mid-l">
                            <span>{{comment.title}}</span>
                            <router-link :to='`./shouye/${comment.id}`'>{{comment.body}}</router-link>
                        </div>
                        <img :src="pic[comment.id-1]" alt="">
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import a from '../assets/490443102.jpg'
import b from '../assets/952279518.jpg'
import c from '../assets/1149137004.jpg'
import d from '../assets/558116531.jpg'
import Footer from './Footer'
export default {
    name:'shouye',
    data:()=>({
        pic:[a,b],
        cir:[c,d]
    }),
    components:{
        Footer
    },
    computed:{
        comments() { 
            return this.$store.state.comment.all
        }
    }
}


</script>

<style scoped>
.wrap{
    display:flex;
    flex-direction: column;
}
.wrap header{
    position: relative;
}
.wrap header img{
    width: 100%;
    display: block;
}
.wrap header img:nth-child(2){
    position: absolute;
    width: 90%;
    left:7%;
    top:50%;
    margin-top: -10px;
}
.wrap section{
    flex-grow: 1;
    overflow: scroll;
}
.wrap section img{
    width: 100%;
}
.sec-top{
    display: flex;
    justify-content:space-around;
    width:90%;
    margin:0 auto;
    height:60px;
    align-items:center;
    margin-top:10px;
    box-shadow: 0px 3px 4px 0px #ccc inset;
    border-radius: 3px;
    margin-bottom: 10px;
}
.wrap .sec-top>a{
    width: 8%;
    height: 50%;
}
.wrap .sec-top>a>img{
    width: 100%;
    height: 100%;
}
.mid-same{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.mid-t{
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-left: 3%;
}
.mid-t>div:nth-child(1){
    margin-top: 10px;
    color: cyan;
    font-size: 12px;
}
.mid-t>div:nth-child(2)>img{
    width:30px;
}
.mid-t>div:nth-child(2)>span{
    position: absolute;
    right: 35px;
    top:10px;
    font-size: 12px;
}
.left{
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}
.wrap .left>img{
    width: 40%;
    height: 20%;
    margin-top: 15px;
    margin-right: 5px;
}
.mid-l{
    width: 50%;
}
.mid-l{
    margin-left:3%;
}
.mid-l>span:nth-child(1){
    display: block;
    font-size: 16px;
    width: 100%;
    margin-bottom: 10px;
}
.mid-l>a{
    font-size: 12px;
    color: #000;
}
</style>
