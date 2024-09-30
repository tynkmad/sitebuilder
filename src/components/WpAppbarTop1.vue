<template>
    <!-- #region Appbar -->
    <div class="sk-appbar sk-appbar-fixed">
        <div class="sk-container">
            <div class="sk-appbar-row">
                <div class="sk-appbar-section sk-appbar-align-start">
                    <div class="sk-appbar-logo notranslate">
                        <a href="/" title="Skyshark travels">
                            <img src="https://lscdn.azureedge.net/biz-live/img/template-10-logo.jpeg" height="60"
                                alt="Elder Care" />
                        </a>
                    </div>
                    <div class="sk-text-end sk-menu sk-mobile-hide">
                        <nav>
                            <ul>
                                <li class="sk-active">
                                    <a class="notranslate" title="Skyshark travels" href="/">Home</a>
                                    <div class="sk-menu-indicator"></div>
                                </li>
                                <li>
                                    <a title="Our Services" href="javascript:void(0);">Services</a>
                                    <div class="sk-menu-indicator"></div>
                                </li>
                                <li>
                                    <a title="View Reviews" href="javascript:void(0);">Ratings</a>
                                    <div class="sk-menu-indicator"></div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="sk-appbar-section sk-appbar-align-end">
                    <div class="sk-overflow-menu sk-hide">
                        <div class="sk-menu-trigger">
                            <div class="sk-flex-row">
                                Language
                                <span class="sk-icons dropdown-icon">
                                    <svg width="30" height="30">
                                        <use xlink:href="#skIconsDropDown"></use>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="sk-overflow-list sk-block">
                            <ul ref="overflowList">
                                <li>Tamil</li>
                                <li>Telugu</li>
                                <li>Kannada</li>
                                <li>Malayalam</li>
                                <li>Hindi</li>
                                <li>Marathi</li>
                                <li>Bengali</li>
                                <li>Punjabi</li>
                                <li>Gujarati</li>
                                <li>French</li>
                                <li>German</li>
                            </ul>
                        </div>
                    </div>
                    <a title="Call Skyshark travels" href="tel:9899075951" class="book-appointments sk-mobile-hide">
                        <span class="sk-icons">
                            <svg width="18" height="18">
                                <use xlink:href="#skIconsCall"></use>
                            </svg>
                        </span>
                        <div class="sk-flex sk-flex-column">
                            <span class="sk-small">Call us on</span>
                            <b class="phone-number"> 9899075951 </b>
                        </div>
                    </a>
                    <button class="sk-button sk-round">
                        <svg width="24" height="24">
                            <use xlink:href="#skIconsHamburger"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- #endregion Appbar -->
</template>
<style scoped >
/* #region APPBAR */
.sk-appbar {
    border: 0;
    box-shadow: var(--box-shadow-1);

    .book-appointments {
        display: flex;
        gap: var(--gutter-xsmall);
        align-items: center;
        justify-content: center;
        color: inherit;

        a {
            color: inherit;
            font-weight: var(--font-weight-bold, 700);
        }

        .phone-number {
            font-size: 1.4rem;

            &:hover {
                text-decoration: underline;
            }
        }

        .sk-icons {
            background-color: rgb(var(--color-primary-rgb) / 70%);
            background-image: var(--template-gradient);
            width: 3.4rem;
            height: 3.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-round);
            transition: 0.3s ease;

            &:hover {
                box-shadow: var(--box-shadow-2);
            }

            svg {
                fill: var(--color-on-primary);
            }
        }
    }

    .sk-button.sk-round {
        border-radius: var(--radius-base);
    }
}

@media (max-width: 768px) {
    .sk-appbar-logo {
        margin: 0;

        img {
            max-height: 5.5rem;
        }
    }
}


/* #endregion APPBAR */
</style>