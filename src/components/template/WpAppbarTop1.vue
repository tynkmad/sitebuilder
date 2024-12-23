<script setup lang="ts">
import Skappbar from "rolex/skappbar.vue";
import Skbutton from "rolex/skbutton.vue";
import { MainNavBarType } from "rolex/skglobaltypes";
import Skicon from "rolex/skicon.vue";
import SkMenuBar from "rolex/skMenuBar.vue";
import { reactive, ref, watch } from "vue";

// Define an interface for the reactive data structure
interface IwpAppbarTop {
  reactiveLogoURL: string;
  showMenuDrawer?: boolean;
  menuItems: Array<MainNavBarType>;
}


// Props for menuItems
const props = defineProps({
  logoURL: {
    type: String,
    default: "https://lscdn.azureedge.net/biz-live/img/template-10-logo.jpeg",
  },
  menuItems: {
    type: Array as () => Array<MainNavBarType>,
    default: () => [
      {
        menuName: "Home",
        isActive: true,
        targetContentID: "Home",
      },
      {
        menuName: "Services",
        isActive: false,
        targetContentID: "dvaMenuServices",
      },
      {
        menuName: "About Us",
        isActive: false,
        targetContentID: "dvaMenuabout",
      },
    ],
  },
});

// Create a reactive object for the menu drawer state
const ReactiveData = reactive<IwpAppbarTop>({
  reactiveLogoURL: props.logoURL,
  showMenuDrawer: false,
  menuItems: [...props.menuItems], // Initialize from props or use default
});

const emit = defineEmits(["onHamburgerClick"]);
function onHamburgerClick() {
  emit("onHamburgerClick");
}

const setActiveMenu = (menuId: string) => {
  // ReactiveData.menuItems = ReactiveData.menuItems.map(clickedMenu => {
  //     const isActive = menu.targetContentID && clickedMenu.targetContentID;
  //     return { ...menu, isActive }; // Ensure reactivity by returning a new object
  // });
};

watch(
  () => props.menuItems, // Watch the prop
  (newMenuItems: Array<MainNavBarType>) => {
    ReactiveData.menuItems = [...newMenuItems]; // Update the reactive state
  },
  { immediate: true } // Run immediately on mount
);

watch(
  () => props.logoURL,
  (newLogoURL: string) => {
    ReactiveData.reactiveLogoURL = newLogoURL; // Update reactive logo URL
  },
  { immediate: true }
);
</script>

<template>
  <!-- #region Appbar -->
  <Skappbar appBarLeftIconStyle="" appBarTitle="" sticky>
    <template #ableft>
      <div class="sk-appbar-logo notranslate">
        <a href="/" title="Elder Care">
          <img :src="ReactiveData.reactiveLogoURL" height="60" alt="Elder Care" />
        </a>
      </div>
      <SkMenuBar
        :MenuItems="ReactiveData.menuItems"
        scrollable
        @onClickToTiggerNav="setActiveMenu"
        class="sk-mobile-hide sk-text-end"
      />
    </template>
    <template #abright>
      <a
        title="Call Elder Care"
        href="tel:9899075951"
        class="book-appointments sk-mobile-hide"
      >
        <Skicon iconType="call" filled />
        <div class="sk-flex sk-flex-column">
          <span class="sk-small">Call us on</span>
          <b class="phone-number"> 9899075951 </b>
        </div>
      </a>
      <Skbutton icon="menu" round @click="onHamburgerClick" />
    </template>
  </Skappbar>
  <!-- #endregion Appbar -->
</template>
<style>
/* #region APPBAR */
.template-preview .sk-appbar {
  border: 0;
  box-shadow: var(--box-shadow-1);

  .sk-menu li {
    padding: 0;

    &.sk-active {
      font-weight: bold;
    }

    &:hover {
      background: rgb(var(--color-rgb-primary) / 10%);
      border-radius: var(--radius-base);
    }

    a {
      padding: 0 var(--gutter-base);
      font-size: 1.6rem;
      text-transform: capitalize;
      justify-content: center;
      color: inherit;
    }

    .sk-menu-indicator {
      display: none;
    }
  }

  .book-appointments {
    display: flex;
    gap: var(--gutter-xsmall);
    align-items: center;
    justify-content: center;
    color: inherit;
    color: inherit;
    font-weight: var(--font-weight-bold, 700);

    .phone-number {
      font-size: 1.4rem;

      &:hover {
        text-decoration: underline;
      }
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
      transition: 0.3s ease;
      color: var(--color-on-primary);

      &:hover {
        box-shadow: var(--box-shadow-2);
      }

      svg {
        fill: var(--color-on-primary);
      }
    }
  }

  .sk-button.sk-round {
    border-radius: var(--radius-base);
  }

  .sk-appbar-logo {
    flex: 1 1 auto;
    min-width: 30%;
  }

  @media (max-width: 768px) {
    .sk-appbar-logo {
      margin: 0;

      img {
        max-height: 5.5rem;
      }
    }
  }
}

/* #endregion APPBAR */
</style>
