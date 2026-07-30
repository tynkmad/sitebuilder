<script setup lang="ts">
interface Props {
  mapEmbedUrl?: string;
}

withDefaults(defineProps<Props>(), {
  mapEmbedUrl: "https://maps.google.com/maps?cid=6972051645732795776&output=embed",
});
</script>

<template>
  <section class="location">
    <div class="sk-container">
      <div class="section-title">Location</div>
      <h2>Where to find us</h2>
      <iframe
        :src="mapEmbedUrl"
        width="100%"
        height="350"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.location {
  background-color: rgb(var(--color-secondary-rgb) / 10%);
}
</style>
