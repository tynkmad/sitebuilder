<script setup lang="ts">
import Skbutton from "rolex/skbutton.vue";
import Skicon from "rolex/skicon.vue";
</script>

<template>
  <section class="feedback-block-2">
    <div class="sk-container">
      <div class="feedback-block-2-card sk-surface">
        <Skicon iconType="rate_review" filled />
        <div>
          <h2>Have you used our service?</h2>
          <p>
            If yes, please provide your valuable feedback and refer us to your friends and family.
          </p>
        </div>
        <Skbutton buttonText="Write Feedback" primary title="Write a Feedback" />
      </div>
    </div>
  </section>
</template>

<style>
.feedback-block-2 {
  .feedback-block-2-card {
    display: flex;
    align-items: center;
    gap: var(--gutter-large);
    padding: var(--gutter-large);
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;

    h2 {
      margin-bottom: var(--gutter-small);
    }

    p {
      margin-bottom: 0;
      opacity: 0.7;
    }

    .sk-icons {
      background: rgb(var(--color-rgb-primary) / 10%);
      color: var(--color-primary);
      border-radius: var(--radius-round);
      font-size: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--gutter-base);
      flex-shrink: 0;
    }

    @media (max-width: 768px) {
      text-align: center;
      justify-content: center;
    }
  }
}
</style>
