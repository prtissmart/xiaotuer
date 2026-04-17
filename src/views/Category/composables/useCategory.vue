//封装分类业务代码
<script>
import {getCategory} from "@/apis/category"
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
export function useCategory(){
  const categoryList=ref({})
const route=useRoute()
const getCategoryList=async(id=route.params.id)=>{
  const res=await getCategory(id)
  categoryList.value=res.result
}
onBeforeRouteUpdate((to)=>{
  // console.log('路由变化了')
  // console.log(to)
  getCategoryList(to.params.id)
})
onMounted(()=>{
  getCategoryList(route.params.id)
})
return {categoryList}
}
</script>