const Subtitle = ({
  textColor,
  className,
  children,
  fontSize = '42px',
}: {
  textColor: string;
  className?: string;
  fontSize?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={`text-[42px] font-semibold ${className || ''}`}
      style={{
        color: textColor,
        textShadow: `
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
