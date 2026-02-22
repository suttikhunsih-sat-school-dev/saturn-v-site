import Image from 'next/image';

interface ReportImageCardProps {
  mainImage: string;
  mainAlt: string;
  badgeIcon: string;
  badgeText: string;
}

export default function ReportImageCard({
  mainImage,
  mainAlt,
  badgeIcon,
  badgeText,
}: ReportImageCardProps) {
  return (
    <div className="relative overflow-visible h-60 w-100 border-4 border-sat-school-dark-blue">
      {/* Main Image */}
      <Image src={mainImage} alt={mainAlt} fill className="object-cover" />

      {/* Top Left Badge */}
      <div className="absolute -top-4 -left-8 flex items-center z-30">
        {/* Icon */}
        <div className="relative w-10 h-10">
          <Image src={badgeIcon} alt="Badge Icon" fill className="object-contain" />
        </div>

        {/* Text */}
        <div className="border-4 border-sat-school-primary-yellow text-sat-school-blue px-2 -py-3 rounded-xl text-lg font-bold bg-white tracking-wide -ml-2">
          {badgeText}
        </div>
      </div>
    </div>
  );
}
