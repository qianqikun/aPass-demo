<template>
  <div>
    <draggable
      class="column"
      tag="div"
      :list="tasks"
      :group="{ name: 'column', put: false, pull: false }"
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
  console.log(
    "🚀 ~ file: operatingWrap.vue:67 ~ handleChange ~ event:",
    event,
    rowIndex
  );
  const { added, moved, removed } = event;
  const taskLength = tasks.length;
  if (added) {
    const preItem = tasks[rowIndex - 1];
    const nextItem = tasks[rowIndex + 1];
    const newArr = [tasks[rowIndex]];
    if (!preItem || preItem?.components?.length) {
      newArr.unshift(createColumn());
    }
    if (!nextItem || nextItem?.components?.length) {
      newArr.push(createColumn());
    }
    tasks.splice(rowIndex, 1, ...newArr);
  } else if (removed) {
    console.log(
      "🚀 ~ file: operatingWrap.vue:90 ~ handleChange ~ removed:",
      removed,
      rowIndex
    );
    const nextItem = tasks[rowIndex + 1];
    const removedItem = tasks[rowIndex];
    if (!removedItem?.components?.length) {
      tasks.splice(rowIndex, 1);
    }
  }
};

// 初始化
const init = () => {
  tasks.push(createColumn());
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
.operating-wrap {
  overflow-y: scroll;
}
.column {
  // border: 1px solid black;
}
:deep.component {
  border: 1px solid red;
  padding: 4px 0;
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
