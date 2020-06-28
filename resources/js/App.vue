<template>
<div id="app">
    <router-view name="header"></router-view>
    <div>
        <router-view name="score"></router-view>
        <router-view name="story"></router-view>
    </div>
    <router-view name="footer"></router-view>
</div>
</template>

<script>
  export default {
    name: "App",
    computed:{
      StateOfStore(){
        return this.$store.state
      }
    }
  }
</script>


