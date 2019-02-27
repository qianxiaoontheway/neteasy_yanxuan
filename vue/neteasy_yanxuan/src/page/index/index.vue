<template>
    <div class="Home">
        <v-header class="header"></v-header>
        <router-view class="content"></router-view>
        <v-footer class="footer"></v-footer>
        <go-top></go-top>
    </div>
</template>
<script>
import Header from "@/components/public/Header"
import Footer from "@/components/public/Footer"
import GoTop from "@/components/public/GoTop"

export default {
    name:"index",
    components:{
        'v-header':Header,
        'v-footer':Footer,
        'go-top':GoTop
    }
    
}
</script>
<style>
.header{
  position: fixed;
  top: 0;
  z-index: 100;
}
.Home{
  display: flex;
  flex-direction: column;
}
.content{
  overflow: scroll;
  margin-top: 74px;
  margin-bottom: 1.30667rem;
}

</style>


