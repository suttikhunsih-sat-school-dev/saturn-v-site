const Header = ({
  children,
  textColor,
  noShadow,
  fontSize,
}: {
  children: React.ReactNode;
  textColor?: string;
  noShadow?: boolean;
  fontSize?: string;
}) => {
  return (
    <h1
      className={`text-6xl font-bold`}
      style={{
        color: textColor || 'white',
        textShadow: noShadow
          ? 'none'
          : '3px 3px 0 rgba(10,34,51,0.6), 0 6px 12px rgba(0,0,0,0.6)',
        fontSize,
      }}
    >
      {children}
    </h1>
  );
};

export default Header;
