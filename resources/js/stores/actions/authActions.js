const auth_actions = {
	logout: (state) => {
        axios.post('/admin/director/master/logout&user')
			.then(response => {
				state.commit('LOGOUT', response.data)
			})      
	},
	login: (state, user) => {
        axios.post('login/user&get&auth', user)
		.then(response => {
			console.log(response.data)
		})      
	},  
	getUsers: (state) => {
		axios.post('/admin/director/master/get&all&users')
			.then(response => {
				state.commit('GET_USERS', {users: response.data.users, addresses: response.data.addresses})
			})    
	},

}


export default auth_actions