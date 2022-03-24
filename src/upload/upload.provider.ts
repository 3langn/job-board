import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: () => {
    return v2.config({
      cloud_name: 'thekhiem',
      api_key: '721782633812256',
      api_secret: 'sp5lcV0ako-OH6ebVS01UT5zE4M',
    });
  },
};
