<template>
    <div class="container-video">
        <video id="Story-Line_Video" ref="videoRef" autoplay @ended="OnEnd()" @pause="OnPause"
               @play="OnStart" :class="{'end-video': videoEnd}">
            <source :src="VideoSource">
        </video>
        <input type="hidden" v-model="ProgressStatus">
        <div :class="{'video-container-grid-end':videoEnd, 'video-container-grid':!videoEnd}">
            <div class="top">
                <app-header v-if="videoEnd"></app-header>
                <button @click="Cheat">Cheat</button>
            </div>
            <div class="middle" v-if="videoEnd">
                <div class="story-line_question" v-if="storyLine[ProgressStatus].type === 'question'">
                    <div>
                        <p class="question">{{this.storyLine[this.ProgressStatus].question}}</p>
                        <div class="options">
                            <div class="option_one">
                                <div>
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
                            </div>
                            <div class="option_two">
                                <div>
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
                        </div>
                    </div>

                </div>
                <div class="story-line_continue" v-if="storyLine[ProgressStatus].type === 'continue'">
                    <div>
                        <button class="responseBtn" @click="nextProgress(storyLine[ProgressStatus].continueStory.next)">
                            {{storyLine[this.ProgressStatus].continueStory.response}}
                            <span class="line-1"></span>
                            <span class="line-2"></span>
                            <span class="line-3"></span>
                            <span class="line-4"></span>
                        </button>
                    </div>
                </div>
                <div class="story-line_end" v-if="storyLine[ProgressStatus].type === 'end'">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Dein Name" class="input_end_name"
                           v-model="PlayerName">
                    <button class="responseBtn"  @click="Submit_Player">
                        Senden
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
  import axios from "axios"

  export default {
    name: "Game",
    data() {
      return {
        videoEnd: false,
        videoPause: false,
        ProgressStatus: "1",
        VideoSource: '/video/1.mp4',
        InfectedInterval: null,
        DeadInterval: null,
        PlayerName: null,
      }
    },
    components: {
      'app-score': score,
      'app-header': header,
    }, computed: mapGetters({
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
        if (this.storyLine[val].infectedInterval !== undefined && this.storyLine[val].deadInterval !== undefined) {
          console.log("multiplier Change");
          this.$store.dispatch("handleChangeInfectedInterval", this.storyLine[val].infectedInterval);
          this.$store.dispatch("handleChangeDeadInterval", this.storyLine[val].deadInterval);
          console.log(this.storyLine[val].infectedInterval);
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
        let interval = this.$store.getters.getInfectedInterval; // Infected Interval Timer
        this.InfectedInterval = setInterval(() => {
          let inf = this.$store.getters.getInfected;  // Summe of all Infected People during the Game
          let multi = this.$store.getters.getInfectedMultiplier; // Infected Multiplier
          let z = Math.round(inf * multi); // Summe of Infected People * Multiplier
          let OptionOne = inf + 1; // Option One if the Value is smaller than 1
          let OptionTwo = inf + z; // Option Two Value is 1 or more
          (z < 1) ? this.$store.dispatch('handleChangeInfectedValue', OptionOne) : this.$store.dispatch('handleChangeInfectedValue', OptionTwo);
        }, interval);
      },
      startDeadTimer() {
        let interval = this.$store.getters.getDeadInterval; // Dead Interval Timer
        console.log('Dead Interval ' + interval);
        this.DeadInterval = setInterval(() => {
          let inf = this.$store.getters.getInfected;  // Summe of all Infected People during the Game
          let dead = this.$store.getters.getDead;  // Summe of all Infected People during the Game
          let multi = this.$store.getters.getInfectedMultiplier; // Infected Multiplier
          let z = Math.round((inf * multi) / 3); // Summe of Infected People * Multiplier
          let OptionOne = dead + 1; // Option One if the Value is smaller than 1
          let OptionTwo = dead + z; // Option Two Value is 1 or more
          console.log(OptionOne, ' <-1   2-> ', OptionTwo);
          (z < 1) ? this.$store.dispatch('handleChangeDeadValue', OptionOne) : this.$store.dispatch('handleChangeDeadValue', OptionTwo);
        }, interval);
      },
      Submit_Player() {

        if (this.PlayerName !== null) {
          console.log("Name OK");
          let data = {
            "name": this.PlayerName,
            "infected": this.$store.getters.getInfected,
            "deceased": this.$store.getters.getDead,
          };
          axios.post("api/score/create", data).then(response => {
            console.log(response);
            if (response.status === 200){
              this.$router.push({name: "leaderboard"})
            }
          }).catch(error => {
            console.error(error);
          })
        }else {
          console.error("Name not OK")
        }

      },
      Cheat() {
        this.videoEnd = true;
      }
    },
    destroyed() {
      //clear Game
      this.$store.dispatch('handleChangeInfectedValue', 0);
      this.$store.dispatch('handleChangeDeadValue', 0);
      clearInterval(this.InfectedInterval);
      clearInterval(this.DeadInterval);
    }
  }
</script>
