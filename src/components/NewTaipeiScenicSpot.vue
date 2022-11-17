<template>

  <div class="header">
    <h1>新北市觀光景點</h1>
  </div>
  <!-- <div class="row"> -->
  <div class="scenicSpot"    
      v-for="(item) in data.scenicSpot"
      :key="item.ScenicSpotID">

      <h1>{{item.ScenicSpotName}}</h1>
      <!-- 使用v-bind 對img動態賦值 -->
      <img :src = "item.Picture.PictureUrl1" :alt = "item.Picture.PictureUrl1"/>
      <div>
        <p class="tag">{{item.Class1}}</p><p class="tag">{{item.Level}}</p>
      </div>
      <p>{{item.DescriptionDetail}}</p>
      <p>{{item.Phone}}</p>

  </div>
</template>

<script setup>
import axios from 'axios';
import{reactive,onMounted} from 'vue';
import { ref } from 'vue'

//新北市旅遊景點
const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/NewTaipei?%24filter=Picture%2FPictureUrl1%20ne%20null%20and%20Picture%2FPictureDescription1%20ne%20null&%24top=30&%24format=JSON';
    
     const data = reactive({
      scenicSpot:'',
        })

    onMounted(() => {

      axios.get(url)
      .then((res)=>{
        console.log(res.data)
        data.scenicSpot = res.data
    })
  });

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
  padding: 20px;
}

.tag {
  display: inline-block;
    background: #008080;
    color: white;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;

}
</style>
