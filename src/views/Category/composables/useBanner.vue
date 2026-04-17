<!-- 封装轮播图业务代码 -->
 <script> 
 import {getBannerAPI} from "@/apis/home";
import { onMounted, ref } from "vue";
export function useBanner() {
  const BannerList = ref([])
const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite:'2'
  })
  console.log(res)
  BannerList.value = res.result
}
onMounted(()=>{
  getBanner()
})
return {
  BannerList
}
}
 
</script>
