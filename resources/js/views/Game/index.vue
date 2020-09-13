<template>
    <div class="container-video">
        <video id="Story-Line_Video" ref="videoRef" autoplay @ended="OnEnd()" @pause="OnPause"
               @play="OnStart" :class="{'end-video': videoEnd}">
            <source :src="VideoSource">
        </video>
        <input type="hidden" v-model="ProgressStatus">
        <div :class="{'video-container-grid-end':videoEnd, 'video-container-grid':!videoEnd}">
            <div class="top" v-if="videoEnd">
                <app-header></app-header>
            </div>
            <div class="middle" v-if="videoEnd">
                <div class="middle-container" v-if="this.storyLine[this.ProgressStatus].question">
                    <div class="question">
                        <p>{{this.storyLine[this.ProgressStatus].question}}</p>
                    </div>
                    <div class="responseOne">
                        <button v-if="this.storyLine[this.ProgressStatus].question !== undefined"
                                class="responseBtn"
                                @click="nextProgress(storyLine[ProgressStatus].firstOption.next)">
                            {{storyLine[this.ProgressStatus].firstOption.response}}
                            <span class="line-1"></span>
                            <span class="line-2"></span>
                            <span class="line-3"></span>
                            <span class="line-4"></span>
                        </button>
                    </div>
                    <div class="responseTwo">
                        <button v-if="this.storyLine[this.ProgressStatus].question !== undefined"
                                class="responseBtn"
                                @click="nextProgress(storyLine[ProgressStatus].secondOption.next)">
                            {{storyLine[this.ProgressStatus].secondOption.response}}
                            <span class="line-1"></span>
                            <span class="line-2"></span>
                            <span class="line-3"></span>
                            <span class="line-4"></span>
                        </button>
                    </div>
                </div>
                <div class="storyLineContinue" v-if="!this.storyLine[this.ProgressStatus].question">
                    <div></div>
                    <button class="responseBtn" @click="nextProgress(storyLine[ProgressStatus].continueStory.next)">
                        {{storyLine[this.ProgressStatus].continueStory.response}}
                        <span class="line-1"></span>
                        <span class="line-2"></span>
                        <span class="line-3"></span>
                        <span class="line-4"></span>
                    </button>
                </div>
            </div>
            <div class="bottom">
                <app-score></app-score>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import score from '../../components/game/score'
  import header from '../../components/layout/header/index'

  export default {
    name: "Game",
    data() {
      return {
        videoEnd: false,
        videoPause: false,
        ProgressStatus: 1,
        VideoSource: '/video/1.mp4',
        InfectedInterval: null,
        DeadInterval: null,

      }
    },
    components: {
      'app-score': score,
      'app-header': header,
    }
    , computed: mapGetters({
      storyLine: 'getStoryLineList',
    }),
    created() {
      this.startInfectionTimer();
      this.startDeadTimer()
    },
    methods: {
      OnEnd() {
        this.videoEnd = true;
      }, OnPause() {
        this.videoEnd = true;
      }, OnStart() {
        this.videoEnd = false;
      },
      // Next Step Story Line
      nextProgress(val) {
        if (this.storyLine[val].infectedMultiplier !== undefined && this.storyLine[val].deadMultiplier !== undefined) {
          console.log("multiplier Change");
          this.$store.dispatch("handleChangeInfectedMultiplier", this.storyLine[val].infectedMultiplier);
          this.$store.dispatch("handleChangeDeadMultiplier", this.storyLine[val].deadMultiplier);
          console.log(this.storyLine[val].infectedMultiplier);
        }
        setTimeout(() => {
          this.ProgressStatus = val;
          this.VideoSource = this.storyLine[val].video;
          this.$refs.videoRef.load();
          this.videoEnd = false;
        }, 500)
      },
      //  Start Timer for Infection and Dead People
      startInfectionTimer() {
        this.InfectedInterval = setInterval(() => {
          let inf = this.$store.getters.getInfected;  // Summe of all Infected People during the Game
          let y = this.$store.getters.getInfectedMultiplier; // Infected Multiplier
          let z = Math.round(inf * y); // Summe of Infected People * Multiplier
          let OptionOne = inf + 1; // Option One if the Value is smaller than 1
          let OptionTwo = inf + z; // Option Two Value is 1 or more
          (z < 1) ? this.$store.dispatch('handleChangeInfectedValue', OptionOne) : this.$store.dispatch('handleChangeInfectedValue', OptionTwo);
        }, 9000);
      },
      startDeadTimer() {
        this.DeadInterval = setInterval(() => {
          let inf = this.$store.getters.getInfected;  // Summe of all Infected People during the Game
          let dead = this.$store.getters.getDead;  // Summe of all Infected People during the Game
          let y = this.$store.getters.getInfectedMultiplier; // Infected Multiplier
          let z = Math.round((inf * y) / 3); // Summe of Infected People * Multiplier
          let OptionOne = inf + 1; // Option One if the Value is smaller than 1
          let OptionTwo = dead + z; // Option Two Value is 1 or more
          (z < 1) ? this.$store.dispatch('handleChangeDeadValue', OptionOne) : this.$store.dispatch('handleChangeDeadValue', OptionTwo);
        }, 30000);
      },
    },

    destroyed() {
      //clear Game
      this.$store.dispatch('handleChangeInfectedValue', 0);
      this.$store.dispatch('handleChangeDeadValue',0);
      clearInterval(this.InfectedInterval);
      clearInterval(this.DeadInterval);
    }
  }
</script>
