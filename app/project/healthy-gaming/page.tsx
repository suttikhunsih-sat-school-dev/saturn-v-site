import SubProjectPageContent from '../../../components/ProjectPage/SubProjectPageContent';

export default function HealthyGaming() {
  return (
    <SubProjectPageContent
      logoList={[
        { src: '/logo-main-black.png', alt: 'Logo sat school black' },
        { src: '/logo3.svg', alt: 'Logo saturn v black' },
      ]}
      pageTitle="Saturday School Saturn V Project"
      pageSubtitle="Workshop Healthy Gaming"
      projectObjective="Tencent ร่วมกับมูลนิธิโรงเรียนวันเสาร์ จัดโครงการ Healthy Gaming ซึ่งเป็น Workshop ที่ช่วยให้ผู้ปกครองและเด็กเข้าใจมุมมองใหม่เกี่ยวกับการเล่นเกม พร้อมใช้เกมเป็นเครื่องมือสร้างความสัมพันธ์ในครอบครัว"
      projectContent1="ผู้ปกครองและนักเรียนจากโรงเรียนที่   เข้าร่วมได้รับความรู้จากผู้เชี่ยวชาญด้านจิตวิทยาเด็กและครอบครัวเกี่ยวกับการสื่อสารเชิงบวก และการพูดคุยเรื่องเกมในครอบครัวอย่างสร้างสรรค์"
      postProjectTitle="สิ่งที่เด็กจะได้ประโยชน์"
      postProjectOutcome="การเรียนรู้ การคิดเชิงตรรกะ (Logical Thinking), การแก้ปัญหา (Problem Solving), การจัดการเวลาและความเร็ว (Time Management and Speed) และความคิดสร้างสรรค์ (Creativity)"
      participantNumbers={{
        students: 80,
        volunteers: 15,
        teachers: 10,
      }}
      imageGruopSrc="/healthy-gaming-image-group.png"
      videoSrc="https://www.youtube.com/embed/yqYhS3ncMrY"
    />
  );
}
