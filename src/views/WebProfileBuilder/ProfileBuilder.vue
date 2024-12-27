<script setup lang="ts">
import { ref, onMounted, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import SkSwitch from "rolex/skswitch.vue";
import Skbutton from "rolex/skbutton.vue";
const route = useRoute();
const router = useRouter();
const isInteractive = ref(route.path.endsWith("Interactive"));
const navigateTo = (path: string) => {
  isInteractive.value = path === "/webprofilebuilder/Interactive";
  router.push(path);
};

</script>

<template>
  <div class="sk-container">
    <div class="sk-surface sk-padding border-radius-top-0">
      <Skbutton
        buttonText="Interactive"
        large
        :primary="isInteractive"
        @click="navigateTo('/webprofilebuilder/Interactive')"
      />
      <Skbutton
        buttonText="Select By Name"
        large
        :primary="!isInteractive"
        @click="navigateTo('/webprofilebuilder/SelectByName')"
      />
    </div>
  </div>
  <RouterView />
</template>
<style></style>
