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
  <section class="videos">
    <div class="sk-container">
      <div class="section-title">Videos</div>
      <h2>Videos</h2>
      <div class="videos-container sk-col-12 sk-col-fluid">
        <div v-for="(video, index) in videos" :key="index" class="each-video">
          <video loading="lazy">
            <source :src="video.src" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.videos {
  text-align: center;
}

.videos .slick-arrow {
  position: absolute;
  top: -3rem;
  z-index: 1;
  border: 0.1rem solid var(--color-secondary);
  border-radius: var(--radius-base);
}

.videos .arrow-prev {
  right: 8rem;
}

.videos .arrow-next {
  right: 3rem;
}

.videos-container {
  margin-top: var(--gutter-large);
  display: flex;
  overflow: overlay;
  gap: var(--gutter-base);
}

.each-video {
  margin: var(--gutter-base);
  padding: var(--gutter-base);
  border-radius: var(--radius-large);
  text-align: left;
  box-shadow: 0 0 9px 2px rgb(var(--color-black-rgb) / 5%);
  transition: box-shadow 0.5s ease;
  position: relative;
  flex: 0 0 30rem;
}

.each-video video {
  border-radius: var(--radius-large);
  height: 30rem;
  width: 100%;
  object-fit: cover;
}

.each-video:hover {
  box-shadow: 0 0 9px 2px rgb(var(--color-black-rgb) / 36%);
  cursor: pointer;
}

.each-video::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: var(--color-white);
  border-radius: 50%;
  box-shadow: var(--box-shadow-1);
}

.each-video::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent rgb(0 0 0 / 80%);
  z-index: 1;
  border-radius: 0.5rem;
}
</style>
