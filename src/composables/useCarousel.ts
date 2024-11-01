// src/composables/useCarousel.ts
import { ref, nextTick, onMounted, onUnmounted } from "vue";

export function useCarousel() {
  const currentScrollWidth = ref(0);
  const hidePreviousBtn = ref(false);
  const hideNextBtn = ref(false);
  const scrollContainer = ref<HTMLElement | null>(null);
  let observerPrev: IntersectionObserver | null = null;
  let observerNext: IntersectionObserver | null = null;

  const initObservers = (carouselContainerId: string) => {
    const container = document.querySelector(
      `${carouselContainerId} .sk-carousel-inner`
    ) as HTMLElement;
    scrollContainer.value = container;

    if (container) {
      const firstItem = container.querySelector(
        ".sk-carousel-item:first-of-type"
      );
      const lastItem = container.querySelector(
        ".sk-carousel-item:last-of-type"
      );

      if (firstItem && lastItem) {
        observerPrev = new IntersectionObserver(
          ([entry]) => {
            hidePreviousBtn.value = entry.isIntersecting;
          },
          { root: container, threshold: 1.0 }
        );
        observerNext = new IntersectionObserver(
          ([entry]) => {
            hideNextBtn.value = entry.isIntersecting;
          },
          { root: container, threshold: 1.0 }
        );

        observerPrev.observe(firstItem as Element);
        observerNext.observe(lastItem as Element);
      }
    }
  };

  const destroyObservers = () => {
    observerPrev?.disconnect();
    observerNext?.disconnect();
    observerPrev = null;
    observerNext = null;
  };

  const moveCarousel = async (
    carouselContainerId: string,
    direction: "next" | "prev"
  ) => {
    const container = scrollContainer.value;
    if (container) {
      const card = getDeviceType() === "Desktop" ? 2 : 1;
      const scrollAmount =
        (container.clientWidth / card) * (direction === "next" ? 1 : -1);
      container.scrollLeft += scrollAmount;
      currentScrollWidth.value += scrollAmount;
      await nextTick();
    }
  };

  const getDeviceType = () => {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobile|Android|iPhone|iPod|BlackBerry|Kindle|Silk/.test(
      userAgent
    );
    const isTablet = /Tablet|iPad/.test(userAgent);
    return isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop";
  };

  onMounted(() => {
    initObservers("#carouselContainerId"); // Replace with actual ID if necessary
  });

  onUnmounted(() => {
    destroyObservers();
  });

  return {
    currentScrollWidth,
    hidePreviousBtn,
    hideNextBtn,
    moveCarousel,
    initObservers,
  };
}
