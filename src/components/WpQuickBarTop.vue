<script setup lang="ts">
import Skbutton from 'rolex/skbutton.vue';
</script>

<template>
    <!-- #region QuickBar Top -->
    <div class="quick-bar-top sk-flex sk-flex-align-center sk-text-center">
        <p>Need a consultation, <br class="sk-web-hide">Now its simple and fast on the go.</p>
        <Skbutton buttonText="Book an Appointment" link small icon="calendar_add_on" />
    </div>
    <!-- #endregion QuickBar Top -->
</template>
<style>
/* region Header quick action bar */
.template-preview .quick-bar-top {
    background: var(--color-black);
    justify-content: center;
    gap: 2rem;
    color: var(--color-white);
    padding: var(--gutter-small);

    p {
        margin-bottom: 0;
    }
}

/* region Header quick action bar */
</style>