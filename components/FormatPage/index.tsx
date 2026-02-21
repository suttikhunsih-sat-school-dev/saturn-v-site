import Image from 'next/image';
import Text from '../Text';
interface FormatCampBoxProps {
  formatTitle: string;
  formatBulletPoint1: string;
  formatBulletPoint2: string;
  formatBulletPoint3: string;
  formatBulletPoint4: string;
  imageSrc: string;
  imageOption?: {
    width: number;
    height: number;
    left?: number;
    top?: number;
  };
}
const FormatCampBox = ({
  formatTitle,
  formatBulletPoint1,
  formatBulletPoint2,
  formatBulletPoint3,
  formatBulletPoint4,
  imageSrc,
  imageOption = { width: 200, height: 200 },
}: FormatCampBoxProps) => {
  return (
    <div>
      <div className="relative">
        <div>
          <Image
            src="/camp-format-content-text-container.png"
            alt="Format container"
            width={960}
            height={380}
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="flex">
          <div
            style={{
              top: imageOption.top || 20,
              left: imageOption.left || 40,
            }}
            className="absolute flex items-start justify-start"
          >
            <Image
              src={imageSrc}
              alt="Format container"
              width={imageOption.width}
              height={imageOption.height}
              className="object-cover rounded-xl "
            />
          </div>

          <div className="absolute top-[-6px] left-63 inset-0 flex items-start justify-start bg-sat-school-secondary-yellow rounded-2xl h-full w-[700px] p-4 pt-0">
            <div>
              <div className="sticky">
                <Text.Subtitle noShadow fontSize="44px">
                  {formatTitle}
                </Text.Subtitle>
              </div>
              <ul className="sticky list-disc list-inside text-[26px] font-bold text-black leading-[1.3] mt-[-6px]">
                <li>{formatBulletPoint1}</li>
                <li>{formatBulletPoint2}</li>
                <li>{formatBulletPoint3}</li>
                <li>{formatBulletPoint4}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormatCampBox;
