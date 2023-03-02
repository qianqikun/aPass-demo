<template>
  <div>
    <draggable
      class="column"
      tag="div"
      :list="tasks"
      :group="{ name: 'column', put: false }"
      item-key="id"
    >
      <template #item="{ element, index: rowIndex }">
        <draggable
          tag="div"
          class="component"
          :list="element.components"
          :group="subGroupOptions(rowIndex)"
          :ghostClass="subGroupGhostClass(rowIndex)"
          item-key="id"
          @change="handleChange($event, rowIndex)"
        >
          <template #item="{ element: component }">
            <div>
              {{ component }}
            </div>
          </template>
        </draggable>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import draggable from "vuedraggable";
import utils from "@/utils/utils";
import type { columns } from "@/types/editComponentsType";
interface IEventChange {
  added?: {
    newIndex: any;
    element: any;
  };
  moved?: {
    oldIndex: any;
    element: any;
  };
  removed?: {
    newIndex: any;
    oldIndex: any;
    element: any;
  };
}
interface IGroupOptions {
  name?: string;
  pull?: boolean | "clone" | string[];
  put?: boolean | string[];
}
const tasks: columns[] = reactive([]);

//创建一行
const createColumn = (): columns => {
  const column = {
    id: utils.uuid(),
    components: [],
  };
  return column;
};
const handleChange = (event: IEventChange, rowIndex: number) => {
  const { added, moved, removed } = event;
  const taskLength = tasks.length;
  if (added) {
    if (rowIndex === 0) {
      tasks.unshift(createColumn());
    } else if (rowIndex === taskLength - 1) {
      tasks.push(createColumn());
    }
  } else if (removed) {
    const removed = tasks[rowIndex];
    if (!removed?.components?.length) {
      tasks.splice(rowIndex, 1);
    }
  }
};

// 初始化
const init = () => {
  for (let i = 0; i < 3; i++) {
    tasks.push(createColumn());
  }
};
// 创建一行

//computed
const subGroupOptions = (rowIndex: number): IGroupOptions => {
  const subGroupOptions: IGroupOptions = {
    name: "subItem",
    put: [],
  };
  if (tasks[rowIndex].components.length < 3) {
    subGroupOptions.put = ["fieldList", "subItem"];
  }
  return subGroupOptions;
};
const subGroupGhostClass = (rowIndex: number) => {
  if (tasks[rowIndex].components.length === 0) {
    return "sortable-ghost-top";
  }
  return "sortable-ghost";
};
// const handleClone = (event: any) => {
//   const column = createColumn();
//   column.components.push(event.clone);
//   console.log("🚀 ~ file: operatingWrap.vue:67 ~ handleClone ~ event:", event);
//   return column;
// };
init();
</script>
<script lang="ts">
export default {
  name: "OperatingWrap",
};
</script>

<style lang="scss" scoped>
.column {
  // border: 1px solid black;
  // padding: 10px 0;
}
:deep.component {
  border: 1px solid red;
  display: flex;
  > div {
    border: 1px solid yellow;
    flex: 1;
  }
  .sortable-ghost-top {
    border-top: 4px solid blue;
  }
  .sortable-ghost {
    border-left: 4px solid blue;
  }
}
</style>
