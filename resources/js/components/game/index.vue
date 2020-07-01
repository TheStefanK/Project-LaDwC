<template>
    <div class="container-video">
        <video id="Story-Line_Video" ref="videoRef" controls="controls" autoplay @ended="OnEnd()" @pause="OnPause"
               @play="OnStart">
            <source :src="VideoSource">
        </video>
        <input type="hidden" v-model="ProgressStatus">
        <div class="video-container-grid" v-if="videoEnd">
            <div class="top">
                <app-header></app-header>
            </div>
            <div class="middle">
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
                    <p class="info">placeholder</p>
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
  import score from './score'
  import header from '../layout/header'

  export default {
    name: "Game",
    data() {
      return {
        videoEnd: false,
        videoPause: false,
        ProgressStatus: 1,
        VideoSource: '/video/1.mp4',
      }
    },
    components: {
      'app-score': score,
      'app-header': header,
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

<style scoped lang="scss">
    .video-container-grid {
        position: absolute;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 15% 1fr 1fr;
        gap: 1px 1px;
        grid-template-areas: "top" "middle" "bottom";
        background-color: rgba(0, 0, 0, 0.99);
    }

    .top {
        grid-area: top;
    }

    .middle {
        grid-area: middle;
        display: grid;

        .storyLineContinue {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;

            .responseBtn {
                width: max-content;
                height: max-content;
                justify-self: center;
            }
        }

        .middle-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 1px;
            grid-template-areas: "question question" "responseOne responseTwo";
        }

        .question {
            grid-area: question;
        }

        .responseOne {
            grid-area: responseOne;
            justify-self: end;
        }

        .responseTwo {
            justify-self: start;
            grid-area: responseTwo;
        }
    }

    .bottom {
        grid-area: bottom;
        align-self: end;
    }
</style>
