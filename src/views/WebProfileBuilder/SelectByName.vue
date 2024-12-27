<script setup lang="ts">
import ThemeEditor from "@/components/ui/ThemeEditor.vue";

import { markRaw, onMounted, reactive, ref, vModelText, watch } from "vue";
import type { Component } from "vue";
import Skbutton from "rolex/skbutton.vue";
import Skemptystate from "rolex/skemptystate.vue";
// import Skcheckbox from "rolex/skcheckbox.vue";
import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals/attribution";
import Skchipset from "rolex/Skchipset.vue";
import SkCheckbox from "rolex/skcheckbox.vue";
import SkAlert from "rolex/skAlert.vue";
import {
  DraggableEvent,
  UseDraggableReturn,
  VueDraggable,
} from "vue-draggable-plus";
import Skdrawer from "rolex/skdrawer.vue";
import Skappbar from "rolex/skappbar.vue";
import Skswitch from "rolex/skswitch.vue";
import FileUpload from "@/components/ui/FileUpload.vue";
import { chipProps, MainNavBarType, skActionItem } from "rolex/skglobaltypes";
import Sktextfield from "rolex/sktextfield.vue";

//#region import Components
import WpQuickBarTop from "@/components/template/common/WpQuickBarTop.vue";
import WpHeaderBar from "@/components/template/common/WpHeaderBar.vue";
import WpIcons from "@/components/template/common/WpIcons.vue";
import WpAppbarTop1 from "@/components/template/common/WpAppbarTop1.vue";
import WpMenuDrawer from "@/components/template/common/WpMenuDrawer.vue";
import WpHero from "@/components/ui/WpHero.vue";
// import WpHero1 from "@/components/template/WpHero1.vue";
import WpFeaturedCTASection1 from "@/components/template/featured_cta/WpFeaturedCTASection1.vue";
import WpAbout1 from "@/components/template/about/WpAbout1.vue";
import WpFeedback1 from "@/components/template/feedback/WpFeedback1.vue";
import WpDoctorsList from "@/components/template/doctor_list/WpDoctorsList.vue";
import WpPhotos from "@/components/template/photos/WpPhotos.vue";
import VariableSectionSelection from "@/components/ui/VariableComponentSelection.vue";
import RestOfSetions from "@/components/template/RestOfRegions.vue";

//#endregion import Components

//#region WebVitals Optimization
const logWebVital = (name: string, value: number, extra: any) => {
  console.log(`${name}: ${value}`, extra);
};
const calculateWebVitals = () => {
  onLCP((metric) => logWebVital("LCP", metric.value, metric));
  onCLS((metric) => logWebVital("CLS", metric.value, metric.entries));
  onINP((metric) => logWebVital("INP", metric.value, metric.delta));
  onTTFB((metric) => logWebVital("TTFB", metric.value, {}));
  onFCP((metric) => logWebVital("FCP", metric.value, metric));
};
//#endregion

interface IcomponentItem {
  name: string;
  component: Component;
  label: string;
  isSelected: boolean;
  isMandatory?: boolean;
  order: number | undefined;
  description: string;
}

interface IwebProfileBuilder {
  showEmptyState: boolean;
  showEditor: boolean;
  availableComponents: Array<IcomponentItem>;
  componentsToAdd: Array<IcomponentItem>;
  inputList: Array<string>;
  appbarProps: {
    logoURL: string;
    appbarMenuItems: Array<chipProps>;
    newMenuName?: string;
    duplicateMenuError?: string;
  };
  heroSectionProps: {
    showRating?: boolean;
    contactNumber?: Array<string>;
    storeAddress?: string;
    businessHours?: Array<skActionItem>;
    selectedComponent: string;
  };
  featuredSectionProps: {
    sectionTitle: string;
    sectionDescription: string;
    buttonText: string;
  };
}

