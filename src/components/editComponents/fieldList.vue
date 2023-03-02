<template>
  <draggable
    class="field-list"
    tag="div"
    :list="fieldList"
    :group="{ name: 'fieldList', pull: 'clone', put: false }"
    item-key="id"
    :clone="handleClone"
  >
    <template #item="{ element }">
      <div class="field-item">
        {{ element.config.fieldName }}
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import utils from "@/utils/utils";
import draggable from "vuedraggable";
import { editComponentsTypeMap } from "@/components/editComponents/editComponentsType";
import type { EditComponentDefault } from "@/types/editComponentsType";
import { reactive } from "vue";

const defaultFieldList = Object.values(editComponentsTypeMap);
const fieldList = reactive(defaultFieldList);
const handleClone = (event: EditComponentDefault) => {
  const cloneObj = utils.cloneDeep(event);
  cloneObj.id = utils.uuid();
  return cloneObj;
};
</script>

<style lang="scss" scoped>
.field-list {
  .field-item {
    border: 1px solid var(--color-border);
  }
}
// .component {
// .sortable-ghost {
//   width: 0;
//   overflow: hidden;
//   border: 2px solid blue !important;
// }
// }
</style>
