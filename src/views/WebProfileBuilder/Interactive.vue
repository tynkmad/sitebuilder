<script setup lang="ts">
import { defineAsyncComponent, reactive, ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";

// Dynamically import components
const WpQuickBarTop = defineAsyncComponent(() =>
  import("@/components/template/common/WpQuickBarTop.vue")
);
const WpHeaderBar = defineAsyncComponent(() =>
  import("@/components/template/common/WpHeaderBar.vue")
);

// Component and WebProfile interfaces
interface IcomponentItem {
  name: string;
  component: any; // Using 'any' for dynamic components
  label: string;
  isSelected: boolean;
  order: number | undefined;
  description: string;
}

interface IwebProfileBuilder {
  availableComponents: Array<IcomponentItem>;
  componentsToAdd: Array<IcomponentItem>;
  showEmptyState: boolean;
  showEditor: boolean;
}

// Reactive data for components
const reactiveData = reactive<IwebProfileBuilder>({
  availableComponents: [
    {
      name: "WpQuickBarTop",
      component: WpQuickBarTop,
      label: "Quick Bar Top",
      isSelected: true,
      order: 1,
      description: "Displays prominent quick action items like 'Book Appointment' and 'Contact Us' to drive user engagement and lead generation.",
    },
    {
      name: "WpHeaderBar",
      component: WpHeaderBar,
      label: "Header",
      isSelected: true,
      order: 2,
      description: "A header section that prominently shows critical information such as branch location and store timings for easy access.",
    },
  ],
  componentsToAdd: [],
  showEmptyState: false,
  showEditor: false,
});

// Event handlers for drag-and-drop
function onUpdate() {
  console.log("update");
}
function onAdd() {
  console.log("add");
}
function remove() {
  console.log("remove");
}
</script>

<template>
  <div class="draggable-editor">
    <div class="sk-container sk-row">
      <!-- Available Components -->
      <div class="sk-col-3 sk-col-fluid">
        <VueDraggable
          class="draggable-container"
          v-model="reactiveData.availableComponents"
          :animation="150"
          ghostClass="ghost"
          group="components-group"
          @update="onUpdate"
          @add="onAdd"
          @remove="remove"
        >
          <template v-for="componentItem in reactiveData.availableComponents" :key="componentItem.name">
            <Suspense>
              <template #default>
                <component :is="componentItem.component" />
              </template>
              <template #fallback>
                <div>Loading...</div>
              </template>
            </Suspense>
          </template>
        </VueDraggable>
      </div>

      <!-- Components to Add -->
      <div class="sk-col-9 sk-col-fluid">
        <VueDraggable
          class="draggable-container"
          v-model="reactiveData.componentsToAdd"
          :animation="150"
          group="components-group"
          ghostClass="ghost"
          @update="onUpdate"
          @add="onAdd"
          @remove="remove"
        >
          <template v-for="componentItem in reactiveData.componentsToAdd" :key="componentItem.name">
            <Suspense>
              <template #default>
                <component :is="componentItem.component" />
              </template>
              <template #fallback>
                <div>Loading...</div>
              </template>
            </Suspense>
          </template>
        </VueDraggable>
      </div>
    </div>
  </div>
</template>