const reactiveData = reactive<IwebProfileBuilder>({
  showEmptyState: false,
  showEditor: false,
  availableComponents: [
    {
      name: "WpIcons",
      component: markRaw(WpIcons),
      label: "Load Icons",
      isSelected: true,
      isMandatory: true,
      order: 0,
      description:
        "A collection of SVG icons used across the application to enhance visual representation.",
    },
    {
      name: "WpQuickBarTop",
      component: markRaw(WpQuickBarTop),
      label: "Quick Bar Top",
      isSelected: true,
      order: 1,
      description:
        "Displays prominent quick action items like 'Book Appointment' and 'Contact Us' to drive user engagement and lead generation.",
    },
    {
      name: "WpHeaderBar",
      component: markRaw(WpHeaderBar),
      label: "Header",
      isSelected: true,
      order: 2,
      description:
        "A header section that prominently shows critical information such as branch location and store timings for easy access.",
    },
    {
      name: "WpAppbarTop1",
      component: markRaw(WpAppbarTop1),
      label: "Appbar Top 1",
      isSelected: true,
      order: 3,
      description:
        "The primary app bar that includes the business logo, menu items, and contact information for navigation and branding.",
    },
    {
      name: "WpMenuDrawer",
      component: markRaw(WpMenuDrawer),
      label: "Drawer",
      isSelected: false,
      isMandatory: true,
      order: 0,
      description:
        "A side navigation drawer that organizes all menu items for easy access and a clean UI.",
    },
    {
      name: "WpHero",
      component: markRaw(WpHero),
      label: "Hero",
      isSelected: true,
      order: 4,
      description:
        "A visually striking hero section used to highlight key information, promotions, or messages to engage users.",
    },
    // {
    //   name: "WpHero1",
    //   component: markRaw(WpHero1),
    //   label: "Hero 1",
    //   isSelected: true,
    //   order: 4,
    //   description:
    //     "A visually striking hero section used to highlight key information, promotions, or messages to engage users.",
    // },
    {
      name: "WpFeaturedCTASection1",
      component: markRaw(WpFeaturedCTASection1),
      label: "Featured CTA 1",
      isSelected: true,
      order: -1,
      description:
        "A call-to-action section designed to encourage user interaction, such as making inquiries or exploring services.",
    },
    {
      name: "WpAbout1",
      component: markRaw(WpAbout1),
      label: "About us 1",
      isSelected: true,
      order: -1,
      description:
        "An 'About Us' section to provide background information about the business, mission, and values.",
    },
    {
      name: "WpFeedback1",
      component: markRaw(WpFeedback1),
      label: "Feedback 1",
      isSelected: true,
      order: -1,
      description:
        "A feedback section that allows users to leave reviews, testimonials, or ratings to enhance credibility.",
    },
    {
      name: "WpDoctorsList",
      component: markRaw(WpDoctorsList),
      label: "Doctors List 1",
      isSelected: true,
      order: -1,
      description:
        "A section displaying a list of doctors, including their names, specializations, and credentials.",
    },
    {
      name: "WpPhotos",
      component: markRaw(WpPhotos),
      label: "Photo Gallery",
      isSelected: true,
      order: -1,
      description:
        "A photo gallery section showcasing images of the business, services, or events to visually engage users.",
    },
    {
      name: "RestOfSetions",
      component: markRaw(RestOfSetions),
      label: "Rest of the sections",
      isSelected: true,
      order: -1,
      description:
        "",
    },
  ],
  componentsToAdd: [],
  inputList: [],
  appbarProps: {
    logoURL: "",
    appbarMenuItems: [
      {
        key: "Home",
        chipMessage: "Home",
        selected: true,
      },
      {
        key: "Services",
        chipMessage: "Services",
        selected: true,
      },
      {
        key: "About Us",
        chipMessage: "About Us",
        selected: true,
      },
      {
        key: "Reviews",
        chipMessage: "Reviews",
        selected: true,
      },
      {
        key: "Photos",
        chipMessage: "Photos",
        selected: true,
      },
      {
        key: "Videos",
        chipMessage: "Videos",
        selected: true,
      },
    ],
  },
  heroSectionProps: {
    selectedComponent: "1",
    showRating: true,
    contactNumber: ["+1 (800) 555-1234"],
    storeAddress:
      "1234 Wellness Avenue, Suite 101, Bright Future Plaza, 5th Floor, City of Serenity, 67890 United States of Euphoria",
    businessHours: [
      {
        itemKey: "Sunday",
        actionlabel: "Sunday: 10:00 AM - 02:00 PM",
      },
      {
        itemKey: "Monday",
        actionlabel: "Monday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Tuesday",
        actionlabel: "Tuesday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Wednesday",
        actionlabel: "Wednesday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Thursday",
        actionlabel: "Thursday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Friday",
        actionlabel: "Friday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Saturday",
        actionlabel: "Saturday: 10:00 AM - 05:00 PM",
      },
    ],
  },
  featuredSectionProps: {
    sectionTitle: "Open for Appointments",
    sectionDescription:
      "We are delighted to announce that our doors are open, and we are now accepting appointments to serve to better",
    buttonText: "Book an Appointment",
  },
});

