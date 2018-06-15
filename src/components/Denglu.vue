<template>
    <div class="wrap">
        <router-link to="/"><div class="fanhui"></div></router-link>
        <img src="../assets/u14.jpg" alt="">
        <router-link to="/shouye"><div class="singIn"></div></router-link>
    </div>
</template>

<script>
export default {
    name:'denglu'
}
</script>

<style scoped>
.wrap{
    position: relative;
}
img{
    width: 100%;
}
.fanhui{
    position: absolute;
    left: 12px;
    top: 11px;
    width: 51px;
    height: 60px;
}
.singIn{
    position: absolute;
    left:23%;
    top:55%;
    width: 55%;
    height:80px;
}
</style>
