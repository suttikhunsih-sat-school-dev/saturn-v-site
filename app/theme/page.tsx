import Image from 'next/image';
import YellowBoxesWithBlueShade from '../../components/InfoBoxes/YellowBoxesWithBlueShade';

const boxesData = [
  {
    title: 'SOFT SKILLS',
    body: [
      '• Resilience',
      '• Prosocial Behavior',
      '• Self Awareness',
      '• Growth Mindset',
      '• Hardskill',
      '• Media Literacy',
      '• Financial Skills',
    ],
    imageSrc: '/icon-theme1.png',
    marginTop: 'mt-25',
  },
  {
    title: 'Career & Youth Interest',
    body: [
      '• Entrepreneur',
      '• Film',
      '• Football',
      '• Esports',
      '• Game Development',
      '• Coding',
    ],
    imageSrc: '/icon-theme2.png',
    marginTop: 'mt-5',
  },
  {
    title: 'SOCIAL',
    body: ['• Advocacy', '• Democracy', '• Ambassador'],
    imageSrc: '/icon-theme3.png',
    marginTop: '-mt-15',
  },
  {
    title: 'HEALTH',
    body: ['• Mental', '• Non-communicable diseases (NCDs)', '• Sex education '],
    imageSrc: '/icon-theme4.png',
    marginTop: '-mt-35',
  },
  {
    title: 'Environment & Sustainability',
    body: ['•  Sustainable Development Goals'],
    imageSrc: '/icon-theme5.png',
    marginTop: '-mt-55',
  },
];

export default function Theme() {
  return (
    <div className="relative min-h-screen text-white">
      <Image
        src="/bg-home-page.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      {/* HEADER */}
      <div className="bg-gradient-to-r from-sat-school-dark-blue via-sat-school-blue/50 to-white/0 py-2 px-2">
        <div className="flex items-start justify-start gap-2">
          <div className="flex items-start -space-x-3">
            <Image src="/logo1.svg" alt="Saturn V Logo" width={120} height={120} />
          </div>
          <div className="flex flex-col tracking-widest [text-shadow:2px_2px_0_rgba(10,34,51,0.6)]">
            <div className="text-6xl font-bold text-sat-school-egg-yellow">
              THEME SATURN V
            </div>
            <div className="text-4xl font-bold text-white">
              จุดแข็งขององค์กรที่นำมาพัฒนาศักยภาพของเด็กไทย
            </div>
          </div>
        </div>
      </div>
      {/* BODY */}
      <div className="flex flex-row gap-10 flex-1 justify-center items-center py-0">
        {boxesData.map((box, index) => (
          <YellowBoxesWithBlueShade
            key={index}
            title={box.title}
            body={box.body}
            imageSrc={box.imageSrc}
            marginTop={box.marginTop}
          />
        ))}
      </div>
    </div>
  );
}
