<script setup lang="ts">
import Skbadge from "rolex/skbadge.vue";
import { skActionItem } from "rolex/skglobaltypes";
import Skicon from "rolex/skicon.vue";
import Skpopup from "rolex/skpopup.vue";
import Skrating from "rolex/skRatings.vue";
import SkButton from "rolex/skbutton.vue";
import { computed, reactive, ref } from "vue";
import { IbusinessDetails, businessDetailsProps } from "@/types/webProfileBuilderTypes";

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
  <section class="hero">
    <!-- #region Business Info -->
    <div class="business-info">
      <div class="sk-container">
        <div class="sk-row">
          <div class="sk-col-6 sk-col-fluid sk-flex align-center">
            <div class="hero-content">
              <h1 class="notranslate">Elder Care - Velachery</h1>
              <div
                v-if="showRating"
                class="sk-flex-row sk-no-wrap sk-padding-bottom-large"
              >
                <div class="sk-ratings sk-medium notranslate">
                  <div class="rating-group">
                    <b>4.9</b>
                    <Skrating rating="4.9" />
                  </div>
                  <a
                    href=""
                    title="View Reviews of Elder Care - Velachery"
                    id="lnkviewriew"
                    >15 Reviews</a
                  >
                </div>
              </div>

              <div class="contact-card">
                <Skicon iconType="location_on" filled />
                <address>
                  27/35 First floor, Shankar building, North Avenue, North
                  avenue road, Velachery, Chennai - 600 026
                </address>
              </div>
              <div class="contact-card">
                <Skicon iconType="schedule" filled />
                <Skpopup
                  hasCustomTriggerElement
                  :popupActionItems="ReactiveData.businessHours"
                >
                  <template #trigger-content>
                    <div>
                      {{ currentBusinessHour }}
                      <Skicon iconType="arrow_drop_down" />
                      <Skbadge round :success="isOpen === 'Open' ? true : false">
                        <template #badgeinner>{{
                          isOpen === "Open" ? "Open Now" : "Closed"
                        }}</template>
                      </Skbadge>
                    </div>
                  </template>
                </Skpopup>
              </div>
              <div class="book-appointments sk-flex-row">
                <Skicon iconType="call" filled />
                <template
                  v-for="(contactNumber, index) in ReactiveData.contactNumber"
                >
                  <a
                    title="Call Elder Care - Velachery"
                    :href="`tel:${contactNumber}`"
                    class="sk-flex-row prophoneclick"
                  >
                    {{ contactNumber }}
                  </a>
                  <span v-if="index < ReactiveData.contactNumber.length - 1"
                    >,
                  </span>
                </template>
              </div>
              <div class="sk-button-group">
                <SkButton
                  icon="directions"
                  filled
                  primary
                  buttonText="Get Directions"
                />
                <SkButton icon="share" filled buttonText="Share" />
              </div>
            </div>
          </div>
          <div class="sk-col-6 sk-col-fluid">
            <div class="hero-banner">
              <figure class="">
                <img
                  width="1400"
                  height="300"
                  src="https://lscdn.azureedge.net/biz-live/img/template-10-banner.webp"
                  alt="Skyshark travels"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion Business Info -->
  </section>
  <!-- #endregion Hero -->
</template>
<style scoped>
.template-preview section.hero .sk-container {
  padding-bottom: 0;
}

/* # Hero Banner :: BEGIN */
.hero {
  background: var(--template-gradient);

  .hero-banner {
    display: flex;
    align-items: flex-end;
    height: 100%;
    padding-top: var(--gutter-xlarge);
  }
}

/* # Hero Banner :: END */

/* #region business info :: BEGIN */

.business-info {
  .sk-container {
    position: relative;
    border-radius: var(--radius-large);
    padding: var(--gutter-xlarge);
    padding-bottom: 0;
  }

  .contact-card {
    display: flex;
    gap: var(--gutter-small);
    flex-flow: row nowrap;
    align-items: flex-start;

    .book-appointments,
    .book-appointments .open-status {
      font-size: 1.6rem;
      font-weight: normal;
    }

    .sk-badge {
      padding: var(--gutter-xsmall) var(--gutter-small);
      font-size: 1.2rem;
    }
  }

  .contact-card,
  .book-appointments {
    .sk-icons {
      flex: 0 0 2rem;
      font-size: 1.8rem;
      padding-top: 0.4rem;
    }
  }

  .book-appointments {
    a {
      color: inherit;
    }
  }

  .contact-card,
  .book-appointments {
    margin-bottom: var(--gutter-large);
  }

  .sk-ratings {
    .rating-group {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    a {
      color: inherit;
      text-decoration: underline;
    }
  }

  address {
    font-style: normal;
  }

  @media (max-width: 768px) {
    .sk-container {
      top: 0;
    }
  }
}

/* #endregion business info :: END */
</style>
