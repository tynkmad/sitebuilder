<script setup lang="ts">
interface DocumentItem {
  title: string;
  url: string;
  iconUrl: string;
}

const documents: DocumentItem[] = [
  {
    title: "Health Check Up",
    url: "https://lscdn.blob.core.windows.net/content/pro-manage/document/1677026/11514948/Health%20Check%20Up.pdf",
    iconUrl:
      "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
  },
  {
    title: "Health Check Up",
    url: "https://lscdn.blob.core.windows.net/content/pro-manage/document/1677026/11514948/Health%20Check%20Up.pdf",
    iconUrl:
      "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
  },
  {
    title: "Health Check Up",
    url: "https://lscdn.blob.core.windows.net/content/pro-manage/document/1677026/11514948/Health%20Check%20Up.pdf",
    iconUrl:
      "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
  },
];
</script>

<template>
  <section class="document-block">
    <div class="sk-container">
      <div class="sk-row">
        <div class="sk-col-12 sk-col-fluid">
          <div class="document-group">
            <h2>Documents</h2>
            <p class="sk-margin-bottom-large">
              Download our documents for detailed insights into our services.
              These resources offer a clear overview of what we offer, helping
              you understand how we can support your needs.
            </p>
            <div class="sk-surface">
              <div class="sk-flex-row document-list">
                <a
                  v-for="(doc, index) in documents"
                  :key="index"
                  class="sk-flex-row downloadable-file sk-small"
                  :href="doc.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img :src="doc.iconUrl" :alt="doc.title" width="30" height="40" />
                  <b>{{ doc.title }}</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.document-block {
  background: rgb(var(--color-primary-rgb) / 7%);
}

.document-block .sk-surface {
  background: transparent;
  margin-bottom: 0;
}

.downloadable-file b,
.downloadable-file a {
  display: -webkit-box;
  font-weight: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-body-color);
  font-size: var(--font-size-base);
}

.downloadable-file:hover b {
  text-decoration: underline;
}

.document-group {
  text-align: center;
}

.document-list {
  gap: var(--gutter-base);
  flex-wrap: nowrap;
  justify-content: center;
}

.document-list .downloadable-file {
  box-shadow: 0 0 9px 2px rgb(var(--color-black-rgb) / 5%);
  background: var(--color-white);
  border-radius: var(--radius-large);
  padding: var(--gutter-base) var(--gutter-large);
  flex-shrink: 0;
  cursor: pointer;
}

@media (max-width: 768px) {
  .document-list {
    flex-wrap: wrap;
  }
}
</style>
