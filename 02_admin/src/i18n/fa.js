export default {
	AppName: "پنل مدیریت گادگیون",
	education:{
		'No formal education':"بدون آموزش رسمی",
		'Primary education':"آموزش ابتدایی",
		'Secondary education or high school':"آموزش متوسطه یا دبیرستان",
		'GED or Vocational qualification':"دیپلم",
		'Associate’s Degree': "",
		'Bachelor’s degree':"کارشناسی",
		'Master’s degree':"کارشناسی ارشد",
		'Doctorate':"دکترا",
		'Doctorate and Higher':"دکترا و بالاتر"
	},
	auth:{
		username: 'نام کاربری',
		password: 'رمز عبور',
		login: 'ورود',
		register_tex: "هنوز عضو نشدید؟ از طریق این لینک به ما بپیوندید! :)",
		success_login: "در حال وارد شدن ...",
		error_login:{
			"please input username and password":"لطفا نام کاربری و رمز عبور خود را وارد کنید",
			"Username or password is not correct":"لطفا نام کاربری و رمز عبور خودر را به درستی وارد کنید",
			"Your account is block":"حساب کاربری شما مسدود شده است.",
		},
		error_register: {
			"Please enter your username.":"لطفا نام کاربری خود را وارد کنید.",
			"This username already exists.":"این نام کاربری در سیستم موجود است.",
			"Please enter your phone number.": "لطفا شماره همراه خود را وارد کنید",
			"This phone number already exists.": "این شماره همراه در سیستم موجود است.",
			"Please enter your email address.": "لطفا آدرس پست الکترونیکی خود را وارد کنید",
			"This email address already exists.": "این آدرس پست الکترونیکی در سیستم موجود است.",
			"Please enter correct email.": "لطفا آدرس پست الکترونیکی خود را به درستی وارد کنید",
			"Please enter your information.": "لطفا اطلاعات خود را تکمیل کنید",
			"Please enter your full name.": "لطفا نام و نام خانوادگی خود را وارد کنید",
			"Your password and confirm password do not match.": "رمز عبور و تاییدیه رمز عبور یکی نیستند",
			"Pleas enter your password.": "لطفا رمز عبور خود را وارد کنید",
		},
		success_register: "ثبت نام با موفقیت انجام شد. شما میتوانید وارد شوید",
		register: 'ثبت نام',
		firstname: 'نام',
		lastname: 'نام خانوادگی',
		parent: 'نام پدر / نام شرکت',
		address: 'آدرس',
		phone: 'شماره همراه',
		email: 'آدرس پست الکترونیکی',
		confirm: 'تایید رمز عبور',
		login_text: "آیا قبلا ثبت نام کرده اید؟ وارد شوید. :)",
	},
	panel:{
        Dashboard: "داشبورد",
        PersonsManagement: "مدیریت افراد",
        AddPerson: "اضافه کردن فرد",
        Persons: "افراد",
        DefineUser: "تعریف کاربر",
        Users: "کاربران",
        Blocks: "مسدود شده ها",
        Disables: "غیر فعال ها"
    },
    MUIDataTable:{
		body: {
			noMatch: "متاسفانه موردی پیدا نشد",
			toolTip: "مرتب کردن",
			columnHeaderTooltip: column => `مرتب کردن با ${column.label}`
		},
		pagination: {
			next: "صفحه بعدی",
			previous: "صفحه قبلی",
			rowsPerPage: "تعداد رکورد ها در هر صفحه:",
			displayRows: "از",
		},
		toolbar: {
			search: "جستجو",
			downloadCsv: "دانلود اکسل",
			print: "پرینت",
			viewColumns: "مشاهده ستون ها",
			filterTable: "فیلتر کردن",
		},
		filter: {
			all: "همه",
			title: "فیلتر شده",
			reset: "ریست",
		},
		viewColumns: {
			title: "مشاهده ستون ها",
			titleAria: "نمایش و پنهان کردن ستون ها",
		},
		selectedRows: {
			text: "ستون های انتخاب شده",
			delete: "پاک کردن",
			deleteAria: "پاک کردن ستون های انتخاب شده",
		},
	}
};
