<script setup lang="ts">
interface ArticleItem {
  id: string;
  imageUrl: string;
  postedOn: string;
  summary: string;
}

const articles: ArticleItem[] = Array.from({ length: 3 }, (_, i) => ({
  id: `article-${i + 1}`,
  imageUrl:
    "https://lscdn.blob.core.windows.net//content/pro-manage/Enterprise/Images/1677026/LP_JOB_1019206.jpg",
  postedOn: "Aug 14, 2024",
  summary:
    "Are you experiencing issues with your ear, nose, or throat? Our expert specialists are dedicated to diagnosing and treating a wide range of conditions using advanced diagnostic tools and treatment methods.",
}));

const emit = defineEmits<{
  (e: "readMore", article: ArticleItem): void;
}>();
</script>

<template>
  <section class="articles-2">
    <div class="sk-container">
      <h2>Latest News &amp; Articles</h2>
      <div class="articles-list-2">
        <div v-for="article in articles" :key="article.id" class="article-row-2">
          <img :src="article.imageUrl" alt="Article" />
          <div class="article-row-2-body">
            <div class="sk-small sk-text-muted">{{ article.postedOn }}</div>
            <p class="sk-line-clamp sk-line-3">{{ article.summary }}</p>
            <a href="javascript:void(0)" class="sk-link" @click="emit('readMore', article)">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.articles-list-2 {
  display: flex;
  flex-direction: column;
  gap: var(--gutter-base);
  margin-top: var(--gutter-large);
}

.article-row-2 {
  display: flex;
  gap: var(--gutter-base);
  background: var(--color-white);
  border-radius: var(--radius-large);
  box-shadow: 0 0 9px 2px rgb(var(--color-black-rgb) / 5%);
  overflow: hidden;
}

.article-row-2 img {
  width: 18rem;
  height: 14rem;
  object-fit: cover;
  flex-shrink: 0;
}

.article-row-2-body {
  padding: var(--gutter-base);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.article-row-2-body p {
  margin: 0;
}

@media (max-width: 600px) {
  .article-row-2 {
    flex-direction: column;
  }

  .article-row-2 img {
    width: 100%;
    height: 16rem;
  }
}
</style>
