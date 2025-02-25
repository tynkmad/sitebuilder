<script setup lang="ts">
import SkCarousel from "rolex/skCarousel.vue";
import SkCarouselItem from "rolex/skCarouselItem.vue";
import Skicon from "rolex/skicon.vue";
import { nextTick, onMounted, reactive, ref, watch } from "vue";
import { useCarousel } from "@/composables/useCarousel";

const { moveCarousel, getCarouselState, initObservers } = useCarousel();

const doctorListState = getCarouselState("#doctorList");
// const doctorList1State = getCarouselState("#doctorList1");

interface IprofileAvailabilitySlots {
  SelectedDays: Array<string>;
  SelectedTimeSlots: Array<string>;
}
interface IDoctorProfile {
  ProfileId: number;
  ProfileName: string;
  ProfileImageUrl: string;
  SpecialistInList: Array<string>;
  OverallExperience: number;
  AboutProfile: string;
  LanguageKnownList: Array<string>;
  ProfileAvailabilitySlots: Array<IprofileAvailabilitySlots>;
  ConsultationFees: number;
  IsProfileAvailable: boolean;
}
interface IDoctorList {
  profiles: Array<IDoctorProfile>;
}

const ReactiveData = reactive<IDoctorList>({
  profiles: [
    {
      ProfileId: 1,
      ProfileName: "Dr. John Doe",
      ProfileImageUrl:
        "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
      SpecialistInList: ["Cardiologist", "General Physician"],
      OverallExperience: 10,
      AboutProfile:
        "Dr. John Doe has over a decade of experience in treating heart conditions.",
      LanguageKnownList: ["English", "Spanish"],
      ProfileAvailabilitySlots: [
        {
          SelectedDays: ["Monday", "Wednesday", "Friday"],
          SelectedTimeSlots: ["9:00 AM to 12:00 PM"],
        },
      ],
      ConsultationFees: 500,
      IsProfileAvailable: true,
    },
    {
      ProfileId: 2,
      ProfileName: "Dr. Jane Smith",
      ProfileImageUrl:
        "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
      SpecialistInList: ["Dermatologist"],
      OverallExperience: 8,
      AboutProfile:
        "Dr. Jane Smith is a specialist in skin care and dermatological treatments.",
      LanguageKnownList: ["English", "French"],
      ProfileAvailabilitySlots: [
        {
          SelectedDays: ["Tuesday", "Thursday"],
          SelectedTimeSlots: ["10:00 AM to 1:00 PM"],
        },
      ],
      ConsultationFees: 750,
      IsProfileAvailable: true,
    },
    {
      ProfileId: 3,
      ProfileName: "Dr. Emily Clarke",
      ProfileImageUrl:
        "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
      SpecialistInList: ["Pediatrician"],
      OverallExperience: 7,
      AboutProfile:
        "Dr. Emily Clarke specializes in pediatric care, providing compassionate treatment for children.",
      LanguageKnownList: ["English", "German"],
      ProfileAvailabilitySlots: [
        {
          SelectedDays: ["Monday", "Thursday"],
          SelectedTimeSlots: ["11:00 AM to 3:00 PM"],
        },
      ],
      ConsultationFees: 600,
      IsProfileAvailable: true,
    },
    {
      ProfileId: 4,
      ProfileName: "Dr. Raj Patel",
      ProfileImageUrl:
        "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
      SpecialistInList: ["Orthopedic Surgeon"],
      OverallExperience: 12,
      AboutProfile:
        "Dr. Raj Patel has extensive experience in treating joint and muscle conditions.",
      LanguageKnownList: ["English", "Hindi"],
      ProfileAvailabilitySlots: [
        {
          SelectedDays: ["Wednesday", "Saturday"],
          SelectedTimeSlots: ["2:00 PM to 5:00 PM"],
        },
      ],
      ConsultationFees: 850,
      IsProfileAvailable: true,
    },
    {
      ProfileId: 5,
      ProfileName: "Dr. Amina Khan",
      ProfileImageUrl:
        "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
      SpecialistInList: ["Psychiatrist"],
      OverallExperience: 9,
      AboutProfile:
        "Dr. Amina Khan provides support for mental health and emotional well-being.",
      LanguageKnownList: ["English", "Arabic"],
      ProfileAvailabilitySlots: [
        {
          SelectedDays: ["Tuesday", "Friday"],
          SelectedTimeSlots: ["1:00 PM to 4:00 PM"],
        },
      ],
      ConsultationFees: 700,
      IsProfileAvailable: true,
    },
    {
      ProfileId: 6,
      ProfileName: "Dr. Mark Taylor",
      ProfileImageUrl:
        "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
      SpecialistInList: ["Neurologist"],
      OverallExperience: 15,
      AboutProfile:
        "Dr. Mark Taylor is an expert in neurology, treating various neurological disorders.",
      LanguageKnownList: ["English"],
      ProfileAvailabilitySlots: [
        {
          SelectedDays: ["Monday", "Wednesday"],
          SelectedTimeSlots: ["9:00 AM to 12:00 PM"],
        },
      ],
      ConsultationFees: 1000,
      IsProfileAvailable: true,
    },
  ],
});

