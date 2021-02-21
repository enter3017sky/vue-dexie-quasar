const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'add', component: () => import('pages/Editor.vue') },
      {
        path: 'edit/:noteId',
        component: () => import('pages/Editor.vue'),
        props({ params }) {
          params.noteId = +params.noteId;
          return params;
        },
      },

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
