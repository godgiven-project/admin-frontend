export default {
	AppName: "Godgiven admin",
	auth:{
		username: 'Username',
		password: 'Password',
		login: 'login',
		register_tex: "هنوز عضو نشدید؟ از طریق این لینک به ما بپیوندید! :)",
		success_login: "Go to pnale ...",
		error_login:{
			"please input username and password":"Please input username and password",
			"Username or password is not correct":"Username or password is not correct",
			"Your account is block":"Your account is block",
		},
		error_register: {
			"Please enter your username.":"Please enter your username.",
			"This username already exists.":"This username already exists.",
			"Please enter your phone number.": "Please enter your phone number.",
			"This phone number already exists.": "This phone number already exists.",
			"Please enter your email address.": "Please enter your email address.",
			"This email address already exists.": "This email address already exists.",
			"Please enter correct email.": "Please enter correct email.",
			"Please enter your information.": "Please enter your information.",
			"Please enter your full name.": "Please enter your full name.",
			"Your password and confirm password do not match.": "Your password and confirm password do not match.",
			"Pleas enter your password.": "Pleas enter your password.",
		},
		success_register: "ثبت نام با موفقیت انجام شد. شما میتوانید وارد شوید",
		register: 'register',
		firstname: 'firstname',
		lastname: 'lastname',
		parent: 'نام پدر / نام شرکت',
		address: 'address',
		phone: 'sell phone',
		email: 'email',
		confirm: 'confirm password',
		login_text: "آیا قبلا ثبت نام کرده اید؟ وارد شوید. :)",
	},
	panel:{
		Dashboard: "Dashboard",
		PersonsManagement: "Persons management",
		AddPerson: "Add person",
		Persons: "Persons",
		DefineUser: "Define user",
		Users: "Users",
		Blocks: "Blocks",
		Disables: "Disables"
	},
	MUIDataTable:{
		body: {
			noMatch: "Sorry, no matching records found",
			toolTip: "Sort",
			columnHeaderTooltip: column => `Sort for ${column.label}`
		},
		pagination: {
			next: "Next Page",
			previous: "Previous Page",
			rowsPerPage: "Rows per page:",
			displayRows: "of",
		},
		toolbar: {
			search: "Search",
			downloadCsv: "Download CSV",
			print: "Print",
			viewColumns: "View Columns",
			filterTable: "Filter Table",
		},
		filter: {
			all: "All",
			title: "FILTERS",
			reset: "RESET",
		},
		viewColumns: {
			title: "Show Columns",
			titleAria: "Show/Hide Table Columns",
		},
		selectedRows: {
			text: "row(s) selected",
			delete: "Delete",
			deleteAria: "Delete Selected Rows",
		},
	}
};
