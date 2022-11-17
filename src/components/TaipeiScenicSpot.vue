<template>

  <div class="header">
    <h1>台北市觀光景點</h1>
  </div>
  <!-- <div class="row"> -->
  <div class="scenicSpot"    
      v-for="(item) in source"
      :key="item.ScenicSpotID">

      <h1>{{item.ScenicSpotName}}</h1>
      <span class="pictures">
        <!-- 使用v-bind 對img動態賦值 -->
        <img :src = "item.Picture.PictureUrl1" :alt = "item.Picture.PictureUrl1"/>
      </span>
      <div>
        <p class="tag">{{item.Class1}}</p><p class="tag">{{item.Level}}</p>
      </div>
      <p>{{item.DescriptionDetail}}</p>
      <p>{{item.Phone}}</p>

  </div>

  <div>
    <b-pagination class="pagination"
        v-model="currentPage"
        :total-rows="5"
        :per-page="perPage"
        first-number
    ></b-pagination>
  </div>
</template>

<script setup>
// import axios from 'axios';
import { ref, onMounted, reactive, computed, watch} from 'vue'
import { useStore } from 'vuex'
const store = useStore()

//台北市旅遊景點
// const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?%24top=5&%24format=JSON';
    
//      const data = reactive({
//       scenicSpot:'',
//         })

//     onMounted(() => {

//       axios.get(url)
//       .then((res)=>{
//         console.log(res.data)
//         data.scenicSpot = res.data
//     })
//     .catch((err) =>{
//       throwException(err);
//     })
//   });

  onMounted(() => {
  //於畫面渲染時取得api資料
  store.dispatch('getData', currentPage.value-1);
  console.log(store.state.data);
  });

  //-----------監聽儲存庫(store)內資料變化--------
  let isLoad = computed(()=>store.state.isLoad);
  let source = computed(()=>store.state.data);
  let isError = computed(()=>store.state.isError);
  let errorMsg = computed(()=>store.state.errorMsg);
  let total = computed(()=>store.state.data.total);
  //--------------------------------------------

  //pagination
  //分頁每頁筆數
  let perPage = ref(1);
  //目前頁數
  let currentPage = ref(1);
  //監聽目前頁數若換頁重新取得api資料
  watch(currentPage, (nv, pv) => {
    store.dispatch('getData', nv);
  })

</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.scenicSpot {
  text-align:left;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  border-radius: 10px;
  margin: 10px;
  padding: 0 2.5em;
}

.tag {
  display: inline-block;
    background: #008080;
    color: white;
    padding: 10px;
    margin-right: 1em;
    border-radius: 10px;

}

.pictures {
  display: flex;
  justify-content: center;
  margin: 0 0 3em 0;
}
.pictures img {
  border-radius: 10px;
    width: 100%;
}

p {
  margin: 0 0 2em 0;
}

h1 {
  margin:1em 0;
}
.pagination {
  justify-content: center !important; 

}

</style>
