import SubProjectPageContent from '../../../components/ProjectPage/SubProjectPageContent';

export default function Teacherpreneur() {
  return (
    <SubProjectPageContent
      logoList={[
        { src: '/logo-main-black.png', alt: 'Logo sat school black' },
        { src: '/logo3.svg', alt: 'Logo saturn v black' },
      ]}
      pageTitle="Saturday School Saturn V Project"
      pageSubtitle="Teacherpreneur (Deloitte)"
      projectObjective="โครงการปั้นผู้ประกอบการรุ่นเยาว์
      เป็นความร่วมมือระหว่างมูลนิธิโรงเรียนวันเสาร์และบริษัท ดีลอยท์ ประเทศไทย
      มีเป้าหมายเพื่อศักยภาพของครูในการส่งเสริมการเรียนรู้ด้านแนวคิด
      และทักษะความเป็นผู้ประกอบการให้กับนักเรียน และพัฒนาทักษะและความรู้ของเยาวชน
      การสร้างความรู้และทักษะที่เกี่ยวข้องกับการเป็นผู้ประกอบการ"
      projectContent1="ได้รับความรู้และวิธีคิดแบบผู้ประกอบการ ทักษะการทำธุรกิจ
      และแลกเปลี่ยนไอเดียในการเป็นผู้ประกอบการทำธุรกิจ"
      postProjectTitle="สิ่งที่คุณครูจะได้หลังจากจบโครงการ"
      postProjectOutcome="ผู้เข้าร่วมโครงการจะได้รับการเสริมทักษะและวิธีคิดแบบผู้ประกอบการ
      ผ่านกิจกรรมอบรมเชิงปฎิบัติการ
      โดยวิทยากรผู้เชี่ยวชาญและนำองค์ความรู้ที่ได้ไปจัดแผนการสอนเพื่อนำไปสอนกับนักเรียน"
      participantNumbers={{
        students: 100,
        volunteers: 20,
        teachers: 10,
      }}
      imageGruopSrc="/techerpreneur-right-image-group.png"
      videoSrc="https://www.youtube.com/embed/pqXOhziHf0U"
    />
  );
}
