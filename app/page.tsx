import Image from "next/image";
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
      <div className="relative w-full h-64">
        <Image
          src="/header.png"
          alt="Header"
          fill
          className="object-cover"
        />
      </div>
      <NavigationBar />
       <div className="mt-6 flex justify-center">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/watch?v=yqYhS3ncMrY"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl shadow-lg"
        />
        </div>
    </div>
  );
}
