<template>
<div>
    <p>單向綁定</p>
    {{msg}}
</div>
    
<div>
    <p>雙向綁定</p>
    <input type = "text" v-model = "text"/>
    <p>{{text}}</p>
</div>

</template>
    

<script setup>
import { ref } from 'vue';
const msg = 'temp Vue'
const text = ref("Vue3")
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
