import SubProjectPageContent from '../../../components/ProjectPage/SubProjectPageContent';

export default function MediaLiteracy() {
  return (
    <SubProjectPageContent
      logoList={[
        { src: '/logo-main-black.png', alt: 'Logo sat school black' },
        { src: '/logo3.svg', alt: 'Logo saturn v black' },
      ]}
      pageTitle="Saturday School Saturn V Project"
      pageSubtitle="โครงการ ส่งเสริมการรู้เท่าทันสื่อออนไลน์ (Media Literacy)"
      projectObjective="สำนักการศึกษา กรุงเทพมหานคร ร่วมมือกับ มูลนิธิโรงเรียนวันเสาร์ และ TikTok เพื่อเสริมสร้างทักษะการรู้เท่าทันและใช้สื่อสังคมออนไลน์อย่างปลอดภัยและสร้างสรรค์ในหมู่นักเรียนระดับมัธยมศึกษา"
      projectContent1="สร้างทักษะการคิดวิเคราะห์สื่ออย่างมีวิจารณญาณ ส่งเสริมการเป็นผู้ใช้และผู้ผลิตสื่อที่มีความรับผิดชอบต่อสังคมช่วยพัฒนาความคิดแบบพัฒนาได้ (Growth Mindset)"
      postProjectTitle="สิ่งที่นักเรียนจะได้หลังจากจบโครงการ"
      postProjectOutcome="นักเรียนมีความรู้ความเข้าใจเรื่องการรู้เท่าทันสื่อบนโลกออนไลน์มากขึ้น มีความกล้าแสดงออก และมีสติในการใช้สื่ออย่างปลอดภัย"
      participantNumbers={{
        students: 500,
        volunteers: 35,
        teachers: 10,
      }}
      imageGruopSrc="/media-literacy-group-image.png"
      videoSrc="https://www.youtube.com/embed/yqYhS3ncMrY"
    />
  );
}
