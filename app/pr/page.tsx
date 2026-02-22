import Image from 'next/image';
import PageHeader from '../../components/PageHeader';
import Text from '../../components/Text';
export default function PR() {
  return (
    <div className="relative min-h-screen text-white">
      <Image
        src="/bg-home-page.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="bg-sat-school-blue absolute top-0 left-0 w-full h-[100px]">
        <div style={{ paddingRight: 0, paddingLeft: 10 }} className="px-4 md:px-8 mt-2">
          <PageHeader
            title="Public Relations  Saturday School"
            subtitle=""
            subtitleHighlight=""
            logoSrc="/logo-main-black.png"
            logoAlt="Sat school Logo"
            backgroundImage="/pr-band-removebg-preview.png"
            textColor="black"
          />
        </div>
      </div>
      <div className="w-full h-full pt-24">
        <div className="w-full grid grid-cols-2 gap-8 px-4 md:px-20 pt-26">
          {/* Facebook Box */}
          <div className="bg-sat-school-dark-blue rounded-3xl p-2 pl-4 flex items-center gap-2 overflow-hidden">
            <div className="w-[120px] h-[120px] bg-white rounded-3xl flex-shrink-0 relative overflow-hidden">
              <Image
                src="/pr-fb.png"
                alt="Facebook"
                fill
                className="object-contain scale-130 "
              />
            </div>
            <a
              href="https://www.facebook.com/SaturdaySchoolThailand"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Text.Subtitle textColor="white">Saturday School</Text.Subtitle>
            </a>
            <div className="bg-sat-school-secondary-yellow rounded-2xl w-[240px] h-[150px] flex items-center justify-center">
              <div className="w-[230px] h-[140px] rounded-2xl flex-shrink-0 relative overflow-hidden">
                <Image
                  src="/pr-fb-thumbnail.jpg"
                  alt="Facebook"
                  fill
                  className="object-contain scale-130 "
                />
              </div>
            </div>
          </div>

          {/* TikTok Box */}
          <div className="bg-sat-school-dark-blue rounded-3xl p-2 pl-4 flex items-center gap-2 overflow-hidden">
            <div className="w-[120px] h-[120px] bg-white rounded-3xl flex-shrink-0 relative overflow-hidden">
              <Image
                src="/pr-tt.png"
                alt="TikTok"
                fill
                className="object-contain scale-386"
              />
            </div>
            <a
              href="https://www.tiktok.com/@saturdayschoolthailand?_r=1&_t=ZS-935PvjYxvFQ"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="flex flex-col justify-center items-center">
                <Text.Subtitle textColor="white">Saturday School</Text.Subtitle>
                <Text.Subtitle textColor="white">Thailand</Text.Subtitle>
              </div>
            </a>
            <div className="bg-sat-school-secondary-yellow rounded-2xl w-[240px] h-[150px] h-full flex items-center justify-center">
              <div className="w-[230px] h-[140px] rounded-2xl flex-shrink-0 relative overflow-hidden">
                <Image
                  src="/pr-tt-tumbnails.jpg"
                  alt="TikTok"
                  fill
                  className="object-contain scale-130 "
                />
              </div>
            </div>
          </div>

          {/* Instagram Box */}
          <div className="bg-sat-school-dark-blue rounded-3xl p-2 pl-4 flex items-center gap-2 overflow-hidden">
            <div className="w-[120px] h-[120px] bg-transparent rounded-3xl flex-shrink-0 relative overflow-hidden">
              <Image
                src="/pr-ig.png"
                alt="Instagram"
                fill
                className="object-contain scale-100"
              />
            </div>
            <a
              href="https://www.instagram.com/saturdayschoolthailand"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="flex flex-col justify-center items-center">
                <Text.Subtitle textColor="white">Saturday School</Text.Subtitle>
                <Text.Subtitle textColor="white">Thailand</Text.Subtitle>
              </div>
            </a>
            <div className="bg-sat-school-secondary-yellow rounded-2xl w-[240px] h-[150px] flex items-center justify-center">
              <div className="w-[230px] h-[140px] rounded-2xl flex-shrink-0 relative overflow-hidden">
                <Image
                  src="/pr-ig-thumbnail.jpg"
                  alt="Instagram"
                  fill
                  className="object-contain scale-130 "
                />
              </div>
            </div>
          </div>

          {/* Website Box */}
          <div className="bg-sat-school-dark-blue rounded-3xl p-2 pl-4 flex items-center gap-2 overflow-hidden">
            <div className="w-[120px] h-[120px] bg-transparent rounded-3xl flex-shrink-0 relative overflow-hidden">
              <Image
                src="/pr-site.png"
                alt="sat-school website"
                fill
                className="object-contain scale-380"
              />
            </div>
            <a
              href="https://saturday-school.org/th"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="flex flex-col justify-center items-center">
                <Text.Subtitle textColor="white">Saturday School</Text.Subtitle>
                <Text.Subtitle textColor="white">Thailand</Text.Subtitle>
              </div>
            </a>
            <div className="bg-sat-school-secondary-yellow rounded-2xl w-[240px] h-[150px] flex items-center justify-center">
              <div className="w-[230px] h-[140px] rounded-2xl flex-shrink-0 relative overflow-hidden">
                <Image
                  src="/pr-site-thumbnail.jpg"
                  alt="Website"
                  fill
                  className="object-contain scale-130 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none pt-0 flex justify-center items-center">
          <Image src="/children-pr-page.png" alt="Website" width={500} height={500} />
        </div>
      </div>
      <div className="bg-sat-school-blue absolute bottom-0 left-0 w-full h-[20px]"></div>
    </div>
  );
}
