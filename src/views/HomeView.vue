<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader.vue';
import NavFooter from '@/components/navFooter/NavFooter.vue';
import NavMain from '@/components/navMain/NavMain.vue';
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home', //组件名称

  //定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup() {
    let value = ref('')

    //添加任务
    let add = (val) => {
      value.value = val
      //先判断有没有存在的任务，如果任存在则不能重复添加
      let flag = true
      list.value.map(item => {
        if (item.title === value.value) {
          //任务存在
          flag = false
          alert('任务已存在')
        }
      })
      //调用mutation
      if (flag === true) {
        store.commit('addTodo', {
          title: value.value,
          complete: false
        })
      }
    }
    //删除任务
    let del = (val) => {
      console.log(val);
      //调用删除的mutation
      store.commit('delTodo', val)
    }
    //清除已完成
    let clear = (val) => {
      console.log(val);
      //调用删除的mutation
      store.commit('clear', val)
    }
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    return {
      list,
      add,
      value,
      del,
      clear
    }



  },
})
</script>