const getImageUrl = (url: string) =>
  url || "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png";
const formatTimeSlots = (timeSlots: string[]) =>
  timeSlots[0].replace("to", "-");

const goToDoctorProfile = (profileId: number) => {
  location.href = `/appointment/doctor-profile/${profileId}`;
};

const bookAppointment = (profileId: number, fees: number, title: string) => {
  console.log(`Booking appointment for profile ${profileId} with fees ${fees}`);
};

const selectedTime = ref<string>("");
const selectedIndex = ref<string | null>(null);

const selectDay = (index: number, dayIndex: number, time: string) => {
  selectedIndex.value = `${index}-${dayIndex}`;
  selectedTime.value = time;
};

onMounted(() => {
  initObservers("#doctorList");
  // initObservers("#doctorList1");
});
</script>
<template>
  <!-- Doctor Profiles Section -->
  <section class="our-doctors" id="dvaMenuProfiles">
    <div class="sk-container">
      <h2>
        The Medical
        {{
          ReactiveData.profiles.length > 1 ? "Practitioners" : "Practitioner"
        }}
        Who Care for You
      </h2>

      <!-- Single Doctor Section -->
      <div v-if="ReactiveData.profiles.length === 1">
        <div
          class="sk-row individual-doctor"
          v-for="(item, index) in ReactiveData.profiles"
          :key="index"
        >
          <div class="sk-col-3 sk-col-fluid">
            <div
              class="doctor sk-clickable"
              @click="goToDoctorProfile(item.ProfileId)"
            >
              <img
                :src="getImageUrl(item.ProfileImageUrl)"
                :alt="item.ProfileName"
                width="250"
                height="250"
                loading="lazy"
              />
              <div class="details sk-flex sk-flex-column">
                <div class="name sk-h6">{{ item.ProfileName }}</div>
                <div
                  v-if="item.SpecialistInList && item.SpecialistInList.length"
                  class="designation sk-secondary"
                >
                  {{ item.SpecialistInList.join(", ").replace(/,/g, ", ") }}
                </div>
                <div class="experience sk-bold">
                  {{ item.OverallExperience }} Years Experience Overall
                </div>
              </div>
            </div>
          </div>

          <div class="sk-col-9 sk-col-fluid">
            <div class="more-details sk-flex sk-flex-column">
              <div class="about-doctor" v-if="item.AboutProfile">
                <div class="sk-bold sk-margin-bottom-small">
                  About {{ item.ProfileName }}
                </div>
                <div class="sk-line-clamp sk-line-3 about-doctor">
                  {{ item.AboutProfile }}
                </div>
                <a
                  v-if="item.AboutProfile.length > 250"
                  :title="`Read More about ${item.ProfileName}`"
                  class="sk-link sk-underline sk-clickable"
                  :href="`/appointment/doctor-profile/${item.ProfileId}`"
                  >Read more</a
                >
              </div>

              <div
                v-if="item.LanguageKnownList && item.LanguageKnownList.length"
                class="languages-known"
              >
                <div class="sk-bold sk-margin-bottom-small">
                  Languages Known:
                </div>
                <div>{{ item.LanguageKnownList.join(", ") }}</div>
              </div>

              <div
                v-if="
                  item.ProfileAvailabilitySlots &&
                  item.ProfileAvailabilitySlots.length
                "
                class="working-hours"
              >
                <div class="sk-bold sk-margin-bottom-small">Working Hours:</div>
                <div id="working-hours-display sk-margin-bottom">
                  {{ selectedTime || "Select a day to see the working hours" }}
                </div>
                <ul id="day-list" class="day-list sk-margin-y">
                  <template
                    v-for="(
                      availability, index
                    ) in item.ProfileAvailabilitySlots"
                    :key="index"
                  >
                    <li
                      v-for="(day, dayIndex) in availability.SelectedDays"
                      :class="{
                        'sk-selected': selectedIndex === `${index}-${dayIndex}`,
                      }"
                      @click="
                        selectDay(
                          index,
                          dayIndex,
                          formatTimeSlots(availability.SelectedTimeSlots)
                        )
                      "
                    >
                      {{ day }}
                    </li>
                  </template>
                </ul>
                <button
                  class="sk-button sk-secondary sk-large"
                  @click="
                    bookAppointment(
                      item.ProfileId,
                      item.ConsultationFees,
                      'Book an Appointment'
                    )
                  "
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Multiple Doctors Section -->
      <SkCarousel
        id="doctorList"
        :enableNavButton="true"
        customPreviousIcon="chevron_left"
        customNextIcon="chevron_right"
        @movePrevious="() => moveCarousel('#doctorList', 'prev')"
        @moveNext="() => moveCarousel('#doctorList', 'next')"
        :hidePreviousButton="doctorListState.hidePreviousBtn.value"
        :hideNextButton="doctorListState.hideNextBtn.value"
        class="doctor-list"
        v-if="ReactiveData.profiles.length && ReactiveData.profiles.length > 1"
      >
        <SkCarouselItem
          class="doctor sk-clickable"
          v-for="(item, index) in ReactiveData.profiles"
          @click="goToDoctorProfile(item.ProfileId)"
          :key="index"
        >
          <div>
            <img
              :src="getImageUrl(item.ProfileImageUrl)"
              :alt="item.ProfileName"
              width="250"
              height="250"
            />
            <div class="details sk-flex sk-flex-column">
              <div class="name sk-h6">{{ item.ProfileName }}</div>
              <div
                v-if="item.SpecialistInList && item.SpecialistInList.length"
                class="designation sk-secondary"
              >
                {{ item.SpecialistInList.join(", ").replace(/,/g, ", ") }}
              </div>
              <div class="experience sk-bold">
                {{ item.OverallExperience }} Years Experience Overall
              </div>
              <div class="sk-divider sk-margin-y-0"></div>
              
              <div class="more-details sk-text-start sk-flex sk-flex-column">
                <div class="sk-bold">
                  About {{ item.ProfileName }}
                </div>
                <div
                  v-if="item.AboutProfile"
                  class="sk-line-clamp sk-line-2 sk-text-start about-doctor sk-text-muted"
                >
                  {{ item.AboutProfile }}
                  <a
                    v-if="item.AboutProfile.length > 60"
                    :title="`Read More about ${item.ProfileName}`"
                    class="sk-link sk-clickable"
                    :href="`/appointment/doctor-profile/${item.ProfileId}`"
                    >Read more</a
                  >
                </div>
                <div
                v-if="item.LanguageKnownList && item.LanguageKnownList.length"
                class="language-known sk-text-start"
              >
                <div>Language Known:</div>
                <div>{{ item.LanguageKnownList.join(", ") }}</div>
              </div>
                <!-- <div
                v-if="
                  item.ProfileAvailabilitySlots &&
                  item.ProfileAvailabilitySlots.length
                "
                class="working-hours sk-margin-top"
              >
                <div class="sk-h6">Working Hours:</div>
                <p id="working-hours-display">
                  {{ selectedTime || "Select a day to see the working hours" }}
                </p>
                <ul id="day-list" class="day-list">
                  <template
                    v-for="(
                      availability, index
                    ) in item.ProfileAvailabilitySlots"
                    :key="index"
                  >
                    <li
                      v-for="(day, dayIndex) in availability.SelectedDays"
                      :class="{
                        'sk-selected': selectedIndex === `${index}-${dayIndex}`,
                      }"
                      @click="
                        selectDay(
                          index,
                          dayIndex,
                          formatTimeSlots(availability.SelectedTimeSlots)
                        )
                      "
                    >
                      {{ day }}
                    </li>
                  </template>
                </ul>
              </div> -->
                <a
                  class="sk-flex-row sk-flex-justify-center sk-margin-top book-appointment-button"
                  @click.stop="
                    bookAppointment(
                      item.ProfileId,
                      item.ConsultationFees,
                      'Book an Appointment'
                    )
                  "
                >
                  <span class="book-appointment-text">Book an Appointment</span>
                  <span class="sk-icons">
                    <Skicon icon-type="chevron_right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SkCarouselItem>
      </SkCarousel>
      <!-- Multiple Doctors Section -->
    </div>
  </section>
