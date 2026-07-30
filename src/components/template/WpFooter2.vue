<script setup lang="ts">
import { computed } from "vue";

interface Props {
  businessName?: string;
  promanageProfileUrl?: string;
  sulekhaProfileUrl?: string;
  copyrightYear?: number;
}

const props = withDefaults(defineProps<Props>(), {
  businessName: "",
  promanageProfileUrl: "",
  sulekhaProfileUrl: "",
  copyrightYear: undefined,
});

const year = computed(() => props.copyrightYear ?? new Date().getFullYear());
</script>

<template>
  <section class="footer-2">
    <div class="sk-container footer-2-columns">
      <div class="footer-2-column">
        <h4>{{ businessName || "Get in Touch" }}</h4>
        <p class="sk-text-muted">We're here to help with all your healthcare needs.</p>
      </div>
      <div class="footer-2-column">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Reviews</li>
        </ul>
      </div>
      <div class="footer-2-column">
        <h4>Follow Us</h4>
        <div class="sk-flex-row">
          <a v-if="promanageProfileUrl" :href="promanageProfileUrl" target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              alt="Promanage"
              height="24"
              width="24"
              src="https://lscdn.blob.core.windows.net/content/promanage/pm-icon.svg"
            />
          </a>
          <a v-if="sulekhaProfileUrl" :href="sulekhaProfileUrl" target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              alt="Sulekha"
              height="24"
              width="24"
              src="https://lscdn.blob.core.windows.net/content/images/sulekha-emblem.png"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="footer-2-bottom sk-text-center">
      Copyright &copy;{{ year }} All rights reserved &middot; Powered by
      <a href="https://www.promanage.biz/" target="_blank" rel="noopener noreferrer">ProManagesme.com</a>
    </div>
  </section>
</template>

<style scoped>
.footer-2 {
  background-color: #f1f3f7;
}

.footer-2-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: var(--gutter-large);
  padding: var(--gutter-xlarge) 0;
}

.footer-2-column ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-2-column .sk-flex-row a img {
  background: var(--color-white);
  border-radius: var(--radius-round);
  border: 0.1rem solid var(--color-border);
  padding: var(--gutter-small);
}

.footer-2-bottom {
  padding: var(--gutter-base) 0;
  background: #eafdff;
}

.footer-2-bottom a {
  color: inherit;
  text-decoration: underline;
}
</style>
