import React from "react";
import AboutIcon from 'shared/assets/icons/aboutuspage.svg'
import MainIcon from 'shared/assets/icons/mainpage.svg'
import ProfileIcon from 'shared/assets/icons/profilepage.svg'
import {RoutePath} from "shared/config/routeConfig/routeConfig";
export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль'
    }
]