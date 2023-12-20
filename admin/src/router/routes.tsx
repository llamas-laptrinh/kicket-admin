import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Tabs from "../pages/Tabs/Tabs"
import Dashboard from "../pages/dashboard";
export const routes = [
    {
        path: '/',
        page: HomePage,
    },
    {
        path: '/Dashboard',
        page: Dashboard,
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