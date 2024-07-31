import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  radius?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  color = '#000000', // default color set to black
  radius = '20px', // default border-radius
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        borderRadius: radius,
        padding: '6px 40px',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: "normal",
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
