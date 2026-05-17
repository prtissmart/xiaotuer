import { computed, ref,onUnmounted} from 'vue';
import dayjs from 'dayjs';

export const useCountDown=()=>{
    let timer=null
    //1.响应式数据
    const time=ref(0)

    //格式化时间
    const formatTime = computed(()=>{
        return dayjs.unix(time.value).format('mm分ss秒')
    })
    //2.开启倒计时函数
    const start = (currentTime)=>{
        time.value=currentTime
        //核心逻辑，每隔一秒减一
        timer=setInterval(()=>{
            time.value--
        },1000)
    }
    //组件销毁清除定时器
    onUnmounted(()=>{
        clearInterval(timer)
    })
    return { formatTime, start }
}