<script setup lang="ts">
import Skbutton from 'rolex/skbutton.vue';
import Skicon from 'rolex/skicon.vue';
</script>

<template>
    <!-- #region Book Appointment section -->
    <section class="featured-book-appointment sk-secondary-bg">
        <div class="sk-container">
            <div class="sk-flex-row featured-book-appointment-content">
                <Skicon iconType="calendar_month" filled />
                <div class="featured-book-appointment-text">
                    <h2 class="sk-h1">Open for Appointments</h2>
                    <p>
                        We are delighted to announce that our doors are open, and we are
                        now accepting appointments to serve to better
                    </p>
                </div>
                <div class="featured-book-appointment-action">
                    <Skbutton buttonText="Book Appointment" pill/>
                </div>
            </div>
            <div class="sk-row"></div>
        </div>
    </section>
    <!-- #endregion Book Appointment section -->
</template>
<style>
/* Featured Appointment Section :: BEGIN */

.featured-book-appointment .sk-container{
    padding: var(--gutter-base);
    .featured-book-appointment-content {
        display: flex;
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

        .sk-icons {
            background: var(--color-on-primary);
            border-radius: var(--radius-round);
            font-size: 4.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: var(--color-primary);
            padding: var(--gutter-base);
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
}

/* Featured Appointment Section :: END */
</style>