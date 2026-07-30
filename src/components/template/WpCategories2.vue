<script setup lang="ts">
import { ref } from "vue";

interface CategoryItem {
  id: string;
  label: string;
  description: string;
}

const categories: CategoryItem[] = [
  { id: "general-physician", label: "General Physician", description: "Comprehensive primary care for everyday health needs." },
  { id: "cardiology", label: "Cardiology", description: "We offer high quality services, check out patients' testimonials." },
  { id: "pulmonology", label: "Pulmonologist", description: "Specialized care for respiratory and lung conditions." },
  { id: "neurology", label: "Neurology", description: "Diagnosis and treatment of neurological disorders." },
  { id: "eye-surgery", label: "Eye Surgery", description: "Advanced surgical care for a range of eye conditions." },
  { id: "mental-health", label: "Mental Health", description: "Compassionate support for emotional well-being." },
  { id: "gastrology", label: "Gastrology", description: "Care for digestive health and related conditions." },
];

const openId = ref(categories[1].id);

function toggle(id: string) {
  openId.value = openId.value === id ? "" : id;
}
</script>

<template>
  <section class="categories-2">
    <div class="sk-container">
      <h2 class="sk-text-center">Services we offer</h2>
      <div class="sk-expansion-panels categories-2-list">
        <div
          v-for="category in categories"
          :key="category.id"
          class="sk-expansion-inner"
          :class="{ 'sk-active': openId === category.id }"
        >
          <div class="sk-expansion-header" @click="toggle(category.id)">
            <span class="sk-h4">{{ category.label }}</span>
            <span class="sk-icons">
              <svg width="22" height="22">
                <use xlink:href="#skIconDownChevron"></use>
              </svg>
            </span>
          </div>
          <div class="sk-expansion-content">
            <p>{{ category.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories-2 {
  background: rgb(var(--color-primary-rgb) / 5%);
}

.categories-2-list {
  max-width: 70rem;
  margin: var(--gutter-large) auto 0;
}

.categories-2-list .sk-expansion-inner {
  border: 0.1rem solid var(--color-border);
  border-radius: var(--radius-base);
  margin-bottom: 1rem;
  background: var(--color-white);
}

.categories-2-list .sk-expansion-header {
  cursor: pointer;
  padding: var(--gutter-base);
}

.categories-2-list .sk-expansion-inner.sk-active .sk-icons {
  transform: rotate(180deg);
}

.categories-2-list .sk-expansion-content p {
  padding: 0 var(--gutter-base) var(--gutter-base);
  margin: 0;
  opacity: 0.7;
}
</style>
