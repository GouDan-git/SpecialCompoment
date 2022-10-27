<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :width="clientWidth"
    :height="clientHeight - 94"
    fixed
    class="table-v2"
  />
</template>

<script lang="ts" setup>
import { toRefs, watch, reactive } from "vue";

const props = defineProps({
  columnsList: { type: Array<string>, required: true },
  clientWidth: { type: Number, required: true },
  clientHeight: { type: Number, required: true },
  total: { type: Number, required: true },
});
const { columnsList, clientWidth, clientHeight, total } = toRefs(props);

const generateColumns = (length = 10, prefix = "column-", props?: any) =>
  columnsList.value.map((item, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: item,
    width: 200,
  }));

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = "row-"
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    );
  });

const columns = generateColumns(10);
const data = reactive(generateData(columns, total.value));

watch(total, (val) => {
  data.length = 0;
  data.push(...generateData(columns, val));
});
</script>
