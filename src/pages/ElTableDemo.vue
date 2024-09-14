<template>
  <div class="header">
    <div class="search">
      <div class="item">
        <el-text class="title">姓名</el-text>
        <el-input class="custom-el-input"></el-input>
      </div>
      <div class="item">
        <el-text class="title">地址</el-text>
        <el-input class="custom-el-input"></el-input>
      </div>

      <div class="oper item">
        <el-button type="primary" @click="compute"> 计算结果 </el-button>
      </div>
    </div>
  </div>
  <custom-table
    ref="tableRef"
    :data="showTableData"
    :selectable="true"
    :height="tableH"
    :total="pageData.totalNum"
    :page-size="pageData.pageSize"
    :current-page="pageData.currentPage"
  >
    <custom-table-column
      prop="id"
      label="编号"
      width="120"
    ></custom-table-column>
    <custom-table-column
      prop="name"
      label="名称"
      width="120"
    ></custom-table-column>
    <custom-table-column
      prop="sex"
      label="性别"
      width="120"
    ></custom-table-column>
    <custom-table-column prop="date" label="日期">
      <template v-slot:default="scoped">
        {{ formatDate(scoped.row.date) }}
      </template>
    </custom-table-column>
    <custom-table-column prop="address" label="地址"></custom-table-column>
  </custom-table>

  <custom-pagination
    :current-page="pageData.currentPage"
    :page-size="pageData.pageSize"
    :total="pageData.totalNum"
    @change-current-page="changeCurrentPage"
    @change-size="changePageSize"
  ></custom-pagination>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue"
import type { Ref } from "vue"
import {
  ElButton,
  ElInput,
  ElText,
  ElMessage,
  ElMessageBox,
} from "element-plus"
import CustomTable from "../components/CustomTable.vue"
import CustomTableColumn from "../components/CustomTableColumn.vue"
import CustomPagination from "../components/CustomPagination.vue"
import { formatDate } from "../utils/date"

interface User {
  id: number
  date: Date
  name: string
  age: number
  sex: string
  address: string
}

// 页面相关
const pageData = reactive({
  currentPage: 1,
  pageSize: 20,
  totalNum: 0,
})

const tableH = "calc(100vh - 150px)"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const showTableData: Ref<any[]> = computed(() => {
  let start = (pageData.currentPage - 1) * pageData.pageSize
  let end = start + pageData.pageSize
  return tableData.slice(start, end)
})

const tableData: User[] = []
for (let i = 1; i < 200; i++) {
  const item: User = {
    id: i,
    name: "姓名" + i,
    age: 18,
    sex: "女",
    date: new Date(),
    address: "",
  }
  tableData.push(item)
}

pageData.totalNum = tableData.length
// 切换pageData
const changeCurrentPage = (page: number) => {
  pageData.currentPage = page
}

const changePageSize = (size: number) => {
  pageData.pageSize = size
}

type tableReturnType = {
  deletedIds: (string | number)[]
  selectedIds: (string | number)[]
  [index: string]: unknown
}

const tableRef: Ref<tableReturnType> = ref(null)
/**
 * 计算结果
 * ** */
const compute = () => {
  console.log("selectAll:", tableRef.value.selectAll)
  console.log("selectedIds:", tableRef.value.selectedIds.length)
  console.log("deletedIds:", tableRef.value.deletedIds.length)
  ElMessageBox.confirm(
    `是否全选:${tableRef.value.selectAll}, 已选择${tableRef.value.selectedIds.length}行，全选删除${tableRef.value.deletedIds.length}行`,
    {
      confirmButtonText: "确认",
      cancelButtonText: "删除",
      type: "info",
    },
  )
    .then(() => {
      ElMessage({
        type: "success",
        message: "操作成功",
      })
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消操作",
      })
    })
}
</script>

<style scoped lang="scss">
.header {
  padding: 10px 0;

  .search {
    gap: 10px;

    .item {
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;

      .title {
        white-space: nowrap;
        margin-right: 5px;
      }

      .custom-el-input {
        width: 100px;
      }
    }
  }

  .oper {
    float: right;
  }
}
</style>
