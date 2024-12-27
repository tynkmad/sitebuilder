<script setup lang="ts">
import { ref, computed, watch, reactive, onMounted } from "vue";
import { listItemType, HtmlItemSizeOptions } from "rolex/skglobaltypes";
import SkDropDown from "rolex/skdropdown.vue";
import { devConsoleLog } from "rolex/utilFunctions";

let options: Array<listItemType> = [
  { itemKey: "1", itemTitle: "Hero 1" },
  { itemKey: "2", itemTitle: "Hero 2" },
];

interface IReactiveData {
  dd1Value: listItemType;
}

let dataDefaults: IReactiveData = {
  dd1Value: { itemKey: "", itemTitle: "Default 1" },
};

let ReactiveData = reactive(dataDefaults);
const emit = defineEmits(["selectedComponent"]);
watch(
  () => ReactiveData.dd1Value.itemKey,
  async (newData, oldData) => {
    devConsoleLog(newData);
    console.log(newData)
    emit("selectedComponent", newData);
  }
);
</script>
<template>
  <SkDropDown
    :listItems="options"
    :isNativeSelect="true"
    placeHolderText="Select Variant"
    v-model="ReactiveData.dd1Value"
    dropDowninitialValue="1"
    @update:modelValue="ReactiveData.dd1Value.itemKey = ReactiveData.dd1Value.itemKey == '1' ? '2' : '1'"
  />
</template>
<style></style>
