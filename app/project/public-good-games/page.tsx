import SubProjectPageContent from '../../../components/ProjectPage/SubProjectPageContent';

export default function PublicGoodGames() {
  return (
    <SubProjectPageContent
      logoList={[
        { src: '/logo-main-black.png', alt: 'Logo sat school black' },
        { src: '/logo3.svg', alt: 'Logo saturn v black' },
      ]}
      pageTitle="Saturday School Saturn V Project"
      pageSubtitle="Public Goods Game"
      projectObjective="คณะเศรษฐศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย จัดขึ้นร่วมกับมูลนิธิโรงเรียนวันเสาร์ โดยมีเป้าหมายในการส่งเสริมคุณธรรมสาธารณะให้กับนักเรียนชั้นมัธยมศึกษา ผ่านกิจกรรมการเรียนรู้แบบมีส่วนร่วม เพื่อการพัฒนากระบวนการเรียนรู้เรื่องคุณธรรมสาธารณะผ่านการเล่นเกมสินค้าสาธารณะ"
      projectContent1="การแบ่งปันสิ่งของให้แก่บุคคลอื่นในสังคม โดยนักเรียนจะให้ความสำคัญกับการบริจาคเพื่อประโยชน์สาธารณะ"
      postProjectTitle="สิ่งที่เด็กจะได้ประโยชน์"
      postProjectOutcome="การปรับเปลี่ยนพฤติกรรม และความคิด ที่สามารถนำไปใช้ในการเรียนรู้แบบมีประสบการณ์เพื่อส่งเสริมพฤติกรรมเอื้อต่อสังคม (Prosocial Behavior)"
      participantNumbers={{
        students: 758,
        volunteers: 88,
        teachers: 10,
      }}
      imageGruopSrc="/public-good-games-image-group.png"
    />
  );
}
