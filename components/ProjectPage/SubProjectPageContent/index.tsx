import Image from 'next/image';
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
  videoSrc: string;
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
      {/* text content */}
      <div className="p-10 pt-2 w-[60%]">
        <div className="flex justify-center items-center h-[70px] mt-2">
          {/* logos */}
          <LogoGroupTopSubPage logoList={logoList} />
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* Page Title */}
          <Text.SubtitleBlue textColor="#1855a5" fontSize="50px">
            {pageTitle}
          </Text.SubtitleBlue>
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
            description={`${participantNumbers.students} คน`}
            imageSrc="/students.png"
          />
          <MiniYellowCard
            description={`${participantNumbers.volunteers} คน`}
            imageSrc="/teacher-female.png"
          />
          <MiniYellowCard
            description={`${participantNumbers.teachers} คน`}
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
      </div>
    </div>
  );
};

export default SubProjectPageContent;
