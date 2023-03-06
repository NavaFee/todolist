<template>
    <div>
        <h1>这是child组件</h1>
        这是父组件的数据: {{ msg }}
        <button @click="send">传值给父组件</button>
    </div>
</template>

<script>
import { DefineComponent,ref, onMounted } from 'vue';

export default defineComponent({
    name :'Child',

    //接受父组件传递过来的参数
    //props 接受的数据不能直接修改
    props :{
        msg:{
            //数据类型校验 只能接受string类型的数据
            type:String
        }
    },
    setup(props,ctx){
        console.log(props.msg)
        let chuidMsg=ref('我是子组件的数据')
        let send = ()=>{
            //通过ctx.emit分发事件
            //emit 的第一个参数是事件名称，第二个是传递的数据
            ctx.emit('send',childMsg.value)
        }
        return{
            send,
        }
    }
})
</script>