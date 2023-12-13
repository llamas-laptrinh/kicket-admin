import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Tabs from "../pages/Tabs/Tabs"

export const routes = [
    {
        path: '/',
        page: HomePage,
    },
    {
        path: '/tabs',
        page: Tabs,
    },
    {
        path: '*',
        page: NotFoundPage,
    }
]