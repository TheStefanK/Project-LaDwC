<template>

    <div class="akw-box" v-if="AkwDead !== 0">
        <img class="akw-symbole" src="images/akw.png" alt="AKW" width="300px">


        <span> {{numberWithDot(CounterNumber)}}</span>
    </div>
</template>

<script>
  import {scoreMixins} from '../../utility/mixins'

  export default {
    name: "akw",
    mixins: [scoreMixins],
    computed: {
      AkwDead() {
        return this.$store.getters.getAkwDead;
      },
    },
    data() {
      return {
        CounterNumber: 0,
      }
    }, watch: {
      AkwDead(newValue, oldValue) {
        console.log("AFK CHNAGE",newValue,oldValue);
        this.counter(oldValue,newValue)
      }
    }, methods: {
      counter(start, end) {
        console.log("AFK START COUNTER");
        let current = start;
        let timer = setInterval(() => {
          console.log("+1 AKW");
          current += this.RandomMinMaxNumber(1,1000);
          this.CounterNumber = current;
          console.log(this.CounterNumber);
          if (current === end || current >= end) {
            clearInterval(timer);
            this.CounterNumber = end;
          }
        }, 100);
      },
      RandomMinMaxNumber(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      },

    }
  }
</script>