function sortComponents(
  components: Array<IcomponentItem>
): Array<IcomponentItem> {
  return components.sort((a: IcomponentItem, b: IcomponentItem) => {
    const orderA = a.order ?? Infinity; // Default to infinity for undefined order
    const orderB = b.order ?? Infinity;

    // Prioritize order 0 to the end
    if (orderA === 0) {
      return 1;
    } else if (orderB === 0) {
      return -1;
    }

    // Prioritize order -1 after positive orders
    if (orderA === -1 && orderB !== -1) {
      return 1;
    } else if (orderB === -1 && orderA !== -1) {
      return -1;
    }

    // Sort positive orders in ascending order (optional: handle NaN)
    return orderA - orderB || NaN; // Handle NaN for invalid orders
  });
}

// Function to update componentsToAdd based on availableComponents or a default array
const updateComponentsToAdd = (
  components: IcomponentItem | Array<IcomponentItem>
) => {
  if (Array.isArray(components)) {
    // Handle adding multiple components
    components.forEach((item) => {
      const existingIndex = reactiveData.componentsToAdd.findIndex(
        (existing) => existing.name === item.name
      );

      if (existingIndex === -1) {
        // Add the component if not already present
        reactiveData.componentsToAdd.push(item);
        item.isSelected = true;
      }
    });
  } else {
    // Handle toggling a single component's selection
    const index = reactiveData.availableComponents.findIndex(
      (comp) => comp.name === components.name
    );

    if (index !== -1) {
      const selected = reactiveData.availableComponents[index];
      selected.isSelected = !selected.isSelected;

      // Update componentsToAdd based on isSelected change
      const componentIndex = reactiveData.componentsToAdd.findIndex(
        (existing) => existing.name === selected.name
      );

      if (selected.isSelected) {
        // Add the component if not already present
        if (componentIndex === -1) {
          reactiveData.componentsToAdd.push(selected);
        }
      } else {
        // Remove the component if it's selected
        if (componentIndex !== -1) {
          reactiveData.componentsToAdd.splice(componentIndex, 1);
        }
      }
    }

    // Handle empty state logic based on selected components
    reactiveData.showEmptyState = reactiveData.componentsToAdd.length === 1;
  }

  // Sort the componentsToAdd array based on order
  reactiveData.componentsToAdd = sortComponents(reactiveData.componentsToAdd);
};

const toggleMenuDrawer = () => {
  const wpMenuDrawer = reactiveData.availableComponents.find(
    (component) => component.name === "WpMenuDrawer"
  );
  if (wpMenuDrawer) {
    updateComponentsToAdd(wpMenuDrawer);
    // Toggle the isSelected state and call updateComponentsToAdd method
    // wpMenuDrawer.isSelected = !wpMenuDrawer.isSelected;

    // Use updateComponentsToAdd method to handle the logic
  }
};
// Watch for changes in isSelected directly
watch(
  () => reactiveData.availableComponents.map((item) => item.isSelected),
  () =>
    updateComponentsToAdd(
      reactiveData.availableComponents.filter((item) => item.isSelected)
    ), // Corrected to pass array of selected components
  { deep: true, immediate: true }
);

