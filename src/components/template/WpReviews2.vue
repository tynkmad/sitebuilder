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
    text: "Dr. Krithiga is an excellent doctor who knows exactly what she is doing and knows what her patients need each time.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXwHKUrQlHY9ztDHOAkHu6HzlB3c1gyQR_CbYnZVg26B3WyS8o=s120-c-rp-mo-br100",
    reviewerName: "Harish",
    reviewDate: "26/05/2024",
  },
  {
    rating: 5.0,
    text: "Dr. Krithiga is an excellent doctor who knows exactly what she is doing and knows what her patients need each time.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXwHKUrQlHY9ztDHOAkHu6HzlB3c1gyQR_CbYnZVg26B3WyS8o=s120-c-rp-mo-br100",
    reviewerName: "Harish",
    reviewDate: "26/05/2024",
  },
  {
    rating: 5.0,
    text: "Dr. Krithiga is an excellent doctor who knows exactly what she is doing and knows what her patients need each time.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXwHKUrQlHY9ztDHOAkHu6HzlB3c1gyQR_CbYnZVg26B3WyS8o=s120-c-rp-mo-br100",
    reviewerName: "Harish",
    reviewDate: "26/05/2024",
  },
];
</script>

<template>
  <section class="review-section-2">
    <div class="sk-container">
      <h2 class="sk-text-center">Client Testimonials</h2>
      <div class="reviews-grid-2">
        <div v-for="(review, index) in reviews" :key="index" class="sk-surface sk-outlined review-card-2">
          <div class="sk-flex-row sk-flex-align-center">
            <div class="sk-avatar">
              <span class="sk-avatar-title">
                <img :src="review.avatarUrl" :alt="review.reviewerName" />
              </span>
            </div>
            <div>
              <div class="reviewer-name">{{ review.reviewerName }}</div>
              <div class="review-date sk-small sk-text-muted">{{ review.reviewDate }}</div>
            </div>
            <div class="rating-badge">{{ review.rating.toFixed(1) }} <span class="sk-star sk-star5"></span></div>
          </div>
          <p class="sk-line-clamp sk-line-3">{{ review.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  gap: var(--gutter-base);
  margin-top: var(--gutter-large);
}

.review-card-2 {
  padding: var(--gutter-base);
}

.review-card-2 .sk-avatar {
  width: 4.5rem;
  height: 4.5rem;
}

.review-card-2 .reviewer-name {
  font-weight: var(--font-weight-medium);
}

.review-card-2 .rating-badge {
  margin-left: auto;
  font-weight: var(--font-weight-medium);
}

.review-card-2 p {
  margin-top: var(--gutter-base);
  margin-bottom: 0;
}
</style>
