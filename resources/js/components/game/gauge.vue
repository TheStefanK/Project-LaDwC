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
        // console.log(this.number + typeof (this.number) + ' Number Gauge')
        // console.log(this.degSkala[0]);
        // console.log(newValue, oldValue);
        let RotateValue;
        if (newValue <= 0) {
          RotateValue = -95;
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
        this.counter(oldValue,newValue,3);

        //250000 Max = 90
        this.style = " transform: rotate(" + RotateValue + "deg);"

      }
    }, created() {
      if (this.number <= 0) {
        this.style = " transform: rotate(" + -95 + "deg);"
      }
    }, methods: {
      counter(start, end, duration) {
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        if(range > 1000){
          increment = end > start ? 11: -11;
        }
        if(range > 10000){
          increment = end > start ? 111 : -111;
        }
        if(range > 100000){
          increment = end > start ? 1111 : -1111;
        }
        if(range > 1000000){
          increment = end > start ? 111111 : -111111;
        }
        console.log('range', range);
        let step = Math.abs(Math.floor(duration / range));
        console.log('Steps',step);
        let timer = setInterval(() => {
          current += increment;
         this.CounterNumber = current;
          if (current === end || current >= end) {
            clearInterval(timer);
            this.CounterNumber = end;
          }
        }, step);
      }

    },
  };
</script>

