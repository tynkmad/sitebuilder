<script setup lang="ts">
import Skbutton from "rolex/skbutton.vue";
import Skicon from "rolex/skicon.vue";
</script>

<template>
  <div class="quick-bar-top-2 sk-flex sk-flex-align-center sk-flex-justify-center">
    <div class="sk-flex-row sk-flex-align-center">
      <Skicon iconType="calendar_month" filled />
      <p>Need a consultation? We're just a click away.</p>
    </div>
    <Skbutton buttonText="Book an Appointment" pill small icon="calendar_add_on" />
  </div>
</template>

<style>
.template-preview .quick-bar-top-2 {
  background: var(--color-primary);
  background-image: var(--template-gradient);
  color: var(--color-on-primary);
  justify-content: center;
  gap: var(--gutter-large);
  padding: var(--gutter-small) var(--gutter-base);
  flex-wrap: wrap;

  p {
    margin-bottom: 0;
  }

  .sk-icons {
    fill: var(--color-on-primary);
  }
}
</style>
