<template>
    <div >
      <button @click="start"> 开始任务 </button>
    </div>
  </template>

<script>
import { defineComponent,ref } from 'vue';
import { useRouter } from  'vue-router';
export default defineComponent({
    name:'Start',
    setup(){
        let router = useRouter()
        let start =()=>{
            //push 如果是传递对象的形式，就可以传递参数
            router.push({
                path:"/home"
            })
        }
        return{
            start
        }
    }
})
</script>
  