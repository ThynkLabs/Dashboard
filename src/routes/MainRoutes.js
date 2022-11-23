import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

//Custom Screens
const ThynkInternal = Loadable(lazy(() => import('pages/inventory/ThynkInternal')));
const ThynkWebsite = Loadable(lazy(() => import('pages/inventory/ThynkWebsite')));
const SeedWebsite = Loadable(lazy(() => import('pages/inventory/SeedWebsite')));
const WhatsApp = Loadable(lazy(() => import('pages/crm/WhatsApp')));
const Sms = Loadable(lazy(() => import('pages/crm/Sms')));
const Notification = Loadable(lazy(() => import('pages/crm/Notification')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        // Add Our Custom Components Here in similar way
        {
            path: 'inventory',
            children: [
                {
                    path: 'thynk-website',
                    element: <ThynkWebsite />
                },
                {
                    path: 'seed-website',
                    element: <SeedWebsite />
                },
                {
                    path: 'thynk-internal',
                    element: <ThynkInternal />
                }
            ]
        },
        {
            path: 'crm',
            children: [
                {
                    path: 'whatsapp',
                    element: <WhatsApp />
                },
                {
                    path: 'sms',
                    element: <Sms />
                },
                {
                    path: 'notification',
                    element: <Notification />
                }
            ]
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
