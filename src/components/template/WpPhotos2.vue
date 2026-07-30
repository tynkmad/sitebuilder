<script setup lang="ts">
import { reactive } from "vue";

interface IPhotoItem {
  mediaUrl: string;
}

const ReactiveData = reactive<{ photoList: IPhotoItem[] }>({
  photoList: [
    { mediaUrl: "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-3c8aec26.jpeg" },
    { mediaUrl: "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-80b76fe9.jpeg" },
    { mediaUrl: "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-cea9add1.jpeg" },
    { mediaUrl: "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-3b9e8462.jpeg" },
    { mediaUrl: "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-2fd90eae.jpeg" },
    { mediaUrl: "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-84b4eb9d.jpeg" },
  ],
});

const openPhoto = (item: IPhotoItem) => {
  console.log("Photo clicked:", item);
};
</script>

<template>
  <section class="gallery-section-2">
    <div class="sk-container">
      <h2 class="sk-text-center">Photo Gallery</h2>
      <div class="photo-grid">
        <div
          v-for="(item, index) in ReactiveData.photoList"
          :key="index"
          class="photo sk-clickable"
          @click="openPhoto(item)"
        >
          <img :src="item.mediaUrl" alt="Gallery photo" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.gallery-section-2 {
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: var(--gutter-base);
    margin-top: var(--gutter-large);
  }

  .photo {
    overflow: hidden;
    border-radius: var(--radius-large);
    aspect-ratio: 1 / 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: scale 0.4s ease;
    }

    &:hover img {
      scale: 1.08;
    }
  }
}
</style>
