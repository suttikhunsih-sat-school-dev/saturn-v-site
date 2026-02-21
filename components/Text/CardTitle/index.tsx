import React from 'react';

const CardTitle = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor?: string;
}) => {
  return (
    <h1
      className="text-2xl md:text-4xl font-bold tracking-wide"
      style={{
        color: textColor || '#000000',
        textShadow: `
          1.5px 1px 0 rgba(0,0,0,0.2),
          1.5px 1px 0 rgba(0,0,0,0.2)
        `,
      }}
    >
      {children}
    </h1>
  );
};

export default CardTitle;
