
<template>
  <div
    v-for="item in data.newsdata.data"
    :key="item.seq">
    <p>{{item.旅宿名稱}}</p>
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
</style>
