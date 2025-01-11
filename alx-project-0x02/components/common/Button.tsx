import React from 'react';
import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
  const sizeClasses = {
    small: 'py-1 px-2',
    medium: 'py-2 px-4',
    large: 'py-3 px-6',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button className={`${sizeClasses[size]} ${shapeClasses[shape]}`}>
      {children}
    </button>
  );
};

export default Button;