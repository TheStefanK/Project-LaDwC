<template>
    <div class="score-board">
        <div class="infected">

        <v-gauge name="Infizierte" :number="Infected" :degSkala="[5,10,20]">

        </v-gauge>
        </div>
        <div class="statistics">
            <!--                <span>Zeit: {{formattedElapsedTime}}</span>-->
            <!--            <span>{{formattedElapsedTime(timer)}}</span>-->

        </div>
        <div class="dead">

            <v-gauge name="Tote:" :number="Dead"></v-gauge>

        </div>
    </div>
</template>

<script>
  import {scoreMixins} from '../../utility/mixins'
  import gauge from './gauge'
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
      },
    components:{
      "v-gauge":gauge,
    },
    watch: {

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
