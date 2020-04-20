import React from "react";
import Icon from "./svg_00_main_learning.svg"
import Learning from "./svg_00_main_learning.svg"
import Test from "./svg_01_main_test.svg"
import Basket from "./svg_02_basket.svg"
import Human from "./svg_03_human.svg"
import Request from "./svg_04_requests.svg"
import Book from "./svg_05_book.svg"
import Goal from "./svg_06_goal.svg"
import Finance from "./svg_07_finance.svg"
import Security from "./svg_08_security.svg"
import Book2 from "./svg_09_book2.svg"
import Explore from "./svg_10_explore.svg"
import Filter from "./svg_11_filter.svg"


class svg_01_main_test extends React.Component {
	/*constructor(props) {
		super(props);
	}*/
	render(){
		var width = 30;
		var height = 30;
		var components = {
			"Learning": Learning,
			"Test": Test,
			"Basket": Basket,
			"Human": Human,
			"Request": Request,
			"Book": Book,
			"Goal": Goal,
			"Finance": Finance,
			"Security": Security,
			"Book2": Book2,
			"Explore": Explore,
			"Filter": Filter
		};
		var background_image = Icon;
		if(this.props.icon !== "" && this.props.icon !== undefined && components[this.props.icon]!== undefined){
			background_image = components[this.props.icon];
		}
		if(this.props.size !== "" && this.props.size !== undefined ){
			width  = this.props.size;
			height = this.props.size;
		}
		if(this.props.width !== "" && this.props.width !== undefined ){
			width = this.props.width;
		}
		if(this.props.height !== "" && this.props.height !== undefined ){
			height = this.props.height;
		}
		return(
			<div style={{
				backgroundImage: `url(${background_image})`, 
				width:width+"px",
				height:height+"px",
				display:"inline-block",
				backgroundSize: "contain",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				}}>
			</div>
		)
	}
}
export default svg_01_main_test;