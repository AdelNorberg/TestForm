import router from './../router'

const state = {
	loading: false,
	isLogin: false
}

const mutations = {
	loading: (state) => state.loading = !state.loading,
	isLogin: (state, payload) => state.isLogin = payload
}

const actions = {
	signIn ({commit}, values) {
		commit('loading')
		// Sending data to the server. Sign in req
		setTimeout(() => {
			commit('loading')
			router.push('/')
		}, 1000)
		
		commit('isLogin', true)
	},
	signUp ({commit}, values) {
		commit('loading')
		// Sending data to the server. Register req
		setTimeout(() => {
			commit('loading')
			router.push('/')
		}, 1000)
		
		commit('isLogin', true)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}