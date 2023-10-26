import {classNames} from 'shared/lib/classNames/classNames';
import {memo, useState} from 'react';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import {SidebarItemList} from "widgets/Sidebar/model/items";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";



interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div className={cls.item}>
                    {SidebarItemList.map((item) => (
                        <SidebarItem
                            item={item}
                            collapsed={collapsed}
                            key={item.path}
                        />
                    ))}
                </div>


            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
});