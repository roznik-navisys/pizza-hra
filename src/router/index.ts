import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../App.vue'),
        name: 'App',
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: 'teachers',
                name: 'Teachers',
                component: () => import('../views/Teachers.vue'),
            },
            {
                path: 'intro',
                name: 'Intro',
                component: () => import('../views/Intro.vue'),
            },
            {
                path: 'game',
                name: 'Game',
                redirect: { name: 'ArticleIntro' },
                component: () => import('../views/Game.vue'),
                children: [
                    {
                        path: 'article-intro',
                        name: 'ArticleIntro',
                        meta: { label: 'Úvod', next: 'Magazine' },
                        component: () => import('../views/game-content/ArticleIntro.vue'),
                    },
                    {
                        path: 'magazine',
                        name: 'Magazine',
                        meta: { label: 'Časopis', prev: 'ArticleIntro', next: 'News' },
                        component: () => import('../views/game-content/Magazine.vue'),
                    },
                    {
                        path: 'news',
                        name: 'News',
                        meta: { label: 'Uniklé zprávy', prev: 'Magazine', next: 'Posts' },
                        component: () => import('../views/game-content/News.vue'),
                    },
                    {
                        path: 'posts',
                        name: 'Posts',
                        meta: { label: 'Příspěvky', prev: 'News', next: 'ArticleOnline' },
                        component: () => import('../views/game-content/Posts.vue'),
                    },
                    {
                        path: 'article-online',
                        name: 'ArticleOnline',
                        meta: { label: 'Online článek', prev: 'Posts', next: 'Video' },
                        component: () => import('../views/game-content/ArticleOnline.vue'),
                    },
                    {
                        path: 'video',
                        name: 'Video',
                        meta: { label: 'Video', prev: 'ArticleOnline', next: 'Ending' },
                        component: () => import('../views/game-content/Video.vue'),
                    },
                    {
                        path: 'ending',
                        name: 'Ending',
                        meta: { label: 'Závěr', prev: 'Video' },
                        component: () => import('../views/game-content/Ending.vue'),
                    },
                ],
            },
            {
                path: 'conclusion',
                name: 'Conclusion',
                component: () => import('../views/Conclusion.vue'),
            },
        ],
    },
    { 
        path: '/:pathMatch(.*)*',
        redirect: { name: 'Home' },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((r) => {
    if (r.name === 'Home' && localStorage.getItem('group')) {
        router.push({ name: 'Intro' });
    }
    if (['Game', 'Conclusion', 'Intro'].includes(r.matched[1]?.name as string) && !localStorage.getItem('group')) {
        router.push({ name: 'Home' });
    }
});

export default router;
