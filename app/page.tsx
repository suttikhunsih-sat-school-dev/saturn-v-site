import Image from 'next/image';
import NavigationBar from '../components/NavigationBar';
import Text from '../components/Text';
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
      {/* Header Section */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 overflow-hidden">
        <Image src="/cover.png" alt="Header" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdeb8c]/40 via-[#356f96]/80 to-[#0f3d63]/80"></div>

        {/* Logo and Title Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Logos */}
          <div className="flex items-center -mb-1 sm:-mb-2 md:-mb-3 -space-x-1 sm:-space-x-2 md:-space-x-3">
            <Image
              src="/logo1.svg"
              alt="Logo 1"
              width={80}
              height={80}
              className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
            />
            <Image
              src="/logo2.svg"
              alt="Logo 2"
              width={80}
              height={80}
              className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
            />
          </div>

          {/* Header Text */}
          <Text.Header textColor="#fdeb6b">มูลนิธิโรงเรียนวันเสาร์</Text.Header>

          {/* Tagline */}
          <p className="mt-1 sm:mt-2 font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl [text-shadow:1px_1px_0_#90A1B9,0_6px_12px_rgba(0,0,0,0.6)] tracking-wider">
            THE FUTURE OF OUR EDUCATION IS IN YOUR HANDS
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex justify-center px-4 py-2">
        <NavigationBar />
      </div>

      {/* YouTube Section */}
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex justify-center px-4">
        <div className="w-full max-w-2xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yqYhS3ncMrY"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg sm:rounded-xl shadow-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
