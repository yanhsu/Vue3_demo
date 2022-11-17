
<template>

<taipei/>
  <!-- <pagecomponents
      :total="total"
      :pageSize = "pageSize"
      :currentPage = "currentPage"
      @change-page="changePage"
    /> -->

</template>

<script setup>
import pagecomponents from './components/page_components.vue';
import taipei from './components/TaipeiScenicSpot.vue';
// import Newtaipei from './components/NewTaipeiScenicSpot.vue';
// import Taoyuan from './components/TaoyuanScenicSpot.vue';
// import Taichung from './components/TaichungScenicSpot.vue';
// import Tainan from './components/TainanScenicSpot.vue';
// import Kaohsiung from './components/KaohsiungScenicSpot.vue';

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
