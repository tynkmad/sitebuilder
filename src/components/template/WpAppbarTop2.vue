<script setup lang="ts">
import Skbutton from "rolex/skbutton.vue";
import Skicon from "rolex/skicon.vue";
import SkMenuBar from "rolex/skMenuBar.vue";
import { MainNavBarType } from "rolex/skglobaltypes";
import { reactive, watch } from "vue";

interface IwpAppbarTop2 {
  reactiveLogoURL: string;
  menuItems: Array<MainNavBarType>;
}

const props = defineProps({
  logoURL: {
    type: String,
    default: "https://lscdn.azureedge.net/biz-live/img/template-10-logo.jpeg",
  },
  menuItems: {
    type: Array as () => Array<MainNavBarType>,
    default: () => [
      { menuName: "Home", isActive: true, targetContentID: "Home" },
      { menuName: "Services", isActive: false, targetContentID: "dvaMenuServices" },
      { menuName: "About Us", isActive: false, targetContentID: "dvaMenuabout" },
    ],
  },
});

const ReactiveData = reactive<IwpAppbarTop2>({
  reactiveLogoURL: props.logoURL,
  menuItems: [...props.menuItems],
});

const emit = defineEmits(["onHamburgerClick"]);
function onHamburgerClick() {
  emit("onHamburgerClick");
}

watch(
  () => props.menuItems,
  (newMenuItems) => {
    ReactiveData.menuItems = [...newMenuItems];
  },
  { immediate: true }
);

watch(
  () => props.logoURL,
  (newLogoURL) => {
    ReactiveData.reactiveLogoURL = newLogoURL;
  },
  { immediate: true }
);
</script>

<template>
  <div class="appbar-top-2">
    <div class="appbar-top-2-row">
      <div class="sk-appbar-logo notranslate">
        <a href="/" title="Home">
          <img :src="ReactiveData.reactiveLogoURL" height="60" alt="Logo" />
        </a>
      </div>
      <a title="Call" href="tel:9899075951" class="book-appointments sk-mobile-hide">
        <Skicon iconType="call" filled />
        <div class="sk-flex sk-flex-column">
          <span class="sk-small">Call us on</span>
          <b class="phone-number">9899075951</b>
        </div>
      </a>
      <Skbutton icon="menu" round @click="onHamburgerClick" />
    </div>
    <SkMenuBar :MenuItems="ReactiveData.menuItems" scrollable class="appbar-top-2-nav" />
  </div>
</template>

<style>
.appbar-top-2 {
  box-shadow: var(--box-shadow-1);
  background: var(--color-white);

  .appbar-top-2-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--gutter-small) var(--gutter-base);
    gap: var(--gutter-base);
  }

  .appbar-top-2-nav {
    justify-content: center;
    border-top: 0.1rem solid var(--color-border);

    .sk-menu li {
      padding: 0;

      &.sk-active {
        font-weight: bold;
      }

      a {
        padding: var(--gutter-small) var(--gutter-base);
        font-size: 1.6rem;
        text-transform: capitalize;
        color: inherit;
      }

      .sk-menu-indicator {
        display: none;
      }
    }
  }

  .book-appointments {
    display: flex;
    gap: var(--gutter-xsmall);
    align-items: center;
    color: inherit;
    font-weight: var(--font-weight-bold, 700);

    .phone-number {
      font-size: 1.4rem;
    }

    .sk-icons {
      background-color: rgb(var(--color-rgb-primary) / 70%);
      background-image: var(--template-gradient);
      width: 3.4rem;
      height: 3.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-round);
      color: var(--color-on-primary);

      svg {
        fill: var(--color-on-primary);
      }
    }
  }
}
</style>
