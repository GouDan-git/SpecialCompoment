<template>
  <el-form :inline="true" :model="filter" label-suffix="：">
    <el-form-item>
      <el-input
        style="width: 300px"
        v-model="context"
        placeholder="请输入搜索内容"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">搜索</el-button>
    </el-form-item>
    <el-form-item>
      <el-input
        style="width: 300px"
        v-model="dataSize"
        placeholder="请输入测试数据数量"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="setDataSize">设置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { toRefs, ref } from "vue";
import type { PropType } from "vue";

// 搜索
interface Filter {
  context: string;
}
const props = defineProps({
  filter: { type: Object as PropType<Filter>, required: true },
});
const { filter } = toRefs(props);
const context = ref("");
context.value = filter.value.context;
const search = () => {
  filter.value.context = context.value;
};

// 设置表数据的数量
const dataSize = ref("");
const emit = defineEmits(["setDataSize"]);
const setDataSize = () => {
  const size = parseInt(dataSize.value);
  if (isNaN(size)) return;
  emit("setDataSize", size);
};
</script>
