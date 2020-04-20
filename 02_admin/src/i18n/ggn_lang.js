const ggn_lang = (lng) => {
	switch (lng) {
		case 'fa':
			return require('./fa');
		case 'en':
			return require('./en');
		/*case 'fr':
			return require('./fr');*/
		default:
			return require('./en');
	};
};
export default ggn_lang(process.env.REACT_APP_Lng).default;