const MiniYellowCard = ({
  description,
  imageSrc,
}: {
  description: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex bg-sat-school-secondary-yellow text-sat-school-dark-blue p-4 rounded-4xl m-2 w-48 h-10 text-center text-xl font-bold  items-center justify-center">
      <img src={imageSrc} alt="Mini Yellow Card Icon" className="w-8 h-8 mr-2" />
      {description}
    </div>
  );
};

export default MiniYellowCard;
