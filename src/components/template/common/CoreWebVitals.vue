<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { onCLS, onINP, onLCP } from 'web-vitals';

// Define a reactive object to store Core Web Vitals data
const coreWebVitals = reactive({
    cls: null as number | null, // CLS is a string
  inp: null as number | null, // INP (or FID) is a string
  lcp: null as number | null, // LCP is a string
});

onMounted(() => {
  // Get Largest Contentful Paint (LCP)
  onLCP(value => {
    coreWebVitals.lcp = value.value;
    console.log(coreWebVitals)
  });

  // Get First Input Delay (FID)
  onINP(value => {
    coreWebVitals.inp = value.value;
  });

  // Get Cumulative Layout Shift (CLS)
  onCLS(value => {
    coreWebVitals.cls = value.value;
  });
});

// Expose the coreWebVitals object for use in other components
defineExpose({ coreWebVitals });
</script>

<template>
  <div v-if="coreWebVitals">
    <h2>Core Web Vitals</h2>
    <ul>
      <li>LCP: {{ coreWebVitals.lcp }} ms</li>
      <li>FID: {{ coreWebVitals.inp }} ms</li>
      <li>CLS: {{ coreWebVitals.cls }}</li>
    </ul>
  </div>
</template>