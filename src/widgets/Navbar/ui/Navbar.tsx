import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classNames(cls.mainLink)}>Главная</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
    </div>

  </div>
);
