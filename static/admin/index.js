window.CMS_MANUAL_INIT = true;

import CMS, { init } from "netlify-cms";
import cloudinaryMediaLibrary from "netlify-cms-media-library-cloudinary";

init({
	config: {
		media_library: {
			name: "cloudinary",
			output_filename_only: true,
			config: {
				cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
				api_key: process.env.CLOUDINARY_API_KEY
			}
		}
	}
});

CMS.registerWidget("cloudinary", cloudinaryMediaLibrary);
