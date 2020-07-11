<template>
    <header class="site-header">
        <div class="site-logo">
            <router-link :to="{name: 'home'}" class="site-logo-link">
                <img class="site-logo-img" src="/images/Logo.png" alt="">

                <h1>Life and Death with Corona</h1>
            </router-link>
        </div>
        <div class="site-navigation">

            <ul class="navigation-list">
                <li class="navigation-list-item">
                    <router-link :to="{name: 'home'}">Home</router-link>
                </li>  <li class="navigation-list-item">
                <router-link :to="{name: 'leaderboard'}">Leaderboard</router-link>
            </li>  <li class="navigation-list-item">
                    <a href="#">Team</a>
                </li>
                <li class="navigation-list-item">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
  export default {
    name: "index"
  }
</script>

