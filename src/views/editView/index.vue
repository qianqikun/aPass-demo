<template>
  <div class="edit-box">
    <div class="component-wrap">
      <field-list></field-list>
    </div>
    <div class="operating-wrap">
      <operating-wrap></operating-wrap>
    </div>
  </div>
</template>

<script setup lang="ts">
import fieldList from "@/components/editComponents/fieldList.vue";
import operatingWrap from "@/components/editComponents/operatingWrap.vue";
</script>
<script lang="ts">
export default {
  name: "EditView",
};
</script>
<style lang="scss" scoped>
.edit-box {
  display: flex;
  > div {
    height: 100%;
  }
  .component-wrap {
    width: 300px;
    border: 1px solid var(--color-border);
  }
  .operating-wrap {
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
