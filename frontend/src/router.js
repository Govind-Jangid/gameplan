import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/daily-planner',
  },
  {
    path: '/daily-planner/:date?',
    name: 'DailyPlanner',
    component: () => import('@/pages/DailyPlanner.vue'),
    props: true,
    children: [
      {
        name: 'DailyPlannerNotes',
        path: 'notes',
        component: () => import('@/pages/DailyPlannerNotes.vue'),
      },
      {
        name: 'DailyPlannerTasks',
        path: 'tasks',
        component: () => import('@/pages/DailyPlannerTasks.vue'),
      },
      {
        name: 'DailyPlannerCalendar',
        path: 'calendar',
        component: () => import('@/pages/DailyPlannerCalendar.vue'),
      },
    ],
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/:teamId',
    name: 'TeamPage',
    component: () => import('@/pages/TeamPage.vue'),
    props: true,
    children: [
      {
        name: 'TeamPageHome',
        path: '',
        component: () => import('@/pages/TeamPageHome.vue'),
      },
      {
        name: 'ProjectDetail',
        path: 'projects/:projectId',
        component: () => import('@/pages/ProjectDetail.vue'),
        props: true,
        children: [
          {
            name: 'ProjectDetailOverview',
            path: '',
            component: () => import('@/pages/ProjectDetailOverview.vue'),
          },
          {
            name: 'ProjectDetailUpdate',
            path: 'status-update',
            component: () => import('@/pages/ProjectDetailUpdate.vue'),
            children: [
              {
                name: 'ProjectDetailUpdateNew',
                path: 'new',
                component: () => import('@/pages/ProjectDetailUpdateNew.vue'),
              }
            ]
          },
          {
            name: 'ProjectDetailTasks',
            path: 'tasks',
            component: () => import('@/pages/ProjectDetailTasks.vue'),
            children: [
              {
                name: 'ProjectTaskDetail',
                path: ':taskId',
                component: () => import('@/pages/ProjectTaskDetail.vue'),
                props: true,
              },
            ],
          },
        ],
      },
      {
        name: 'TeamPageDocuments',
        path: 'documents',
        component: () => import('@/pages/TeamPageDocuments.vue'),
      },
      {
        path: 'document/:documentId/edit',
        name: 'EditDocument',
        component: () => import('@/pages/EditDocument.vue'),
        props: true,
      },
    ],
  },
]

let router = createRouter({
  history: createWebHistory('/teams/'),
  routes,
})

export default router
