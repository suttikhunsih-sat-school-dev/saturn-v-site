const SaturnBadge = ({ logoSrc, fill }: { logoSrc: string; fill: string }) => {
  return (
    <div className="w-[120px]">
      <svg viewBox="0 0 420 520" className="w-full h-auto">
        <path
          d="
            M210 0
            Q0 0 0 260
            Q0 520 210 520
            L360 520
            L420 460
            L420 60
            L360 0
            Z
          "
          fill={fill}
        />

        <image href={logoSrc} x="200" y="200" width="200" />
      </svg>
    </div>
  );
};

export default SaturnBadge;
