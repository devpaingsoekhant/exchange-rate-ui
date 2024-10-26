import { FaHome, FaUserFriends,FaShoppingCart   } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
const MenuData = [
    {
        id: 1,
        title: "MAIN",
        listItems: [
            {
                id: 1,
                title: "Home",
                url: "/admin-panel/dashboard",
                img: <FaHome />
            },
            {
                id: 2,
                title: "Profile",
                url: "/admin-panel/profile",
                img: <FaUserFriends />
            },
        ]
    },
    {
        id: 2,
        title: "LIST",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/admin-panel/users",
                img: <FaHome />
            },
            {
                id: 2,
                title: "Exchanges",
                url: "/admin-panel/exchanges",
                img: <MdCurrencyExchange />
            },
            {
                id: 3,
                title: "Orders",
                url: "/admin-panel/orders",
                img: <FaShoppingCart />
            },
        ]
    },
    {
        id: 3,
        title: "REPORTS",
        listItems: [
            {
                id: 1,
                title: "Exchange reports",
                url: "/admin-panel/exchange-reports",
                img: <FaHome />
            },
            {
                id: 2,
                title: "User reports",
                url: "/admin-panel/user-reports",
                img: <MdCurrencyExchange />
            },
            {
                id: 3,
                title: "Others",
                url: "/admin-panel/others",
                img: <FaShoppingCart />
            },
        ]
    },
    {
        id: 4,
        title: "LOGS",
        listItems: [
            {
                id: 1,
                title: "Logs",
                url: "/admin-panel/logs",
                img: <TbReportAnalytics />
            },
            {
                id: 2,
                title: "Notification",
                url: "/admin-panel/notification",
                img: <TbReportAnalytics />
            },
        ]
    }
];

export default MenuData