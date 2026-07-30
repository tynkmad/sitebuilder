<script setup lang="ts">
import Skicon from "rolex/skicon.vue";

interface Props {
  mapEmbedUrl?: string;
  address?: string;
}

withDefaults(defineProps<Props>(), {
  mapEmbedUrl: "https://maps.google.com/maps?cid=6972051645732795776&output=embed",
  address: "27/35 First floor, Shankar building, North Avenue, Velachery, Chennai - 600 026",
});
</script>

<template>
  <section class="location-2">
    <div class="sk-container">
      <h2 class="sk-text-center">Where to find us</h2>
      <div class="location-2-layout">
        <iframe
          :src="mapEmbedUrl"
          width="100%"
          height="320"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="location-2-info sk-surface">
          <div class="sk-flex-row">
            <Skicon iconType="location_on" filled />
            <address>{{ address }}</address>
          </div>
          <div class="sk-flex-row">
            <Skicon iconType="directions" filled />
            <span>Get Directions</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-2 {
  background-color: rgb(var(--color-secondary-rgb) / 10%);
}

.location-2-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--gutter-base);
  margin-top: var(--gutter-large);
  align-items: stretch;
}

.location-2-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gutter-base);
  padding: var(--gutter-large);
}

.location-2-info .sk-flex-row {
  gap: var(--gutter-small);
  align-items: flex-start;
}

.location-2-info address {
  font-style: normal;
}

@media (max-width: 768px) {
  .location-2-layout {
    grid-template-columns: 1fr;
  }
}
</style>
