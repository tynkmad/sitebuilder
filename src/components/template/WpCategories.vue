<script setup lang="ts">
import { ref, computed } from "vue";

interface CategoryItem {
  title: string;
  description: string;
}

interface SubCategory {
  id: string;
  title: string;
  description: string;
  items: CategoryItem[];
}

interface Category {
  id: string;
  label: string;
  introText: string;
  subCategories: SubCategory[];
}

const sampleItems: CategoryItem[] = Array.from({ length: 8 }, () => ({
  title: "Cardiology",
  description: "We offer high quality services, check out patients' testimonials.",
}));

const categories: Category[] = [
  { id: "general-physician", label: "General Physician", introText: "", subCategories: [] },
  {
    id: "cardiology",
    label: "Cardiology",
    introText:
      "We are your trusted one-stop destination for all your healthcare needs. Our comprehensive directory is designed to provide you with easy access to a wide range of healthcare services and providers.",
    subCategories: [
      { id: "cardiology-1", title: "Cardiology", description: "We offer high quality services, check out patients' testimonials.", items: sampleItems },
      { id: "cardiology-2", title: "Cardiology", description: "We offer high quality services, check out patients' testimonials.", items: [] },
      { id: "cardiology-3", title: "Cardiology", description: "We offer high quality services, check out patients' testimonials.", items: [] },
      { id: "cardiology-4", title: "Cardiology", description: "We offer high quality services, check out patients' testimonials.", items: [] },
      { id: "cardiology-5", title: "Cardiology", description: "We offer high quality services, check out patients' testimonials.", items: [] },
    ],
  },
  { id: "pulmonology", label: "Pulmonologist", introText: "", subCategories: [] },
  { id: "neurology", label: "Neurology", introText: "", subCategories: [] },
  { id: "eye-surgery", label: "Eye Surgery", introText: "", subCategories: [] },
  { id: "mental-health", label: "Mental Health", introText: "", subCategories: [] },
  { id: "gastrology", label: "Gastrology", introText: "", subCategories: [] },
];

const activeCategoryId = ref(categories[1].id);
const activeSubCategoryId = ref<string | undefined>(categories[1].subCategories[0]?.id);

const activeCategory = computed(
  () => categories.find((c) => c.id === activeCategoryId.value) ?? categories[0]
);

function selectCategory(category: Category) {
  activeCategoryId.value = category.id;
  activeSubCategoryId.value = category.subCategories[0]?.id;
}

function toggleSubCategory(subCategory: SubCategory) {
  activeSubCategoryId.value =
    activeSubCategoryId.value === subCategory.id ? undefined : subCategory.id;
}
</script>

<template>
  <section class="category-block">
    <div class="sk-container">
      <div class="section-title">Categories</div>
      <h2>Services we offer</h2>
      <div class="category-container">
        <div class="sk-tabs">
          <div class="sk-tab-menu">
            <div class="sk-menu">
              <nav>
                <ul>
                  <li
                    v-for="category in categories"
                    :key="category.id"
                    :class="{ 'sk-active': category.id === activeCategoryId }"
                  >
                    <a href="javascript:void(0)" @click="selectCategory(category)">{{ category.label }}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="sk-tab-container">
            <div class="sk-tab-content">
              <div class="sk-tab-data sk-active">
                <p class="category-intro-text">{{ activeCategory.introText }}</p>
                <div v-if="activeCategory.subCategories.length" class="category-sub-block">
                  <div class="sk-expansion-panels category-sub-group">
                    <div
                      v-for="subCategory in activeCategory.subCategories"
                      :key="subCategory.id"
                      class="sk-expansion-inner"
                      :class="{ 'sk-active': subCategory.id === activeSubCategoryId }"
                    >
                      <div class="sk-expansion-header" @click="toggleSubCategory(subCategory)">
                        <div class="category-sub-title">
                          <div class="sk-h4 sk-line-clamp">{{ subCategory.title }}</div>
                          <p class="sk-line-clamp sk-line-2">{{ subCategory.description }}</p>
                        </div>
                        <button class="sk-expansion-action">
                          <span class="sk-icons">
                            <svg width="22" height="22">
                              <use xlink:href="#skIconDownChevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div class="sk-expansion-content">
                        <div v-if="subCategory.items.length" class="category-item-group">
                          <div v-for="(item, index) in subCategory.items" :key="index" class="category-item">
                            <div class="sk-h4 sk-line-clamp sk-line-2">{{ item.title }}</div>
                            <p class="sk-line-clamp sk-line-3">{{ item.description }}</p>
                            <div class="category-action">
                              Read more
                              <svg class="sk-icons" width="30" height="30">
                                <use xlink:href="#skIconsArrowForward"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-block {
  background: rgb(var(--color-primary-rgb) / 7%);
}

