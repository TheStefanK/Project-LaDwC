<template>
    <div class="score-board">
        <div class="infected">
            <div class="fuel">
                <img class="test1" src="images/score/bg_fuel2.svg" alt="Demo" width="300px">
                <img class="test2" src="images/score/zeiger.svg" alt="Demo" height="130px"
                     :style="infectedPointerStyle">
            </div>
            <span>{{numberWithDot(InfectedCalc)}}</span>
            <span>Infizierte:</span>
        </div>
        <div class="statistics">
            <!--                <span>Zeit: {{formattedElapsedTime}}</span>-->
            <!--            <span>{{formattedElapsedTime(timer)}}</span>-->

            <div>
                {{helloWorld('hello World')}}
            </div>
        </div>
        <div class="dead">
            <div class="fuel">
                <img class="test1" src="images/score/bg_fuel2.svg" alt="Demo" width="300px">
                <img class="test2" src="images/score/zeiger.svg" alt="Demo" height="130px" :style="deadPointerStyle">
            </div>
            <span>Tote: {{numberWithDot(Dead)}}</span>
        </div>
    </div>
</template>

<script>
  import {scoreMixins} from '../../utility/mixins'
  export default {
    name: "score",
    mixins: [scoreMixins],
    computed: {
      Infected() {
        return this.$store.getters.getInfected;
      },
      InfectedCalc() {
        return this.$store.getters.getInfectedCalc;
      },
      Dead() {
        return this.$store.getters.getDead;
      },
      // infected Pointer rotate
      infectedPointerStyle() {
        return {transform: 'rotate(' + this.$store.getters.getInfectedPointer + 'grad) translate(-50%)'};
      },
      // dead Pointer rotate
      deadPointerStyle() {
        return {transform: 'rotate(' + this.$store.getters.getDeadPointer + 'grad) translate(-50%)'};
      },

    },
    watch: {
      InfectedCalc(){
        let x = this.InfectedCalc;
        let pointerValue = scoreMixins.methods.indicatorPointer(x, 250);
        console.log(pointerValue + ' CHANGGEGGG');
        this.$store.dispatch('handleChangeInfectedPointer',pointerValue )
      },
      dead() {
        let pointerValue = scoreMixins.methods.indicatorPointer(this.Dead, 50);
        this.$store.dispatch('handleChangeDeadPointer',pointerValue )
      },
    }, methods: {
      startTimer() {
        this.timer = setInterval(() => {
          this.elapsedTime += 1000;
        }, 2000);
      },
      stopTimer() {
        clearInterval(this.timer);
      },
      resetTimer() {
        this.elapsedTime = 0;
      },
    }, destroyed() {
      clearInterval(this.startInfection);
    }
  }
</script>
<style>

    .fuel {
        position: relative;
        border-bottom: 10px solid black;
    }

    .test2 {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform-origin: left bottom;
        transform: rotate(-90grad) translateX(-50%);
        margin: 0;
        padding: 0;
        display: block;
        transition: 3s;
    }


</style>
