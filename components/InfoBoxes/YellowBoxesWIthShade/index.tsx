interface YellowBoxesWithShadeProps {
  title: string;
  body: string;
}
const YellowBoxesWithShade = ({ title, body }: YellowBoxesWithShadeProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default YellowBoxesWithShade;
