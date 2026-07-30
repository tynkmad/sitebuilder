<script setup lang="ts">
import Skicon from "rolex/skicon.vue";

interface DocumentItem {
  title: string;
  url: string;
  sizeLabel: string;
}

const documents: DocumentItem[] = [
  {
    title: "Health Check Up",
    url: "https://lscdn.blob.core.windows.net/content/pro-manage/document/1677026/11514948/Health%20Check%20Up.pdf",
    sizeLabel: "PDF",
  },
  {
    title: "Health Check Up",
    url: "https://lscdn.blob.core.windows.net/content/pro-manage/document/1677026/11514948/Health%20Check%20Up.pdf",
    sizeLabel: "PDF",
  },
  {
    title: "Health Check Up",
    url: "https://lscdn.blob.core.windows.net/content/pro-manage/document/1677026/11514948/Health%20Check%20Up.pdf",
    sizeLabel: "PDF",
  },
];
</script>

<template>
  <section class="document-block-2">
    <div class="sk-container">
      <h2>Documents</h2>
      <p class="sk-margin-bottom-large">
        Download our documents for detailed insights into our services.
      </p>
      <ul class="document-list-2">
        <li v-for="(doc, index) in documents" :key="index">
          <a :href="doc.url" target="_blank" rel="noopener noreferrer" class="sk-flex-row sk-flex-align-center">
            <Skicon iconType="description" filled />
            <span class="doc-title">{{ doc.title }}</span>
            <span class="doc-size sk-text-muted">{{ doc.sizeLabel }}</span>
            <Skicon iconType="download" class="download-icon" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.document-block-2 {
  background: rgb(var(--color-primary-rgb) / 5%);
}

.document-list-2 {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gutter-small);
}

.document-list-2 li a {
  display: flex;
  align-items: center;
  gap: var(--gutter-base);
  background: var(--color-white);
  border-radius: var(--radius-base);
  padding: var(--gutter-base);
  box-shadow: 0 0 9px 2px rgb(var(--color-black-rgb) / 5%);
  color: var(--color-body-color);
}

.doc-title {
  font-weight: var(--font-weight-medium);
}

.doc-size {
  margin-left: auto;
  font-size: 1.2rem;
}

.download-icon {
  fill: var(--color-primary);
}
</style>
