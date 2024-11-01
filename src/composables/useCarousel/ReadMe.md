# useCarousel Composable

The `useCarousel` composable is designed to manage multiple carousels on the same page, handling navigation, visibility, and state for each carousel instance.

## Usage

### Step 1: Import and Initialize

In your Vue component, import `useCarousel` and initialize the necessary functions.

```vue
<script setup lang="ts">
import { useCarousel } from "@/composables/useCarousel";

const { moveCarousel, getCarouselState, initObservers } = useCarousel();

// Initialize carousel states
const doctorListState = getCarouselState("#doctorList");
const doctorList1State = getCarouselState("#doctorList1");

onMounted(() => {
  initObservers("#doctorList");
  initObservers("#doctorList1");
});
</script>
```

### Step 2: Template Setup

Set up the carousel components in your template, binding navigation properties and event listeners to manage the carousel navigation state. Each carousel item can be configured with its own id and navigation events.

```vue
<template>
  <!-- Doctor List Carousel -->
  <SkCarousel
    id="doctorList"
    :enableNavButton="true"
    customPreviousIcon="chevron_left"
    customNextIcon="chevron_right"
    @movePrevious="() => moveCarousel('#doctorList', 'prev')"
    @moveNext="() => moveCarousel('#doctorList', 'next')"
    :hidePreviousButton="doctorListState.hidePreviousBtn.value"
    :hideNextButton="doctorListState.hideNextBtn.value"
    class="doctor-list"
    v-if="ReactiveData.profiles.length && ReactiveData.profiles.length > 1"
  >
    <SkCarouselItem
      class="doctor sk-clickable"
      v-for="(item, index) in ReactiveData.profiles"
      @click="goToDoctorProfile(item.ProfileId)"
      :key="index"
    >
      <!-- Content for List 1 -->
    </SkCarouselItem>
  </SkCarousel>

  <!-- Doctor List 1 Carousel -->
  <SkCarousel
    id="doctorList1"
    :enableNavButton="true"
    customPreviousIcon="chevron_left"
    customNextIcon="chevron_right"
    @movePrevious="() => moveCarousel('#doctorList1', 'prev')"
    @moveNext="() => moveCarousel('#doctorList1', 'next')"
    :hidePreviousButton="doctorList1State.hidePreviousBtn.value"
    :hideNextButton="doctorList1State.hideNextBtn.value"
    class="doctor-list"
    v-if="ReactiveData.profiles.length && ReactiveData.profiles.length > 1"
  >
    <SkCarouselItem
      class="doctor sk-clickable"
      v-for="(item, index) in ReactiveData.profiles"
      @click="goToDoctorProfile(item.ProfileId)"
      :key="index"
    >
      <!-- Content for List 2 -->
    </SkCarouselItem>
  </SkCarousel>
</template>
```

### Explanation of Key Functions

- `moveCarousel(carouselContainerId, direction)`: Moves the carousel in the specified direction (`"prev"` or `"next"`) based on the ID of the carousel container.

- `getCarouselState(carouselContainerId)`: Returns the state of the carousel (visibility of previous and next buttons).

- `initObservers(carouselContainerId)`: Initializes observers for the carousel’s first and last items, updating the visibility of navigation buttons based on item visibility.

### Props and Events

- `:enableNavButton="true"`: Enables navigation buttons.
  `customPreviousIcon` and `customNextIcon`: Define custom icons for navigation.

- `@movePrevious` and `@move-nex`t: Triggered when the respective navigation button is clicked, calling `moveCarousel` with the direction parameter.

- `:hidePreviousButton` and `:hideNextButton`: Controls the visibility of navigation buttons, using the reactive state returned from `getCarouselState`.

