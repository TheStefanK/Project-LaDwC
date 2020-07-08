<template>
    <div class="score-board">
        <div class="infected">
            <div class="fuel">
                <img class="test1" src="images/score/bg_fuel2.svg" alt="Demo" width="300px">
                <img class="test2" src="images/score/zeiger.svg" alt="Demo" height="130px" :style="tankFuel">
            </div>

            <span>Infizierte: {{infected}}</span>
        </div>
        <div class="statistics">
            <!--                <span>Zeit: {{formattedElapsedTime}}</span>-->

        </div>
        <div class="dead">
            <img src="images/demoMeter.png" alt="Demo">
            <span>Tote: {{Tote}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "score",
    data() {
      return {
        infected: 1,
        Tote: 0,
        elapsedTime: 0,
        timer: undefined,
        testoo: -90,
      }
    },
    mounted() {
      this.startTimer();
      this.startInfection();
      this.startDeath();
      // this.fuealStrk();
    },
    computed: {
      formattedElapsedTime() {
        const date = new Date(null);
        date.setSeconds(this.elapsedTime / 1000);
        const utc = date.toUTCString();
        return utc.substr(utc.indexOf(":") - 2, 8);
      }, tankFuel() {

        return {transform: 'rotate(' + this.testoo + 'grad) translate(-50%)'};
      },
    },

    watch: {
      infected() {
        if (this.infected >= 200) {
          this.testoo = 50;
          console.log('rank3')
        } else
        if (this.infected > 99) {
          this.testoo = -30;
          console.log('rank2')
        } else
        if (this.infected < 100) {
          this.testoo = -80;
          console.log('rank1')
        } else
          console.log('not found')
      }
    }, methods: {

      // fuealStrk() {
      //   setTimeout(() => {
      //     this.testoo = 90;
      //     this.fuealStrkS();
      //   }, 3000)
      // },
      // fuealStrkS() {
      //   setTimeout(() => {
      //     this.testoo = 30
      //   }, 3000)
      // },

      startInfection() {
        setInterval(() => {
          let x = Math.round(Math.random() * 10);
          // console.log(x);
          this.infected += 1;
        }, 100);
      }
      ,
      startDeath() {
        this.Tote = setInterval(() => {
          this.Tote += 1;
        }, 3000);
      }
      ,
      startTimer() {
        this.timer = setInterval(() => {
          this.elapsedTime += 1000;
        }, 2000);
      }
      ,
      stopTimer() {
        clearInterval(this.timer);
      }
      ,
      resetTimer() {
        this.elapsedTime = 0;
      }
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
        transform: rotate(70deg);
        transform-origin: left bottom;
        transform: rotate(-64grad) translateX(-50%);
        margin: 0;
        padding: 0;
        display: block;
        transition: 3s;
    }


</style>
