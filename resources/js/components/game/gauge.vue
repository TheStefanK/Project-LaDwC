<template>
  <div>
    <img class="test1" src="images/score/bg_fuel2.svg" alt="Demo" width="300px" />
    <img class="test2" src="images/score/zeiger.svg" alt="Demo" height="130px" :style="tankpointer" />
    <p></p>
  </div>
</template>

<script>
export default {
  name: "gauge",
  props: ["tankpointer"],
  methods: {
    name() {
      for(i,i++,i<5){

      };
    }
  },
};
</script>

