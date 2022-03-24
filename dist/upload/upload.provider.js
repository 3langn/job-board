"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
exports.CloudinaryProvider = {
    provide: 'Cloudinary',
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: 'thekhiem',
            api_key: '721782633812256',
            api_secret: 'sp5lcV0ako-OH6ebVS01UT5zE4M',
        });
    },
};
//# sourceMappingURL=upload.provider.js.map