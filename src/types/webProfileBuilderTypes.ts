// src/types/webProfileCreatorTypes.ts

import * as SkGlobalTypes from 'rolex/skglobaltypes'; // Adjust the path as needed

interface ExtendedMainNavBarType extends SkGlobalTypes.MainNavBarType {
    externalLink?: string;
}

export {
    ExtendedMainNavBarType
}