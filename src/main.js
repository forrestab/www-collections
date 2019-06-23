// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faCloud, faCompactDisc, faPlay } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import DefaultLayout from '~/layouts/Default.vue'

config.autoAddCss = false;
library.add(
	faCloud,
	faCompactDisc,
	faPlay
);

export default function (Vue, { router, head, isClient }) {
	Vue.component("Layout", DefaultLayout);
	Vue.component("fa", FontAwesomeIcon);
}
