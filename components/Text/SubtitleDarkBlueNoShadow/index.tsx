const Subtitle = ({
  textColor,
  className,
  children,
}: {
  textColor?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={`text-4xl font-semibold ${className || ''}`}
      style={{
        color: textColor ? textColor : '#0e3c73', // Default to dark blue if no textColor is provided
      }}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
