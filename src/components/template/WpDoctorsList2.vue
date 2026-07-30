<script setup lang="ts">
import Skicon from "rolex/skicon.vue";
import { reactive } from "vue";

interface IDoctorProfile {
  ProfileId: number;
  ProfileName: string;
  ProfileImageUrl: string;
  SpecialistInList: Array<string>;
  OverallExperience: number;
  AboutProfile: string;
  LanguageKnownList: Array<string>;
  ConsultationFees: number;
}
interface IDoctorList {
  profiles: Array<IDoctorProfile>;
}

const ReactiveData = reactive<IDoctorList>({
  profiles: [
    {
      ProfileId: 1,
      ProfileName: "Dr. John Doe",
      ProfileImageUrl: "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
      SpecialistInList: ["Cardiologist", "General Physician"],
      OverallExperience: 10,
      AboutProfile: "Dr. John Doe has over a decade of experience in treating heart conditions.",
      LanguageKnownList: ["English", "Spanish"],
      ConsultationFees: 500,
    },
    {
      ProfileId: 2,
      ProfileName: "Dr. Jane Smith",
      ProfileImageUrl: "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
      SpecialistInList: ["Dermatologist"],
      OverallExperience: 8,
      AboutProfile: "Dr. Jane Smith is a specialist in skin care and dermatological treatments.",
      LanguageKnownList: ["English", "French"],
      ConsultationFees: 750,
    },
    {
      ProfileId: 3,
      ProfileName: "Dr. Emily Clarke",
      ProfileImageUrl: "https://lscdn.azureedge.net/biz-live/img/doctor-thumbnail-avatar.png",
      SpecialistInList: ["Pediatrician"],
      OverallExperience: 7,
      AboutProfile: "Dr. Emily Clarke specializes in pediatric care for children.",
      LanguageKnownList: ["English", "German"],
      ConsultationFees: 600,
    },
  ],
});

const bookAppointment = (profileId: number) => {
  console.log(`Booking appointment for profile ${profileId}`);
};
</script>

<template>
  <section class="our-doctors-2">
    <div class="sk-container">
      <h2>The Medical Practitioners Who Care for You</h2>
      <div class="doctors-grid">
        <div v-for="doctor in ReactiveData.profiles" :key="doctor.ProfileId" class="doctor-card sk-surface sk-outlined">
          <img :src="doctor.ProfileImageUrl" :alt="doctor.ProfileName" width="120" height="120" loading="lazy" />
          <div class="name sk-h6">{{ doctor.ProfileName }}</div>
          <div class="designation sk-secondary">{{ doctor.SpecialistInList.join(", ") }}</div>
          <div class="experience sk-bold">{{ doctor.OverallExperience }} Years Experience</div>
          <p class="sk-line-clamp sk-line-2">{{ doctor.AboutProfile }}</p>
          <div class="languages sk-small sk-text-muted">Languages: {{ doctor.LanguageKnownList.join(", ") }}</div>
          <a class="sk-flex-row sk-flex-justify-center book-appointment-button" @click="bookAppointment(doctor.ProfileId)">
            <span>Book an Appointment</span>
            <Skicon iconType="chevron_right" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.our-doctors-2 {
  .doctors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap: var(--gutter-large);
    margin-top: var(--gutter-large);
  }

  .doctor-card {
    text-align: center;
    padding: var(--gutter-large);

    img {
      border-radius: var(--radius-round);
      object-fit: cover;
      margin: 0 auto var(--gutter-base);
    }

    .designation {
      margin-bottom: var(--gutter-small);
    }

    p {
      margin: var(--gutter-small) 0;
      opacity: 0.7;
    }

    .book-appointment-button {
      margin-top: var(--gutter-base);
      gap: 0.5rem;
      color: var(--color-primary);
      font-weight: var(--font-weight-medium);
      cursor: pointer;
    }
  }
}
</style>
