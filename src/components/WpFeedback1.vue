<script setup lang="ts">
import Skbutton from "rolex/skbutton.vue";
</script>

<template>
  <!-- #region Feedback section -->
  <section class="feedback-block">
    <div class="sk-container">
      <h2>Have you used our service?</h2>
      <p>
        If yes, please provide your valuable feedback and refer us to your
        friends and family.
      </p>
      <div class="sk-button-group">
        <Skbutton
          buttonText="Write Feedback"
          secondaryOutline
          title="Write an Feedback about Elder Care - Velachery"
        />
      </div>
    </div>
  </section>
  <!-- #endregion Feedback section -->
</template>

<style>
.feedback-block {
  background-color: rgb(var(--color-rgb-primary) / 10%);
}
</style>
