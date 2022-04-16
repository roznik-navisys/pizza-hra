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
                        path: 'article-intro',
                        name: 'ArticleIntro',
                        meta: { label: 'Úvod', next: 'Magazine' },
                        component: () => import('../views/game-content/ArticleIntro.vue'),
                    },
                    {
                        path: 'magazine',
                        name: 'Magazine',
                        meta: { label: 'Časopis', prev: 'ArticleOnline', next: 'News' },
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
                        meta: { label: 'Online Článek', prev: 'News' },
                        component: () => import('../views/game-content/Posts.vue'),
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
