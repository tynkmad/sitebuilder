<script setup lang="ts">
import { ref } from "vue";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Have you got 24hrs emergency for heart related problems?",
    answer:
      "Yes, our hospital provides services everyday from 7am to 10pm for heart-related problems. Our cardiac care unit is equipped with state-of-the-art technology and staffed by experienced cardiologists and healthcare professionals who are dedicated to providing rapid and effective treatment for all cardiac emergencies.",
  },
  {
    question: "When is the general doctor available at your clinic?",
    answer:
      "Our general practitioners typically are available from 7:00 AM to 10:00 PM, making them present throughout the working hours of our clinic.",
  },
  {
    question: "When is the ENT doctor available at your clinic?",
    answer:
      "Our ENT (Ear, Nose, and Throat) doctors have specific clinic hours that may vary depending on the day of the week and the clinic's schedule. We are open from 7:00 AM to 10:00 PM and we are always open to your queries.",
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

const openIndex = ref(0);

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index;
}
</script>

<template>
  <section class="faq-section" itemtype="https://schema.org/FAQPage">
    <div class="sk-container">
      <div class="section-title">FAQs</div>
      <h2>Frequently asked questions</h2>
      <div class="sk-expansion-panels">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="sk-expansion-inner"
          :class="{ 'sk-active': openIndex === index }"
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <div class="sk-expansion-header" @click="toggleFaq(index)">
            <div class="sk-expansion-action">
              <span itemprop="name">{{ index + 1 }}. {{ faq.question }}</span>
              <span class="sk-icons">
                <svg width="24" height="24">
                  <use xlink:href="#skIconDownChevron"></use>
                </svg>
              </span>
            </div>
          </div>
          <div class="sk-expansion-content" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  background-color: rgb(var(--color-secondary-rgb) / 10%);
}

.faq-section .sk-expansion-panels {
  background-color: var(--color-white);
  border-radius: 0;
  border-top-left-radius: 8rem;
  border-bottom-right-radius: 8rem;
  padding: 8rem 0;
  overflow: hidden;
}

.faq-section .sk-expansion-panels .sk-expansion-inner {
  padding: 1rem 4rem;
}

.faq-section .sk-expansion-panels .sk-expansion-header {
  cursor: pointer;
}

.faq-section .sk-expansion-panels .sk-expansion-inner.sk-active {
  background-color: #f2f2f2;
}

@media (max-width: 768px) {
  .faq-section .sk-expansion-panels {
    border-top-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
    padding: 3rem 0;
  }

  .faq-section .sk-expansion-panels .sk-expansion-inner {
    padding: 0 1rem;
  }
}
</style>
