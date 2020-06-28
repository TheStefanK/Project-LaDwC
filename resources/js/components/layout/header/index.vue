<template>
    <header class="site-header">
        <div class="site-logo">
            <a href="#" class="site-logo-link">
                <img class="site-logo-img" src="/images/Logo.png" alt="">

                <h1>Life and Death with Corona</h1>
            </a>
        </div>
        <div class="site-navigation">

            <ul class="navigation-list">
                <li class="navigation-list-item">
                    <a href="#">Home</a>
                </li>  <li class="navigation-list-item">
                    <a href="#">Leaderboard</a>
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

<style scoped>
    /*header*/
    .site-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 0 20px;
        height: 70px;
        background-color: pink;
        border-bottom: 2px solid #222;
    }
    /*Logo*/
    .site-logo{
        display: block;
        text-transform: none;
        font-size: 14px;
        padding: 0;
        margin: 0;
    }
    .site-logo-link{
        text-decoration: none;
        display: grid;
        grid-template-columns: max-content max-content;
        grid-gap: 5px;
        align-self: center;
    }

    h1{
        margin: 0;
        padding: 0;
        align-self: center;
        color: #000000;
    }
    .site-logo-img{
        width: 50px;
        height: 50px;
        margin: 10px;
    }
    /*Navigation*/
    .site-navigation {
        text-align: right;
    }
    .navigation-list{
        list-style: none;
       display: flex;
        justify-content: flex-end;
    }
    .navigation-list-item{
        display: block;
        padding: 0 5px;
    }
</style>
