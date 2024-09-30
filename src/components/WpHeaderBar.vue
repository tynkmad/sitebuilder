<template>
    <!-- #region Header bar -->
    <div class="sk-appbar header-bar">
        <div class="sk-container">
            <div class="sk-appbar-row">
                <div class="sk-appbar-section sk-appbar-align-start sk-flex-justify-between">
                    <div class="sk-flex-row">
                        <span class="sk-icons">
                            <svg width="20" height="20">
                                <use xlink:href="#skiconsBranch"></use>
                            </svg>
                        </span>
                        <span>Velachery Branch</span>
                    </div>

                    <div class="sk-flex-row sk-mobile-hide">
                        <span class="sk-icons">
                            <svg width="20" height="20">
                                <use xlink:href="#skiconsAlaram"></use>
                            </svg>
                        </span>

                        <div>
                            9:00 AM - 5:00 PM </div>
                    </div>
                </div>
                <div class="sk-appbar-section sk-appbar-align-end ">
                    <div class="sk-overflow-menu sk-mobile-hide">
                        <div class="sk-menu-trigger">
                            <div class="sk-flex-row" onclick="fnlantranslatedat('dvtlangtrans')">
                                Language
                                <span class="sk-icons dropdown-icon">
                                    <svg width="30" height="30">
                                        <use xlink:href="#skIconsDropDown"></use>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div id="dvtlangtrans" class="sk-overflow-list sk-block sk-hide">
                            <ul ref="overflowList">
                                <li onclick="fngoogletranslat('ta')">Tamil</li>
                                <li onclick="fngoogletranslat('te')">Telugu</li>
                                <li onclick="fngoogletranslat('kn')">Kannada</li>
                                <li onclick="fngoogletranslat('ml')">Malayalam</li>
                                <li onclick="fngoogletranslat('hi')">Hindi</li>
                                <li onclick="fngoogletranslat('mr')">Marathi</li>
                                <li onclick="fngoogletranslat('bn')">Bengali</li>
                                <li onclick="fngoogletranslat('pa')">Punjabi</li>
                                <li onclick="fngoogletranslat('gu')">Gujarati</li>
                                <li onclick="fngoogletranslat('fr')">French</li>
                                <li onclick="fngoogletranslat('de')">German</li>
                            </ul>
                        </div>
                    </div>

                    <div class="sk-flex-row">

                        <a title="" href="" target="_blank">
                            <span class="sk-icons">
                                <svg width="24" height="24">
                                    <use xlink:href="#skIconsLinkedin"></use>
                                </svg>
                            </span>
                        </a>
                        <a title="" href="" target="_blank">
                            <span class="sk-icons">
                                <svg width="24" height="24">
                                    <use xlink:href="#skIconsInstagram"></use>
                                </svg>
                            </span>
                        </a>

                        <a title="" href="" target="_blank">
                            <img loading="lazy" alt="" height="24" width="24"
                                src="https://lscdn.blob.core.windows.net/content/promanage/pm-icon.svg">
                        </a>

                        <a title="" href="" target="_blank">
                            <img loading="lazy" alt="" height="24" width="24"
                                src="https://lscdn.blob.core.windows.net/content/promanage/sulekha-logo.svg">
                        </a>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- #endregion Header bar -->
</template>
<style scoped >
/* #region Header bar */
.header-bar {
    height: 4.6rem;
}

.sk-overflow-menu {
    cursor: pointer;

    .sk-overflow-list {
        li {
            cursor: pointer;
        }
    }
}

/* #endregion Header bar */
</style>
