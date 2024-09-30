<script setup lang="ts">
import { reactive, watch, onMounted, ref } from 'vue';

import SkDrawer from 'rolex/skdrawer.vue';
import SkAppbar from 'rolex/skappbar.vue';
import SkButton from 'rolex/skbutton.vue';

interface IReactiveData {
  showThemeEditor: boolean
}

let dataDefaults: IReactiveData = {
  showThemeEditor: false
}
let ReactiveData = reactive(dataDefaults);

const toggleEditor = () => {
  ReactiveData.showThemeEditor = !ReactiveData.showThemeEditor // Hide Menu on mobile upon redirection
};


// Function to convert HEX to RGB format
const hexToRgb = (hex: string): string => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
};

// Function to lighten/darken a color
const adjustBrightness = (hex: string, factor: number): string => {
  const bigint = parseInt(hex.slice(1), 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  r = Math.min(255, Math.max(0, r + factor));
  g = Math.min(255, Math.max(0, g + factor));
  b = Math.min(255, Math.max(0, b + factor));

  return `rgb(${r}, ${g}, ${b})`;
};

// Reactive object for styles
interface Styles {
  primaryColor: string;
  colorOnPrimaryBg: string;
  secondaryColor: string;
  colorOnSecondaryBg: string;
  fontFamily: string;
  bodyBackground: string;
  bodyTextColor: string;
}

const styles = reactive<Styles>({
  primaryColor: '#2A5EFE',
  colorOnPrimaryBg: '#ffffff',
  secondaryColor: '#011A65',
  colorOnSecondaryBg: '#ffffff',
  fontFamily: '"sf-pro-text", sans-serif',
  bodyBackground: '#F1F3F7',
  bodyTextColor: '#212121'
});

// Function to set CSS variable
const setCSSVariable = (property: string, value: string): void => {
  document.documentElement.style.setProperty(property, value);
};

// Watchers for each reactive style property
watch(() => styles.primaryColor, (newColor) => {
  setCSSVariable('--color-primary', newColor);
  setCSSVariable('--color-primary-light', adjustBrightness(newColor, 50));
  setCSSVariable('--color-primary-dark', adjustBrightness(newColor, -50));
  setCSSVariable('--color-rgb-primary', hexToRgb(newColor));
});

watch(() => styles.secondaryColor, (newColor) => {
  setCSSVariable('--color-secondary', newColor);
  setCSSVariable('--color-secondary-light', adjustBrightness(newColor, 50));
  setCSSVariable('--color-secondary-dark', adjustBrightness(newColor, -50));
  setCSSVariable('--color-rgb-secondary', hexToRgb(newColor));
});

watch(() => styles.fontFamily, (newFontFamily) => {
  setCSSVariable('--font-family-primary', newFontFamily);
});

watch(() => styles.bodyBackground, (newBgColor) => {
  setCSSVariable('--color-body-background', newBgColor);
});

watch(() => styles.bodyTextColor, (newTextColor) => {
  setCSSVariable('--color-body-color', newTextColor);
});

// Initialize the CSS variables on component mount
onMounted(() => {
  setCSSVariable('--color-primary', styles.primaryColor);
  setCSSVariable('--color-primary-light', adjustBrightness(styles.primaryColor, 50));
  setCSSVariable('--color-primary-dark', adjustBrightness(styles.primaryColor, -50));
  setCSSVariable('--color-rgb-primary', hexToRgb(styles.primaryColor));

  setCSSVariable('--color-secondary', styles.secondaryColor);
  setCSSVariable('--color-secondary-light', adjustBrightness(styles.secondaryColor, 50));
  setCSSVariable('--color-secondary-dark', adjustBrightness(styles.secondaryColor, -50));
  setCSSVariable('--color-rgb-secondary', hexToRgb(styles.secondaryColor));

  setCSSVariable('--font-family-primary', styles.fontFamily);
  setCSSVariable('--color-body-background', styles.bodyBackground);
  setCSSVariable('--color-body-color', styles.bodyTextColor);
});
</script>

<template>
  <div class="theme-editor">
    <SkButton buttonText="Edit Theme" primary @click="toggleEditor" />
    <SkDrawer right :showDrawer="ReactiveData.showThemeEditor">
      <template #skdrawerheader>
        <SkButton icon="close" round noShadow @click="toggleEditor" />
        <h4 class="sk-h4">Edit Theme</h4>
      </template>
      <template #skdrawerbody>
        <div>
          <label for="primary-color">Primary Color:</label>
          <input type="color" v-model="styles.primaryColor" />
        </div>

        <div>
          <label for="secondary-color">Secondary Color:</label>
          <input type="color" v-model="styles.secondaryColor" />
        </div>

        <div>
          <label for="font-family">Font Family:</label>
          <select v-model="styles.fontFamily">
            <option value='"sf-pro-text", sans-serif'>SF Pro Text</option>
            <option value='"Arial", sans-serif'>Arial</option>
            <option value='"Roboto", sans-serif'>Roboto</option>
          </select>
        </div>

        <div>
          <label for="body-bg">Body Background:</label>
          <input type="color" v-model="styles.bodyBackground" />
        </div>

        <div>
          <label for="body-text-color">Body Text Color:</label>
          <input type="color" v-model="styles.bodyTextColor" />
        </div>
      </template>
    </SkDrawer>

  </div>
</template>

<style>
/* .theme-editor {
  z-index: var(--z-index-top);
} */

.theme-editor .sk-drawer .sk-drawer-header:not(:empty) {
  display: flex;
  align-items: center;
}
</style>
