import Image from 'next/image';
import ProjectBluBox from '../../components/ProjectPage/ProjectBluBox';
import Text from '../../components/Text';
export default function Project() {
  const projectBoxes = [
    {
      title: 'Project Career & Future Skills',
      items: [
        { label: 'Teacherpreneur', navLink: '#' },
        { label: 'ท้องเรียน ESPORTs', navLink: '#' },
        { label: 'โครงการ สู่สเสริมทักษะ', navLink: '#' },
        { label: 'UnPlug Coding', navLink: '#' },
      ],
      imageSrc: '/cover.png',
      imageAlt: 'Project Career & Future Skills',
    },
    {
      title: 'Environment',
      items: [{ label: 'Recycling Education', navLink: '#' }],
      subtitle: 'ศูนย์เชื่อฯ-เด็มปนำลาดาธ-เอียกทีกอบบ ของโครงการนี้ฉ',
      imageSrc: '/bg-home-page.jpg',
      imageAlt: 'Environment Project',
    },
    {
      title: 'Project Health',
      items: [
        { label: 'Workshop Healthy Gameplay', navLink: '#' },
        { label: 'โครงการ "หมอศิลคิสีใจได้สุขภาพเด็กไทย คิดวันนั้น"', navLink: '#' },
      ],
      imageSrc: '/cover.png',
      imageAlt: 'Project Health',
    },
    {
      title: 'Project 4 Core Values',
      items: [
        { label: 'Growth mindset : Signature Workshop', navLink: '#' },
        { label: 'Self Awareness', navLink: '#' },
        { label: 'Resilience', navLink: '#' },
        { label: 'Prosocial Behavior : Public Goods Game', navLink: '#' },
      ],
      imageSrc: '/bg-home-page.jpg',
      imageAlt: 'Project 4 Core Values',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0 pb-12 md:pb-16">
      <Image
        src="/bg-home-page.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      {/* Header Section */}
      <div className="bg-[#1855a5] px-4 md:px-8 md:py-2 mb-8 md:mb-12 rounded-b-3xl shadow-md mt-10 ml-4">
        <div className="container mx-auto flex gap-4 md:gap-6 items-start md:items-center">
          <div>
            <Text.Header textColor="white">SATURDAY SCHOOL</Text.Header>
            <Text.Header textColor="white">
              SATURN V PROJECT{' '}
              <span className="text-sat-school-secondary-yellow">ทำอะไรได้บ้าง</span>
            </Text.Header>
          </div>
        </div>
      </div>

      {/* Blue Boxes Grid */}
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projectBoxes.map((box, index) => (
            <ProjectBluBox
              key={index}
              title={box.title}
              list={box.items}
              imgSrc={box.imageSrc}
              imageAlt={box.imageAlt}
              subtitle={box.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
