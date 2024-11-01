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
}

interface IwebProfileBuilder {
  showEmptyState: boolean;
  availableComponents: Array<IcomponentItem>;
  componentsToAdd: Array<Component>;
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
    },
    {
      name: "WpQuickBarTop",
      component: markRaw(WpQuickBarTop),
      label: "Quick Bar Top",
      isSelected: false,
    },
    {
      name: "WpHeaderBar",
      component: markRaw(WpHeaderBar),
      label: "Header",
      isSelected: false,
    },
    {
      name: "WpAppbarTop1",
      component: markRaw(WpAppbarTop1),
      label: "Appbar Top 1",
      isSelected: false,
    },
    {
      name: "WpMenuDrawer",
      component: markRaw(WpMenuDrawer),
      label: "Drawer",
      isSelected: false,
      isMandatory: true,
    },
    {
      name: "WpHero1",
      component: markRaw(WpHero1),
      label: "Hero 1",
      isSelected: false,
    },
    {
      name: "WpFeaturedCTASection1",
      component: markRaw(WpFeaturedCTASection1),
      label: "Featured CTA 1",
      isSelected: false,
    },
    {
      name: "WpAbout1",
      component: markRaw(WpAbout1),
      label: "About us 1",
      isSelected: false,
    },
    {
      name: "WpFeedback1",
      component: markRaw(WpFeedback1),
      label: "Feedback 1",
      isSelected: false,
    },
    {
      name: "WpDoctorsList",
      component: markRaw(WpDoctorsList),
      label: "Doctors List 1",
      isSelected: false,
    },
    {
      name: "WpPhotos",
      component: markRaw(WpPhotos),
      label: "Photo Gallery",
      isSelected: false,
    },
  ],
  componentsToAdd: [],
});

// Function to update componentsToAdd based on availableComponents or a default array
const updateComponentsToAdd = (
  components: IcomponentItem | Array<IcomponentItem>
) => {
  if (Array.isArray(components)) {
    components.forEach((item) => {
      // Add only if not already present in the array
      if (!reactiveData.componentsToAdd.includes(item.component)) {
        reactiveData.componentsToAdd.push(item.component);
        // Set the component as selected
        item.isSelected = true;
      }
    });
  }

  // Update the isSelected property based on newValue
  else {
    // Toggle selection state for a single component
    const index: number = reactiveData.availableComponents.findIndex(
      (comp) => comp.name === components.name
    );
    if (index !== -1) {
      const selected = reactiveData.availableComponents[index];
      selected.isSelected = !selected.isSelected;

      // Add or remove the component based on isSelected status
      if (selected.isSelected) {
        reactiveData.componentsToAdd.push(selected.component);
      } else {
        const componentIndex = reactiveData.componentsToAdd.indexOf(
          selected.component
        );
        if (componentIndex !== -1) {
          reactiveData.componentsToAdd.splice(componentIndex, 1);
        }
      }
    }
    // Handle the empty state logic
    reactiveData.showEmptyState = reactiveData.componentsToAdd.length === 1;
  }
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
          v-for="(component, index) in reactiveData.componentsToAdd"
          :key="index"
        >
          <component
            v-if="component === WpAppbarTop1"
            :is="component"
            @onHamburgerClick="toggleMenuDrawer"
          />
          <component
            v-else-if="component === WpMenuDrawer"
            :is="component"
            @closeDrawer="toggleMenuDrawer"
          />
          <component v-else :is="component" />
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
