import React , { Component } from 'react'
import Topnavbar from '../header/Topnavbar'
import Icon from '@material-ui/core/Icon'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MaterialTable , { MTableToolbar } from 'material-table'
import { pushRotate as GGn_anonymous } from 'react-burger-menu'
import { withRouter } from 'react-router-dom'
import ggn_dataProvider from '../../ggn_dataProvider'
import Star_builder from '../main/star_builder'
import translate from '../../i18n/ggn_translate'
import ggn_lang from '../../i18n/ggn_lang'
class show_user extends Component {
	state = {
		data: null
	}
	componentWillReceiveProps(){
		this.setState({ 
			data: this.props.data
		});
	}
	update_user_state = (e) => {
		var user_id  = this.state.data.per_user_id;
		console.log(user_id);
		if(user_id !== false){
			var anonymous_user = ggn_dataProvider('PATCH' , '/users/'+user_id , { status: e.target.value });
			/*this.setState({ 
				data: anonymous_user,
			});*/
		}
	}
	render(){
		var data = this.state.data;
		if(data !== null){
			return(
				<div className="anonymous-detail">
					<div className="title is-5">کابر انتخابی</div>
					<figure className="image is-64x64">
						<img className="is-rounded" src="assets/images/profile_pic.jpg"/>
					</figure>
					<div className="container">	
						<span>نام و نام خانوادگی: </span>{data.per_Fname}
						<br/>
						<span>نام طرح: </span>{data.full_name_1}
						<br/>
						<span>آیا طرح دارای تاییدیه و یا گواهینامه می باشد ?: </span>{data.Certificates_1}
						<br/>
						<span>سطح طرح : </span>{translate(ggn_lang.dashboard.sath_tarh,data.sath_tarh_1)}
						<br/>
						<span>آیا طرح وارد بازار شده است ? </span>{translate(ggn_lang.dashboard.bazar_forosh,data.bazar_forosh_1)}
						<br/>
						<hr/>
						<div className="control">
							وضعیت:&nbsp;
							<div className="select is-small">
								<select onClick={this.update_user_state} defaultValue={data.status}>
									<option value="-1">{translate(ggn_lang.dashboard.status ,"-1")}</option>
									<option value="0">{translate(ggn_lang.dashboard.status ,"0")}</option>
									<option value="1">{translate(ggn_lang.dashboard.status ,"1")}</option>
									<option value="2">{translate(ggn_lang.dashboard.status ,"2")}</option>
								</select>
							</div>							
						</div><br/>
						<br/>
						<span>وضعیت : </span> {translate(ggn_lang.dashboard.status,data.status)}
						<br/>
						<span>شماره ثابت : </span>{data.per_tell}
						<br/>
						<span>شماره همراه : </span>{data.per_mobile}
						<br/>
						<span>تحصیلات : </span>{translate(ggn_lang.dashboard.education,data.per_education)}
						<br/>
						<span>شغل : </span>{data.per_job}
						<br/>
						<span>مهارت ها : </span>{data.skills_1}
						<br/>
						<span>آدرس : </span>{data.per_address}
						<hr/>
						<span>بازار و مشتری محصول خود را در حد یک پاراگراف بیان نمایید: </span>{data.bazar_forosh_des_1}
						<br/>
						<span>به نظر شما نقاط ضعف  شما برای ورود به بازار چیست؟ ( این رویداد چه کمکی به شما میتواند بکند): </span>{data.bazar_forosh_weakness_1}
						<br/>
						<span>توضیحات طرح: </span>{data.description_1}
						<div className="is-clearfix"></div>
					</div>
					<div className="is-clearfix"></div>
				</div>
			);
		}
		else{
			return(
				<div className="anonymous-detail">
					لطفا یک کاربر را انتخاب کنید.
				</div>
			);
		}
	}
}
export default show_user;