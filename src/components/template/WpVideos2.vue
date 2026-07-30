<script setup lang="ts">
interface VideoItem {
  src: string;
}

const videos: VideoItem[] = [
  {
    src: "https://promanageinbox.blob.core.windows.net/inboxmessages/pro-manage/Enterprise/Video/1677026/11514948/WhatsApp%20Video%202024-04-29%20at%203.28.24%20PM.mp4",
  },
  {
    src: "https://promanageinbox.blob.core.windows.net/inboxmessages/pro-manage/Enterprise/Video/1677026/11514948/WhatsApp%20Video%202024-04-29%20at%203.28.24%20PM.mp4",
  },
  {
    src: "https://promanageinbox.blob.core.windows.net/inboxmessages/pro-manage/Enterprise/Video/1677026/11514948/WhatsApp%20Video%202024-04-29%20at%203.28.24%20PM.mp4",
  },
  {
    src: "https://promanageinbox.blob.core.windows.net/inboxmessages/pro-manage/Enterprise/Video/1677026/11514948/WhatsApp%20Video%202024-04-29%20at%203.28.24%20PM.mp4",
  },
];
</script>

<template>
  <section class="videos-2">
    <div class="sk-container">
      <h2 class="sk-text-center">Videos</h2>
      <div class="videos-grid-2">
        <div v-for="(video, index) in videos" :key="index" class="each-video-2">
          <video controls loading="lazy">
            <source :src="video.src" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.videos-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: var(--gutter-base);
  margin-top: var(--gutter-large);
}

.each-video-2 {
  border-radius: var(--radius-large);
  overflow: hidden;
  box-shadow: 0 0 9px 2px rgb(var(--color-black-rgb) / 5%);
}

.each-video-2 video {
  width: 100%;
  height: 22rem;
  object-fit: cover;
  display: block;
}
</style>
