import React, { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования errorBoundary
export const BugButton: FC = () => {
  const [error, setError] = React.useState(false);

  const { t } = useTranslation();

  const onThrowError = () => setError(true);

  React.useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrowError}>
      {t('Выбросить ошибку')}
    </Button>
  );
};
