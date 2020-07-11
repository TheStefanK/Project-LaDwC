<template>
    <div>
        <img class="test1" src="images/score/bg_fuel2.svg" alt="Demo" width="300px">
        <img class="test2" src="images/score/zeiger.svg" alt="Demo" height="130px" :style="tankpointer">
    </div>
</template>

<script>
  export default {
    name: "gauge",
    props:['tankpointer']
  }
</script>

<style scoped>

</style>
