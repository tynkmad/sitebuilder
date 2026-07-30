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
  <section class="areas-served">
    <div class="sk-container">
      <div class="sk-row">
        <div class="sk-col-12 sk-col-fluid">
          <h2>Areas Served</h2>
          <ul class="sk-list sk-list-inline bulleted-list">
            <li v-for="area in areas" :key="area.name" :title="area.name">
              <a class="sk-text-muted" :title="area.name">{{ area.name }} ({{ area.distanceKm }} Km)</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:is(.areas-served) .sk-list-inline {
  gap: var(--gutter-base);
}

:is(.areas-served) .sk-list-inline li {
  display: flex;
  align-items: center;
  gap: var(--gutter-small);
}

:is(.areas-served) .sk-list-inline li a {
  font-weight: normal;
  color: var(--color-dark);
}

:is(.areas-served) .bulleted-list li::before {
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
