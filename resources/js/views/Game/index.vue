<template>
    <div class="container-video">
        <video id="Story-Line_Video" ref="videoRef" autoplay @ended="OnEnd()" @pause="OnPause"
               @play="OnStart" :class="{'end-video': videoEnd}" @timeupdate="updateVideoTime">
            <source :src="VideoSource">
        </video>
        <input type="hidden" v-model="ProgressStatus">
        <div :class="{'video-container-grid-end':videoEnd, 'video-container-grid':!videoEnd}">
            <div class="top">
                <!--                <app-header v-if="videoEnd"></app-header>-->

                <div class="left">
                    <router-link :to="{name: 'home'}" class="exit-button" v-if="videoEnd">
                        <i class="icon-exit"></i>
                        Exit
                    </router-link>
                </div>
                <div class="right">
                    <span>{{elapsedTime}}</span>
                    <button @click="Cheat">Cheat</button>
                </div>


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
                    <button class="responseBtn" @click="Submit_Player">
                        Senden
                        <span class="line-1"></span>
                        <span class="line-2"></span>
                        <span class="line-3"></span>
                        <span class="line-4"></span>
                    </button>
                    <span v-if="PlayerNameError" class="error-msg">Der Name darf nur aus Buchstaben und Zahlen bestehen! (A-Z,a-z,0-9) </span>
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
  import {scoreMixins} from '../../utility/mixins'

  export default {
    name: "Game",
    mixins: [scoreMixins],
    data() {
      return {
        videoEnd: false,
        videoPause: false,
        ProgressStatus: "1",
        VideoSource: '/video/vid_1.mp4',
        PlayerName: null,
        PlayerNameError: false,
        VideoCurrentTime: null,
        GameTimer:null,

      }
    },
    components: {
      'app-score': score,
      'app-header': header,
    }, computed: mapGetters({
      storyLine: 'getStoryLineList',
      Timer: 'getTimer',
      elapsedTime: 'getElapsedTime'
    }),
    watch: {
      VideoCurrentTime(newValue, oldValue) {
        // console.log(newValue,oldValue);
      }
    }, created() {
      this.VideoSource = this.storyLine[this.ProgressStatus].video;
        this.GameTimerStart();
    },
    methods: {
      OnEnd() {
        this.videoEnd = true;
      }, OnPause() {
        this.videoEnd = true;
      }, OnStart() {
        this.videoEnd = false;
      },
      GameTimerStart() {
        this.GameTimerStart = setInterval(()=>{
          let Time =  this.$store.getters.getTimer;
          Time += 1;
          this.$store.dispatch("handleChangeTimer",Time);
          let elapsedTime = this.formattedElapsedTime(Time);
          this.$store.dispatch("handleChangeElapsedTime",elapsedTime)
        },1000)
      },
      formattedElapsedTime(time) {
        console.log("ElapsedTune");
        const date = new Date(null);
        date.setSeconds(time / 1);
        const utc = date.toUTCString();
        return utc.substr(utc.indexOf(":") - 2, 8);
      },
      updateVideoTime() {
        let Video = this.$refs.videoRef;
        let VideoDuration = this.$refs.videoRef.duration - this.storyLine[this.ProgressStatus].Overlay;
        let CurrentTime = this.$refs.videoRef.currentTime;
        let VideoType = this.storyLine[this.ProgressStatus].type;
        if (VideoType === "question") {
          if (VideoDuration < CurrentTime) {
            // console.log("Start Event");
            this.videoEnd = true;
          }
        } else {
          if (Video.duration === CurrentTime) {
            this.videoEnd = true;
          }
        }
        this.VideoCurrentTime = this.$refs.videoRef.currentTime;
      },
      // Next Step Story Line
      nextProgress(val) {
        setTimeout(() => {
          this.ProgressStatus = val;
          this.VideoSource = this.storyLine[val].video;
          this.$refs.videoRef.load();
          this.videoEnd = false;
        }, 500);
        // console.log(this.storyLine[val].InfectedDelay);
        if (this.storyLine[val].InfectedDelay) {
          // console.log("If");
          setTimeout(() => {
            this.CalculateInfectionAndDead(val);
          }, this.storyLine[val].InfectedDelay);
        } else {
          // console.log("else");
          this.CalculateInfectionAndDead(val);
        }
        if (this.storyLine[val].AKW) {
          console.log("AKW AKTIVE");
          this.CalculateAKW(val);
        }
      },

      // Calcutlate Infected People and Dead People Base of Min/Max Values
      CalculateInfectionAndDead(val) {
        let inf = this.storyLine[val].MinMaxInfected;
        let dead = this.storyLine[val].MinMaxDead;
        let InfectedPeople = this.RandomMinMaxNumber(inf[0], inf[1]);
        let DeadPeople = this.RandomMinMaxNumber(dead[0], dead[1]);
        this.$store.dispatch('handleChangeInfectedValue', InfectedPeople);
        this.$store.dispatch('handleChangeDeadValue', DeadPeople);
      },
      CalculateAKW(val) {
        // console.log("AKW CALC");
        let AKW = this.storyLine[val].AKW;
        let AKWPeople = this.RandomMinMaxNumber(AKW[0], AKW[1]);
        this.$store.dispatch('handleChangeAkwValue', AKWPeople);
        // console.log("AKW END", AKWPeople);
      },

      RandomMinMaxNumber(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
      Player_Name_Check(){
        let errorCounter = [] ;
        let reg = "([A-Za-z0-9])\\w+";
        if (this.PlayerName !== null){
          errorCounter.push("null");
        }
        if (!this.PlayerName.match(reg)){
          errorCounter.push("regex");
        }
        if(this.PlayerName.length > 15){
          errorCounter.push("lenght")
        }

        console.log("Player Error Counter",errorCounter);

        return errorCounter;

      },
      Submit_Player() {

        let errors = this.Player_Name_Check;
        let sec = this.$store.getters.getTimer;
        let dead = this.$store.getters.getDead;
        let rang = Math.round(((sec/dead) * 100000000));
        let data = {
          "name": this.PlayerName,
          "infected": this.$store.getters.getInfected,
          "deceased": this.$store.getters.getDead,
          "time": this.$store.getters.getElapsedTime,
          "rang": rang,
        };
        console.log(errors.length);
        if (errors.length === 0 ){
          axios.post("api/score/create", data).then(response => {
            console.log(response);
            if (response.status === 200) {
              this.$router.push({name: "leaderboard"})
            }
          }).catch(error => {
            console.error(error);
            this.PlayerNameError = true;
          })
        } else {
            this.PlayerNameError = true;
        }
      },
      Cheat() {
        this.videoEnd = true;
      }
    },
    destroyed() {
      this.$store.dispatch('handleChangeInfectedValue', 0);
      this.$store.dispatch('handleChangeDeadValue', 0);
      this.$store.dispatch('handleChangeAkwValue', 0);
      this.$store.dispatch('handleChangeTimer', 0);
    }
  }
</script>
