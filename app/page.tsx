import Image from 'next/image';
import NavigationBar from '../components/NavigationBar';

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <Image
        src="/bg-home-page.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="relative w-full h-60 overflow-hidden">
        <Image src="/cover.png" alt="Header" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdeb8c]/40 via-[#356f96]/80 to-[#0f3d63]/80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="flex items-center -mb-3 -mt-3 -space-x-3">
            <Image
              src="/logo1.svg"
              alt="Logo 1"
              width={120}
              height={120}
              className="object-contain"
            />
            <Image
              src="/logo2.svg"
              alt="Logo 2"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <h1 className="text-6xl font-bold text-sat-school-primary-yellow [text-shadow:3px_3px_0_rgba(10,34,51,0.6),0_6px_12px_rgba(0,0,0,0.6)]">
            มูลนิธิโรงเรียนวันเสาร์
          </h1>
          <p className="-mt-1 font-bold text-3xl [text-shadow:1px_1px_0_#90A1B9,0_6px_12px_rgba(0,0,0,0.6)] tracking-wider">
            THE FUTURE OF OUR EDUCATION IS IN YOUR HANDS
          </p>
        </div>
      </div>

      <NavigationBar />
      <div className="mt-6 flex justify-center">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/yqYhS3ncMrY"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
