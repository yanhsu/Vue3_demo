<template>
<div class = "my-pagination">
  <a rel="nofollow" href="javascript:;" :class="{disabled:currentNum === 1}" @click="changePage(false)">上一頁</a>
  <span v-if="currentNum > 3">...</span>
  <a href = "javascript:;"
    v-for="item in list"
    :key="item"
    :class = "{actlve: currentNum === item}"
    @click="changePage(item)"
  >{{item}}</a>
  <span v-if="currentNum < pages - 3">...</span>
  <a rel="nofollow" href="javascript:;" :class="{disabled:currentNum === pages}" @click="changePage(true)">下一頁</a>

  <!-- <button type="button" @click="prev">上一頁</button> -->
  <!-- <button type="button" @click="total(index)">{{index}}</button> -->
  <!-- <button type="button" @click="next">下一頁</button> -->


</div>

</template>
    

<script setup>
import { reactive } from "@vue/reactivity";
import { computed,ref } from "@vue/reactivity";

const props = defineProps({

  total:{
    type:Number,
    default:390
  },
  pageSize:{
    type:Number,
    default:20
  },
  currentPage:{
    type:Number,
    default:1
  }

});

let currentNum = ref(props.currentPage);
// 總頁數 = 總項目數 / 單頁顯示項目數
const pages = computed(()=>Math.ceil(props.total/props.pageSize));
const list = computed(()=>{
  const result = []
  if(pages.value <= 5){
    for(let i =1;i<=pages.value;i++){
      result.push(i)
    }
  }else{
    if(currentNum.value <= 2){
      for(let i = 1;i <=5;i++){
        result.push(i)
      }
    }else if(currentNum.value >=3 && currentNum.value <=pages.value -2 ){
      for(let i = currentNum.value - 2;i<=currentNum.value+2;i++){
        result.push(i)
      }
    }else if (currentNum.value > pages.value - 2){
      for(let i = pages.value - 4;i<=pages.value; i++){
        result.push(i)
      }
    }
  }
  return result;
})
const emit = defineEmits(["changePage"])


function changePage(type){
  if(type === false){
      //上一頁
    if(currentNum.value <=1)
    return
    currentNum -=1
  }else if(type === true){
    // 下一頁
    if(currentNum.value >=pages.value)
    return
    currentNum.value +=1
  }else{
    //直接點頁碼
    currentNum.value = type
  }
  emit('changePage',currentNum.value);
}

</script>

<style scoped>
/* .my-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;

  > a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;


    &:hover {
      color: #27BA9B;
    }

    &.active {
      background: #27BA9B;
      color: #fff;
      border-color: #27BA9B;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;

      &:hover {
        color: #333;
      }
    }
  }

  > span {
    margin-right: 10px;
  }
} */

</style>
