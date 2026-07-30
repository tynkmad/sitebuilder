<script setup lang="ts">
interface ArticleItem {
  id: string;
  imageUrl: string;
  postedOn: string;
  summary: string;
}

const articles: ArticleItem[] = Array.from({ length: 4 }, (_, i) => ({
  id: `article-${i + 1}`,
  imageUrl:
    "https://lscdn.blob.core.windows.net//content/pro-manage/Enterprise/Images/1677026/LP_JOB_1019206.jpg",
  postedOn: "Aug 14, 2024",
  summary:
    "Are you experiencing issues with your ear, nose, or throat? Our expert specialists are dedicated to diagnosing and treating a wide range of conditions, ensuring you receive the highest quality care using advanced diagnostic tools and treatment methods.",
}));

const emit = defineEmits<{
  (e: "readMore", article: ArticleItem): void;
}>();
</script>

<template>
  <section class="google-posts">
    <div class="sk-container">
      <div class="section-title">Blogs</div>
      <h2>Latest News &amp; Articles</h2>
      <div class="articles-container">
        <div v-for="article in articles" :key="article.id" class="sk-card sk-card-outlined sk-clickable">
          <div class="sk-card-primary">
            <div class="news-image">
              <img :src="article.imageUrl" width="100%" height="100%" alt="Article" />
            </div>
            <div class="sk-small sk-text-muted date-posted">
              <div class="sk-flex-row">
                <svg width="24" height="24">
                  <use xlink:href="#skIconsCalendar"></use>
                </svg>
                <span>{{ article.postedOn }}</span>
              </div>
            </div>
          </div>
          <div class="sk-card-secondary">
            <div class="sk-line-2 sk-line-clamp">
              {{ article.summary }}
            </div>
          </div>
          <div class="sk-card-actions">
            <a class="sk-button" href="javascript:void(0)" @click="emit('readMore', article)">
              <span>Read More</span>
              <svg width="24" height="24">
                <use xlink:href="#skIconsNavNext"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.articles-container {
  display: flex;
}

.articles-container:not(.slick-initialized) .sk-card {
  flex: 0 0 29rem;
}

.articles-container .slick-list {
  width: 100%;
}

.google-posts .sk-card .sk-card-primary:not(:empty) {
  position: relative;
  padding-bottom: 0;
}

.google-posts {
  text-align: center;
}

.google-posts :is(button, .sk-button) {
  padding: var(--gutter-small) var(--gutter-base);
  background: var(--color-primary);
  background-image: var(--template-gradient);
  color: var(--color-on-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--gutter-base);
  transition: all 0.3s ease;
}

.google-posts :is(button, .sk-button) svg {
  fill: currentColor;
}

.google-posts .sk-card {
  margin: var(--gutter-base);
  box-shadow: 0 0 9px 2px rgb(var(--color-black-rgb) / 5%);
  border: 0;
  border-radius: var(--radius-large);
}

.google-posts .news-image img {
  border-radius: var(--radius-large);
  object-fit: cover;
}

.google-posts .sk-card .sk-card-secondary:not(:empty) {
  padding-top: var(--gutter-base);
  text-align: left;
}

.google-posts .date-posted {
  padding: var(--gutter-base) 0 0;
}

.google-posts button:hover,
.google-posts .sk-button:hover {
  padding: 0 var(--gutter-base);
}
</style>
