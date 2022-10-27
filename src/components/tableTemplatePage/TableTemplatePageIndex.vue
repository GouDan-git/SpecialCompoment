<template>
  <div class="page-box" id="box">
    <Filter :filter="filter" class="filter" @setDataSize="setDataSize" />
    <Table
      :columnsList="columnsList"
      :clientWidth="clientWidth"
      :clientHeight="clientHeight"
      :total="dataSize"
    />
    <Pagination :filter="filter" />
  </div>
</template>

<script setup lang="ts">
import Table from "./table/TypeOne.vue";
import Filter from "./filter/TypeOne.vue";
import Pagination from "./pagination/TypeOne.vue";
import { reactive, ref, onMounted, onUnmounted, watch } from "vue";

// 根据窗口调整表的大小
const clientWidth = ref(0);
const clientHeight = ref(0);
function getClientSize() {
  const box = document.getElementById("box") as Element;
  clientWidth.value = box.clientWidth;
  clientHeight.value = box.clientHeight;
}
onMounted(() => {
  getClientSize();
  window.addEventListener("resize", getClientSize);
});
onUnmounted(() => {
  window.removeEventListener("resize", getClientSize);
});

// 筛选条件
type Filter = {
  context: string;
  pageSize: number;
  pageNumber: number;
};
const filter = reactive<Filter>({
  context: "",
  pageSize: 100,
  pageNumber: 0,
});
watch(filter, (val) => {});

// 表数据的数量
const dataSize = ref(1000);
const setDataSize = (val: number) => {
  dataSize.value = val;
};

// 表头
const columnsList = [
  "姓名",
  "性别",
  "身份证号",
  "籍贯",
  "学历",
  "毕业院校",
  "专业",
  "期望发展城市",
  "期望薪资",
  "备注",
];
</script>

<style lang="scss" scoped>
.page-box {
  margin: 16px;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
}
</style>