//#region Draggable components using vue-draggable-plus https://vue-draggable-plus.pages.dev/
const draggableElementsContainer = ref<UseDraggableReturn>();
const disabled = ref(false);
function pause() {
  draggableElementsContainer.value?.pause();
}

function start() {
  draggableElementsContainer.value?.start();
}

const onStart = (e: DraggableEvent) => {
  console.log("start", e);
};

const onEnd = (e: DraggableEvent) => {
  console.log("onEnd", e);
};

const onUpdate = () => {
  console.log("update");
};

const toggleEditor = () => {
  reactiveData.showEditor = !reactiveData.showEditor;
};

onMounted(() => {
  // Select all the 'sk-expansion-inner' elements
  const toggleButtons = document.querySelectorAll(".sk-expansion-inner");

  // toggleButtons.forEach((button) => {
  //   // const header = button.querySelector(".sk-expansion-header");
  //   // if (header) {
  //   //   // Add click event listener to the header
  //   //   header.addEventListener("click", () => {
  //   //     // Toggle the 'sk-active' class on the clicked panel
  //   //     button.classList.toggle("sk-active");

  //   //     // Toggle the class on the corresponding component in `template-preview`
  //   //     const componentName = button.dataset.component;
  //   //     if (componentName) {
  //   //       const componentIndex = reactiveData.componentsToAdd.findIndex(
  //   //         (item) => item.name === componentName
  //   //       );
  //   //       if (componentIndex !== -1) {
  //   //         const componentEl = document.querySelector(
  //   //           `.template-preview > component[is=${componentName}]`
  //   //         );
  //   //         if (componentEl) {
  //   //           componentEl.classList.toggle("active-class");
  //   //         }
  //   //       }
  //   //     }

  //   //     // Remove 'sk-active' from all sibling elements
  //   //     const siblings = Array.from(button.parentNode!.children).filter(
  //   //       (sibling) => sibling !== button
  //   //     );
  //   //     siblings.forEach((sibling) => sibling.classList.remove("sk-active"));
  //   //   });
  //   // }
  // });
});

// Function to handle the button click logic
const toggleEditingSpecificComponent = (
  event: Event,
  componentName: string
) => {
  // Update the class on corresponding element in the template
  const componentEl = document.getElementById(`${componentName}`);
  document.querySelectorAll(".currently-editing").forEach((elem) => {
    elem.classList.remove("currently-editing");
  });
  if (componentEl) {
    componentEl.classList.toggle("currently-editing");
  }

  // Remove the 'sk-active' class from all sibling elements
  const parentElement = (event.currentTarget as HTMLElement).closest(
    ".sk-expansion-inner"
  );
  const siblings = Array.from(
    parentElement?.parentElement?.children || []
  ).filter((sibling) => sibling !== parentElement);
  parentElement?.classList.add("sk-active");
  siblings.forEach((sibling) => sibling.classList.remove("sk-active"));
};

