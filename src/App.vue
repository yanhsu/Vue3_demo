
<template>

<ScenicSpotVue/>

</template>

<script setup>
import ScenicSpotVue from './components/ScenicSpot.vue';

function changePage(currentPage){
  console.log(currentPage)
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.row{

  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.col-3{

  border-style: solid;
   border-color: black;
   padding: 1%;
}
</style>
