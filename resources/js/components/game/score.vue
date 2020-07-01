<template>
    <div class="score-board">
            <div class="infected">
                <img src="images/demoMeter.png" alt="Demo">
                <span>Infizierte: {{Infizierte}}</span>
            </div>
            <div class="statistics">
                <span>Zeit: {{formattedElapsedTime}}</span>

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
        Infizierte: 1,
        Tote: 0,
        elapsedTime: 0,
        timer: undefined

      }
    },
    mounted() {
      this.startTimer();
      this.startInfection();
      this.startDeath();
    },
    computed: {
      formattedElapsedTime() {
        const date = new Date(null);
        date.setSeconds(this.elapsedTime / 1000);
        const utc = date.toUTCString();
        return utc.substr(utc.indexOf(":") - 2, 8);
      },
    },
    methods: {

      startInfection() {
        this.Infizierte = setInterval(() => {
          let x = Math.round(Math.random() * 10);
          console.log(x);
          this.Infizierte += 1;
        }, 100);
      },
      startDeath() {
        this.Tote = setInterval(() => {
          this.Tote += 1;
        }, 3000);
      },
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
      }
    }
  }
</script>