//#region Appbar actions
// Function to remove a menu item
function removeMenuItem(chip: chipProps) {
  // Find the index of the chip in appbarMenuItems array
  const index = reactiveData.appbarProps.appbarMenuItems.findIndex(
    (item) => item.key === chip.key
  );

  if (index >= 0) {
    // Remove the chip from the array
    // reactiveData.appbarProps.appbarMenuItems.splice(index, 1);
    reactiveData.appbarProps.appbarMenuItems[index].selected ? false : true;
  }
} // Function to add a new menu item
function addMenuItem() {
  var isMenuExist = reactiveData.appbarProps.appbarMenuItems.filter(
    (x) => x.key == reactiveData.appbarProps.newMenuName
  );

  if (isMenuExist.length) {
    reactiveData.appbarProps.duplicateMenuError = "Already added this menu!";
    return;
  } else reactiveData.appbarProps.duplicateMenuError = "";

  if (reactiveData.appbarProps.newMenuName) {
    reactiveData.appbarProps.appbarMenuItems.push({
      key: reactiveData.appbarProps.newMenuName,
      chipMessage: reactiveData.appbarProps.newMenuName,
      removable: true,
    } as chipProps);

    reactiveData.appbarProps.newMenuName = "";
  }
}

// Function to handle logo upload (to be passed to FileUpload component)
function handleLogoUpload(url: string) {
  reactiveData.appbarProps.logoURL = url; // Store the uploaded logo URL in the reactiveData object
  console.log((reactiveData.appbarProps.logoURL = url));
}
//#endregion Appbar actions

const getFileUploadContent = (sectionName: string) => {
  switch (sectionName) {
    case "WpAppbarTop1":
      return {
        label: "Logo",
        alertContent:
          "Please upload your brand logo (250x50 pixels, webp, JPG or PNG format, max 1MB).",
      };
    case "WpHero1":
      return {
        label: "Hero Banner",
        alertContent:
          "Please upload a transparent banner image (650x530 pixels, webp, JPG or PNG format, max 1MB).",
      };
    default:
      return {
        label: "Image",
        alertContent:
          "Please upload a transparent banner image (650x530 pixels, webp, JPG or PNG format, max 1MB).",
      };
  }
};

const handleComponentSwap = (selectedComponent: string) => {
  console.log(selectedComponent);
  reactiveData.heroSectionProps.selectedComponent = selectedComponent;
};
</script>

