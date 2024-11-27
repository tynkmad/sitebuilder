<script setup lang="ts">
import router from "@/router";
import Skappbar from "rolex/skappbar.vue";
import Skbutton from "rolex/skbutton.vue";
import { skActionItem } from "rolex/skglobaltypes";
import SkPanel from "rolex/skpanel.vue";
import { reactive } from "vue";

interface IWebProfileBuilderHome {
  showBasicInfoForm: boolean;
}
const reactiveData = reactive<IWebProfileBuilderHome>({
  showBasicInfoForm: false,
});

const basicInfoFormAppbarActionItems: Array<skActionItem> = [
  {
    itemKey: "1",
    actionIcon: "close",
  },
];
const navigateToTemplateList = (action?: string) => {
  switch (action) {
    case "view":
      router.push("/templates");
      break;

    default:
      toggleBasicInfoForm();
      break;
  }
};
const toggleBasicInfoForm = () => {
  reactiveData.showBasicInfoForm = !reactiveData.showBasicInfoForm;
};
</script>

<template>
  <main class="landing-page">
    <!-- Hero Section -->
    <section class="landing-hero">
      <div class="sk-container sk-padding-y-large">
        <div class="sk-row">
          <div class="sk-col-7 sk-col-fluid">
            <div class="slider-inner">
              <div class="slider-content">
                <h1>Improved Online Visibility for Your Business</h1>
              </div>

              <div class="sk-padding-top-large sk-margin-top sk-mobile-hide">
                <h6 class="no-problem">Don’t have a website? No problem</h6>
                <p>
                  Launch your online presence effortlessly with our intuitive
                  platform. From creating a stunning website to optimizing it
                  for search engines, we provide everything you need to attract
                  and engage customers.
                </p>
                <div class="sk-button-group">
                  <Skbutton
                    buttonText="Create Now"
                    xlarge
                    @click="navigateToTemplateList()"
                  />
                  <Skbutton
                    buttonText="View Templates"
                    lightOutline
                    xlarge
                    @click="navigateToTemplateList('view')"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="sk-col-5 sk-col-fluid">
            <div class="presence-img">
              <img
                src="https://lscdn.blob.core.windows.net/content/promanage/images/reports.png"
                alt=""
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <SkPanel :showPanel="reactiveData.showBasicInfoForm">
      <template #skpanelheader>
        <Skappbar
          appBarLeftIconStyle="back"
          appBarTitle="Select Business Type"
          :appBarActionItems="basicInfoFormAppbarActionItems"
          @actionItemClick="toggleBasicInfoForm"
          @navigationIconClick="toggleBasicInfoForm"
        />
      </template>
      <template #skpanelbody>
        
      </template>
    </SkPanel>
  </main>
</template>
<style scoped>
.landing-hero {
  background: linear-gradient(210deg, #07143c, #002697);
  color: var(--color-white);
}
</style>
