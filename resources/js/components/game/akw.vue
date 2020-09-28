<template>
    <div>
        <div class="fuel">
            <img class="fuel-scala" src="images/score/bg_fuel2.svg" alt="Demo" width="300px">
            <img class="fuel-needle" src="images/score/zeiger.svg" alt="Demo" height="130px" :style="style">
        </div>
        <span> {{name}} {{numberWithDot(CounterNumber)}} </span>
    </div>
</template>

<script>
  export default {
    name: "akw",
    props: {
      name: String,
      number: Number,
      degSkala: Array,
    },
  }
</script>

<style scoped>

</style>
