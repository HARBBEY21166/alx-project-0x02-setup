// components/common/Button.tsx
import { ButtonProps } from '@/interfaces';

const Button = ({ size = 'medium', shape = 'rounded-md', children, onClick, className = '' }: ButtonProps) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        bg-blue-500
        hover:bg-blue-600
        text-white
        font-medium
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;