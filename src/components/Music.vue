<template>
    <div class="wrap">
        <div class="header">
            <router-link to='/shouye'>返回</router-link>
            <span>音乐</span>
            <span></span>
        </div>
        <div class="section">
            <div class="sec-top">
                <span>|</span>
                <span>音乐频道</span>
            </div>
            <div class="sec-t-pic">
                <img src="../assets/timg (1).jpeg" alt="">
                <img src="../assets/timg (2).jpeg" alt="">
                <img src="../assets/timg (3).jpeg" alt="">
                <img src="../assets/timg.jpeg" alt="">
            </div>
            <div class="sec-share">
                <div class="sec-share-t">
                    <span>|</span>
                    <span>热门分享</span>
                </div>
                <div class="sec-share-b">
                    <div class="sec-share-b-l">
                        <img src="../assets/timg (4).jpeg" alt="">
                        <span>心之所向，无所不至</span>
                        <span>分享: 徐琳</span>
                    </div>
                    <div class="sec-share-b-r">
                        <img src="../assets/timg (5).jpeg" alt="">
                        <span>(每日推荐)</span>
                        <span>分享: 官方</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'music'
}
</script>

<style scoped>
.wrap{
    display: flex;
    flex-direction: column;
}
.header{
    padding-top: 7%;
    padding-bottom: 5%;
    padding-left: 3%;
    background-image: url('../assets/u48.png');
    display: flex;
    justify-content: space-between;
}
.header>span,.header>a{
    font-size: 14px;
    color: rgb(130, 168, 87);
}
.sec-top{
    display: flex;
    padding-left: 5%;
}
.section{
    flex-grow: 1;
    overflow: scroll;
}
.sec-top>span{
    font-size: 12px;
    line-height:40px;
    font-weight: bold;
}
.sec-top>span:nth-child(2){
    margin-left: 5px;
    margin-top: 2px;
    color: rgb(133, 219, 133);
}
.sec-t-pic{
    border-bottom: 5px solid rgb(233, 230, 230);
    padding-bottom: 5%;
}
.sec-t-pic>img{
    width: 45%;
}
.sec-t-pic>img{
    margin-left: 3.5%;
}
.sec-t-pic>img:nth-child(3),.sec-t-pic>img:nth-child(4){
    margin-top: 5%;
}
.sec-share{
    display: flex;
    flex-direction: column;
}
.sec-share-t{
    display: flex;
    padding-left: 5%;
}
.sec-share-t>span{
    font-size: 12px;
    line-height:40px;
    font-weight: bold;
}
.sec-share-t>span:nth-child(2){
    margin-left: 5px;
    margin-top: 2px;
    color: rgb(133, 219, 133);
}
.sec-share-b{
    display: flex;
}
.sec-share-b img{
    width: 90%;
    height: 70%;
}
.sec-share-b-l{
    display: flex;
    flex-direction: column;
    padding-left: 5%;
}
.sec-share-b-r{
    display: flex;
    flex-direction: column;
}
.sec-share-b span{
    font-size: 12px;
    text-align: center;
    margin-top: 2%;
    color: rgb(175, 163, 163);
    font-weight: bold;
}
</style>
