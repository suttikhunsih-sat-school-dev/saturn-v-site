import SubProjectPageContent from '../../../components/ProjectPage/SubProjectPageContent';

export default function Esports() {
  return (
    <SubProjectPageContent
      logoList={[
        { src: '/logo-main-black.png', alt: 'Logo sat school black' },
        { src: '/logo3.svg', alt: 'Logo saturn v black' },
        { src: '/logo-esport-1.png', alt: 'Logo SEA', size: 50 },
        { src: '/logo-esport-2.png', alt: 'Logo GARENA Academy', size: 100 },
        { src: '/logo-esport-3.png', alt: 'Logo GARENA', size: 60 },
      ]}
      pageTitle="Saturday School Saturn V Project"
      pageSubtitle="Garena ห้องเรียน ESPORTS"
      projectObjective="บริษัท การีนา ออนไลน์ (ประเทศไทย) จำกัด ได้ร่วมมือกับมูลนิธิโรงเรียนวันเสาร์ในการพัฒนาหลักสูตรห้องเรียน Esports จำนวน 40 ชั่วโมง  ที่ครูสามารถนำไปใช้สอนในโรงเรียนได้ทั้งในวิชาหลัก วิชาเสริม หรือชั่วโมงกิจกรรม       โดยครูและบุคคลทั่วไปสามารถใช้ได้ฟรี และมีจัดการแข่งขัน Esports เพื่อชิงทุนการศึกษาโดยได้รับทุนการศึกษาสำหรับการเรียนต่อระดับปริญญาตรีที่มหาวิทยาลัยธุรกิจบัณฑิตย์ ในคณะด้านนิเทศศาสตร์ และ Esports โดยไม่มีค่าใช้จ่าย"
      projectContent1="ให้น้องๆได้เรียนรู้เกี่ยวกับความหลากหลายของอาชีพในวงการอีสปอร์ต เช่น นักพากย์ โค้ช สื่อ นักข่าว และผู้จัดการแข่งขัน"
      postProjectTitle="สิ่งที่นักเรียนจะได้หลังจากจบโครงการ"
      postProjectOutcome="ได้รับทุนการศึกษาจากมหาวิทยาลัยธุรกิจบัณฑิตย์ และได้รับทักษะทั้งด้าน Hard skills เช่น ทักษะการจัดแข่ง Esport tournament ทักษะการใช้ภาษาในการพากย์ การทำ Artwork รวมถึง Soft Skills เช่น ความคิดแบบพัฒนาได้ (Growth Mindset)"
      participantNumbers={{
        students: 2000,
        volunteers: 50,
        teachers: 10,
      }}
      imageGruopSrc="/esportImage.png"
      videoSrc="https://www.youtube.com/embed/ZicFYDQItgM"
    />
  );
}
