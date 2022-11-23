// assets
import { PrecisionManufacturingOutlined, ShoppingCartOutlined, ShopOutlined } from '@mui/icons-material';
// import { DashboardOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// icons
// const icons = {
//     DashboardOutlined,
//     ShoppingCartOutlined
// };

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-inventory',
    title: 'Inventory',
    type: 'group',
    children: [
        {
            id: 'thynkWebsite',
            title: 'Thynk Website',
            type: 'item',
            url: '/inventory/thynk-website',
            icon: ShoppingCartOutlined,
            breadcrumbs: false
        },
        {
            id: 'seedWebsite',
            title: 'Seed Website',
            type: 'item',
            url: '/inventory/seed-website',
            icon: ShopOutlined,
            breadcrumbs: false
        },
        {
            id: 'thynkInternal',
            title: 'Thynk Internal',
            type: 'item',
            url: '/inventory/thynk-internal',
            icon: PrecisionManufacturingOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
