<script setup lang="ts">
import SkCarousel from "rolex/skCarousel.vue";
import SkCarouselItem from "rolex/skCarouselItem.vue";
import { IBusinessMedia } from "@/types/webProfileBuilderTypes";
import { onMounted, reactive } from "vue";
import { useCarousel } from "@/composables/useCarousel";
const { moveCarousel, getCarouselState, initObservers } = useCarousel();

const photoListState = getCarouselState("#photoList");

interface IPhotoList {
  photoList: Array<IBusinessMedia>;
}
const ReactiveData = reactive<IPhotoList>({
  photoList: [
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-3c8aec26.jpeg",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "01 Oct 2024",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "0ea6b21a-2621-4ae7-93ae-3d19ee57f9b7",
      mediaId: 9913707,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "0ea6b21a-2621-4ae7-93ae-3d19ee57f9b7",
      mediumTypeId: 82,
      tag: "ADDITIONAL",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-80b76fe9.jpeg",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "05 Sep 2024",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "ed136233-b4fe-4929-bc07-3ce6474ce2b7",
      mediaId: 9648429,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "ed136233-b4fe-4929-bc07-3ce6474ce2b7",
      mediumTypeId: 82,
      tag: "ADDITIONAL",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-cea9add1.jpeg",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "05 Sep 2024",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "e578a707-fc1b-4a56-b232-9cf6f1a486b1",
      mediaId: 9648428,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "e578a707-fc1b-4a56-b232-9cf6f1a486b1",
      mediumTypeId: 82,
      tag: "ADDITIONAL",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-3b9e8462.jpeg",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "05 Sep 2024",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "36fbf3fe-25d3-4c4b-a480-4bdedf892ed6",
      mediaId: 9648427,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "36fbf3fe-25d3-4c4b-a480-4bdedf892ed6",
      mediumTypeId: 82,
      tag: "ADDITIONAL",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-2fd90eae.jpeg",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "05 Sep 2024",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "e57f0131-32c4-4c45-a506-139b75aacda0",
      mediaId: 9648426,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "e57f0131-32c4-4c45-a506-139b75aacda0",
      mediumTypeId: 82,
      tag: "ADDITIONAL",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-84b4eb9d.jpeg",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "05 Sep 2024",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "87bd9170-3400-407b-9933-517d360cac82",
      mediaId: 9648425,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "87bd9170-3400-407b-9933-517d360cac82",
      mediumTypeId: 82,
      tag: "ADDITIONAL",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://promanageinbox.blob.core.windows.net/inboxmessages/pro-manage/Enterprise/Video/1672520/11418308/Commercial%20(30%20sec)_%20Healthcare%20Needs%20Never%20Stop.mp4",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "25 Oct 2023",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "790cd4e5-a540-4eee-b5c2-1c10cd744238",
      mediaId: 6783171,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "790cd4e5-a540-4eee-b5c2-1c10cd744238",
      mediumTypeId: 82,
      tag: "VIDEO",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://promanageinbox.blob.core.windows.net/inboxmessages/pro-manage/Enterprise/Video/1672520/11418308/Bloodoxy%20(8).mp4",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "25 Oct 2023",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "36b2ee95-b461-43af-829c-2df0c18da8ab",
      mediaId: 6783170,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "36b2ee95-b461-43af-829c-2df0c18da8ab",
      mediumTypeId: 82,
      tag: "VIDEO",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-3c355063.jpeg",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "25 Oct 2023",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "27cd416a-bc7e-48a6-98ec-3f6876d19daf",
      mediaId: 6783169,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "27cd416a-bc7e-48a6-98ec-3f6876d19daf",
      mediumTypeId: 82,
      tag: "ADDITIONAL",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
    {
      businessId: 11418308,
      businessMediaTypeOption: 0,
      mediaUrl:
        "https://lscdn.azureedge.net/biz-live/img/11418308-11418308-a0d5ee47.jpeg",
      mediaCover: "",
      mediaCaption: "",
      addedDate: "25 Oct 2023",
      gmbTag: "ADDITIONAL",
      postDate: null,
      gmbStatus: 0,
      gmbMediaId: "6160b0c7-de7e-4d0f-9ccd-870fdd4dcdfd",
      mediaId: 6783167,
      photoViews: 0,
      mediumType: null,
      isRefreshing: 0,
      socialMediaAlbumId: "6160b0c7-de7e-4d0f-9ccd-870fdd4dcdfd",
      mediumTypeId: 82,
      tag: "ADDITIONAL",
      isCustomerMedia: false,
      isIrrelevant: false,
      totalRecords: 0,
      irrelevantMarkedBy: 0,
    },
  ],
});

onMounted(() => {
  initObservers("#photoList");
});
const openPhoto = (item: IBusinessMedia) => {
  // Define what happens when a photo is clicked
  console.log("Photo clicked:", item);
};
</script>
<template>
  <section class="gallery-section">
    <h2 class="sk-text-center">Photos of Elder Care in Adayar</h2>
    <SkCarousel
      id="photoList"
      :enableNavButton="true"
      customPreviousIcon="chevron_left"
      customNextIcon="chevron_right"
      @movePrevious="() => moveCarousel('#photoList', 'prev')"
      @moveNext="() => moveCarousel('#photoList', 'next')"
      :hidePreviousButton="photoListState.hidePreviousBtn.value"
      :hideNextButton="photoListState.hideNextBtn.value"
      class="photo-list"
      v-if="ReactiveData.photoList.length && ReactiveData.photoList.length > 1"
    >
      <SkCarouselItem
        class="photo sk-clickable"
        v-for="(item, index) in ReactiveData.photoList"
        @click="openPhoto(item)"
        :key="index"
      >
        <img
          :src="item.mediaUrl"
          :alt="item.businessId.toString()"
          loading="lazy"
          height="380"
          width="100%"
        />
      </SkCarouselItem>
    </SkCarousel>
  </section>
</template>
<style>
.gallery-section .photo-list .sk-carousel-inner {
  padding: var(--gutter-base);
}
.gallery-section .photo {
  overflow: hidden;
  border-radius: var(--radius-xlarge);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: scale 1.5s ease-in;
  }
  &:hover {
    box-shadow: 0 0 1rem rgb(var(--color-rgb-black) / 10%);
    img{
      scale: 3;
    }
  }
}
</style>
