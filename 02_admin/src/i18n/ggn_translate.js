const ggn_translate = (obj,verb) => {
	//console.log(obj.hasOwnProperty(verb));
	/*console.log(obj);*/
	if(obj.hasOwnProperty(verb)){
		return obj[verb];
	}
	return verb;
};
export default ggn_translate