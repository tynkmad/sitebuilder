<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Import custom components
import SkAppbar from 'rolex/skappbar.vue';
import SkMenuBar from 'rolex/skMenuBar.vue';
import SkDrawer from 'rolex/skdrawer.vue';
import { ExtendedMainNavBarType } from './types/webProfileCreatorTypes';

// Define an interface for the reactive data structure
interface IReactiveData {
  showMenuDrawer?: boolean;
  menuItems: Array<ExtendedMainNavBarType>
}

// Create a reactive object for the menu drawer state
const ReactiveData = reactive<IReactiveData>({
  showMenuDrawer: false,
  menuItems: [
    {
      menuName: "Website Builder",
      isActive: false,
      targetContentID: "WebProfileBuilder",
    },
    {
      menuName: "Pricing",
      isActive: false,
      targetContentID: "Pricing",
    },
    {
      menuName: "Customers",
      isActive: false,
      targetContentID: "Customers",
    },
    {
      menuName: "Templates",
      isActive: false,
      targetContentID: "Templates",
    },
    {
      menuName: "Integrations",
      isActive: false,
      targetContentID: "Integrations",
    },
    {
      menuName: "Resources",
      isActive: false,
      targetContentID: "Resources",
      externalLink: 'https://blog.promanage.biz' // Additional property
    },
  ]
});

const router = useRouter(); // Initialize the router instance
const route = useRoute(); // Initialize the route instance

// Function to toggle the visibility of the menu drawer
const toggleMenuDrawer = () => {
  ReactiveData.showMenuDrawer = !ReactiveData.showMenuDrawer;
};

const setActiveMenu = () => {
  const currentPath = route.path; // Get the current path
  ReactiveData.menuItems = ReactiveData.menuItems.map(menu => {
    const isActive = menu.targetContentID && currentPath.includes(menu.targetContentID.replace(/\s+/g, '-').toLowerCase());
    return { ...menu, isActive }; // Ensure reactivity by returning a new object
  });
};

// Set active menu on page load
onMounted(() => {
  setActiveMenu();
});

// Watch for route changes and update the active menu
watch(() => route.path, () => {
  setActiveMenu();
});

// Function to navigate to a different route or open an external link based on the selected menu item
const navTo = (targetContentID: string) => {
  const routeMap: Record<string, string> = {
    "WebProfileBuilder": '/webprofilebuilder',
    "Pricing": '/pricing',
    "Customers": '/customers',
    "Templates": '/templates',
    "Integrations": '/integrations',
  };

  // Determine if the target is an external link or a route
  const route = routeMap[targetContentID];
  if (targetContentID === "Resources") {
    window.open(ReactiveData.menuItems.find(menu => menu.targetContentID === "Resources")?.externalLink, '_blank');
  } else if (route) {
    router.push(route);
  } else {
    router.push('/'); // Navigate to home as a fallback
  }
  if (ReactiveData.showMenuDrawer)
    ReactiveData.showMenuDrawer = !ReactiveData.showMenuDrawer // Hide Menu on mobile upon redirection
};
</script>

<template>
  <!-- AppBar with a toggle button for the menu drawer -->
  <SkAppbar appBarBoxShadow appBarTitle="" appBarLeftIconStyle="menu" @navigationIconClick="toggleMenuDrawer">
    <template #ableft>
      <div class="sk-appbar-logo">
        <a href="/">
          <img src="https://lscdn.blob.core.windows.net/content/promanage/logo-color-230x60.png" height="40" width="150"
            alt="ProManage" />
        </a>
      </div>
    </template>
    <template #abright>
      <SkMenuBar useSmallMenu :MenuItems="ReactiveData.menuItems" @navBarNavigation="navTo" class="sk-mobile-hide" />
    </template>
  </SkAppbar>

  <!-- Main content area -->
  <RouterView />

  <!-- Drawer that opens from the side when menu is toggled -->
  <SkDrawer :showDrawer="ReactiveData.showMenuDrawer">
    <template #skdrawerheader>
      <SkAppbar appBarBoxShadow appBarTitle="Menu" appBarLeftIconStyle="arrow_back"
        @navigationIconClick="toggleMenuDrawer" />
    </template>
    <template #skdrawerbody>
      <SkMenuBar :MenuItems="ReactiveData.menuItems" @navBarNavigation="navTo" class="sk-vertical" />
    </template>
  </SkDrawer>
</template>

<style>
/* Add any styles here if necessary */
</style>