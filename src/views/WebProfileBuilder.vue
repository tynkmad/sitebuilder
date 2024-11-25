<script setup lang="ts">
import ThemeEditor from "@/components/ThemeEditor.vue";

import { markRaw, reactive, watch } from "vue";
import type { Component } from "vue";
import Skbutton from "rolex/skbutton.vue";
import Skemptystate from "rolex/skemptystate.vue";
import Skcheckbox from "rolex/skcheckbox.vue";
import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals/attribution";

//#region import Components
import WpQuickBarTop from "@/components/WpQuickBarTop.vue";
import WpHeaderBar from "@/components/WpHeaderBar.vue";
import WpIcons from "@/components/WpIcons.vue";
import WpAppbarTop1 from "@/components/WpAppbarTop1.vue";
import WpMenuDrawer from "@/components/WpMenuDrawer.vue";
import WpHero1 from "@/components/WpHero1.vue";
import WpFeaturedCTASection1 from "@/components/WpFeaturedCTASection1.vue";
import WpAbout1 from "@/components/WpAbout1.vue";
import WpFeedback1 from "@/components/WpFeedback1.vue";
import WpDoctorsList from "@/components/WpDoctorsList.vue";
import WpPhotos from "@/components/WpPhotos.vue";
//#endregion import Components

//#region WebVitals Optimization
const logWebVital = (name: string, value: number, extra: any) => {
  console.log(`${name}: ${value}`, extra);
};
const calculateWebVitals = () => {
  onLCP((metric) => logWebVital("LCP", metric.value, metric));
  onCLS((metric) => logWebVital("CLS", metric.value, metric.entries));
  onINP((metric) => logWebVital("INP", metric.value, metric.delta));
  onTTFB((metric) => logWebVital("TTFB", metric.value, {}));
  onFCP((metric) => logWebVital("FCP", metric.value, metric));
};
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
    // { name: 'ThemeEditor', component: markRaw(ThemeEditor), label: 'Theme Editor', isSelected: true, isMandatory: true },
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

function sortComponents(components: Array<IcomponentItem>): Array<IcomponentItem> {
  return components.sort((a: IcomponentItem, b: IcomponentItem) => {
    const orderA = a.order ?? Infinity; // Default to infinity for undefined order
    const orderB = b.order ?? Infinity;

    // Prioritize order 0 to the end
    if (orderA === 0) {
      return 1;
    } else if (orderB === 0) {
      return -1;
    }

    // Prioritize order -1 after positive orders
    if (orderA === -1 && orderB !== -1) {
      return 1;
    } else if (orderB === -1 && orderA !== -1) {
      return -1;
    }

    // Sort positive orders in ascending order (optional: handle NaN)
    return orderA - orderB || NaN; // Handle NaN for invalid orders
  });
}

// Function to update componentsToAdd based on availableComponents or a default array
const updateComponentsToAdd = (
  components: IcomponentItem | Array<IcomponentItem>
) => {
  if (Array.isArray(components)) {
    // Handle adding multiple components
    components.forEach((item) => {
      const existingIndex = reactiveData.componentsToAdd.findIndex(
        (existing) => existing.name === item.name
      );

      if (existingIndex === -1) {
        // Add the component if not already present
        reactiveData.componentsToAdd.push(item);
        item.isSelected = true;
      }
    });
  } else {
    // Handle toggling a single component's selection
    const index = reactiveData.availableComponents.findIndex(
      (comp) => comp.name === components.name
    );

    if (index !== -1) {
      const selected = reactiveData.availableComponents[index];
      selected.isSelected = !selected.isSelected;

      // Update componentsToAdd based on isSelected change
      const componentIndex = reactiveData.componentsToAdd.findIndex(
        (existing) => existing.name === selected.name
      );

      if (selected.isSelected) {
        // Add the component if not already present
        if (componentIndex === -1) {
          reactiveData.componentsToAdd.push(selected);
        }
      } else {
        // Remove the component if it's selected
        if (componentIndex !== -1) {
          reactiveData.componentsToAdd.splice(componentIndex, 1);
        }
      }
    }

    // Handle empty state logic based on selected components
    reactiveData.showEmptyState = reactiveData.componentsToAdd.length === 1;
  }

  // Sort the componentsToAdd array based on order
  reactiveData.componentsToAdd = sortComponents(reactiveData.componentsToAdd);
};

const toggleMenuDrawer = () => {
  const wpMenuDrawer = reactiveData.availableComponents.find(
    (component) => component.name === "WpMenuDrawer"
  );
  if (wpMenuDrawer) {
    updateComponentsToAdd(wpMenuDrawer);
    // Toggle the isSelected state and call updateComponentsToAdd method
    // wpMenuDrawer.isSelected = !wpMenuDrawer.isSelected;

    // Use updateComponentsToAdd method to handle the logic
  }
};
// Watch for changes in isSelected directly
watch(
  () => reactiveData.availableComponents.map((item) => item.isSelected),
  () =>
    updateComponentsToAdd(
      reactiveData.availableComponents.filter((item) => item.isSelected)
    ), // Corrected to pass array of selected components
  { deep: true, immediate: true }
);
</script>

<template>
  <div class="base-layout">
    <aside class="key sk-sticky sk-sticky-2">
      <h3 class="sk-padding sk-h6">Components</h3>
      <!-- <Skbutton primary buttonText="Check web vitals" @click="calculateWebVitals" /> -->
      <nav>
        <ul>
          <template
            v-for="item in reactiveData.availableComponents"
            :key="item.name"
          >
            <li v-if="!item.isMandatory" @click="updateComponentsToAdd(item)">
              <Skcheckbox
                :chkid="`chkid_${item.name}`"
                :labelName="item.label"
                :isCheckbox="true"
                :isChecked="item.isSelected"
                @change="updateComponentsToAdd(item)"
                @click.stop
              />
            </li>
          </template>
        </ul>
      </nav>
    </aside>
    <main class="window">
      <div class="template-preview">
        <template
          v-for="componentItem in reactiveData.componentsToAdd"
          :key="componentItem.name"
        >
          <component
            :is="componentItem.component"
            v-if="componentItem.component === WpAppbarTop1"
            @onHamburgerClick="toggleMenuDrawer"
            @closeDrawer="toggleMenuDrawer"
          />
          <component v-else :is="componentItem.component" />
        </template>
        <!-- <div class="sk-hide">
          <component
            :is="component"
            v-for="(component, index) in reactiveData.componentsToAdd"
            :key="index"
            @onHamburgerClick="toggleMenuDrawer"
            @closeDrawer="toggleMenuDrawer"
          />
        </div> -->
      </div>
      <Skemptystate
        :showEmptyState="reactiveData.showEmptyState"
        content="Click on the components on the left to add one by one."
        contentTitle="Select a component to start"
        emptyStateImage="https://lscdn.blob.core.windows.net/content/pro-manage/sme/web-profile-images/web-designing-empty-state.svg"
      />
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
</style>