.category-container {
  margin-top: var(--gutter-xlarge);
}

.category-container .sk-menu li a {
  justify-content: center;
}

.category-block .sk-tab-menu {
  background: var(--color-grey-light);
  border: 0.1rem solid var(--color-border);
  border-radius: var(--radius-base);
}

.category-block .sk-menu li.sk-active {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.category-block .sk-menu li.sk-active,
.category-block .sk-menu li.sk-active a {
  color: var(--color-on-primary);
}

.category-intro-text {
  color: var(--color-grey);
  margin: var(--gutter-large) 0;
}

.category-block .section-title,
.category-block .section-title + h2 {
  text-align: center;
}

.category-block .sk-tab-data {
  padding: 0;
}

.category-sub-group .sk-expansion-inner {
  margin-bottom: 1rem;
}

.category-sub-group .sk-expansion-inner:first-child,
.category-sub-group .sk-expansion-inner {
  border: 0.1rem solid var(--color-border);
  border-radius: var(--radius-base);
  background: var(--color-grey-light);
}

.category-sub-group .sk-expansion-header {
  background: var(--color-grey-light);
  border-radius: var(--radius-base);
  align-items: flex-start;
  cursor: pointer;
}

.category-sub-group .sk-expansion-action {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: var(--radius-pill);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--color-border);
  min-width: initial;
}

.category-sub-title p {
  margin-bottom: 0;
  position: relative;
}

.category-sub-title .sk-h4 {
  margin-bottom: 1rem;
}

.category-item-group {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  background: var(--color-white);
}

.category-item-group .category-item {
  display: flex;
  flex-flow: column;
  background: var(--color-primary);
  color: var(--color-on-primary);
  padding: var(--gutter-large);
  border-radius: var(--radius-base);
}

.category-item-group .category-item .sk-h4 {
  margin-bottom: 1.5rem;
}

.category-item-group .category-action {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  cursor: pointer;
}

.category-item-group .category-action .sk-icons {
  background: var(--color-white);
  fill: var(--color-primary);
  padding: 0.6rem;
  border-radius: var(--radius-pill);
}

.category-read-more {
  position: absolute;
  bottom: 0;
  display: block;
  background: var(--color-grey-light);
  padding: 0 var(--gutter-base);
  right: 0;
  color: var(--color-link);
}

.sk-expansion-inner.sk-active .category-read-more,
.sk-expansion-header:hover .category-read-more {
  background: var(--color-white);
}

@media (min-width: 769px) {
  .category-intro-text {
    font-size: 1.8rem;
    margin: var(--gutter-large) auto;
    line-height: 2.8rem;
  }

  .category-sub-block {
    border: 0.1rem solid var(--color-border);
    border-radius: var(--radius-base);
    position: relative;
  }

  .category-item-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gutter-base);
    height: 50rem;
    overflow: overlay;
    overflow-y: auto;
    padding: 3rem;
    top: 0;
  }

  .category-item-group .category-item {
    height: 22rem;
  }

  .category-sub-group {
    height: 50rem;
    width: 40rem;
    overflow: overlay;
    overflow-y: auto;
    background: var(--color-white);
    border: 0.1rem solid var(--color-border);
  }

  .category-sub-group .sk-expansion-inner {
    display: flex;
    width: 40rem;
    position: static;
    margin-bottom: 0;
  }

  .category-sub-group .sk-expansion-inner,
  .category-sub-group .sk-expansion-inner:first-child {
    border-radius: 0;
    border: 0;
  }

  .category-sub-group .sk-expansion-header {
    width: 40rem;
    position: relative;
    z-index: 1;
    padding: var(--gutter-large);
    border-bottom: 0.1rem solid var(--color-border);
    border-right: 0.1rem solid var(--color-border);
    height: 12.5rem;
    border-radius: 0;
  }

  .category-sub-group .sk-active .sk-expansion-header,
  .category-sub-group .sk-expansion-header:hover {
    background: var(--color-white);
  }

  .category-sub-group .sk-expansion-action {
    display: none;
  }

  .category-sub-group .sk-expansion-content {
    position: absolute;
    left: 40rem;
    padding: 0;
    top: 0;
  }
}

@media (min-width: 1600px) {
  .category-item-group {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
