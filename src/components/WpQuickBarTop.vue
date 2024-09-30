<template>
    <!-- #region QuickBar Top -->
    <div class="quick-bar-top sk-flex sk-flex-align-center sk-text-center">
        <p>Need a consultation, <br class="sk-web-hide">Now its simple and fast on the go.</p>
        <button class="sk-button sk-small sk-link" title="Book an Appointment">
            <span class="sk-icons">
                <svg width="18" height="18">
                    <use xlink:href="#skIconsCalendarAdd"></use>
                </svg>
            </span>
            <span class="sk-button-text">Book an Appointment</span>
            <span class="sk-ripple-container"></span>
        </button>
    </div>
    <!-- #endregion QuickBar Top -->
</template>
<style scoped >
/* region Header quick action bar */
.quick-bar-top {
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