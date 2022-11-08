
<template>
  <div class="header">
    <H3>高雄市旅宿資料</H3>
  </div>
  <div class="row">
  <div class="col-3"    
      v-for="(item) in data.newsdata.data"
      :key="item.seq">
      <h4>旅宿名稱：{{item.旅宿名稱}}</h4>
      <p>類別:{{item.類別}}   星等:{{item.星等}}</p>

  </div>

  </div>
</template>

<script setup>
import axios from 'axios';
import{reactive,onMounted} from 'vue';

//高雄市一般旅館資料
const url = 'https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c';


// const App = {
//   setup() {
    
     const data = reactive({
          newsdata:'',
        })

    onMounted(() => {

      axios.get(url)
      .then((res)=>{
        console.log(res.data)
        data.newsdata = res.data
    })
  });
    // return {data};
  // },
// }
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
