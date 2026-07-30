<script setup lang="ts">
import Skbutton from "rolex/skbutton.vue";
import Skicon from "rolex/skicon.vue";
import { reactive } from "vue";

const props = defineProps({
  sectionTitle: {
    type: String,
    default: "Open for Appointments",
  },
  sectionDescription: {
    type: String,
    default:
      "We are delighted to announce that our doors are open, and we are now accepting appointments to serve to better",
  },
  buttonText: {
    type: String,
    default: "Book an Appointment",
  },
});

const ReactiveData = reactive({
  sectionTitle: props.sectionTitle,
  sectionDescription: props.sectionDescription,
  buttonText: props.buttonText,
});
</script>

<template>
  <section class="featured-cta-2">
    <div class="sk-container">
      <div class="featured-cta-2-card sk-surface sk-outlined">
        <Skicon iconType="calendar_month" filled />
        <h2 class="sk-h2">{{ ReactiveData.sectionTitle }}</h2>
        <p>{{ ReactiveData.sectionDescription }}</p>
        <Skbutton :buttonText="ReactiveData.buttonText" primary pill />
      </div>
    </div>
  </section>
</template>

<style>
.featured-cta-2 {
  background: rgb(var(--color-secondary-rgb) / 8%);

  .featured-cta-2-card {
    max-width: 60rem;
    margin: 0 auto;
    text-align: center;
    padding: var(--gutter-xlarge) var(--gutter-large);

    .sk-icons {
      background: var(--color-primary);
      background-image: var(--template-gradient);
      color: var(--color-on-primary);
      border-radius: var(--radius-round);
      font-size: 3.2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--gutter-base);
      margin-bottom: var(--gutter-base);
    }

    p {
      opacity: 0.7;
      font-size: 1.8rem;
      margin-bottom: var(--gutter-large);
    }
  }
}
</style>
