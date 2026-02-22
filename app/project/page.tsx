import PageHeader from '../../components/PageHeader';
import ProjectBluBox from '../../components/ProjectPage/ProjectBluBox';
export default function Project() {
  const projectBoxes = [
    {
      title: 'PROJECT CAREER & FUTURE SKILLS',
      items: [
        { label: 'Teacherpreneur', navLink: '/project/teacherpreneur' },
        { label: 'ห้องเรียน ESPORTs', navLink: '/project/esports' },
        {
          label: 'โครงการ ส่งเสริมการรู้เท่าทันสื่อออนไลน์',
          navLink: '/project/media-literacy',
        },
        { label: 'UnPlug Coding', navLink: '/project/cgd-unplug-coding' },
      ],
      imageSrc: '/pic4-1.jpeg',
      imageAlt: 'Project Career & Future Skills',
    },
    {
      title: 'ENVIRONMENT',
      items: [
        {
          label: 'Recycling Education ครูชวนแยก',
          navLink: '/project/recycling-education',
        },
      ],
      subtitle: 'ศูนย์เชื่อฯ-เด็มปนำลาดาธ-เอียกทีกอบบ ของโครงการนี้ฉ',
      imageSrc: '/pic4-2.jpeg',
      imageAlt: 'Environment Project',
    },
    {
      title: 'PROJECT HEALTH',
      items: [
        { label: 'Workshop Healthy Gameplay', navLink: '/project/healthy-gaming' },
        {
          label: 'โครงการ "หมอคู่คิดใส่ใจสุขภาพเด็กไทย ดีถ้วนหน้า"',
          navLink: '/project/morkookids',
        },
      ],
      imageSrc: '/pic4-3.png',
      imageAlt: 'Project Health',
    },
    {
      title: 'PROJECT 4 CORE VALUES',
      items: [
        {
          label: 'Growth mindset : Signature Workshop',
          navLink: '/project/signature-workshop',
        },
        { label: 'Self Awareness', navLink: '#' },
        { label: 'Resilience', navLink: '#' },
        {
          label: 'Prosocial Behavior : Public Goods Game',
          navLink: '/project/public-good-games',
        },
      ],
      imageSrc: '/pic4-4.png',
      imageAlt: 'Project 4 Core Values',
    },
  ];

  return (
    <div>
      <div className="bg-sat-school-egg-yellow absolute top-0 left-0 w-full h-[100px]"></div>
      {/* Header Section */}
      <div style={{ paddingRight: 0, paddingLeft: 10 }} className="px-4 md:px-8 mt-2">
        <PageHeader
          title="SATURDAY SCHOOL"
          subtitle="SATURN V PROJECT"
          subtitleHighlight="ทำอะไรได้บ้าง?"
          logoSrc="/logo1.svg"
          logoAlt="Saturn V Logo"
        />
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
              isDarkBlue={index % 2 === 0} // Alternate between dark and light blue
            />
          ))}
        </div>
      </div>
    </div>
  );
}