<template>
  <div class="base-layout">
    <!-- <aside class="key sk-sticky sk-sticky-2">
      <h3 class="sk-padding sk-h6">Components</h3>
      <nav>
        <ul>
          <template
            v-for="item in reactiveData.availableComponents"
            :key="item.name"
          >
            <li v-if="!item.isMandatory" @click="updateComponentsToAdd(item)">
              <Skcheckbox
                :chkid="`chkid_${item.name}`"
                :labelName="item.label"
                :isCheckbox="true"
                :isChecked="item.isSelected"
                @change="updateComponentsToAdd(item)"
                @click.stop
              />
            </li>
          </template>
        </ul>
      </nav>
    </aside> -->
    <main class="window">
      <div class="template-preview">
        <VueDraggable
          ref="draggableElementsContainer"
          v-model="reactiveData.componentsToAdd"
          class="draggable-components"
        >
          <template
            v-for="componentItem in reactiveData.componentsToAdd"
            :key="componentItem.name"
          >
            <div :id="componentItem.name">
              <component
                :is="componentItem.component"
                v-if="componentItem.component === WpAppbarTop1"
                :menuItems="
                  reactiveData.appbarProps.appbarMenuItems
                    .filter((chip) => chip.selected)
                    .map((chip) => ({
                      menuName: chip.chipMessage,
                      icon: chip.icon,
                      isActive: false,
                      targetContentID: chip.chipId || '',
                      image: chip.imgUrl || '',
                      isDisabled: chip.disabled || false,
                      hide: !chip.selected || false,
                      subMenuItems: [], // Assuming there are no sub-menu items in this context
                    }))
                "
                @onHamburgerClick="toggleMenuDrawer"
                @closeDrawer="toggleMenuDrawer"
              />
              <WpHero
                :showRating="reactiveData.heroSectionProps.showRating"
                :contactNumber="reactiveData.heroSectionProps.contactNumber"
                :storeAddress="reactiveData.heroSectionProps.storeAddress"
                :businessHours="reactiveData.heroSectionProps.businessHours"
                v-else-if="componentItem.component === WpHero"
                :selectedComponent="
                  parseInt(reactiveData.heroSectionProps.selectedComponent)
                "
              />
              <!-- <component
                :is="componentItem.component"
                v-else-if="componentItem.component === WpHero"
                :selectedComponent="parseInt(reactiveData.heroSectionProps.selectedComponent)"
              /> -->

              <component
                :sectionTitle="reactiveData.featuredSectionProps.sectionTitle"
                :sectionDescription="reactiveData.featuredSectionProps.sectionDescription"
                :buttonText="reactiveData.featuredSectionProps.buttonText"
                v-else-if="componentItem.component === WpFeaturedCTASection1"
                :is="componentItem.component"
              />
              <component v-else :is="componentItem.component" />
            </div>
          </template>
        </VueDraggable>
        <!-- <div class="sk-hide">
          <component
            :is="component"
            v-for="(component, index) in reactiveData.componentsToAdd"
            :key="index"
            @onHamburgerClick="toggleMenuDrawer"
            @closeDrawer="toggleMenuDrawer"
          />
        </div> -->
      </div>
      <Skemptystate
        :showEmptyState="reactiveData.showEmptyState"
        content="Click on the components on the left to add one by one."
        contentTitle="Select a component to start"
        emptyStateImage="https://lscdn.blob.core.windows.net/content/pro-manage/sme/web-profile-images/web-designing-empty-state.svg"
      />
    </main>
  </div>
  
  <Skdrawer
    :showDrawer="reactiveData.showEditor"
    right
    drawerstyle="noBG"
    class="template-editor"
    @closePanel="toggleEditor"
  >
    <template #skdrawerheader>
      <Skappbar
        appBarLeftIconStyle=""
        appBarTitle=""
        @navigationIconClick="toggleEditor"
      >
        <template #ableft>
          <Skbutton icon="close" round noShadow @click="toggleEditor" />
          <h6 class="sk-padding-large sk-padding-y sk-margin-bottom-0">
            Template Editor
          </h6>
        </template>
      </Skappbar>
    </template>
    <template #skdrawerbody>
    <ThemeEditor />
      <div class="sk-expansion-panels">
        <template
          v-for="item in reactiveData.availableComponents"
          :key="item.name"
        >
          <div class="sk-expansion-inner" v-if="!item.isMandatory" @click="">
            <div class="sk-expansion-header">
              <button
                class="sk-expansion-action"
                @click="toggleEditingSpecificComponent($event, item.name)"
              >
                <span> {{ item.label }} </span>
                <span class="sk-icons">expand_circle_down</span>
              </button>
            </div>

            <div class="sk-expansion-content" v-if="!item.isMandatory">
              <Skswitch
                isWide
                :isChecked="item.isSelected"
                @change="updateComponentsToAdd(item)"
                @click.stop
                leadingText="Enable Section"
              />
              <p class="sk-text-muted">
                {{ item.description }}
              </p>
              <div
                class="editor-group"
                v-if="item.name == 'WpAppbarTop1' || item.name == 'WpHero'"
              >
                <div>
                  <FileUpload
                    :label="getFileUploadContent(item.name).label"
                    :alertContent="getFileUploadContent(item.name).alertContent"
                    @fileSelected="handleLogoUpload"
                  />
                </div>
              </div>
              <div
                class="editor-group"
                v-if="
                  item.name == 'WpAppbarTop1' &&
                  reactiveData.appbarProps.appbarMenuItems
                "
              >
                <div class="sk-h6 sk-margin-bottom">Menu Items</div>
                <Skchipset
                  :chips="reactiveData.appbarProps.appbarMenuItems"
                  :disableSelect="false"
                  @onChipClick="removeMenuItem"
                />
              </div>
              <div v-if="item.name == 'WpHero'">
                <VariableSectionSelection
                  @selectedComponent="handleComponentSwap"
                />
                <div class="editor-group">
                  <SkCheckbox
                    isCheckbox
                    :isChecked="reactiveData.heroSectionProps.showRating"
                    chkid="item1"
                    checkboxName="group1"
                    labelName="Show Ratings"
                    @change="
                      reactiveData.heroSectionProps.showRating =
                        !reactiveData.heroSectionProps.showRating
                    "
                  />
                </div>
                <div class="sk-margin-top editor-group">
                  <Sktextfield
                    v-for="number in reactiveData.heroSectionProps
                      .contactNumber"
                    :placeholder="'Contact Number'"
                    :modelValue="number"
                    isDisabled
                    class="sk-trailing-icon"
                    actionIcon="edit"
                    small
                  />
                  <Skbutton
                    icon="add"
                    buttonText="Add additional number"
                    linkText
                  />
                </div>
              </div>
              <div v-if="item.name == 'WpFeaturedCTASection1'">
                <Sktextfield
                    label="Section Title"
                    v-model="reactiveData.featuredSectionProps.sectionTitle"
                    small
                    class="sk-margin-bottom"
                  />
                <Sktextfield
                    label="Description"
                    v-model="reactiveData.featuredSectionProps.sectionDescription"
                    small
                    class="sk-margin-bottom"
                  />
                <Sktextfield
                    label="Button Text"
                    v-model:model-value="reactiveData.featuredSectionProps.buttonText"
                    small
                    class="sk-margin-bottom"
                  />
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </Skdrawer>
  <Skbutton
    class="btn-pulse"
    fab
    buttonText="Edit Template"
    pill
    icon="widgets"
    @click="toggleEditor"
  />
