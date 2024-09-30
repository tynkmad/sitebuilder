<script setup lang="ts">
import { reactive, watch, onMounted, ref } from 'vue';

import SkDrawer from 'rolex/skdrawer.vue';
import SkButton from 'rolex/skbutton.vue';
import SkDropDown from "rolex/skdropdown.vue";
import { HtmlItemSizeOptions, listItemType } from 'rolex/skglobaltypes';

let options: Array<listItemType> = [
  { itemKey: "1", itemTitle: "One" },
  { itemKey: "2", itemTitle: "Two" },
  { itemKey: "3", itemTitle: "Three" },
  { itemKey: "4", itemTitle: "Four" },
];

interface IReactiveData {
  showThemeEditor: boolean;
  dd2Value: listItemType;
  dd2Error: boolean;
}

let dataDefaults: IReactiveData = {
  showThemeEditor: false,
  dd2Value: { itemKey: "", itemTitle: "Default 2" },
  dd2Error: false,
}

let ReactiveData = reactive(dataDefaults);

watch(
  () => ReactiveData.dd2Value.itemTitle,
  async (newData, oldData) => {
  }
);

function setErr2() {
  ReactiveData.dd2Error = true;
}

const toggleEditor = () => {
  ReactiveData.showThemeEditor = !ReactiveData.showThemeEditor;
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

// Contrast ratio helpers
const calculateRelativeLuminance = (hex: string): number => {
  const bigint = parseInt(hex.slice(1), 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  r = r / 255;
  g = g / 255;
  b = b / 255;

  r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const calculateContrastRatio = (lum1: number, lum2: number): number => {
  return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
};

const potentialTextColors = ['#FFFFFF', '#F5F5F5', '#CCCCCC', '#999999', '#666666', '#333333', '#212121'];

const getBestAccessibleTextColor = (backgroundColor: string): string => {
  const bgLuminance = calculateRelativeLuminance(backgroundColor);

  let bestColor = potentialTextColors[0];
  let bestContrast = 0;

  potentialTextColors.forEach((textColor) => {
    const textLuminance = calculateRelativeLuminance(textColor);
    const contrast = calculateContrastRatio(bgLuminance, textLuminance);

    if (contrast > bestContrast) {
      bestContrast = contrast;
      bestColor = textColor;
    }
  });

  return bestColor;
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

// Set CSS variable function
const setCSSVariable = (property: string, value: string): void => {
  const elements = document.querySelectorAll<HTMLElement>('.window, .theme-editor');
  elements.forEach((element) => {
    element.style.setProperty(property, value);
  });
};


// Watchers for styles and auto text color selection
watch(() => styles.primaryColor, (newColor) => {
  setCSSVariable('--color-primary', newColor);
  // setCSSVariable('--color-on-primary', newColor);
  setCSSVariable('--color-primary-light', adjustBrightness(newColor, 50));
  setCSSVariable('--color-primary-dark', adjustBrightness(newColor, -50));
  setCSSVariable('--color-rgb-primary', hexToRgb(newColor));

  const bestTextColor = getBestAccessibleTextColor(newColor);
  styles.colorOnPrimaryBg = bestTextColor; // Set best text color
  setCSSVariable('--color-on-primary', bestTextColor);
});

watch(() => styles.secondaryColor, (newColor) => {
  setCSSVariable('--color-secondary', newColor);
  // setCSSVariable('--color--on-secondary', newColor);
  setCSSVariable('--color-secondary-light', adjustBrightness(newColor, 50));
  setCSSVariable('--color-secondary-dark', adjustBrightness(newColor, -50));
  setCSSVariable('--color-rgb-secondary', hexToRgb(newColor));

  const bestTextColor = getBestAccessibleTextColor(newColor);
  styles.colorOnSecondaryBg = bestTextColor;
  setCSSVariable('--color-on-secondary', bestTextColor);
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

// On component mount, set initial CSS variables
onMounted(() => {
  setCSSVariable('--color-primary', styles.primaryColor);
  setCSSVariable('--color-on-primary', styles.colorOnPrimaryBg);
  setCSSVariable('--color-primary-light', adjustBrightness(styles.primaryColor, 50));
  setCSSVariable('--color-primary-dark', adjustBrightness(styles.primaryColor, -50));
  setCSSVariable('--color-rgb-primary', hexToRgb(styles.primaryColor));

  setCSSVariable('--color-secondary', styles.secondaryColor);
  setCSSVariable('--color-on-secondary', styles.colorOnSecondaryBg);
  setCSSVariable('--color-secondary-light', adjustBrightness(styles.secondaryColor, 50));
  setCSSVariable('--color-secondary-dark', adjustBrightness(styles.secondaryColor, -50));
  setCSSVariable('--color-rgb-secondary', hexToRgb(styles.secondaryColor));

  setCSSVariable('--font-family-primary', styles.fontFamily);
  setCSSVariable('--color-body-background', styles.bodyBackground);
  setCSSVariable('--color-body-color', styles.bodyTextColor);
  setCSSVariable('--template-gradient', 'radial-gradient(circle at bottom left, rgb(var(--color-rgb-primary) / 20%) 70%, rgb(var(--color-rgb-secondary) / 50%))');
});
</script>

<template>
  <div class="theme-editor">
    <SkDrawer right :showDrawer="ReactiveData.showThemeEditor" @closePanel="toggleEditor">
      <template #skdrawerheader>
        <SkButton icon="close" round noShadow @click="toggleEditor" />
        <h6 class="sk-h6">Edit Theme</h6>
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

          <SkDropDown
              :listItems="options"
              :isNativeSelect="false"
              placeHolderText="Select text"
              :isMandatory="true"
              :hasFloatingLabel="true"
              :size="HtmlItemSizeOptions.Large"
              v-model="ReactiveData.dd2Value"
              errorText="Error text"
              :hasError="ReactiveData.dd2Error"
              dropDowninitialValue=""
            >
            </SkDropDown>
          
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

        <div>
          <label for="color-on-primary-bg">Primary Text Color (optional):</label>
          <input type="color" v-model="styles.colorOnPrimaryBg" placeholder="Auto-selected" />
        </div>

        <div>
          <label for="color-on-secondary-bg">Secondary Text Color (optional):</label>
          <input type="color" v-model="styles.colorOnSecondaryBg" placeholder="Auto-selected" />
        </div>
      </template>
    </SkDrawer>
  </div>
  <SkButton icon="format_color_fill" fab primary @click="toggleEditor" />

</template>

<style>
.theme-editor .sk-drawer .sk-drawer-header:not(:empty) {
  display: flex;
  align-items: center;
}

.theme-editor .sk-button.sk-primary {
  background: #2A5EFE;
  color: #ffffff;
}
</style>