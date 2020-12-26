<template>
   <AppLayout class="w-full h-full xtgl-yhgl">
      <AppBreadcrumb>
         <AppBreadcrumbItem text="日志管理" name="dashboard" :is-last="true"></AppBreadcrumbItem>
      </AppBreadcrumb>
      <div class="w-full h-full flex flex-col bg-white">
         <ConditionSingle class="w-full">
            <template v-slot:condition>
            </template>
            <template v-slot:action>
            </template>
         </ConditionSingle>
         <a-table :columns="columns" :data-source="dataSource"
                  class="border border-gray-200"
                  :rowClassName="(_, index)=>index%2===1 ? 'bg-gray-100': ''">
            <template v-slot:action="{ record }">
            </template>
         </a-table>
      </div>

   </AppLayout>
</template>

<script>
import AppLayout from "@/components/shared/AppLayout";
import ConditionSingle from "@/components/shared/ConditionSingle";
import AppBreadcrumb from "@/components/shared/AppBreadcrumb";
import AppBreadcrumbItem from "@/components/shared/AppBreadcrumbItem";
import {AppMixin} from "@/mixins";
import {reactive, ref} from "@vue/reactivity";
let _columns = [
]
export default {
   name: "LogList",
   components: {AppBreadcrumbItem, AppBreadcrumb, ConditionSingle, AppLayout},
   mixins: [AppMixin],
   setup() {
      let condition = reactive()
      let dataSource = ref([])
      let columns = ref(_columns)

      return {
         condition,
         columns,
         dataSource
      }
   },
   methods: {

   }
}
</script>

<style scoped>

</style>
