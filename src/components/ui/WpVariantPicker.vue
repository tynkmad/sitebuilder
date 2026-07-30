<script setup lang="ts">
import SkDropDown from "rolex/skdropdown.vue";
import type { listItemType } from "rolex/skglobaltypes";

interface Props {
  variantLabels: string[];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const options: listItemType[] = props.variantLabels.map((label, index) => ({
  itemKey: String(index),
  itemTitle: label,
}));

function onSelect(item: listItemType) {
  const index = options.findIndex((option) => option.itemKey === item.itemKey);
  if (index !== -1) emit("update:modelValue", index);
}
</script>

<template>
  <SkDropDown
    :listItems="options"
    :isNativeSelect="true"
    placeHolderText="Select Variant"
    @update:modelValue="onSelect"
  />
</template>
