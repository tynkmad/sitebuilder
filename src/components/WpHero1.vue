<template>
    <!-- #region Hero -->
    <section class="hero">
        <!-- #region Business Info -->
        <div class="business-info">
            <div class="sk-container">
                <div class="sk-row">
                    <div class="sk-col-6 sk-col-fluid sk-flex align-center">
                        <div class="hero-content">
                            <h1 class="notranslate">Elder Care - Adyar</h1>
                            <div class="sk-flex-row sk-no-wrap sk-padding-bottom-large">
                                <div class="sk-ratings sk-medium notranslate">
                                    <div class="rating-group">
                                        <b>4.9</b>
                                        <span class="sk-star sk-star5"></span>
                                    </div>
                                    <a href="javascript:void(0)" title="View Reviews of Skyshark travels"
                                        id="lnkviewriew">15 Reviews</a>
                                </div>
                            </div>

                            <div class="contact-card">
                                <span class="sk-icons">
                                    <svg width="20" height="20">
                                        <use xlink:href="#skIconsLocation"></use>
                                    </svg>
                                </span>
                                <address>
                                    27/35 First floor, Shankar building, North Avenue, North
                                    avenue road, Adyar, Chennai - 600 026
                                </address>
                            </div>
                            <div class="contact-card">
                                <span class="sk-icons">
                                    <svg width="20" height="20">
                                        <use xlink:href="#skIconsWatch"></use>
                                    </svg>
                                </span>
                                <div class="sk-overflow-menu notranslate">
                                    <div class="sk-menu-trigger">
                                        <div class="">
                                            <div class="sk-flex-row">
                                                <span onclick="fnopentmedat('dvtmeshow')">Monday - Sunday : 24
                                                    Hrs</span>

                                                <span class="sk-icons dropdown-icon">
                                                    <svg width="30" height="30" onclick="fnopentmedat('dvtmeshow')">
                                                        <use xlink:href="#skIconsDropDown"></use>
                                                    </svg>
                                                </span>
                                                <span class="open-status sk-success-text">Open</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="dvtmeshow" class="sk-overflow-list sk-hide">
                                        <ul ref="overflowList">
                                            <li>Monday - Sunday : 24 Hrs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="book-appointments">
                                <a title="Call Skyshark travels" href="tel:9899075951"
                                    class="sk-flex-row prophoneclick">
                                    <span class="sk-icons">
                                        <svg width="20" height="20">
                                            <use xlink:href="#skIconsCall"></use>
                                        </svg>
                                    </span>
                                    9899075951
                                </a>
                            </div>
                            <div class="sk-button-group">
                                <button title="Get Direction of Skyshark travels" onclick="fndir('0','0')"
                                    class="sk-button sk-large sk-primary sk-rounded">
                                    <span class="sk-icons">
                                        <svg width="22" height="22">
                                            <use xlink:href="#skIconsGetDirection"></use>
                                        </svg>
                                    </span>
                                    Get Directions
                                </button>
                                <button title="Share Details of Skyshark travels"
                                    class="sk-button sk-large sk-primary-outline sk-rounded">
                                    <span class="sk-icons">
                                        <svg width="22" height="22">
                                            <use xlink:href="#skIconsShare"></use>
                                        </svg>
                                    </span>
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="sk-col-6 sk-col-fluid">
                        <div class="hero-banner">
                            <figure class="">
                                <img width="1400" height="300" src="https://lscdn.azureedge.net/biz-live/img/template-10-banner.webp"
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
<style scoped >
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
            padding-top: 0.4rem;
        }

        .book-appointments,
        .book-appointments .open-status {
            margin: 0;
            font-size: 1.6rem;
            font-weight: normal;
        }
    }

    :is(.contact-card, .book-appointments) {
        margin-bottom: var(--gutter-large);
    }
}

.rating-group {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.sk-ratings {
    a {
        color: inherit;
        text-decoration: underline;
    }
}

address {
    font-style: normal;
}

@media (max-width: 768px) {
    .business-info {
        .sk-container {
            top: 0;
        }
    }
}

/* #endregion business info :: END */
</style>