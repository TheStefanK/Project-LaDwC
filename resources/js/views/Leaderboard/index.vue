<template>
    <div>
        <h2>Leaderboard</h2>
        <ul>
            <li v-for="(x,index) in leaderboard">
                <span>{{index}}</span>
                <span>{{x.name}}</span>
                <span>{{x.Points}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "Leaderboard",
    data(){
      return{
        leaderboard:{
          1:{
            name: 'Test1',
            Points: 20390
          },
          2:{
            name: 'Test2',
            Points: 30390
          },
          3:{
            name: 'Test3',
            Points: 20390
          },
        }
      }
    }
  }
</script>

<style scoped>

</style>
