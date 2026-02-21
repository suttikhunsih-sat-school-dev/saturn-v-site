import SubProjectPageContent from '../../../components/ProjectPage/SubProjectPageContent';

export default function RecyclingEducation() {
  return (
    <SubProjectPageContent
      logoList={[
        { src: '/logo-main-black.png', alt: 'Logo sat school black' },
        { src: '/logo3.svg', alt: 'Logo saturn v black' },
      ]}
      pageTitle="Saturday School Saturn V Project"
      pageSubtitle="Recycling Education ครูชวนแยก"
      projectObjective="กิจกรรมที่เชิญชวนคุณครูที่อยากตั้งใจจะเปลี่ยนแปลงสังคมและสิ่งแวดล้อม เข้าร่วมเวิร์กช็อปให้ผู้เข้าร่วมมีความรู้เกี่ยวกับการแยกขยะพลาสติกเพื่อนำกับมารีไซเคิล และนำความรู้มาขยายผลในชั้นเรียนต่อ"
      projectContent1="ได้แนวทางจัดการเรียนรู้แบบใหม่หลังจากที่ได้เรียนรู้หลักสูตร Recycling Education  ซึ่งเป็นหลักสูตรที่มุ่งเน้นให้มีความรู้และความตระหนักเกี่ยวกับขยะและเข้าใจถึงพลาสติกประเภทต่างๆ และการคัดแยกที่ถูกต้องตั้งแต่ต้นทาง เพื่อส่งเสริมให้เกิดการนำกลับเข้าสู่กระบวนการรีไซเคิล"
      postProjectTitle="สิ่งที่เด็กจะได้ประโยชน์"
      postProjectOutcome="เพื่อพัฒนาทักษะต่าง ๆ ที่เกี่ยวข้องกับการแก้ปัญหา (Problem Solving), ความคิดแบบพัฒนาได้ (Growth Mindset) และความคิดสร้างสรรค์ (Creativity)"
      participantNumbers={{
        students: 100,
        volunteers: 2,
        teachers: 20,
      }}
      imageGruopSrc="/recycling-image-group.png"
      videoSrc="https://www.youtube.com/embed/yqYhS3ncMrY"
    />
  );
}
