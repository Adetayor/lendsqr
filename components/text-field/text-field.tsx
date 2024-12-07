'use client';
import React, { useState } from 'react';
import style from './text-field.module.scss';

type InputProps = {
  label?: string;
  rightAddon?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
export function TextField({
  label,
  type,
  name,
  placeholder,
  rightAddon,
}: InputProps) {
  const [show, setShow] = useState(false);
  return (
    <div className={style.input_container}>
      <input
        type={show ? 'text' : type}
        placeholder={placeholder}
        name={name}
      />
      {rightAddon && (
        <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
      )}
    </div>
  );
}
