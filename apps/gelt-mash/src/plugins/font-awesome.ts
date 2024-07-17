// src/plugins/font-awesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons'; // Brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, far);

export default FontAwesomeIcon;
