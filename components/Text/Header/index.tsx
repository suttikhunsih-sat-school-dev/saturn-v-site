const Header = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor?: string;
}) => {
  return (
    <h1
      className={`text-6xl font-bold [text-shadow:3px_3px_0_rgba(10,34,51,0.6),0_6px_12px_rgba(0,0,0,0.6)]`}
      style={{
        color: textColor || 'white',
      }}
    >
      {children}
    </h1>
  );
};

export default Header;
