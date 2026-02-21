import Image from 'next/image';
import FormatCampBox from '../../components/FormatPage';
import Text from '../../components/Text';
export default function Format() {
  return (
    <div className="relative min-h-screen text-white">
      <Image
        src="/bg-home-page.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="w-full h-[40px] bg-sat-school-dark-blue absolute top-0 left-0"></div>
      <div className="w-full absolute top-0 left-[50%] transform -translate-x-1/2 flex items-center justify-center gap-4 py-2">
        <div className="w-[480px] h-[80px] bg-sat-school-dark-blue text-center text-white font-bold text-xl rounded-4xl flex items-center justify-center">
          <Text.Header noShadow>รูปแบบการจัดโครงการ</Text.Header>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-1 gap-6 px-4 md:px-20 pt-26">
        <div className="flex flex-col gap-6">
          <FormatCampBox
            formatTitle={'Camp'}
            formatBulletPoint1={'จัดเป็นช่วงเวลา ต่อเนื่องหลายวัน'}
            formatBulletPoint2={'ผู้เข้าร่วมมีการพักค้างคืน หรืออยู่ร่วมกันทั้งวัน'}
            formatBulletPoint3={
              'เน้นกิจกรรมที่มีการเรียนรู้แบบมีประสบการณ์จริง (experiential learning)'
            }
            formatBulletPoint4={
              'เหมาะสำหรับการสร้างทักษะ ทีมเวิร์ก ประสบการณ์ร่วม และการพัฒนาเชิงลึก'
            }
            imageSrc={'/format-img-1.png'}
          />
          <FormatCampBox
            formatTitle={'Workshop'}
            formatBulletPoint1={'ระยะสั้น ครึ่งวันถึง 1 วัน'}
            formatBulletPoint2={'เน้นปฏิบัติจริงแบบ “ลงมือทำทันที”'}
            formatBulletPoint3={
              'ผู้เข้าร่วมได้เรียนรู้ทักษะเฉพาะทางอย่างรวดเร็ว และมีผลลัพธ์ทันที'
            }
            formatBulletPoint4={
              'เหมาะกับการฝึกทักษะเฉพาะจุด เช่น การพูด การเขียน การทำสื่อ'
            }
            imageSrc={'/format-img-2.png'}
            imageOption={{
              width: 200,
              height: 200,
              left: 16,
              top: -10,
            }}
          />
          <FormatCampBox
            formatTitle={'Course'}
            formatBulletPoint1={'จัดแบบต่อเนื่องหลายสัปดาห์หรือหลายเดือน หลาย Module'}
            formatBulletPoint2={'มีโครงสร้างการเรียนรู้เป็นระบบ'}
            formatBulletPoint3={'มีการวัดผล เช่น การบ้าน แบบทดสอบ หรือโปรเจกต์'}
            formatBulletPoint4={'เหมาะกับการพัฒนาความรู้แบบลึกและเป็นขั้นตอน'}
            imageSrc={'/format-img-3.png'}
            imageOption={{
              width: 260,
              height: 260,
              left: 1,
              top: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
}
