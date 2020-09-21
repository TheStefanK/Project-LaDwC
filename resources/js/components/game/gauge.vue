<template>
    <div>
        <div class="fuel">
            <img class="fuel-scala" src="images/score/bg_fuel2.svg" alt="Demo" width="300px">
            <img class="fuel-needle" src="images/score/zeiger.svg" alt="Demo" height="130px" :style="style">
        </div>
        <span> {{name}} {{numberWithDot(number)}}
        </span>
        <p></p>
    </div>
</template>

<script>
  import {scoreMixins} from '../../utility/mixins'

  export default {
    name: "gauge",
    mixins: [scoreMixins],
    props: {
      name: String,
      number: Number,
      degSkala: Array,
    }, data() {
      return {
        style: "",
      }
    },
    methods: {},
    watch: {
      number(newValue, oldValue) {
        console.log(this.degSkala[0]);
        console.log(newValue, oldValue);
        let RotateValue;
        if (newValue < 5){
          RotateValue = -90;
        }
        if (newValue < this.degSkala[0]) {
          RotateValue = -90;
        }
        if (newValue >= this.degSkala[1]) {
          RotateValue = -45;
        }
        if (newValue >= this.degSkala[2]) {
          RotateValue = 0;
        }
        this.style = " transform: rotate(" + RotateValue + "deg);"

      }
    },created() {
      if(this.number < 5){
        this.style = " transform: rotate(" + -90 + "deg);"
      }
    }
  };
</script>

