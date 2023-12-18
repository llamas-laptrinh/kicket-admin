import DashBoad from "../pages/dashboard";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Tabs from "../pages/Tabs/Tabs"

export const routes = [
    {
        path: '/',
        page: DashBoad,
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