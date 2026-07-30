<script setup lang="ts">
import Skappbar from "rolex/skappbar.vue";
import Skicon from "rolex/skicon.vue";
import { reactive } from "vue";
import SkChannelImg from "rolex/channelimg.vue";
import GoogleTranslate from "@/components/template/GoogleTranslate.vue";

interface IheaderBar2 {
  connectedChannelList: Array<{
    url: string;
    channelName: string;
  }>;
}

const reactiveData = reactive<IheaderBar2>({
  connectedChannelList: [
    { url: "https://www.sulekha.com/", channelName: "sulekha" },
    { url: "https://www.facebook.com/", channelName: "facebook" },
    { url: "https://promanage.biz/", channelName: "promanageapp" },
    { url: "https://www.youtube.com/", channelName: "youtube" },
    { url: "https://www.twitter.com/", channelName: "twitter" },
  ],
});
</script>

<template>
  <Skappbar class="header-bar-2" appBarLeftIconStyle="" appBarTitle="">
    <template #ableft>
      <div class="sk-flex-row header-bar-2-hours">
        <Skicon iconType="schedule" />
        <span>Open today &middot; 9:00 AM - 5:00 PM</span>
      </div>
    </template>
    <template #abright>
      <div class="sk-flex-row social-links">
        <a
          v-for="channel in reactiveData.connectedChannelList"
          :key="channel.channelName"
          :href="channel.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SkChannelImg :channel="channel.channelName" />
        </a>
      </div>
      <GoogleTranslate />
    </template>
  </Skappbar>
</template>

<style>
.header-bar-2 {
  height: 4.6rem;
  background: var(--color-secondary);
  color: var(--color-on-secondary);

  .header-bar-2-hours {
    gap: var(--gutter-small);
  }

  .social-links img {
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>
