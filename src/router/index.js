import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('/src/components/dashboard.vue'),
    },
    {
      path: '/identify',
      name: 'Identify',
      component: () => import('/src/components/identify.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('/src/components/login.vue'),
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('/src/components/registration.vue'),
    },
    {
      path: '/admin-login',
      name: 'Admin-Login',
      component: () => import('/src/components/adminlogin.vue'),
    },
    {
      path: '/edit-profile',
      name: 'Edit-Profile',
      component: import('/src/components/editprofile.vue'),
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('/src/components/logout.vue'),
    },
    {
      path: '/remove-specific-data',
      name: 'Remove-Specific-data',
      component: () => import('/src/components/removespecificdata.vue'),
    },
        {
      path: '/show-all-data',
      name: 'Show-All-data',
      component: () => import('/src/components/showalldata.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404Page',
      component: () => import('/src/components/404page.vue'),
    },
  ],
})

export default router
