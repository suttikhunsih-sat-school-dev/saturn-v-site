import SubProjectPageContent from '../../../components/ProjectPage/SubProjectPageContent';

export default function CgdUnplugCoding() {
  return (
    <SubProjectPageContent
      logoList={[
        { src: '/logo-main-black.png', alt: 'Logo sat school black' },
        { src: '/logo3.svg', alt: 'Logo saturn v black' },
      ]}
      pageTitle="Saturday School Saturn V Project"
      pageSubtitle="CDG Unplug Coding"
      projectObjective="มูลนิธิโรงเรียนวันเสาร์ และกลุ่มบริษัทซีดีจี จัดกิจกรรมอบรมเชิงปฏิบัติการ เพื่อส่งเสริมทักษะกระบวนการคิดแก่นักเรียนภายใต้โครงการอบรมเชิงปฏิบัติการเกม “Unplugged Coding”"
      projectContent1="ส่งเสริมให้การเรียนรู้ในด้านการกระตุ้นการเรียนรู้, การคิดเชิงตรรกะ (Logical Thinking), การแก้ปัญหา (Problem Solving), การจัดการเวลาและความเร็ว (Time Management and Speed) และความคิดสร้างสรรค์ (Creativity)"
      postProjectTitle="สิ่งที่เด็กจะได้ประโยชน์"
      postProjectOutcome="เพื่อพัฒนาทักษะต่าง ๆ ที่เกี่ยวข้องกับการคิดเชิงตรรกะ (Logical Thinking), การแก้ปัญหา (Problem Solving), การจัดการเวลาและความเร็ว (Time Management and Speed) และความคิดสร้างสรรค์ (Creativity)"
      participantNumbers={{
        students: 80,
        volunteers: 10,
        teachers: 10,
      }}
      imageGruopSrc="/unplug-coding-image-group.png"
    />
  );
}
