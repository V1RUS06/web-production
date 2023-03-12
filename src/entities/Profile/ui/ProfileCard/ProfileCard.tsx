import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;

}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={classNames(cls.header)}>
        <Text text={t('Профиль')} />
        <Button theme={ButtonTheme.OUTLINE} className={classNames(cls.editBtn)}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={classNames(cls.data)}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={classNames(cls.input)}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваше фамилия')}
          className={classNames(cls.input)}
        />
      </div>
    </div>
  );
};
