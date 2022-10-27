<template>
  <div class="example-pagination-block">
    <el-pagination
      v-model:currentPage="filter.pageNumber"
      v-model:page-size="filter.pageSize"
      :page-sizes="[100, 1000, 10000, 100000]"
      layout="sizes, prev, pager, next"
      :total="1000"
    />
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { toRefs, ref } from "vue";
interface Filter {
  pageSize: number;
  pageNumber: number;
}
const props = defineProps({
  filter: { type: Object as PropType<Filter>, required: true },
});
const { filter } = toRefs(props);
</script>

<style scoped>
.example-pagination-block .el-pagination {
  position: absolute;
  right: 16px;
  margin-top: 8px;
}
</style>
