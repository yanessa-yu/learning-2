<template>
  <el-table
    ref="tableRef"
    :data="data"
    v-bind="$attrs"
    row-key="id"
    @select-all="selectedPageAllRows()"
    @select="selectRow"
  >
    <custom-table-selection-column
      v-if="$attrs.selectable"
      :total="total"
      :page-size="pageSize"
      :select-all="selectAll"
      :selected-count="selectedIds.length"
      :deleted-count="deletedIds.length"
      @selected-all-rows="selectedAllRows"
      @selected-page-all-rows="selectedpageAllRowsByLink"
      @clear-all="clearAllRows"
    ></custom-table-selection-column>
    <slot></slot>
  </el-table>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from "vue"
import type { Ref } from "vue"
import { ElTable } from "element-plus"
import CustomTableSelectionColumn from "./CustomTableSelectionColumn.vue"

defineOptions({
  inheritAttrs: false, //组件自动地继承attribute
})

const props = defineProps<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  pageSize: number
  currentPage: number
  total: number
}>()

/**
 * 从data中获取所有id
 * **/
const ids: Ref<(string | number)[]> = computed(() => {
  return props.data.map((item) => item.id)
})

watch(
  () => [props.currentPage, props.pageSize],
  () => {
    console.log("页面切换", selectAll.value)
    if (selectAll.value) {
      tableRef.value.toggleAllSelection(true)
      nextTick(() => {
        deleteRows()
      })
    } else {
      nextTick(() => {
        selectedRows()
      })
    }
  },
)

/**
 * 通过点击下列选项中的“选择所有项”选择所有
 * * */
const selectAll: Ref<boolean> = ref(false)
const tableRef: Ref = ref(null)
const selectedAllRows = () => {
  selectAll.value = true
  selectedIds.value = []
  if (tableRef.value.getSelectionRows().length === props.data.length) return //已经是当前页勾选/全选的状态下，再点击不触发toggleAllSelection
  tableRef.value.toggleAllSelection(true)
}

/**
 * 通过勾选全选框反选当前页
 **/
const selectedIds: Ref<(string | number)[]> = ref([])
const selectedPageAllRows = () => {
  console.log("selectedPageAllRows selectAll=" + selectAll.value)
  const table = tableRef.value
  const selectedRowsLength = table.getSelectionRows().length
  const oldSelectedIds = selectedIds.value
  const oldDeletedIds = deletedIds.value
  //全选的情况下，全选勾选框去掉时
  if (selectAll.value) {
    if (selectedRowsLength === 0) {
      changeDeletedIds()
    } else {
      deletedIds.value = oldDeletedIds.filter(
        (id) => ids.value.indexOf(id) === -1,
      )
    }
    return
  }

  let newSelectedIds = []
  if (selectedRowsLength === 0) {
    // 勾选框去掉勾选时
    newSelectedIds = oldSelectedIds.filter((id: string | number) => {
      ids.value.indexOf(id) === -1
    })
  } else {
    // 勾选框勾选上时
    newSelectedIds = Array.prototype.concat(oldSelectedIds, ids.value)
  }
  newSelectedIds = Array.from(new Set(newSelectedIds))
  selectedIds.value = newSelectedIds
}
/**
 * 点击下拉选项中的“选择当前页”触发
 * **/
const selectedpageAllRowsByLink = () => {
  tableRef.value.toggleAllSelection()
}

const clearAllRows = () => {
  console.log("clearAllRows")
  selectAll.value = false
  selectedIds.value = []
  deletedIds.value = []
  tableRef.value.clearSelection()
}

const deletedIds: Ref<(string | number)[]> = ref([])
const changeDeletedIds = () => {
  deletedIds.value = Array.from(new Set(deletedIds.value.concat(ids.value)))
}

/**
 * 全选时，切换currentPage或pageSize时，去掉deletedIds中包含的行
 * **/
const deleteRows = () => {
  console.log("deleteRows")
  const table = tableRef.value
  props.data.forEach((row) => {
    if (deletedIds.value.includes(row.id)) {
      table.toggleRowSelection(row)
    }
  })
}

const selectedRows = () => {
  const table = tableRef.value
  props.data.forEach((row) => {
    if (selectedIds.value.includes(row.id)) {
      table.toggleRowSelection(row)
    }
  })
}

/**
 * 勾选/不勾选某一行
 * **/
const selectRow = (selection, row) => {
  const thisSelectIds = selection.map((row) => row.id)
  if (thisSelectIds.includes(row.id)) {
    // 勾选上
    if (selectAll.value) {
      let index = deletedIds.value.indexOf(row.id)
      deletedIds.value.splice(index, 1)
    } else {
      selectedIds.value.push(row.id)
    }
  } else {
    // 去掉勾选
    if (selectAll.value) {
      deletedIds.value.push(row.id)
    } else {
      let index = selectedIds.value.indexOf(row.id)
      selectedIds.value.splice(index, 1)
    }
  }
}

defineExpose({
  selectAll,
  selectedIds,
  deletedIds,
})
</script>
