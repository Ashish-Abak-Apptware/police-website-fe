import Image from "next/image";
import Link from "next/link";

export default function SocialMediaFeed() {
  return (
    <section className="flex justify-center bg-white font-khand">
        <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] py-[50px] w-full px-4">
      {/* Existing sections here... */}

      {/* Social Media Feed Section */}
      <div className="mt-16">
        <h2 className="xl:text-h3RegularKhand text-h4MediumKhand font-bold mb-2 text-Natural-Gray-20">सोशल मीडिया फीड आणि अपडेट्स</h2>
        <p className="text-Natural-Gray-20 mb-6 text-p3ExtraLightInter xl:text-sH1RegularKhand">पोलिस विभागाच्या अधिकृत सोशल मीडिया फीडमधील ताज्या घडामोडी आणि महत्वाच्या अपडेट्स मिळवा.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Side - Main Video or Image Block */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Link href="https://www.facebook.com/NashikCityPolice" target="_blank">
                  <Image src="/assets/socialMedia.png" alt="मुख्य बातमी" width={800} height={450} className="rounded-xl w-full h-auto" />
                </Link>
              </div>
             
            </div>
            <div className="mt-4">
              <p className="text-Natural-Gray-20 xl:text-h6RegularKhand text-sH1RegularKhand">
                नागरिकांकडून पोलिस आयुक्त यांच्या व्हॉट्सअॅप क्रमांक 99 233 233 11 तसेच सोशल मीडियावर प्राप्त झालेल्या
                अ‍ॅक्शनच्या आधारे ऑटो-रिक्शा नियमांचे उल्लंघन करणाऱ्या वाहनांवर कारवाई. ही आमची मोहिम सुरु आहे.
              </p>
              <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter text-Natural-Gray-50 mt-2">
                #SurakshitNashik #ActionTaken
              </p>
            </div>
          </div>

          {/* Right Side - Social Media Text Updates */}
          <div className="flex flex-col gap-4">
            <Link href="#" target="_blank" className="flex gap-2">
              <Image src="/assets/socialFeed/social1.png" alt="अपडेट 1" width={80} height={80} className="rounded-lg xl:w-20 xl:h-20 w-[136px] h-24" />
              <div>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter font-medium text-Natural-Gray-50">गेल्या आठवड्यात, आमच्या गुन्हे शाखा युनिट-२ एककाला गुन्हे माहिती...</p>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter text-Natural-Gray-70 mt-1">२१ मार्च</p>
              </div>
            </Link>
            <Link href="#" target="_blank" className="flex gap-2">
              <Image src="/assets/socialFeed/social2.png" alt="अपडेट 2" width={80} height={80} className="rounded-lg xl:w-20 xl:h-20 w-[136px] h-24" />
              <div>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter font-medium text-Natural-Gray-50">🌸✨ नाशिकची ऐतिहासिक यंगपंढरी २०२५ ✨🌸</p>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter text-Natural-Gray-70 mt-1">१९ मार्च</p>
              </div>
            </Link>
            <Link href="#" target="_blank" className="flex gap-2">
              <Image src="/assets/socialFeed/social3.png" alt="अपडेट 3" width={80} height={80} className="rounded-lg xl:w-20 xl:h-20 w-[136px] h-24" />
              <div>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter font-medium text-Natural-Gray-50">दिशा चालवले किलोमीटर वाढवून माळवी स्टॉप कार अडवून चालकाला...</p>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter text-Natural-Gray-70 mt-1">१६ मार्च</p>
              </div>
            </Link>
            <Link href="#" target="_blank" className="flex gap-2">
              <Image src="/assets/socialFeed/social4.png" alt="अपडेट 4" width={80} height={80} className="rounded-lg xl:w-20 xl:h-20 w-[136px] h-24" />
              <div>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter font-medium text-Natural-Gray-50">नाशिक शहर पोलिसांकडून अथर्व सावकारांना इशारा आपल्या शहरातील कडकडी</p>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter text-Natural-Gray-70 mt-1">१५ मार्च</p>
              </div>
            </Link>
            <Link href="#" target="_blank" className="flex gap-2">
              <Image src="/assets/socialFeed/social5.png" alt="अपडेट 5" width={80} height={80} className="rounded-lg xl:w-20 xl:h-20 w-[136px] h-24" />
              <div>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter font-medium text-Natural-Gray-50">आता कसरतच संप, हा तर रंगाचा भंग – हेदू सांगला मानत, नाही...</p>
                <p className="text-p3ExtraLightInter xl:leading-p3ExtraLightInter leading-p2ExtraLightInter text-Natural-Gray-70 mt-1">१४ मार्च</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
}



// import Image from "next/assets";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function SurakshaUpkram() {
//   const [feeds, setFeeds] = useState([]);

//   useEffect(() => {
//     // Simulated fetch from an API endpoint or social media RSS feed parser
//     const fetchFeeds = async () => {
//       const response = await fetch("/api/social-feeds");
//       const data = await response.json();
//       setFeeds(data);
//     };
//     fetchFeeds();
//   }, []);

//   return (
//     <section className="p-8 bg-white">
//       {/* Social Media Feed Section */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold mb-2">सोशल मीडिया फीड आणि अपडेट्स</h2>
//         <p className="text-gray-700 mb-6">
//           पोलिस विभागाच्या अधिकृत सोशल मीडिया फीडमधील ताज्या घडामोडी आणि महत्वाच्या अपडेट्स मिळवा.
//         </p>

//         <div className="grid md:grid-cols-3 gap-6">
//           {/* Left Side - Main Video or Image Block */}
//           <div className="md:col-span-2">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="col-span-2">
//                 <Link href="https://www.facebook.com/NashikCityPolice" target="_blank">
//                   <Image src="/assets/social-main.jpg" alt="मुख्य बातमी" width={800} height={450} className="rounded-xl w-full h-auto" />
//                 </Link>
//               </div>
//               <Link href="https://www.instagram.com/nashikcitypolice/" target="_blank">
//                 <Image src="/assets/social-left-1.jpg" alt="नियमबद्ध नंबर प्लेट" width={400} height={200} className="rounded-xl w-full h-auto" />
//               </Link>
//               <Link href="https://twitter.com/NashikPolice" target="_blank">
//                 <Image src="/assets/social-left-2.jpg" alt="सीटवर प्रवासी बसवू नका" width={400} height={200} className="rounded-xl w-full h-auto" />
//               </Link>
//             </div>
//             <div className="mt-4">
//               <p className="text-gray-800 text-sm">
//                 नागरिकांकडून पोलिस आयुक्त यांच्या व्हॉट्सअॅप क्रमांक 99 233 233 11 तसेच सोशल मीडियावर प्राप्त झालेल्या अ‍ॅक्शनच्या आधारे ऑटो-रिक्शा नियमांचे उल्लंघन करणाऱ्या वाहनांवर कारवाई. ही आमची मोहिम सुरु आहे.
//               </p>
//               <p className="text-xs text-gray-500 mt-2">#SurakshitNashik #ActionTaken</p>
//             </div>
//           </div>

//           {/* Right Side - Dynamic Social Media Text Updates */}
//           <div className="flex flex-col gap-4">
//             {feeds.map((feed, index) => (
//               <Link key={index} href={feed.link} target="_blank" className="flex gap-2">
//                 <Image src={feed.image} alt={`अपडेट ${index + 1}`} width={80} height={80} className="rounded-lg" />
//                 <div>
//                   <p className="text-sm font-medium">{feed.text}</p>
//                   <p className="text-xs text-gray-500 mt-1">{feed.date}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
