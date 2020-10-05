<template>
    <div>
        <div class="fuel">
            <img class="fuel-scala" src="images/score/gauge_filter.png" alt="Demo" width="300px">
            <img class="fuel-needle" src="images/score/zeiger.svg" alt="Demo" height="130px" :style="style">
        </div>
        <div class="fuel-counter">
            <span> {{name}}</span> <span> {{numberWithDot(CounterNumber)}} </span>
        </div>

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
        CounterNumber: 0,
      }
    },
    watch: {
      number(newValue, oldValue) {
        console.log(newValue, oldValue);
        // Pointer Up or Down
        let Pointer = this.HandleUpOrDown(newValue,oldValue);
        // Rotate Value
        let RotateValue = this.HandleRotate(newValue);
        // Counter
        this.counter(oldValue, newValue, 3, Pointer);
        // Set Style to Pointer
        this.style = " transform: rotate(" + RotateValue + "deg);"
      }
    },
    created() {
      if (this.number <= 0) {
        this.style = " transform: rotate(" + -95 + "deg);"
      }
    },
    methods: {
      counter(start, end, duration, pointer) {
        let current = start;
        let range = (end - start);
        range = (range < 0) ? range * -1 : range;
        console.log(range);
        let increment = 1;
        if (range > 1000) {
          increment = this.RandomMinMaxNumber(100, 120);
        }
        if (range > 10000) {

          increment = this.RandomMinMaxNumber(1000, 2000);
        }
        if (range > 100000) {

          increment = this.RandomMinMaxNumber(9000, 10000);
        }
        if (range > 1000000) {

          increment = this.RandomMinMaxNumber(90000, 100000);
        }
        let timer = setInterval(() => {
          if (pointer === "up") {
            current += increment;
            if (current === end || current >= end) {
              clearInterval(timer);
              this.CounterNumber = end;
            } else {
              this.CounterNumber = current;
            }
          }
          if (pointer === "down") {
            current -= increment;
            if (current === end || current <= end) {
              clearInterval(timer);
              this.CounterNumber = end;
            } else {
              this.CounterNumber = current;
            }
          }
        }, 250);
      },
      RandomMinMaxNumber(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
      HandleRotate(val){
        let  RotateValue;
        if (val <= 0) {
          RotateValue = -95;
        }
        if (val <= 2) {
          RotateValue = -93;
        }
        if (val < this.degSkala[0]) {
          RotateValue = -93;
        }
        if (val >= this.degSkala[1]) {
          RotateValue = -45;
        }
        if (val >= this.degSkala[2]) {
          RotateValue = 0;
        }
        if (val >= 260000) {
          RotateValue = 94;
        }
        return RotateValue;
      },
      HandleUpOrDown(newValue, oldValue){
        let Pointer;
        if (newValue > oldValue) {
          Pointer = "up"
        }
        if (newValue < oldValue) {
          Pointer = "down"
        }
        return Pointer;
      },

    },
  };
</script>

