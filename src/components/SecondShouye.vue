<template>
    <div class="wrap">
        <img :src="post.src" alt="">
        <router-link to='/shouye'></router-link>
    </div>
</template>

<script>
export default {
    name:'secondshouye',
    computed:{
        // id(){
        //     return this.$route.params.id
        // },
        post(){
            return this.$store.state.comment.all.find(t => t.id === this.$route.params.id)
        }
    }
}
</script>

<style scoped>
.wrap{
    position: relative;
}
.wrap img{
    width: 100%;
}
.wrap a{
    display: block;
    width:80px;
    height:40px;
    position: absolute;
    top:2%;
    left:0;
}
</style>
