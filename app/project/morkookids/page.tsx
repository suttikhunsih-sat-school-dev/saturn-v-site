import SubProjectPageContent from '../../../components/ProjectPage/SubProjectPageContent';

export default function MorekoKids() {
  return (
    <SubProjectPageContent
      logoList={[
        { src: '/logo-main-black.png', alt: 'Logo sat school black' },
        { src: '/logo3.svg', alt: 'Logo saturn v black' },
      ]}
      pageTitle="Saturday School Saturn V Project"
      pageSubtitle="โครงการ หมอคู่คิดส์ใส่ใจ สุขภาพเด็กไทย ดีถ้วนหน้า"
      projectObjective="ต้องการให้ผู้ปกครองของเด็กๆ ที่ด้อยโอกาสและเข้าถึงระบบรักษาพยาบาลได้ยาก สามารถปรึกษาและขอคำแนะนำจากคุณหมอที่เชี่ยวชาญเฉพาะด้าน (กุมารแพทย์) ได้โดยไม่มีค่าใช้จ่าย และมีการคัดเลือกนักเรียน ให้ได้รับการดูแลและปรึกษาผ่านบริการเรียลไทม์แชทและวิดีโอคอลผ่านแอปพลิเคชันหมอคู่คิดส์เป็นระยะเวลา 6 เดือนโดยไม่มีค่าใช้จ่าย"
      projectContent1="ได้รับความรู้เกี่ยวกับด้านการดูแลสุขภาพทั้งร่างการ และจิตใจ"
      postProjectTitle="สิ่งที่เด็กจะได้ประโยชน์"
      postProjectOutcome="การรับรู้และเข้าใจตนเอง (Self Awareness) , ความคิดแบบพัฒนาได้ (Growth Mindset)"
      participantNumbers={{
        students: 14,
        volunteers: 20,
        teachers: 10,
      }}
      imageGruopSrc="/morkookids-image-group.png"
      videoSrc="https://www.youtube.com/embed/yqYhS3ncMrY"
    />
  );
}
