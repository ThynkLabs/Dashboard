import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-inventory',
    title: 'CRM',
    type: 'group',
    children: [
        {
            id: 'whatsapp',
            title: 'WhatsApp',
            type: 'item',
            url: '/crm/whatsapp',
            icon: WhatsAppIcon,
            breadcrumbs: false
        },
        {
            id: 'sms',
            title: 'SMS',
            type: 'item',
            url: '/crm/sms',
            icon: SmsOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'notification',
            title: 'Notification',
            type: 'item',
            url: '/crm/notification',
            icon: NotificationsActiveOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
