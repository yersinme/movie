import type {IMenuItem} from "~/layouts/default/interfaces";

export const MENU_ITEMS: [IMenuItem[], IMenuItem[], IMenuItem[]] = [
    [
        {
            icon: "film",
            title: "Home",
            route: "/",
        },
        {
            icon: "heart",
            title: "favourites",
            route: "/favourites",
        },
        {
            icon: "trending-up",
            title: "Trending",
            route: "/trending",
        },
        {
            icon: "calendar",
            title: "Coming soon",
            route: "/Coming",
        }
    ],
    [
        {
            icon: "users",
            title: "Community",
            route: "/Community",
        },
        {
            icon: "message-circle",
            title: "Social",
            route: "/Social",
        }
    ],
    [
        {
            icon: "sliders",
            title: "Settings",
            route: "/Settings",
        }
    ]
]