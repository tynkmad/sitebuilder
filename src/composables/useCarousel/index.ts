import { ref, onUnmounted, Ref } from "vue";

export function useCarousel() {
  const carouselStates = new Map<
    string,
    { hidePreviousBtn: Ref<boolean>; hideNextBtn: Ref<boolean> }
  >();

  const getCarouselState = (carouselContainerId: string) => {
    if (!carouselStates.has(carouselContainerId)) {
      carouselStates.set(carouselContainerId, {
        hidePreviousBtn: ref(false),
        hideNextBtn: ref(false),
      });
    }
    return carouselStates.get(carouselContainerId)!;
  };

  const initObservers = (carouselContainerId: string) => {
    const state = getCarouselState(carouselContainerId);
    const container = document.querySelector(
      `${carouselContainerId} .sk-carousel-inner`
    ) as HTMLElement;

    if (container) {
      const firstItem = container.querySelector(
        ".sk-carousel-item:first-of-type"
      );
      const lastItem = container.querySelector(
        ".sk-carousel-item:last-of-type"
      );

      if (firstItem && lastItem) {
        const observerPrev = new IntersectionObserver(
          ([entry]) => (state.hidePreviousBtn.value = entry.isIntersecting),
          { root: container, threshold: 1.0 }
        );
        const observerNext = new IntersectionObserver(
          ([entry]) => (state.hideNextBtn.value = entry.isIntersecting),
          { root: container, threshold: 1.0 }
        );

        observerPrev.observe(firstItem as Element);
        observerNext.observe(lastItem as Element);

        onUnmounted(() => {
          observerPrev.disconnect();
          observerNext.disconnect();
        });
      }
    }
  };

  const moveCarousel = async (
    carouselContainerId: string,
    direction: "next" | "prev"
  ) => {
    const container = document.querySelector(
      `${carouselContainerId} .sk-carousel-inner`
    ) as HTMLElement;
    if (container) {
      const card = getDeviceType() === "Desktop" ? 2 : 1;
      const scrollAmount =
        (container.clientWidth / card) * (direction === "next" ? 1 : -1);
      container.scrollLeft += scrollAmount;
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

  return {
    getCarouselState,
    moveCarousel,
    initObservers,
  };
}
