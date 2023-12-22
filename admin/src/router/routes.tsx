import DashBoad from "../pages/dashboard";
import Services from '../pages/Servicess';
import Plans from '../pages/Plans';
import APIkey from '../pages/ApiKey';
import AccessControls from '../pages/AccessControls'
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


export const routes = [
    {
        path: '/',
        page: DashBoad,
    },
    {
        path: '/Services',
        page: Services,
    },
    {
        path: '/Plans',
        page: Plans,
    },
    {
        path: '/APIkeys',
        page: APIkey,
    },
    {
        path: '/AccessControls',
        page: AccessControls,
    },
    {
        path: '*',
        page: NotFoundPage,
    }
]