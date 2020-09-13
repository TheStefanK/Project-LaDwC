<template>
    <div class="score-board">
        <div class="infected">
            <div class="fuel">
                <img class="fuel-scala" src="images/score/bg_fuel2.svg" alt="Demo" width="300px">
                <img class="fuel-needle" src="images/score/zeiger.svg" alt="Demo" height="130px" :style="">
                <div class="gauge-bottem"></div>
            </div>
            <span>Infizierte: {{numberWithDot(Infected)}}</span>
        </div>
        <div class="statistics">
            <!--                <span>Zeit: {{formattedElapsedTime}}</span>-->
            <!--            <span>{{formattedElapsedTime(timer)}}</span>-->

            <div>

            </div>
        </div>
        <div class="dead">
            <div class="fuel">
                <img class="fuel-scala" src="images/score/bg_fuel2.svg" alt="Demo" width="300px">
                <img class="fuel-needle" src="images/score/zeiger.svg" alt="Demo" height="130px" :style="">
                <div class="gauge-bottem"></div>
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
        this.$store.dispatch('handleChangeInfectedPointer',pointerValue )
      },
      Dead() {
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
