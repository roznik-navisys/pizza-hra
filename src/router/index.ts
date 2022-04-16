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
                path: 'intro',
                name: 'Intro',
                component: () => import('../views/Intro.vue'),
            },
            {
                path: 'game',
                name: 'Game',
                component: () => import('../views/Game.vue'),
                children: [
                    {
                        path: 'article',
                        name: 'Article',
                        meta: { name: 'Online článek', next: 'Magazine' },
                        component: () => import('../views/game-content/Article.vue'),
                    },
                    {
                        path: 'magazine',
                        name: 'Magazine',
                        meta: { name: 'Časopis', prev: 'Article', next: 'News' },
                        component: () => import('../views/game-content/Magazine.vue'),
                    },
                    {
                        path: 'news',
                        name: 'News',
                        meta: { name: 'Uniklé zprávy', prev: 'Magazine', },
                        component: () => import('../views/game-content/Magazine.vue'),
                    },
                ],
            },
        ],
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
