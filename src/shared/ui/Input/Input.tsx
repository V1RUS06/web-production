import React, {
  InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' >

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autofocus?: boolean;

}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={classNames(cls.placeholder)}>
          {`${placeholder} >`}
        </div>
      )}
      <div>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onHandleChange}
          className={cls.input}
          {...otherProps}
        />
      </div>

    </div>
  );
});