</template>

<style>
.base-layout {
  display: flex;
  font-family: "sf-pro-text", sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .sk-h1,
  .sk-h2,
  .sk-h3,
  .sk-h4,
  .sk-h5,
  .sk-h6 {
    font-family: "sf-pro-text", sans-serif;
    font-weight: var(--font-weight-medium, 500);
  }
}

.key {
  flex: 0 0 20rem;
  border-right: 0.1rem solid var(--color-border);
  height: 100vh;
  overflow: overlay;
  position: sticky;
  top: 0;

  nav {
    display: flex;
    flex-flow: column;
    gap: var(--gutter-base);

    li {
      gap: 0.5rem;
      align-items: center;
      display: flex;
      padding: var(--gutter-small) var(--gutter-base);
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: rgb(var(--color-rgb-primary) / 10%);
      }
    }
  }
}

.window {
  flex: 1 1 auto;
}
.draggable-components > * {
  cursor: move;
  &:hover {
    border: 0.1rem dashed #2ebb32;
  }
}
.template-editor .sk-drawer-inner {
  box-shadow: 0 0 6rem 0px rgba(var(--color-rgb-black) / 20%);
}
.sk-expansion-inner {
  transition: all 0.5s ease-in-out;
}
.sk-expansion-inner.sk-active {
  background: rgb(var(--color-rgb-black) / 3%);
}
.sk-expansion-inner .sk-expansion-header {
  cursor: default;
}
.sk-expansion-inner .sk-expansion-action {
  background: transparent;
}
.sk-expansion-inner.sk-active .sk-expansion-header .sk-icons {
  transform: rotate(180deg);
}
.sk-switch label {
  justify-content: space-between;
}
.sk-switch input[type="checkbox"] + .lever {
  margin: 0;
}

.btn-pulse {
  animation: shadow-pulse 1.5s infinite;
  background: linear-gradient(90deg, #ff007f, #9b00ff);
  color: var(--color-white);
  font-weight: bold;
}

.editor-group {
  border-top: 0.1rem solid var(--color-border);
  padding-top: var(--gutter-base);
}

@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 112, 244, 0.7);
  }
  100% {
    box-shadow: 0 0 7px 25px rgba(0, 112, 244, 0);
  }
}
.sk-text-field.sk-trailing-icon input:disabled ~ .sk-button .sk-icons {
  /* color: currentColor;
  cursor: not-allowed; */
}
</style>
