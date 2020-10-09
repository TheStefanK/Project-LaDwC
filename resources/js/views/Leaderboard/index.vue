<template>
    <div class="leaderboard-container">
        <h2>Leaderboard</h2>
        <table class="lb-table">
            <tr>
                <th>Platz</th>
                <th>Name</th>
                <th>Zeit</th>
                <th>Todesfälle</th>
            </tr>
            <tr v-for="(x,index) in players.data">
                <td>{{index + 1 + Rankstart }}</td>
                <td>{{x.name}}</td>
                <td>{{x.infected}}</td>
                <td>{{x.deceased}}</td>
            </tr>
        </table>
        <div class="lb-paginate">
            <button :disabled="players.prev_page_url == null" @click="PrevPage"> < </button>
            <button :disabled="players.next_page_url == null" @click="NextPage"> > </button>
        </div>
    </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: "Leaderboard",
    data() {
      return {
        players: [],
        Rankstart: 0,
      }
    },
    created() {
      // console.log("axios");
      axios.get("/api/score/index")
        .then(response => {
          // console.log(response.data);
          this.players = response.data;
        }).catch(error => {
        console.error(error)
      });
    },
    methods: {
      NextPage() {
        axios.get(this.players.next_page_url)
          .then(response => {
            // console.log(response.data);
            if (response.data.current_page === 1) {
              this.Rankstart = 0;
            }else {
              let newRankstart = this.players.per_page * this.players.current_page;
              this.Rankstart = newRankstart;
            }
            this.players = response.data;
          }).catch(error => {
          console.error(error)
        });
      },
      PrevPage() {
        if (this.players.prev_page_url != null) {
          axios.get(this.players.prev_page_url)
            .then(response => {
              if (response.data.current_page === 1) {
                this.Rankstart = 0;
              }else {

                let newRankstart = this.players.per_page * this.players.current_page;
                this.Rankstart = newRankstart;

              }

              this.players = response.data;
            }).catch(error => {
            console.error(error)
          });

        }
      }
    }
  }
</script>

