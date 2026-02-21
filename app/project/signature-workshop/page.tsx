import SubProjectPageContent from '../../../components/ProjectPage/SubProjectPageContent';

export default function SignatureWorkshop() {
  return (
    <SubProjectPageContent
      logoList={[
        { src: '/logo-main-black.png', alt: 'Logo sat school black' },
        { src: '/logo3.svg', alt: 'Logo saturn v black' },
      ]}
      pageTitle="Saturday School Saturn V Project"
      pageSubtitle="Signature Workshop"
      projectObjective="ห้องเรียนเวิร์กช็อปสำหรับผู้ที่เชื่อว่า ห้องเรียนไม่ควรมีแค่คำตอบที่ถูกต้อง แต่เป็นพื้นที่ที่ปลอดภัยสำหรับการเรียนรู้และเติบโตของทุกคนเหมาะสำหรับผู้อยากสร้างการเปลี่ยนแปลงในห้องเรียน หลักคิดที่ไม่เพียงแต่ช่วยให้กล้าลองผิดลองถูก เรียนรู้จากความล้มเหลว แต่ยังช่วยให้ได้ทบทวนวิธีคิดของตนเอง เปิดใจต่อความหลากหลาย และนำไปสู่ห้องเรียนด้วยพลังใหม่"
      projectContent1="เข้าใจหลักการของ Growth Mindset และเห็นภาพการนำไปใช้จริง"
      postProjectTitle="สิ่งที่เด็กจะได้ประโยชน์"
      postProjectOutcome="ได้ฝึกวิธีการสื่อสารที่ช่วย สร้างแรงจูงใจในการเรียนรู้ของเด็ก และได้แลกเปลี่ยนประสบการณ์และไอเดียกับผู้เข้าร่วม"
      participantNumbers={{
        students: 14,
        volunteers: 20,
        teachers: 25,
      }}
      imageGruopSrc="/signature-workshop-image-group.png"
    />
  );
}
