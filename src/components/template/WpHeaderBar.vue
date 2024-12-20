<script setup lang="ts">
import Skappbar from 'rolex/skappbar.vue';
import Skdropdown from 'rolex/skdropdown.vue';
import { listItemType, skActionItem } from 'rolex/skglobaltypes';
import Skicon from 'rolex/skicon.vue';
import Skpopup from 'rolex/skpopup.vue';
import { reactive } from 'vue';
import SkChannelImg from 'rolex/channelimg.vue';
import { MediumType } from 'rolex/SkTypes';

interface IheaaderBar {
    languageList: Array<skActionItem>;
    connectedChannelList: Array<{
        url: string,
        channelName: string
    }>
}
const reactiveData = reactive<IheaaderBar>(
    {
        languageList: [
            { itemKey: "Tamil", actionlabel: "தமிழ்" },
            { itemKey: "Telugu", actionlabel: "తెలుగు" },
            { itemKey: "Kannada", actionlabel: "ಕನ್ನಡ" },
            { itemKey: "Malayalam", actionlabel: "മലയാളം" },
            { itemKey: "Hindi", actionlabel: "हिन्दी" },
            { itemKey: "Marathi", actionlabel: "मराठी" },
            { itemKey: "Bengali", actionlabel: "বাংলা" },
            { itemKey: "Punjabi", actionlabel: "ਪੰਜਾਬੀ" },
            { itemKey: "Gujarati", actionlabel: "ગુજરાતી" },
            { itemKey: "French", actionlabel: "Français" },
            { itemKey: "German", actionlabel: "Deutsch" }
        ],
        connectedChannelList: [
            {
                url: 'https://www.sulekha.com/',
                channelName: 'sulekha',
            },
            {
                url: 'https://www.facebook.com/',
                channelName: 'facebook',
            },
            {
                url: 'https://promanage.biz/',
                channelName: 'promanageapp',
            },
            {
                url: 'https://www.youtube.com/',
                channelName: 'youtube',
            },
            {
                url: 'https://www.twitter.com/',
                channelName: 'twitter',
            },
        ]
    }
)

</script>

<template>
    <!-- #region Header bar -->
    <Skappbar class="header-bar" appBarLeftIconStyle="" appBarTitle="">
        <template #ableft>
            <div class="sk-flex-row">
                <Skicon iconType="store"  />
                <span>Velachery Branch</span>
            </div>

            <div class="sk-flex-row sk-mobile-hide">
                <Skicon iconType="schedule"  />
                <div>9:00 AM - 5:00 PM</div>
            </div>
        </template>
        <template #abright>
            <!-- <Skdropdown :listItems="reactiveData.languageList" placeHolderText="Site Language" class="sk-mobile-hide" /> -->
            <Skpopup :popupActionItems="reactiveData.languageList" :triggerButton="{
                round: true,
                small: true,
                noShadow: true,
                badgeType: 'icon',
                icon: 'translate',
                flat: true,
                outline: true,
                action: () => { }
            }" />
            <div class="sk-flex-row social-links">

                <a v-for="channel in reactiveData.connectedChannelList" :key="channel.channelName" :href="channel.url"
                    target="_blank" rel="noopener noreferrer">
                    <SkChannelImg :channel="channel.channelName" />
                </a>
            </div>
        </template>
    </Skappbar>
    <!-- #endregion Header bar -->
</template>
<style>
/* #region Header bar */
.header-bar {
    height: 4.6rem;

    .sk-appbar-align-start,
    .sk-title-bar-start {
        gap: var(--gutter-base);
    }

    .social-links{
        img{
            width: 2.4rem;
            height: 2.4rem;
        }
    }
    .sk-overflow-menu {
        cursor: pointer;

        .sk-overflow-list {
            z-index: var(--zindex-4);

            li {
                cursor: pointer;
            }
        }
    }
}

/* #endregion Header bar */
</style>