</template>

<style>
.our-doctors {
  /* .sk-container {
    padding: 0 var(--gutter-base);
  } */
  
  .more-details {
    gap: var(--gutter-small);
  }
  .doctor {
    border-radius: var(--radius-large);
    img {
      border-radius: var(--radius-large);
      width: 100%;
      object-fit: cover;
      object-position: top;
    }
    .details {
      padding: var(--gutter-large);
      background-color: var(--color-white);
      border-radius: var(--radius-large);
      color: var(--color-body-color);
      text-align: center;
      margin-top: calc(var(--gutter-large) * -1);
      position: relative;
      gap: var(--gutter-small);
      .sk-icons {
        background-color: var(--color-secondary);
        color: var(--color-on-secondary);
        border-radius: var(--radius-pill);
        padding: 0.5rem;
        display: inline-block;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: var(--color-primary);
          color: var(--color-on-primary);
        }

        svg {
          fill: var(--color-on-secondary);
        }
      }
    }

    &:hover {
      box-shadow: 0 0 1rem rgb(var(--color-rgb-black) / 10%);
    }
    &:hover .book-appointment-text {
      width: 16rem;
      font-size: 1.6rem;
    }
    .languages-known,
    p {
      font-size: 1.4rem;
      /* color: var(--color-text-muted); */
    }
  }

  .about-doctor {
    position: relative;
    a {
      position: absolute;
      bottom: 0.2rem;
      background: var(--color-white);
      padding: 0 0 0 var(--gutter-base);
      right: var(--gutter-small);
      font-size: 1.2rem;
      &::before {
        content: "...";
      }
    }
  }

  .working-hours {
    .sk-h6 {
      padding-bottom: 1rem;
    }

    ul {
      display: flex;
      overflow-y: auto;
      gap: 1rem;
      /* padding-bottom: var(--gutter-large); */

      li {
        border: 0.1rem solid #cfcfcf;
        border-radius: var(--radius-pill);
        padding: 0.5rem var(--gutter-base);
        background-color: var(--color-white);
        cursor: pointer;

        &.sk-selected {
          background: var(--color-primary);
          color: var(--color-on-primary);
        }
      }
    }
  }

  .book-appointment-text {
    width: 0;
    overflow: hidden;
    font-size: 1.6rem;
    transition: all 0.5s ease;
    white-space: nowrap;
  }
}

.doctor-list {
  .sk-carousel-item{
    max-width: 30%;
  }
  .sk-carousel-inner {
    padding: var(--gutter-base) 0;
  }
}
@media (max-width: 768px) {
  .doctor-list,
  .review-section .sk-carousel {
    padding-top: 2rem;
  }
}
</style>
