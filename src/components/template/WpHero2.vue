<script setup lang="ts">
import Skbadge from "rolex/skbadge.vue";
import { skActionItem } from "rolex/skglobaltypes";
import Skicon from "rolex/skicon.vue";
import Skpopup from "rolex/skpopup.vue";
import Skrating from "rolex/skRatings.vue";
import SkButton from "rolex/skbutton.vue";
import { computed, reactive, ref } from "vue";
import {
  businessDetailsProps,
  IbusinessDetails,
} from "@/types/webProfileBuilderTypes";

const props = defineProps(businessDetailsProps);
const ReactiveData = reactive<IbusinessDetails>({
  contactNumber: props.contactNumber,
  storeAddress: props.storeAddress,
  businessHours: props.businessHours,
});

// Get the current day
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = ref(daysOfWeek[new Date().getDay()]);

// Function to convert time string (e.g., "10:00 AM") to Date object
function parseTimeString(timeStr: string) {
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

// Find the corresponding business hour for the current day
const currentBusinessHour = computed(() => {
  const currentHour = ReactiveData.businessHours.find(
    (hour) => hour.itemKey === currentDay.value
  );
  return currentHour ? currentHour.actionlabel : "Closed";
});

// Check if the business is open based on the current time
const isOpen = computed(() => {
  const currentHour = ReactiveData.businessHours.find(
    (hour) => hour.itemKey === currentDay.value
  );

  // Return "Closed" if no business hours are found for the current day
  if (!currentHour || !currentHour.actionlabel) return "Closed";

  // Split actionlabel to get the start and end times
  const timeParts = currentHour.actionlabel.split(" - "); // Split by " - "

  // Ensure we capture the start and end times correctly
  if (timeParts.length !== 2) return "Closed"; // Return "Closed" if the format is unexpected

  // Extracting the start and end time correctly
  const startLabel = timeParts[0].split(": ")[1]; // Get the time after "Monday: "
  const endLabel = timeParts[1].trim(); // Get the end time, trim in case of extra spaces

  // Continue with parsing and checking if open
  const now = new Date();
  const start = parseTimeString(startLabel);
  const end = parseTimeString(endLabel);

  // Adjust end time if it crosses over midnight
  if (end < start) {
    end.setDate(end.getDate() + 1); // Increment end date if it crosses over to the next day
  }

  // Return the open/closed status based on the current time
  return now >= start && now <= end ? "Open" : "Closed";
});
</script>
<template>
  <!-- #region Hero -->
  <section class="hero sk-primary-bg">
    <!-- <img class="sk-mobile-hide" src="./images/hero-img-desktop.jpg" alt="" width="100%" height="100%">
            <img class="sk-web-hide" src="./images/hero-img-mobile.jpg" alt="" width="100%" height="100%"> -->
    <img
      src="https://lscdn.blob.core.windows.net/content/pro-manage/sme/Template/temp-13-hero-img-desktop.jpg"
      alt="Hero image"
      width="100%"
    />

    <div class="sk-container">
      <div class="hero-content">
        <h1>MAXX DENTAL CARE</h1>
        <address>
          1st Floor, No.1 Gopal Street, 100 Feet Taramani Link Road, Velachery
          Chennai - 600042
        </address>

        <div class="sk-ratings sk-medium sk-web-hide">
          <div class="rating-group">
            <b>5.0</b>
            <span class="sk-star sk-star5"> </span>
          </div>
          <a
            href="javascript:void(0)"
            title="View Reviews of BrightStart Edutech"
            id="lnkviewriew"
            >2 Reviews</a
          >
        </div>

        <div class="sk-flex-row sk-mobile-hide">
          <div class="sk-ratings sk-medium">
            <div class="rating-group">
              <b>5.0</b>
              <span class="sk-star sk-star5"> </span>
            </div>
            <a
              href="javascript:void(0)"
              title="View Reviews of BrightStart Edutech"
              id="lnkviewriew"
              >2 Reviews</a
            >
          </div>

          <a
            title="Call BrightStart Edutech"
            href="tel:7411003625"
            class="sk-flex-row prophoneclick"
          >
            <span class="sk-icons">
              call
            </span>
            7411003625
          </a>

          <a
            title="Get Direction of BrightStart Edutech"
            class="sk-flex-row  sk-clickable prodirecreq"
          >
            <span class="sk-icons">
              directions
            </span>
            Get Directions
          </a>

          <a
            title="Share Details of BrightStart Edutech"
            class="sk-flex-row  sk-clickable"
          >
            <span class="sk-icons">
              share
            </span>
            Share
          </a>
          <a title="" class="sk-flex-row  sk-clickable">
            <span class="sk-icons">
              public
            </span>
            Website
          </a>
        </div>

        <div class="sk-flex-row sk-web-hide">
          <a
            title="Call BrightStart Edutech"
            href="tel:7411003625"
            class="sk-flex-row prophoneclick"
          >
            <span class="sk-icons">
              <svg width="24" height="24">
                <use xlink:href="#skiconsCallOutline"></use>
              </svg>
            </span>
            Call
          </a>

          <a
            title="Get Direction of BrightStart Edutech"
            class="sk-flex-row sk-clickable"
          >
            <span class="sk-icons">
              <svg width="24" height="24">
                <use xlink:href="#skiconsdirection"></use>
              </svg>
            </span>
            Get Directions
          </a>

          <a
            title="Share Details of BrightStart Edutech"
            class="sk-flex-row sk-clickable"
          >
            <span class="sk-icons">
              <svg width="24" height="24">
                <use xlink:href="#skiconsshareFill"></use>
              </svg>
            </span>
            Share
          </a>

          <a title="" class="sk-flex-row sk-clickable">
            <span class="sk-icons">
              <svg width="24" height="24">
                <use xlink:href="#skiconsWebsite"></use>
              </svg>
            </span>
            Website
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- #endregion Hero -->
</template>
<style scoped>
/* hero css :: start */

.hero .sk-container {
  padding-top: var(--gutter-large);
}

.hero-content address {
  color: var(--color-on-primary);
  font-size: 1.4rem;
  font-weight: var(--font-weight-medium);
}

.hero-content .sk-flex-row > a:first-of-type {
  background-color: #030813;
  padding: 1.2rem var(--gutter-large);
  border-radius: var(--radius-pill);
  font-weight: var(--font-weight-bold);
}

.hero-content {
  max-width: 1065px;
  margin: auto;
}

.hero-content h1 {
  padding-bottom: 0;
  font-weight: 600;
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
}

.hero-content .sk-flex-row a {
  color: var(--color-on-primary);
  font-weight: var(--font-weight-medium);
}

.hero-content .sk-icons svg {
  fill: var(--color-white);
}

.hero-content > .sk-flex-row {
  padding-top: 2rem;
  gap: 3rem;
  justify-content: space-between;
}

.hero img {
  height: 44rem;
  width: 100%;
  object-fit: cover;
  border-bottom-left-radius: 10rem;
  border-bottom-right-radius: 10rem;
  object-position: top right;
}

.hero .sk-ratings b {
  font-size: 3rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .sk-appbar:not(.sk-large) {
    font-weight: normal;
  }

  .hero img {
    height: 35rem;
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
  }

  .hero-content {
    text-align: center;
  }

  .hero-content .sk-ratings {
    justify-content: center;
    padding-top: var(--gutter-large);
    padding-bottom: var(--gutter-large);
  }

  .hero-content > .sk-flex-row {
    justify-content: center;
  }

  .hero-content .sk-flex-row > a:first-of-type {
    background-color: transparent;
    padding: 0;
    font-weight: normal;
  }

  .hero-content > .sk-flex-row a {
    flex-direction: column;
    flex-grow: 1;
    font-size: 1.4rem;
  }

  .hero-content > .sk-flex-row a .sk-icons {
    border: 0.1rem solid var(--color-white);
    padding: 1.2rem;
    border-radius: var(--radius-pill);
  }

  .hero-content h1 {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 500px) {
  .hero img {
    height: 30rem;
  }

  .sk-appbar-logo img {
    max-width: 9rem;
  }
}

/* hero css :: end */
</style>
