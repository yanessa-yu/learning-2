<template>
  <div class="pagination-outer-box">
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[10, 20, 30, 40, 50]"
      :background="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script setup lang="ts">
import { ElPagination } from "element-plus"

defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 0,
  },
})

const emits = defineEmits(["changeSize", "changeCurrentPage"])

const handleSizeChange = (size: number) => {
  emits("changeSize", size)
}

const handleCurrentChange = (page: number) => {
  emits("changeCurrentPage", page)
}
</script>

<style scoped lang="scss">
.pagination-outer-box {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: flex-end;
}
</style>
