import Image from 'next/image';
import Link from 'next/link';
import MiniYellowCard from '../../MiniYellowCard';
import Text from '../../Text';
import WhiteDotSpan from '../../WhiteDot';
import LogoGroupTopSubPage from '../LogoGroupTopSubPage';
interface SubProjectPageContentProps {
  logoList: {
    src: string;
    alt: string;
  }[];
  pageTitle: string;
  pageSubtitle: string;
  projectObjective: string;
  projectContent1: string;
  postProjectTitle: string;
  postProjectOutcome: string;
  participantNumbers: {
    students: number;
    volunteers: number;
    teachers: number;
  };
  imageGruopSrc: string;
  videoSrc?: string;
}
const SubProjectPageContent = ({
  logoList,
  pageTitle,
  pageSubtitle,
  projectObjective,
  projectContent1,
  postProjectTitle,
  postProjectOutcome,
  participantNumbers,
  imageGruopSrc,
  videoSrc,
}: SubProjectPageContentProps) => {
  return (
    <div className="flex">
      {/* Back Button - Floating */}
      <Link
        href="/project"
        className="fixed top-8 left-8 z-30 inline-flex items-center gap-2 px-5 py-2 bg-sat-school-dark-blue text-white font-bold rounded-full hover:bg-sat-school-blue transition-colors shadow-md"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        กลับไปยังโครงการ
      </Link>

      {/* text content */}
      <div className="p-10 pt-2 w-[60%]">
        <div className="flex justify-center items-center h-[70px] mt-2">
          {/* logos */}
          <LogoGroupTopSubPage logoList={logoList} />
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* Page Title */}
          <Text.Subtitle textColor="#1855a5" fontSize="50px">
            {pageTitle}
          </Text.Subtitle>
          <Text.SubtitleDarkBlueNoShadow textColor="#0e3c73">
            {pageSubtitle}
          </Text.SubtitleDarkBlueNoShadow>
        </div>
        {/* text box */}
        {/* dark box, project objective */}
        <div className="p-2 bg-sat-school-dark-blue rounded-2xl flex justify-start items-start mt-6 py-6">
          <WhiteDotSpan />
          <p className="text-2xl text-white px-2 font-bold">
            <span className="text-2xl text-sat-school-primary-yellow">
              รายละเอียดโครงการ :{' '}
            </span>
            {projectObjective}
          </p>
        </div>
        {/* two blue box - project content */}
        <div className="p-2 bg-sat-school-blue rounded-2xl flex justify-start items-start mt-6 py-6">
          <WhiteDotSpan />
          <p className="text-2xl text-white px-2 font-bold">
            <span className="text-2xl text-sat-school-primary-yellow">
              ความถนัดและความรู้ด้านต่าง ๆ :{' '}
            </span>
            {projectContent1}
          </p>
        </div>
        <div className="p-2 bg-sat-school-blue rounded-2xl flex justify-start items-start mt-6 py-6">
          <WhiteDotSpan />
          <p className="text-2xl text-white px-2 font-bold">
            <span className="text-2xl text-sat-school-primary-yellow">
              {postProjectTitle} :{' '}
            </span>
            {postProjectOutcome}
          </p>
        </div>
        {/* number card section */}
        <div className="flex mt-4">
          <MiniYellowCard
            description={`นักเรียน ${participantNumbers.students} คน`}
            imageSrc="/students.png"
          />
          <MiniYellowCard
            description={`อาสา ${participantNumbers.volunteers} คน`}
            imageSrc="/teacher-female.png"
          />
          <MiniYellowCard
            description={`คุณครู ${participantNumbers.teachers} คน`}
            imageSrc="/teacher-with-board.png"
          />
        </div>
      </div>
      {/* image content */}
      <div className="p-10 pt-4 pl-0 w-[50%] flex flex-col justify-start items-center">
        <Image
          src={imageGruopSrc}
          alt="Teacherpreneur Image"
          className="object-cover rounded-lg"
          width={700}
          height={700}
        />
        {/* video */}
        {videoSrc && (
          <div className="mt-3 flex justify-center">
            <iframe
              width="628"
              height="276"
              src={videoSrc}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SubProjectPageContent;
