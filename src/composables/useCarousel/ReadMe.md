usage of useCarousel.ts

<script setup lang="ts">
  import { useCarousel } from "@/composables/useCarousel";
  const { moveCarousel, getCarouselState, initObservers } = useCarousel();

  const doctorListState = getCarouselState("#doctorList");
  const doctorList1State = getCarouselState("#doctorList1");
  onMounted(() => {
    initObservers("#doctorList");
    initObservers("#doctorList1");
  });
</script>
<template>

  <!-- Multiple Doctors Section -->
  <SkCarousel id="doctorList" :enableNavButton="true" customPreviousIcon="chevron_left" customNextIcon="chevron_right"
    @move-previous="() => moveCarousel('#doctorList', 'prev')" @move-next="() => moveCarousel('#doctorList', 'next')"
    :hidePreviousButton="doctorListState.hidePreviousBtn.value" :hideNextButton="doctorListState.hideNextBtn.value"
    class="doctor-list" v-if="ReactiveData.profiles.length && ReactiveData.profiles.length > 1">
    <SkCarouselItem class="doctor sk-clickable" v-for="(item, index) in ReactiveData.profiles"
      @click="goToDoctorProfile(item.ProfileId)" :key="index">
      <!--List 1-->
    </SkCarouselItem>
  </SkCarousel>
  <!-- Multiple Doctors Section -->

  <!-- Multiple Doctors Section -->
  <SkCarousel id="doctorList1" :enableNavButton="true" customPreviousIcon="chevron_left" customNextIcon="chevron_right"
    @move-previous="() => moveCarousel('#doctorList1', 'prev')" @move-next="() => moveCarousel('#doctorList1', 'next')"
    :hidePreviousButton="doctorList1State.hidePreviousBtn.value" :hideNextButton="doctorList1State.hideNextBtn.value"
    class="doctor-list" v-if="ReactiveData.profiles.length && ReactiveData.profiles.length > 1">
    <SkCarouselItem class="doctor sk-clickable" v-for="(item, index) in ReactiveData.profiles"
      @click="goToDoctorProfile(item.ProfileId)" :key="index">
      <!--List 2-->
    </SkCarouselItem>
  </SkCarousel>
  <!-- Multiple Doctors Section -->
</template>