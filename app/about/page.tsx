import YellowBoxesWithShade from '../../components/InfoBoxes/YellowBoxesWIthShade';

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">About</h1>
      <div>
        <YellowBoxesWithShade
          title={'1. ความคิดแบบพัฒนาได้ (Growth Mindset)'}
          body={
            'ความเชื่อและความเข้าใจว่าความสามารถ และสติปัญญาเป็นสิ่งที่พัฒนาเปลี่ยนแปลงได้โดยการใช้เวลาและความพยายาม'
          }
        />
      </div>
    </div>
  );
}
