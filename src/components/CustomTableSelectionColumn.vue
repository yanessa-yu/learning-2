<!--选择列-->
<template>
  <el-table-column
    type="selection"
    width="50"
    label-class-name="custom-table-selection-column"
  >
  </el-table-column>
  <el-table-column width="1" :resizable="false" fixed="left" align="center">
    <template v-slot:header>
      <el-popover placement="right" trigger="click" style="margin-right: 0">
        <el-link @click.stop="$emit('selectedAllRows')" ref="selectAllLink">
          <span :class="{ actived: $attrs['select-all'] }">
            选择所有 ({{ total }})</span
          >
        </el-link>

        <br />
        <el-link
          @click.stop="$emit('selectedPageAllRows')"
          ref="selectPageAllLink"
        >
          <span> 反选当页 ({{ $attrs["page-size"] }})</span>
        </el-link>
        <br />
        <el-link @click.stop="$emit('clearAll')" ref="selectAllLink">
          <span>
            清空所有 {{ total }}({{
              $attrs["select-all"]
                ? total - (deletedCount || 0)
                : $attrs["selected-count"]
            }})</span
          >
        </el-link>

        <template v-slot:reference>
          <el-icon :size="15" class="table-selection-column-select-icon">
            <ArrowDown />
          </el-icon>
        </template>
      </el-popover>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
import { ElTableColumn, ElPopover, ElLink, ElIcon } from "element-plus"
import { ArrowDown } from "@element-plus/icons-vue"

defineProps({
  total: Number,
  deletedCount: Number,
})
defineEmits(["selectedAllRows", "selectedPageAllRows", "clearAll"])
</script>

<style scoped lang="scss">
:global(.el-icon.table-selection-column-select-icon) {
  position: absolute;
  left: -20px;
  top: 30%;
}

.actived {
  color: #409eff;
  text-decoration: dashed;
}
</style>
