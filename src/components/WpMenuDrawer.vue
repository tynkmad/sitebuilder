<script setup lang="ts">
import Skappbar from 'rolex/skappbar.vue';
import Skdrawer from 'rolex/skdrawer.vue';
import { MainNavBarType } from 'rolex/skglobaltypes';
import SkMenuBar from 'rolex/skMenuBar.vue';
import { reactive } from 'vue';

// Define an interface for the reactive data structure
interface IReactiveData {
    menuItems: Array<MainNavBarType>
}
// Create a reactive object for the menu drawer state
const ReactiveData = reactive<IReactiveData>({
    menuItems: [
        {
            menuName: "Home",
            isActive: true,
            targetContentID: "Home",
        },
        {
            menuName: "Services",
            isActive: false,
            targetContentID: "Services",
        },
        {
            menuName: "Ratings",
            isActive: false,
            targetContentID: "Ratings",
        },
    ]
});

function closeDrawer() {
    emit("closeDrawer");
}

const emit = defineEmits(["closeDrawer"]);

const setActiveMenu = (menuId: string) => {
    closeDrawer()
    // ReactiveData.menuItems = ReactiveData.menuItems.map(clickedMenu => {
    //     const isActive = menu.targetContentID && clickedMenu.targetContentID;
    //     return { ...menu, isActive }; // Ensure reactivity by returning a new object
    // });
};
</script>

<template>
    <Skdrawer showDrawer right @closePanel="closeDrawer">
        <template #skdrawerheader>
            <Skappbar showLeftActionWeb appBarTitle="Menu" appBarLeftIconStyle="close"
                @navigationIconClick="closeDrawer" />
        </template>
        <template #skdrawerbody>
            <SkMenuBar :MenuItems="ReactiveData.menuItems" @navBarNavigation="closeDrawer" class="sk-vertical" />
        </template>
    </Skdrawer>
</template>
<style >
.template-preview .sk-drawer .sk-menu li {
    padding: 0;

    &.sk-active {
        font-weight: bold;
    }

    &:hover {
        background: rgb(var(--color-rgb-primary) / 10%);
        border-radius: var(--radius-base);
    }

    a {
        padding: 0 var(--gutter-base);
        font-size: 1.6rem;
        text-transform: capitalize;
        justify-content: flex-start;
        color: inherit;
    }

    .sk-menu-indicator {
        display: none;
    }
}
</style>