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
  <section class="tags">
    <div class="sk-container">
      <div class="sk-row">
        <div class="sk-col-12 sk-col-fluid">
          <h2>Tags</h2>
          <ul class="sk-list sk-list-inline bulleted-list">
            <li v-for="tag in tags" :key="tag">
              <a :title="tag">{{ tag }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div class="sk-divider"></div>
</template>

<style scoped>
:is(.tags) .sk-list-inline {
  gap: var(--gutter-base);
}

:is(.tags) .sk-list-inline li {
  display: flex;
  align-items: center;
  gap: var(--gutter-small);
}

:is(.tags) .sk-list-inline li a {
  font-weight: normal;
  color: var(--color-dark);
}

.tags + .sk-divider {
  margin: 0;
}

:is(.tags) .bulleted-list li::before {
  content: "\2022";
  font-weight: bold;
  font-size: var(--gutter-base);
  width: 1rem;
  line-height: 0;
  vertical-align: middle;
  color: var(--color-grey);
}

@media (max-width: 768px) {
  .sk-list-inline li {
    flex: 0 0 46%;
  }
}
</style>
