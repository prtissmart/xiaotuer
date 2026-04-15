<!-- <script>
export default {
  setup() {
    alert('setup')
    const message='this is message'
    const logMessage=()=>{
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate() {
    alert('beforeCreate')
  }
}
</script> -->
<!-- 1-8 -->
<!-- <script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const setcount=()=>{
  count.value++
}
watch(count, (newValue, oldValue) => {
  console.log(`count changed from ${oldValue} to ${newValue}`)
})
</script>


<template>
<div>
  <button @click="setcount">+{{ count }}</button>
</div>
</template> -->
<!-- 1-10生命周期函数 -->
 <!-- <script setup>
import { onMounted } from 'vue';
onMounted(()=>{
  console.log('onMounted')
}
)
</script>
 <template>
  <div></div>
 </template> -->
 <!-- 1-11父子通信 -->
<script setup>
import { ref } from 'vue';
import SonCom from './son-com.vue'
import HelloWorld from '@/components/HelloWorld.vue';
  const count=ref(0)
  setTimeout(()=>{
    count.value++
  },3000)
</script>
<template>
  <div class="father">
    <h2>父组件APP</h2>
    <SonCom :count="count" message="father message"></SonCom>
  </div>
</template>
<style scoped>
.father{
  background-color: aquamarine;
}
</style>