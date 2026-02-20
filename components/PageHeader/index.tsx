import Image from 'next/image';
import Text from '../Text';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  subtitleHighlight?: string;
  logoSrc?: string;
  logoAlt?: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  subtitleHighlight,
  logoSrc = '/logo1.svg',
  logoAlt = 'Saturn V Logo',
  backgroundImage = '/saturn-v-project-page-bg-header-removebg-preview.png',
}: PageHeaderProps) {
  return (
    <div
      className="flex gap-0 items-stretch mb-8 md:mb-1 bg-cover bg-no-repeat relative h-32 md:h-44"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Logo Container - Positioned on the left */}
      <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0 flex items-center justify-center pt-6 pr-2">
        <div className="w-16 h-16 md:w-40 md:h-40 relative">
          <Image src={logoSrc} alt={logoAlt} fill className="object-contain" priority />
        </div>
      </div>

      {/* Text Container - Positioned on the right side of background */}
      <div className="flex-1 px-6 md:px-12 flex flex-col justify-center">
        <Text.Header textColor="white">{title}</Text.Header>
        <Text.Header textColor="white">
          {subtitle}{' '}
          {subtitleHighlight && (
            <span className="text-sat-school-secondary-yellow">{subtitleHighlight}</span>
          )}
        </Text.Header>
      </div>
    </div>
  );
}
