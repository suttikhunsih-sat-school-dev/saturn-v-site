const Subtitle = ({
  textColor,
  className,
  children,
  fontSize = '42px',
  noShadow,
}: {
  textColor?: string;
  className?: string;
  fontSize?: string;
  children: React.ReactNode;
  noShadow?: boolean;
}) => {
  return (
    <h2
      className={`text-[42px] font-semibold ${className || ''}`}
      style={{
        color: textColor ? textColor : '#1855a5',
        textShadow: noShadow
          ? 'none'
          : `
          1.5px 1px 0 rgba(0,0,0,0.2),
          1.5px 1px 0 rgba(0,0,0,0.2),
          1.5px 1px 0 rgba(0,0,0,0.2)
        `,
        fontSize,
      }}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
