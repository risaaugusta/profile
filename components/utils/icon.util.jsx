// Core packages
import { useEffect, useState } from 'react';

// Font Awesome packages
const { library } = require('@fortawesome/fontawesome-svg-core');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faT, faD, faR, faB } from '@fortawesome/free-solid-svg-icons';

// Load icons into library
library.add(faTwitter, faGithub, faLinkedin, faT, faD, faR, faB);

/**
 * Icon factory utility.
 * Generates icon JSX and returns it. Keeps all icon packages isolated in here
 * 
 * ! Can only distribute free icons
 * ? give users access to cheat sheet of free icons
 * ? pre-select those icons in a MD file
 * ? use MD file to only load those icons from the lib
 * 
 * ! requiring the library will likely create a SSR issue
 * ! According to maintainers of @fortawesome the best solution will be to import the icon directly 
 * ! and avoid the library module altogether which is inline with MD loading plans
 * * https://github.com/FortAwesome/Font-Awesome/issues/19348
 *
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {jsx} 	<Icon />
 */
export default function Icon({ icon }) {
	const [iconType, iconKey] = icon;

	return (
		<FontAwesomeIcon icon={[iconType, iconKey]} />
	);
}
