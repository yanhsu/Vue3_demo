<template>
  <b-card>
  <b-nav pills>
      <b-nav-item :active="activeCity=='Taipei'" @click="changeCity('Taipei')">台北市</b-nav-item>
      <b-nav-item :active="activeCity=='NewTaipei'" @click="changeCity('NewTaipei')">新北市</b-nav-item>
      <b-nav-item :active="activeCity=='TaoYuan'" @click="changeCity('TaoYuan')">桃園市</b-nav-item>
      <b-nav-item :active="activeCity=='TaiChung'" @click="changeCity('TaiChung')">台中市</b-nav-item>
      <b-nav-item :active="activeCity=='TaiNan'" @click="changeCity('TaiNan')">台南市</b-nav-item>
      <b-nav-item :active="activeCity=='KaoHsiung'" @click="changeCity('KaoHsiung')">高雄市</b-nav-item>

    </b-nav>
  </b-card>
  <div class="header">
    <h1>台北市觀光景點</h1>
  </div>
  <div class="scenicSpot"    
      v-for="(item) in source"
      :key="item.ScenicSpotID">

      <h1>{{item.ScenicSpotName}}</h1>
      <span class="pictures">
        <!-- 使用v-bind 對img動態賦值 -->
        <img :src = "item.Picture.PictureUrl1" :alt = "item.Picture.PictureUrl1"/>
      </span>
      <div>
        <p v-show="item.Class1 !== null" class="tag" >{{item.Class1}}</p>
        <p v-show="item.Level !== null" class="tag" >{{item.Level}}</p>
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
  store.dispatch('getData',{
    skip: currentPage.value-1,
    city: cityArr[activeCity.value].eng
  });
  console.log(store.state.data);
  });

  //-----------監聽儲存庫(store)內資料變化--------
  let isLoad = computed(()=>store.state.isLoad);
  let source = computed(()=>store.state.data);
  let isError = computed(()=>store.state.isError);
  let errorMsg = computed(()=>store.state.errorMsg);
  let total = computed(()=>store.state.data.total);
  //--------------------------------------------

  // 設定當前縣市
  let activeCity = ref('Taipei');

  // 設定api中的縣市(中英文)
  const cityArr = reactive(
    {
      Taipei: {
        zh_tw: "台北市",
        eng:'Taipei'
      },
      NewTaipei: {
        zh_tw: "新北市",
        eng:'NewTaipei'
      },
      TaoYuan: {
        zh_tw: "桃園市",
        eng:'Taoyuan'
      },
      TaiChung: {
        zh_tw: "台中市",
        eng:'Taichung'
      },
      TaiNan: {
        zh_tw: "台南市",
        eng:'Tainan'
      },
      KaoHsiung: {
        zh_tw: "高雄市",
        eng:'Kaohsiung'
      }
    }
  )
  // 換城市
  function changeCity (city) {
    activeCity.value = city;
  }
  //pagination
  //分頁每頁筆數
  let perPage = ref(1);
  //目前頁數
  let currentPage = ref(1);
  //監聽目前頁數若換頁重新取得api資料
  watch(currentPage, (nv, pv) => {
    store.dispatch('getData', { 
      skip: nv - 1,
      city: cityArr[activeCity.value].eng});
  })
  //監聽目前頁數若換頁重新取得api資料
  watch(activeCity, (nv, pv) => {
    store.dispatch('getData', { 
      skip: currentPage.value - 1,
      city: cityArr[nv].eng});
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
