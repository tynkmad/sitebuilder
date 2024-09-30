<template>
    <!-- #region Book Appointment section -->
    <section class="featured-book-appointment sk-secondary-bg">
        <div class="sk-container">
            <div class="sk-flex-row featured-book-appointment-content">
                <div class="sk-icon">
                    <svg width="22" height="22">
                        <use xlink:href="#skIconBookAppointment"></use>
                    </svg>
                </div>
                <div class="featured-book-appointment-text">
                    <h2 class="sk-h1">Open for Appointments</h2>
                    <p>
                        We are delighted to announce that our doors are open, and we are
                        now accepting appointments to serve to better
                    </p>
                </div>
                <div class="featured-book-appointment-action">
                    <button class="sk-button sk-white-outline sk-block sk-large sk-rounded" onclick="">
                        Book Appointment
                    </button>
                </div>
            </div>
            <div class="sk-row"></div>
        </div>
    </section>
    <!-- #endregion Book Appointment section -->
</template>
<style scoped >
/* Featured Appointment Section :: BEGIN */

.featured-book-appointment-content {
    gap: 5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;

    @media (max-width: 768px) {
        justify-content: center;
        gap: var(--gutter-base);
        flex-wrap: wrap;
        text-align: center;
    }
}

.featured-book-appointment-text {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
}

.featured-book-appointment-content p {
    margin-bottom: 0;
    opacity: 0.6;
    font-size: 1.8rem;
}

.featured-book-appointment .sk-icon {
    background: var(--color-on-primary);
    width: 7rem;
    height: 7rem;
    border-radius: var(--radius-round);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg {
        fill: var(--color-primary);
        width: 60%;
        height: 60%;
    }
}

.featured-book-appointment .sk-button.sk-white-outline {
    background: var(--color-primary);
    color: var(--color-on-primary);
    border: 0.1rem solid var(--color-primary);

    &:hover {
        box-shadow: var(--box-shadow-3);
    }
}

.featured-book-appointment-action {
    flex-shrink: 0;

    @media (max-width: 768px) {
        text-align: left;
    }
}

/* Featured Appointment Section :: END */
</style>