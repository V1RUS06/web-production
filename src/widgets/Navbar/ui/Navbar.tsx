import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </div>
  );
};
