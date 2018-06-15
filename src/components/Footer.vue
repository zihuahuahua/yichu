<template>
    <div>
        <footer>
            <router-link to="/shouye" class="same-img one" active-class='oneActive'></router-link>
            <router-link to="/news" class="same-img two" active-class='twoActive'></router-link>
            <router-link to="/shouye" class="same-img thr" active-class='thrActive'></router-link>
            <router-link to="/topic" class="same-img fou" active-class='fouActive'></router-link>
            <router-link to="/myself" class="same-img fiv" active-class='fivActive'></router-link>
        </footer>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>
.wrap footer{
    flex-grow: 0;
    height: 66px;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.same-img{
    width: 39px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}
.one{
    background-image: url('../assets/首页_u39.png');
}
.oneActive{
    background-image: url('../assets/首页_u39_disabled.png');
}
.two{
    background-image: url('../assets/消息_u45.png');
}
.twoActive{
    background-image: url('../assets/消息_u45_disabled.png');
}
.thr{
    background-image: url('../assets/新建_u37.png');
}
.fou{
    background-image: url('../assets/话题_u41.png');
}
.fouActive{
    background-image: url('../assets/话题_u41_disabled.png');
}
.fiv{
    background-image: url('../assets/我的_u43.png');
}
</style>
