<template>
    <div>
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
  export default {
    name: "decisionbox"
  }
</script>

<style scoped>

</style>
