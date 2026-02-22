import Image from 'next/image';
import Text from '../Text';

interface ReportInfoBoxProps {
  imageSrc: string;
  title: string;
  body: string;
  imageAlt?: string;
}

const ReportInfoBox = ({
  imageSrc,
  title,
  body,
  imageAlt = 'Info Icon',
}: ReportInfoBoxProps) => {
  return (
    <div className="bg-sat-school-secondary-yellow rounded-3xl p-2 flex items-center gap-0 max-h-[130px]">
      <div className="relative w-32 h-32 rounded-2xl flex items-center justify-center">
        <Image src={imageSrc} alt={imageAlt} fill className="object-contain rounded" />
      </div>
      <div className="text-black pl-4 pr-4">
        <Text.Subtitle textColor="black">{title}</Text.Subtitle>
        <p className="text-black text-[25px] whitespace-pre-line -mt-2">{body}</p>
      </div>
    </div>
  );
};

export default ReportInfoBox;
