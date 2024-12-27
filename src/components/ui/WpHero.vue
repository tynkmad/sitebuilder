<script lang="ts">
const extendedBusinessDetailsProps = {
  ...businessDetailsProps,
  selectedComponent: {
    type: Number,
    default: 1,
  },
};
</script>
<script setup lang="ts">
import WpHero1 from "@/components/template/WpHero1.vue";
import WpHero2 from "@/components/template/WpHero2.vue";
import {
  businessDetailsProps,
  IbusinessDetails,
} from "@/types/webProfileBuilderTypes";
import { skActionItem } from "rolex/skglobaltypes";
import { reactive } from "vue";

const props = defineProps(extendedBusinessDetailsProps);
const ReactiveData = reactive<IbusinessDetails>({
  contactNumber: props.contactNumber,
  storeAddress: props.storeAddress,
  businessHours: props.businessHours,
});
</script>

<template>
  <WpHero1
    v-if="props.selectedComponent == 1"
    :showRating="props.showRating"
    :contactNumber="props.contactNumber"
    :storeAddress="props.storeAddress"
    :businessHours="props.businessHours"
  />
  <WpHero2
    v-else
    :showRating="props.showRating"
    :contactNumber="props.contactNumber"
    :storeAddress="props.storeAddress"
    :businessHours="props.businessHours"
  />
</template>
