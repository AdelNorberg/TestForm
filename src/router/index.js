import Vue from 'vue'
import Router from 'vue-router'

import SignIn from './../pages/SignIn'
import SignUp from './../pages/SignUp'
import Home from './../pages'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		},
		{
			path: '/sign-in',
			component: SignIn,
			name: 'sign-in'
		},
		{
			path: '/sign-up',
			component: SignUp,
			name: 'sign-up'
		}
	]
})

export default router