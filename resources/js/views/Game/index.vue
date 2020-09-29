<template>
    <div class="container-video">
        <video id="Story-Line_Video" ref="videoRef" autoplay @ended="OnEnd()" @pause="OnPause"
               @play="OnStart" :class="{'end-video': videoEnd}" @timeupdate="updateVideoTime">
            <source :src="VideoSource">
        </video>
        <input type="hidden" v-model="ProgressStatus">
        <div :class="{'video-container-grid-end':videoEnd, 'video-container-grid':!videoEnd}">
            <div class="top">
                <app-header v-if="videoEnd"></app-header>
<!--                <button @click="Cheat">Cheat</button>-->
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
        VideoCurrentTime: null,
          }
    },
    components: {
      'app-score': score,
      'app-header': header,
    }, computed: mapGetters({
      storyLine: 'getStoryLineList',
    }),
    watch: {
      VideoCurrentTime(newValue, oldValue) {
        // console.log(newValue,oldValue);
      }
    },created(){
      this.VideoSource = this.storyLine[this.ProgressStatus].video;
    },
    methods: {
      OnEnd() {
        this.videoEnd = true;
      }, OnPause() {
        this.videoEnd = true;
      }, OnStart() {
        this.videoEnd = false;
      },
      updateVideoTime(){
        let Video = this.$refs.videoRef;
        let VideoDuration = this.$refs.videoRef.duration - this.storyLine[this.ProgressStatus].Overlay;
        let CurrentTime = this.$refs.videoRef.currentTime;
        let VideoType = this.storyLine[this.ProgressStatus].type;
        if (VideoType === "question"){
          if (VideoDuration < CurrentTime){
            // console.log("Start Event");
            this.videoEnd = true;
          }
        }else {
          if (Video.duration === CurrentTime){
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
        if (this.storyLine[val].InfectedDelay){
          // console.log("If");
          setTimeout(()=>{
            this.CalculateInfectionAndDead(val);
          },this.storyLine[val].InfectedDelay);
        } else {
          // console.log("else");
          this.CalculateInfectionAndDead(val);
        }
        if (this.storyLine[val].AKW){
          console.log("AKW AKTIVE");
          this.CalculateAKW(val);
        }
      },

      // Calcutlate Infected People and Dead People Base of Min/Max Values
      CalculateInfectionAndDead(val){
        let inf = this.storyLine[val].MinMaxInfected;
        let dead =  this.storyLine[val].MinMaxDead;
        let InfectedPeople = this.RandomMinMaxNumber(inf[0],inf[1]);
        let DeadPeople = this.RandomMinMaxNumber(dead[0],dead[1]);
        this.$store.dispatch('handleChangeInfectedValue', InfectedPeople);
        this.$store.dispatch('handleChangeDeadValue', DeadPeople);
      },
      CalculateAKW(val){
        // console.log("AKW CALC");
        let AKW =  this.storyLine[val].AKW;
        let AKWPeople = this.RandomMinMaxNumber(AKW[0],AKW[1]);
        this.$store.dispatch('handleChangeAkwValue', AKWPeople);
        // console.log("AKW END", AKWPeople);
      },

      RandomMinMaxNumber(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
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
      this.$store.dispatch('handleChangeInfectedValue', 0);
      this.$store.dispatch('handleChangeDeadValue', 0);
      this.$store.dispatch('handleChangeAkwValue', 0);
    }
  }
</script>
