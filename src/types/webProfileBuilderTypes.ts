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

export { ExtendedMainNavBarType, IBusinessMedia };
