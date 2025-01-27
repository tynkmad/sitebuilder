<script setup lang="ts">
import { ref, onMounted, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import SkSwitch from "rolex/skswitch.vue";
import Skbutton from "rolex/skbutton.vue";
import SkCard from "rolex/skcard.vue";
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
    <div class="select-editor">
      <div class="sk-row">
        <div class="sk-col-6 sk-col-fluid">
          <SkCard
            class="sk-clickable"
            @click="navigateTo('/webprofilebuilder/Interactive')"
          >
            <template #skcPrimary>
              <h3>Interactive Builder</h3>
              <p class="sk-text-muted">
                Try our interactive drag and drop builder.
              </p>
            </template>
          </SkCard>
        </div>
        <div class="sk-col-6 sk-col-fluid">
          <SkCard
            class="sk-clickable"
            @click="navigateTo('/webprofilebuilder/SelectByName')"
          >
            <template #skcPrimary>
              <h3>Select components by name</h3>
              <p class="sk-text-muted">
                Switch between component variants while previewing.
              </p>
            </template>
          </SkCard>
        </div>
      </div>
      <div class="sk-flex-row"></div>
    </div>
  </div>
</template>
<style scoped>
.select-editor {
  height: calc(100vh - 7rem);
  display: flex;
  align-items: center;
  justify-content: center;
  .sk-card {
    height: 100%;
    transition: all .5s ease-in;
    &:hover{
      box-shadow: var(--box-shadow-3);
      /* background: rgb(var(--color-rgb-primary) / 30%) */
      background: var(--color-primary);
      color: var(--color-on-primary);
      .sk-text-muted{
        color: rgb(var(--color-rgb-on-primary) / 30%) !important;
      }
    }
  }
}
</style>
