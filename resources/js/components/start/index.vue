<template>
    <div class="wrapper-start">
<!--        <video src="/video/bg_video.mp4" autoplay loop></video>-->
        <div class="overlay">
            <div class="intro">
                <router-link :to="{name:'game'}"  class="glitch" data-text="PLAY">PLAY</router-link>
                <span>Life and Death</span>
                    <audio src="/audio/SCORE_II.wav" autoplay loop></audio>
            </div>
        </div>

    </div>
</template>

<script>
  import {Howl, Howler} from 'howler';

  export default {

    name: "index",

  }
</script>

<style scoped>
.wrapper-start{
    width: 100vw;
    overflow: hidden;
}
</style>
