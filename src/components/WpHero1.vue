<script setup lang="ts">
import Skbadge from 'rolex/skbadge.vue';
import { skActionItem } from 'rolex/skglobaltypes';
import Skicon from 'rolex/skicon.vue';
import Skpopup from 'rolex/skpopup.vue';
import Skrating from 'rolex/skRatings.vue';
import SkButton from 'rolex/skbutton.vue';
import { computed, reactive, ref } from 'vue';

interface IbusinessDetails {
    businessHours: Array<skActionItem>
}
const ReactiveData = reactive<IbusinessDetails>(
    {
        businessHours: [
            {
                itemKey: "Sunday",
                actionlabel: "Sunday: 10:00 AM - 02:00 PM"
            },
            {
                itemKey: "Monday",
                actionlabel: "Monday: 10:00 AM - 07:00 PM"
            },
            {
                itemKey: "Tuesday",
                actionlabel: "Tuesday: 10:00 AM - 07:00 PM"
            },
            {
                itemKey: "Wednesday",
                actionlabel: "Wednesday: 10:00 AM - 07:00 PM"
            },
            {
                itemKey: "Thursday",
                actionlabel: "Thursday: 10:00 AM - 07:00 PM"
            },
            {
                itemKey: "Friday",
                actionlabel: "Friday: 10:00 AM - 07:00 PM"
            },
            {
                itemKey: "Saturday",
                actionlabel: "Saturday: 10:00 AM - 05:00 PM"
            }
        ]
    });

// Get the current day
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = ref(daysOfWeek[new Date().getDay()]);

// Function to convert time string (e.g., "10:00 AM") to Date object
function parseTimeString(timeStr: string) {
  const [time, modifier] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  if (modifier === 'PM' && hours !== 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

// Find the corresponding business hour for the current day
const currentBusinessHour = computed(() => {
  const currentHour = ReactiveData.businessHours.find((hour) => hour.itemKey === currentDay.value);
  return currentHour ? currentHour.actionlabel : "Closed";
});

// Check if the business is open based on the current time
const isOpen = computed(() => {
  const currentHour = ReactiveData.businessHours.find((hour) => hour.itemKey === currentDay.value);
  if (!currentHour) return false;

  const [startTime, endTime] = currentHour.actionlabel ? currentHour.actionlabel.split(" - ") : "Saturday: 10:00 AM - 05:00 PM";
  const now = new Date();

  const start = parseTimeString(startTime);
  const end = parseTimeString(endTime);

  return now >= start && now <= end;
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
                            <div class="sk-flex-row sk-no-wrap sk-padding-bottom-large">

                                <div class="sk-ratings sk-medium notranslate">
                                    <div class="rating-group">
                                        <b>4.9</b>
                                        <Skrating rating="4.9" />
                                    </div>
                                    <a href="" title="View Reviews of Elder Care - Velachery" id="lnkviewriew">15
                                        Reviews</a>
                                </div>
                            </div>

                            <div class="contact-card">
                                <Skicon iconType="location_on" filled iconSize="small" />
                                <address>
                                    27/35 First floor, Shankar building, North Avenue, North
                                    avenue road, Velachery, Chennai - 600 026
                                </address>
                            </div>
                            <div class="contact-card">
                                <Skicon iconType="schedule" filled iconSize="small" />
                                <Skpopup hasCustomTriggerElement :popupActionItems="ReactiveData.businessHours">
                                    <template #trigger-content>
                                        <div>{{ currentBusinessHour }} <Skbadge round> <template #badgeinner>{{ isOpen ? 'Open' : 'Closed' }}</template></Skbadge></div>
                                        
                                    </template>
                                </Skpopup>
                            </div>
                            <div class="book-appointments">
                                <a title="Call Skyshark travels" href="tel:9899075951"
                                    class="sk-flex-row prophoneclick">
                                    <Skicon iconType="call" filled />
                                    9899075951
                                </a>
                            </div>
                            <div class="sk-button-group">
                                <SkButton icon="directions" filled   primary buttonText="Get Directions" />
                                <SkButton icon="share" filled   buttonText="Share" />
                            </div>
                        </div>
                    </div>
                    <div class="sk-col-6 sk-col-fluid">
                        <div class="hero-banner">
                            <figure class="">
                                <img width="1400" height="300"
                                    src="https://lscdn.azureedge.net/biz-live/img/template-10-banner.webp"
                                    alt="Skyshark travels" />
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
<style>
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

        .sk-icons {
            flex: 0 0 2rem;
            font-size: 1.8rem;
            padding-top: 0.4rem;
        }

        .book-appointments,
        .book-appointments .open-status {
            margin: 0;
            font-size: 1.6rem;
            font-weight: normal;
        }
    }

    .contact-card,
    .book-appointments {
        margin-bottom: var(--gutter-large);
    }

    .rating-group {
        display: flex;
        align-items: center;
        gap: 1rem;

        .sk-ratings {
            a {
                color: inherit;
                text-decoration: underline;
            }
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