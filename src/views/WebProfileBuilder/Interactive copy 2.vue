<script setup lang="ts">
import ThemeEditor from "@/components/ui/ThemeEditor.vue";
import { markRaw, reactive, ref, watch } from "vue";
import type { Component } from "vue";
import Skemptystate from "rolex/skemptystate.vue";
import {
  DraggableEvent,
  SortableEvent,
  UseDraggableReturn,
  VueDraggable,
} from "vue-draggable-plus";

//#region import Components
import WpQuickBarTop from "@/components/template/WpQuickBarTop.vue";
import WpHeaderBar from "@/components/template/WpHeaderBar.vue";
import WpIcons from "@/components/template/WpIcons.vue";
import WpAppbarTop1 from "@/components/template/WpAppbarTop1.vue";
import WpMenuDrawer from "@/components/template/WpMenuDrawer.vue";
import WpHero1 from "@/components/template/WpHero1.vue";
import WpFeaturedCTASection1 from "@/components/template/WpFeaturedCTASection1.vue";
import WpAbout1 from "@/components/template/WpAbout1.vue";
import WpFeedback1 from "@/components/template/WpFeedback1.vue";
import WpDoctorsList from "@/components/template/WpDoctorsList.vue";
import WpPhotos from "@/components/template/WpPhotos.vue";
//#endregion

interface IcomponentItem {
  name: string;
  component: Component;
  label: string;
  isSelected: boolean;
  isMandatory?: boolean;
  order: number | undefined;
}

interface IwebProfileBuilder {
  showEmptyState: boolean;
  availableComponents: Array<IcomponentItem>;
  componentsToAdd: Array<IcomponentItem>;
}

const reactiveData = reactive<IwebProfileBuilder>({
  showEmptyState: true,
  availableComponents: [
    {
      name: "WpIcons",
      component: markRaw(WpIcons),
      label: "Load Icons",
      isSelected: true,
      isMandatory: true,
      order: 0,
    },
    {
      name: "WpQuickBarTop",
      component: markRaw(WpQuickBarTop),
      label: "Quick Bar Top",
      isSelected: false,
      order: 1,
    },
    {
      name: "WpHeaderBar",
      component: markRaw(WpHeaderBar),
      label: "Header",
      isSelected: false,
      order: 2,
    },
    {
      name: "WpAppbarTop1",
      component: markRaw(WpAppbarTop1),
      label: "Appbar Top 1",
      isSelected: false,
      order: 3,
    },
    {
      name: "WpMenuDrawer",
      component: markRaw(WpMenuDrawer),
      label: "Drawer",
      isSelected: false,
      isMandatory: true,
      order: 0,
    },
    {
      name: "WpHero1",
      component: markRaw(WpHero1),
      label: "Hero 1",
      isSelected: false,
      order: 4,
    },
    {
      name: "WpFeaturedCTASection1",
      component: markRaw(WpFeaturedCTASection1),
      label: "Featured CTA 1",
      isSelected: false,
      order: -1,
    },
    {
      name: "WpAbout1",
      component: markRaw(WpAbout1),
      label: "About us 1",
      isSelected: false,
      order: -1,
    },
    {
      name: "WpFeedback1",
      component: markRaw(WpFeedback1),
      label: "Feedback 1",
      isSelected: false,
      order: -1,
    },
    {
      name: "WpDoctorsList",
      component: markRaw(WpDoctorsList),
      label: "Doctors List 1",
      isSelected: false,
      order: -1,
    },
    {
      name: "WpPhotos",
      component: markRaw(WpPhotos),
      label: "Photo Gallery",
      isSelected: false,
      order: -1,
    },
  ],
  componentsToAdd: [],
});

// const draggableElementsContainer = ref<UseDraggableReturn>();

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
  <div class="base-layout">
    <aside class="key">
      <h3>Available</h3>
      <VueDraggable
        class="draggable-components"
        v-model="reactiveData.availableComponents"
        :animation="150"
        ghostClass="ghost"
        group="people"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in reactiveData.availableComponents"
          :key="item.name"
          class=""
        >
          {{ item.name }}
        </div>
      </VueDraggable>
    </aside>
    <main class="window">
      <div class="template-preview">
        <Skemptystate
            :showEmptyState="reactiveData.componentsToAdd.length < 1"
            content="Drag the components on the left to add one by one."
            contentTitle="Select a component to start"
            emptyStateImage="https://lscdn.blob.core.windows.net/content/pro-manage/sme/web-profile-images/web-designing-empty-state.svg"
          />
        <VueDraggable
          class="draggable-components"
          v-model="reactiveData.componentsToAdd"
          :animation="150"
          group="people"
          ghostClass="ghost"
          @update="onUpdate"
          @add="onAdd"
          @remove="remove"
        >
          
          <div
            v-for="item in reactiveData.componentsToAdd"
            :key="item.name"
            class=""
          >
            <component :is="item.component" />
          </div>
        </VueDraggable>
      </div>
    </main>
  </div>
  <ThemeEditor />
</template>

<style scoped>
.base-layout {
  display: flex;
  font-family: "sf-pro-text", sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .sk-h1,
  .sk-h2,
  .sk-h3,
  .sk-h4,
  .sk-h5,
  .sk-h6 {
    font-family: "sf-pro-text", sans-serif;
    font-weight: var(--font-weight-medium, 500);
  }
}

.key {
  flex: 0 0 20rem;
  border-right: 0.1rem solid var(--color-border);
  height: 100vh;
  overflow: overlay;
  position: sticky;
  top: 0;

  nav {
    display: flex;
    flex-flow: column;
    gap: var(--gutter-base);

    li {
      gap: 0.5rem;
      align-items: center;
      display: flex;
      padding: var(--gutter-small) var(--gutter-base);
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: rgb(var(--color-rgb-primary) / 10%);
      }
    }
  }
}

.window {
  flex: 1 1 auto;
}
.draggable-components > * {
  cursor: move;
  &:hover {
    border: 0.1rem dashed;
  }
}
.template-preview .draggable-components{
  height: 100%;
}
</style>
