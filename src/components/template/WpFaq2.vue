<script setup lang="ts">
interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Have you got 24hrs emergency for heart related problems?",
    answer:
      "Yes, our hospital provides services everyday from 7am to 10pm for heart-related problems, staffed by experienced cardiologists.",
  },
  {
    question: "When is the general doctor available at your clinic?",
    answer: "Our general practitioners are typically available from 7:00 AM to 10:00 PM.",
  },
  {
    question: "When is the ENT doctor available at your clinic?",
    answer: "Our ENT doctors are open from 7:00 AM to 10:00 PM and we are always open to your queries.",
  },
  {
    question: "Do I need an appointment before visiting the doctors?",
    answer: "Yes, it is recommended to book an appointment before visiting.",
  },
  {
    question: "Are doctors available on Sundays?",
    answer: "Yes! Our specialists will consult all General OP and their speciality OP on Sundays.",
  },
  {
    question: "Are dentists available at the clinic?",
    answer: "Yes, dentists are available on all days with prior appointments.",
  },
];
</script>

<template>
  <section class="faq-section-2">
    <div class="sk-container">
      <h2 class="sk-text-center">Frequently asked questions</h2>
      <div class="faq-grid-2">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-card-2 sk-surface sk-outlined">
          <div class="sk-h6">{{ faq.question }}</div>
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section-2 {
  background-color: rgb(var(--color-secondary-rgb) / 10%);
}

.faq-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  gap: var(--gutter-base);
  margin-top: var(--gutter-large);
}

.faq-card-2 {
  padding: var(--gutter-base);
}

.faq-card-2 p {
  margin: var(--gutter-small) 0 0;
  opacity: 0.7;
}
</style>
