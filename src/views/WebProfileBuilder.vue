<script setup lang="ts">
import EmptyComponent from '@/components/EmptyComponent.vue';
import ThemeEditor from '@/components/ThemeEditor.vue';
import WpQuickBarTop from '@/components/WpQuickBarTop.vue';
import WpHeaderBar from '@/components/WpHeaderBar.vue';
import WpIcons from '@/components/WpIcons.vue';
import WpAppbarTop1 from '@/components/WpAppbarTop1.vue';
import WpHero1 from '@/components/WpHero1.vue';
import WpFeaturedCTASection1 from '@/components/WpFeaturedCTASection1.vue';
import WpAbout1 from '@/components/WpAbout1.vue';
import { markRaw, reactive, watch } from 'vue';
import type { Component } from 'vue';

interface IcomponentItem {
  name: string;
  component: Component;
  label: string;
  isSelected: boolean;
  isMandatory?: boolean;
}

// Reactive array for components to be added
const componentsToAdd = reactive<Component[]>([markRaw(EmptyComponent)]);

// Array for available components
const availableComponents = reactive<IcomponentItem[]>([
  { name: 'ThemeEditor', component: markRaw(ThemeEditor), label: 'Theme Editor', isSelected: true, isMandatory: true },
  { name: 'WpIcons', component: markRaw(WpIcons), label: 'Load Icons', isSelected: true, isMandatory: true },
  { name: 'WpQuickBarTop', component: markRaw(WpQuickBarTop), label: 'Quick Bar Top', isSelected: false },
  { name: 'WpHeaderBar', component: markRaw(WpHeaderBar), label: 'Header', isSelected: false },
  { name: 'WpAppbarTop1', component: markRaw(WpAppbarTop1), label: 'Appbar Top 1', isSelected: false },
  { name: 'WpHero1', component: markRaw(WpHero1), label: 'Hero 1', isSelected: false },
  { name: 'WpFeaturedCTASection1', component: markRaw(WpFeaturedCTASection1), label: 'Featured CTA 1', isSelected: false },
  { name: 'WpAbout1', component: markRaw(WpAbout1), label: 'About us 1', isSelected: false },
]);

// Function to update componentsToAdd based on availableComponents
const updateComponentsToAdd = () => {
  // Clear current components
  componentsToAdd.splice(0, componentsToAdd.length);

  // Add selected components
  availableComponents.forEach(item => {
    if (item.isSelected) {
      componentsToAdd.push(item.component);
    }
  });

  // Add EmptyComponent if no components are selected
  if (componentsToAdd.length === 0) {
    componentsToAdd.push(EmptyComponent);
  }
};

// Methods
const toggleCheckbox = (item: IcomponentItem): void => {
  // Toggle the isSelected property
  item.isSelected = !item.isSelected;
};
// Watch for changes in the isSelected property of availableComponents
watch(() => availableComponents.map(item => item.isSelected), () => {
  updateComponentsToAdd();
}, { deep: true, immediate: true });
</script>

<template>
  <div class="base-layout">
    <aside class="key sk-sticky sk-sticky-2">
      <h3 class="sk-padding">Components</h3>
      <nav>
        <ul>
          <!-- Loop for list of available components -->
          <template v-for="item in availableComponents" :key="item.name">
            <li v-if="!item.isMandatory" @click="toggleCheckbox(item)">
              <div class="sk-checkbox">
                <input class="sk-check-input" type="checkbox" :id="`chkid_${item.name}`" v-model="item.isSelected"
                  @click.stop />
                <label class="sk-check-label" :for="`chkid_${item.name}`" @click.stop>{{ item.label }}</label>
              </div>
            </li>
          </template>
        </ul>
      </nav>
    </aside>
    <main class="window">
      <!-- Dynamically render selected components -->
      <component :is="component" v-for="(component, index) in componentsToAdd" :key="index" />
    </main>
  </div>
</template>


<style scoped>
.base-layout {
  display: flex;
  font-family: 'sf-pro-text', sans-serif;
}
h1, h2, h3, h4, h5, h6, .sk-h1, .sk-h2, .sk-h3, .sk-h4, .sk-h5, .sk-h6{
  font-family: 'sf-pro-text', sans-serif;
  font-weight: var(--font-weight-medium, 500);
}

.key {
  flex: 0 0 20rem;
  border-right: .1rem solid var(--color-border);
  height: 100vh;
  overflow: overlay;
  position: sticky;
  top: 0;
}

.key nav {
  display: flex;
  flex-flow: column;
  gap: var(--gutter-base)
}

.key li {
  gap: .5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--gutter-small) var(--gutter-base);
}

.key li:hover {
  background: var(--color-primary-light)
}

.key .sk-checkbox .sk-helper-text {
  color: var(--color-form-elements-helper-text);
  font-size: 1.4rem;
  width: 100%;
  display: block;
  line-height: normal;
}

.window {
  flex: 1 1 auto;
}


</style>