<script setup lang="ts">
const tags: string[] = [
  "Skincare",
  "Dermatology",
  "Aesthetics",
  "Beauty",
  "Facial treatments",
  "Laser therapy",
  "Acne treatment",
  "Dermatologic surgery",
  "Deep peelings",
  "Skin rejuvenation",
  "Skin tightening",
  "Scar revision",
  "Customized skincare plans",
  "Expert skincare advice",
  "Dermatological consultation",
  "Tattoo removal",
  "Carbon toning",
  "Skin doctor near me",
  "Dermatologist",
  "Caring skin",
  "Best dermatologist",
  "Best skin clinic",
];
</script>

<template>
  <section class="tags-2">
    <div class="sk-container">
      <h2>Tags</h2>
      <div class="tags-2-chips">
        <span v-for="tag in tags" :key="tag" class="sk-chip" :title="tag">{{ tag }}</span>
      </div>
    </div>
  </section>
  <div class="sk-divider"></div>
</template>

<style scoped>
.tags-2-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter-small);
  margin-top: var(--gutter-base);
}

.tags-2-chips .sk-chip {
  display: inline-flex;
  padding: 0.4rem var(--gutter-base);
  border-radius: var(--radius-pill);
  border: 0.1rem solid var(--color-border);
  background: var(--color-white);
  font-size: 1.3rem;
  color: var(--color-dark);
}

.tags-2 + .sk-divider {
  margin: 0;
}
</style>
