// src/types/webProfileCreatorTypes.ts

import * as SkGlobalTypes from "rolex/skglobaltypes"; // Adjust the path as needed

interface ExtendedMainNavBarType extends SkGlobalTypes.MainNavBarType {
  externalLink?: string;
}

interface IBusinessMedia {
  businessId: number;
  businessMediaTypeOption: number;
  mediaUrl: string;
  mediaCover: string;
  mediaCaption: string;
  addedDate: string;
  gmbTag: string;
  postDate: string | null;
  gmbStatus: number;
  gmbMediaId: string;
  mediaId: number;
  photoViews: number;
  mediumType: string | null;
  isRefreshing: number;
  socialMediaAlbumId: string;
  mediumTypeId: number;
  tag: string;
  isCustomerMedia: boolean;
  isIrrelevant: boolean;
  totalRecords: number;
  irrelevantMarkedBy: number;
}

//#region Hero
export interface IbusinessDetails {
  contactNumber: Array<String>;
  storeAddress: String;
  businessHours: Array<SkGlobalTypes.skActionItem>;
}

export const businessDetailsProps = {
  showRating: {
    type: Boolean,
    default: true,
  },
  contactNumber: {
    type: Array<String>,
    default: ["+1 (800) 555-1234"],
  },
  storeAddress: {
    type: String,
    default:
      "1234 Wellness Avenue, Suite 101, Bright Future Plaza, 5th Floor, City of Serenity, 67890 United States of Euphoria",
  },
  businessHours: {
    type: Array<SkGlobalTypes.skActionItem>,
    default: [
      {
        itemKey: "Sunday",
        actionlabel: "Sunday: 10:00 AM - 02:00 PM",
      },
      {
        itemKey: "Monday",
        actionlabel: "Monday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Tuesday",
        actionlabel: "Tuesday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Wednesday",
        actionlabel: "Wednesday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Thursday",
        actionlabel: "Thursday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Friday",
        actionlabel: "Friday: 10:00 AM - 07:00 PM",
      },
      {
        itemKey: "Saturday",
        actionlabel: "Saturday: 10:00 AM - 05:00 PM",
      },
    ],
  },
};
//#endregion Hero

export { ExtendedMainNavBarType, IBusinessMedia };
