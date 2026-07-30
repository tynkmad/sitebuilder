<script setup lang="ts">
interface AreaItem {
  name: string;
  distanceKm: number;
}

const areas: AreaItem[] = [
  { name: "Uthandi", distanceKm: 1.95 },
  { name: "Karapakkam", distanceKm: 5.07 },
  { name: "Okkiyam Thuraipakkam", distanceKm: 8.88 },
  { name: "Palavakkam", distanceKm: 10.32 },
  { name: "Neelankarai", distanceKm: 8.96 },
  { name: "Semmancheri", distanceKm: 1.51 },
  { name: "Velachery", distanceKm: 11.34 },
  { name: "Taramani", distanceKm: 12.66 },
  { name: "Navalur", distanceKm: 3.08 },
  { name: "Egattur", distanceKm: 4.67 },
  { name: "Perungudi", distanceKm: 10.43 },
  { name: "Sholinganallur", distanceKm: 3.05 },
  { name: "Perumbakkam", distanceKm: 4.53 },
  { name: "Kelambakkam", distanceKm: 9.35 },
];
</script>

<template>
  <section class="areas-served-2">
    <div class="sk-container">
      <h2>Areas Served</h2>
      <div class="areas-served-2-chips">
        <span v-for="area in areas" :key="area.name" class="sk-chip" :title="area.name">
          {{ area.name }} <b>{{ area.distanceKm }} Km</b>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.areas-served-2-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter-small);
  margin-top: var(--gutter-base);
}

.areas-served-2-chips .sk-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem var(--gutter-base);
  border-radius: var(--radius-pill);
  border: 0.1rem solid var(--color-border);
  background: var(--color-white);
  font-size: 1.3rem;
  color: var(--color-dark);
}

.areas-served-2-chips .sk-chip b {
  color: var(--color-primary);
}
</style>
