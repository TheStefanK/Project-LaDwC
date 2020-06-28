<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
    <div class="container-video">
        <video id="Story-Line_Video" ref="videoRef" controls autoplay @ended="OnEnd()" @pause="OnPause"
               @play="OnStart">
            <source :src="VideoSource">
        </video>
        <input type="hidden" v-model="ProgressStatus">
        <div class="decision-box" v-show="videoEnd">

            <div v-if="this.storyLine[this.ProgressStatus].question !== undefined" class="grid-container">
                <div class="question">
                    <p>{{this.storyLine[this.ProgressStatus].question}}</p>

                </div>

                <div class="responseOne">
                    <button v-if="this.storyLine[this.ProgressStatus].question !== undefined" class="responseBtn" @click="nextProgress(storyLine[ProgressStatus].firstOption.next)">
                        {{storyLine[this.ProgressStatus].firstOption.response}}
                    </button>
                </div>

                <div v-if="this.storyLine[this.ProgressStatus].question !== undefined">
                    <button class="responseBtn" @click="nextProgress(storyLine[ProgressStatus].firstOption.next)">
                        {{storyLine[this.ProgressStatus].SecandOption.response}}
                    </button>



                </div>
                <div class="score">
                    <app-score></app-score>
                </div>
            </div>



        </div>

    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import score from './score'

  export default {
    name: "Game",
    data() {
      return {
        videoEnd: false,
        ProgressStatus: 1,
        VideoSource: '/video/1.mp4',
      }
    },
    components: {
      'app-score': score,
    }
    , computed: mapGetters({
      storyLine: 'getStoryLineList',
    })
    ,
    methods: {
      OnEnd() {
        this.videoEnd = true;
      }, OnPause() {
        this.videoEnd = true;
      }, OnStart() {
        this.videoEnd = false;
      },
      nextProgress(val) {
        this.ProgressStatus = val;
        this.VideoSource = this.storyLine[val].video;
        this.$refs.videoRef.load();
        this.videoEnd = false;
      }
    }
  }
</script>

<style scoped>

</style>
