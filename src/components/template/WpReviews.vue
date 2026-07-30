<script setup lang="ts">
interface ReviewItem {
  rating: number;
  text: string;
  avatarUrl: string;
  reviewerName: string;
  reviewDate: string;
}

const reviews: ReviewItem[] = [
  {
    rating: 5.0,
    text: "Dr. Krithiga, pulmonologist of Harshini health centre is an excellent doctor who knows exactly what she is doing and knows what her patients need each time. I met her to get treated for my grandmother. Not only has she taken great care of my grandmother's health, but also she is lovely to speak with at every appointment. She would listen to each and every single detail of the patient and gives her diagnosis which is always on the point. It's rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. I highly recommend her.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXwHKUrQlHY9ztDHOAkHu6HzlB3c1gyQR_CbYnZVg26B3WyS8o=s120-c-rp-mo-br100",
    reviewerName: "Harish",
    reviewDate: "26/05/2024",
  },
  {
    rating: 5.0,
    text: "Dr. Krithiga, pulmonologist of Harshini health centre is an excellent doctor who knows exactly what she is doing and knows what her patients need each time. I met her to get treated for my grandmother. Not only has she taken great care of my grandmother's health, but also she is lovely to speak with at every appointment. She would listen to each and every single detail of the patient and gives her diagnosis which is always on the point. It's rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. I highly recommend her.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXwHKUrQlHY9ztDHOAkHu6HzlB3c1gyQR_CbYnZVg26B3WyS8o=s120-c-rp-mo-br100",
    reviewerName: "Harish",
    reviewDate: "26/05/2024",
  },
  {
    rating: 5.0,
    text: "Dr. Krithiga, pulmonologist of Harshini health centre is an excellent doctor who knows exactly what she is doing and knows what her patients need each time. I met her to get treated for my grandmother. Not only has she taken great care of my grandmother's health, but also she is lovely to speak with at every appointment. She would listen to each and every single detail of the patient and gives her diagnosis which is always on the point. It's rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. I highly recommend her.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXwHKUrQlHY9ztDHOAkHu6HzlB3c1gyQR_CbYnZVg26B3WyS8o=s120-c-rp-mo-br100",
    reviewerName: "Harish",
    reviewDate: "26/05/2024",
  },
  {
    rating: 5.0,
    text: "Dr. Krithiga, pulmonologist of Harshini health centre is an excellent doctor who knows exactly what she is doing and knows what her patients need each time. I met her to get treated for my grandmother. Not only has she taken great care of my grandmother's health, but also she is lovely to speak with at every appointment. She would listen to each and every single detail of the patient and gives her diagnosis which is always on the point. It's rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. I highly recommend her.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXwHKUrQlHY9ztDHOAkHu6HzlB3c1gyQR_CbYnZVg26B3WyS8o=s120-c-rp-mo-br100",
    reviewerName: "Harish",
    reviewDate: "26/05/2024",
  },
];
</script>

<template>
  <section class="review-section">
    <div class="sk-container">
      <div class="section-title">Testimonials</div>
      <h2>
        Client Testimonials<div class="sk-body-text-2">What our patients say about us</div>
      </h2>
      <div class="sk-carousel">
        <ul class="sk-carousel-inner">
          <li v-for="(review, index) in reviews" :key="index" class="sk-carousel-item">
            <div class="sk-surface sk-outlined">
              <div class="rating">
                <div class="google-rating sk-flex-row sk-no-wrap">
                  <div class="sk-ratings sk-medium notranslate sk-margin-bottom-0">
                    <div class="rating-group">
                      <b>{{ review.rating.toFixed(1) }}</b>
                      <span class="sk-star sk-star5"></span>
                    </div>
                  </div>
                  <img
                    src="https://promanagecdn.blob.core.windows.net/promanage/images/google-logo.svg"
                    width="30"
                    height="30"
                    class="sk-text-end"
                  />
                </div>
              </div>
              <p class="sk-line-clamp sk-line-3">
                {{ review.text }}
              </p>
              <div class="sk-flex-row sk-no-wrap sk-padding-bottom">
                <div class="sk-avatar">
                  <span class="sk-avatar-title">
                    <img :src="review.avatarUrl" :alt="review.reviewerName" />
                  </span>
                </div>
                <div class="review-details">
                  <div class="reviewer-name">{{ review.reviewerName }}</div>
                  <div class="review-date">{{ review.reviewDate }}</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.review-section .sk-carousel-item .sk-avatar {
  width: 5rem;
  height: 5rem;
}

.review-section .sk-carousel-item .sk-surface {
  padding: var(--gutter-base);
  margin-bottom: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  border-radius: inherit;
}

.review-section .rating {
  padding-bottom: 1rem;
}

.review-section .review-date {
  font-size: 1.2rem;
}

.review-section .reviewer-name {
  font-weight: var(--font-weight-medium);
}

.review-details + img {
  margin-left: auto;
}

.review-section .sk-carousel-inner {
  overflow: initial;
  display: flex;
  gap: var(--gutter-base);
}

.review-section p {
  margin-bottom: 1rem;
}

.review-section .sk-carousel-item {
  margin: 0 0.5rem;
  max-width: 100%;
  flex: 0 0 30rem;
  border-radius: var(--radius-large);
}

.review-section .slick-arrow {
  position: absolute;
  top: -6rem;
  right: 3rem;
  z-index: 1;
  border: 0.1rem solid var(--color-border);
  border-radius: var(--radius-base);
}

.review-section .slick-arrow.arrow-prev {
  transform: translateX(-140%);
}
</style>
