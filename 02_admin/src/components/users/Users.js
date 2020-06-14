import React from 'react';
import Grid from '@material-ui/core/Grid';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import ggn_lang from '../../i18n/ggn_lang';

class Users extends React.Component {
	state = {
		isLoading: false,
		load_table: [],
		data: [],
		page:0,
		count:0,
	}
	componentDidMount() {
		var token = window.localStorage.getItem('Godgiven_admin_token');
		this.setState({
			isLoading: true
		});
		// check if logged in user hase watched any video or not
		fetch(process.env.REACT_APP_Url+"/users?limit=100", {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			//credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${token}`,
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client
			// body: JSON.stringify(data), // body data type must match "Content-Type" header
			})
			.then(response => response.json())
			.then(result => {
				if (!result.validate) {
					window.localStorage.removeItem('Godgiven_admin_token');
				} else {
					this.setState({
						data: result.data,
						count: result.count,
						isLoading: false,
					},()=>{
						this.setState({
							load_table: result.data.slice(0, 10)
						});
					});
				}
			});
	}
	change_page = ( Table ) => {
		var token = window.localStorage.getItem('Godgiven_admin_token');
		this.setState({
			isLoading: true
		});

		var offset = Table.page * Table.rowsPerPage;
		var count_need = offset + Table.rowsPerPage;
		var local_count = Object.keys(this.state.data).length;
		console.log(count_need == parseInt(this.state.count));
		if(count_need <= local_count){
			this.setState({
				load_table: this.state.data.slice(offset, Table.rowsPerPage),
				isLoading: false
			});
		}else if(local_count == parseInt(this.state.count)){
			this.setState({
				load_table: this.state.data.slice(offset, local_count),
				isLoading: false
			});
		}else{
			fetch(process.env.REACT_APP_Url+"/users", {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			//credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${token}`,
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client
			// body: JSON.stringify(data), // body data type must match "Content-Type" header
			})
			.then(response => response.json())
			.then(result => {
				if (!result.validate) {
					window.localStorage.removeItem('Godgiven_admin_token');
				} else {
					this.setState({
						data: 		result.data,
						count: 		result.count,
						isLoading: 	false
					});
				}
			});
		}
	}
	render() {	
		const columns = [
			{ 
				name:"per_Fname",
				label: "نام",
				options: {
					display: true,
					filter: false,
					sort: false,
				}
			},
			{ 
				name:"per_Lname",
				label: "نام خانوادگی",
				options: {
					display: true,
					filter: false,
					sort: false,
				}
			}, 
			{ 
				name:"per_mobile",
				label: "شماره همراه",
				options: {
					display: true,
					filter: false,
					sort: false,
				}
			}, 
			{ 
				name:"per_email",
				label: "ایمیل",
				options: {
					display: false,
					filter: false,
					sort: false,
				}
			}, 
			{ 
				name:"per_job",
				label: "شغل",
				options: {
					display: true,
					filter: false,
					sort: false,
				}
			},
			{ 
				name:"per_education",
				label: "تحصیلات",
				options: {
					display: true,
					filter: false,
					sort: false,
				}
			}, 
			{ 
				name:"per_state",
				label: "استان",
				options: {
					display: false,
					filter: false,
					sort: false,
				}
			}, 
			{ 
				name:"per_city",
				label: "شهرستان",
				options: {
					display: false,
					filter: false,
					sort: false,
				}
			},
			{ 
				name:"per_national_id",
				label: "کد ملی",
				options: {
					display: true,
					filter: false,
					sort: false,
				}
			}, 
			{ 
				name:"per_personality",
				label: "نوع",
				options: {
					display: true,
					filter: false,
					sort: false,
				}
			}, 
			{ 
				name:"per_address",
				label: "آدرس",
				options: {
					display: false,
					filter: false,
					sort: false,
				}
			},
		];
		const { load_table, page, count, isLoading } = this.state;
		const options = {
			filter: true,
			selectableRows: "none",
			filterType: 'dropdown',
			responsive: 'stacked',
			serverSide: true,
			count: count,
			page: page,
			onTableChange: (action, tableState) => {
				console.log(action, tableState);
				// a developer could react to change on an action basis or
				// examine the state as a whole and do whatever they want

				switch (action) {
					case 'changePage':
					this.change_page(tableState);
					//console.log(tableState);
					break;
				}
			},
			textLabels: {
				body: {
					noMatch: ggn_lang.MUIDataTable.body.noMatch,
					toolTip: ggn_lang.MUIDataTable.body.toolTip,
					columnHeaderTooltip: ggn_lang.MUIDataTable.body.columnHeaderTooltip
				},
				pagination: {
					next: ggn_lang.MUIDataTable.pagination.next,
					previous: ggn_lang.MUIDataTable.pagination.previous,
					rowsPerPage: ggn_lang.MUIDataTable.pagination.rowsPerPage,
					displayRows: ggn_lang.MUIDataTable.pagination.displayRows,
				},
				toolbar: {
					search: ggn_lang.MUIDataTable.toolbar.search,
					downloadCsv: ggn_lang.MUIDataTable.toolbar.downloadCsv,
					print: ggn_lang.MUIDataTable.toolbar.print,
					viewColumns: ggn_lang.MUIDataTable.toolbar.viewColumns,
					filterTable: ggn_lang.MUIDataTable.toolbar.filterTable,
				},
				filter: {
					all: ggn_lang.MUIDataTable.filter.all,
					title: ggn_lang.MUIDataTable.filter.title,
					reset: ggn_lang.MUIDataTable.filter.reset,
				},
				viewColumns: {
					title: ggn_lang.MUIDataTable.viewColumns.title,
					titleAria: ggn_lang.MUIDataTable.viewColumns.titleAria,
				},
				selectedRows: {
					text: ggn_lang.MUIDataTable.selectedRows.text,
					delete: ggn_lang.MUIDataTable.selectedRows.delete,
					deleteAria: ggn_lang.MUIDataTable.selectedRows.deleteAria,
				},
			}
		}
		return (
			<React.Fragment>
				
					{ 
						true ?
						<div>
							<MUIDataTable title={
							<Typography variant="title">
							{ggn_lang.panel.Persons}
							{isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
							</Typography>
							} data={load_table} columns={columns} options={options} />
						</div>
						:
						<div>
							<div>
								<Skeleton animation="wave" />
								<Skeleton animation={false} />
								<Skeleton />
								<br/>
								<Skeleton />
								<Skeleton animation={false} />
								<Skeleton />
								<br/>
								<Skeleton />
								<Skeleton animation={false} />
								<Skeleton animation="wave" />
							</div>
						</div>
					}
			</React.Fragment>	 
		);
	}
}

export default Users;