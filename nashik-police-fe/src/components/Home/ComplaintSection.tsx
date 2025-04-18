'use client';
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";
import Input from "../UI/InputField";
import Link from "next/link";

const sections = [
  {
    section: "ऑनलाइन सेवा आणि फॉर्म",
    items: [
      { title: "ई-चालन भरणा", link: "https://mahatrafficechallan.gov.in/payechallan/PaymentService.htm?_qc=394b48c0ac472078ffbc1bda62f51712" },
      { title: "हरवलेली व्यक्ती", link: "https://citizen.mahapolice.gov.in/Citizen/MH/SearchView.aspx" },
      { title: "फॉर्म डाउनलोड करा", link: "https://citizen.mahapolice.gov.in/Citizen/MH/Download.aspx" },
      { title: "अनोळखी मृतदेह", link: "https://citizen.mahapolice.gov.in/Citizen/MH/SearchDeadBodyList.aspx" },
      { title: "प्रथम खबरी अहवाल", link: "https://citizen.mahapolice.gov.in/Citizen/MH/PublishedFIRs.aspx" },
      { title: "पोलीस पडताळणी सेवा", link: "https://pcs.mahaonline.gov.in/Forms/Home.aspx" },
      { title: "अटक करण्यात आलेले आरोपी", link: "https://citizen.mahapolice.gov.in/Citizen/MH/SearcgAccusedArrest.aspx" },
      { title: "नागरिक पोर्टल", link: "https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx" },
    ],
  },
  {
    section: "लोकप्रिय माहिती",
    items: [
      { title: "नॅशनल सायबर क्राईम रिपोर्टिंग पोर्टल", link: "https://cybercrime.gov.in/" },
      { title: "सायबर अलर्ट वॉल", link: "/cyber-alert-wall" },
      { title: "पोलीस स्टेशन प्रभारी", link: "/info/police-station-incharge" },
      { title: "उपक्रम", link: "/info/initiatives" },
      { title: "निविदा", link: "/info/tenders" },
      { title: "पोलीस भरती", link: "/info/police-recruitment" },
      { title: "उपयुक्त वेबसाइट्स", link: "/info/useful-websites" },
    ],
  },
  {
    section: "नवीन काय ?",
    items: [
      { title: "पोलीस उप आयुक्त भेट", link: "/news/deputy-commissioner-visit" },
      { title: "माहितीचा अधिकार", link: "/news/right-to-information" },
      { title: "प्रसिद्धी पत्रक", link: "/news/press-releases" },
      { title: "परिपत्रक", link: "/news/circulars" },
      { title: "सामुहिक हिंसा", link: "/news/mass-violence" },
      { title: "उत्कृष्ट कामगिरी", link: "/news/excellent-performance" },
      { title: "गुन्हे आढावा", link: "/news/crime-review" },
      { title: "छायाचित्र संग्रह", link: "/news/photo-gallery" },
    ],
  },
];
export const ComplaintSection = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>("ऑनलाइन सेवा आणि फॉर्म");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="flex justify-center bg-white font-khand">
      <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] w-full py-8 px-4">
        {/* Heading */}
        <div className="text-black mb-10">
          <h1 className="xl:text-h3RegularKhand font-medium text-h4MediumKhand leading-h4MediumKhand mb-4">तक्रार, माहिती आणि सुरक्षा – एका क्लिकवर</h1>
          <p className="text-sH1RegularKhand xl:max-w-[650px]">
            समाजाच्या सुरक्षिततेसाठी आणि सुव्यवस्थेसाठी अनेक महत्त्वाची कामे पार
            पाडतात. त्यांची जबाबदारी विविध क्षेत्रांमध्ये विस्तारलेली आहे.
          </p>
        </div>
        {/* functionality */}
        <div className=" bg-white text-gray-800 xl:p-4 xl:flex xl:flex-row flex flex-col-reverse gap-4 md:gap-10 xl:gap-4">
      {/* Sidebar */}
      <aside className="md:col-span-1 space-y-6 xl:space-y-0">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          <Input
            type="text"
            placeholder="येथे शोधा"
          />
        </div>
        <div className="h-px w-full bg-Natural-Gray-50 xl:mt-6"></div>

        {/* Dropdown Sections */}
        <div>
            {sections.map((section) => (
              <div key={section.section} className="border-b border-b-Natural-Gray-60">
              <button
                className="flex items-center justify-between w-full text-Primary-Blue-30 font-medium xl:text-h6RegularKhand text-sH1RegularKhand py-5"
                onClick={() => toggleSection(section.section)}
              >
                {section.section} {expandedSection === section.section ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === section.section && (
                <ul className="mb-4 ml-1 xl:text-p2ExtraLightInter xl:leading-p3ExtraLightInter text-p3ExtraLightInter leading-p2ExtraLightInter text-Natural-Gray-50 space-y-6">
                {section.items.map((item, index) => (
                  <li key={index}>
                  <Link href={item.link} target="_blank">{item.title}</Link>
                  </li>
                ))}
                </ul>
              )}
              </div>
            ))}

</div>
      </aside>

      {/* Grid of Services */}
      <main className="md:flex md:flex-row flex flex-col xl:gap-5 gap-[10px]">
         <div className="flex flex-col xl:gap-5 gap-[10px]">
         <div className="md:flex md:flex-row flex flex-col md:gap-5 gap-[10px]">
          <div className="md:flex md:flex-col flex  md:gap-5 gap-[10px]">
          <div
            className="relative md:w-[172px] md:h-[257px] w-[166px] h-[100px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/assets/complaints/complaint1.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter `}
            >
              ऑनलाइन गुन्‍हेाची नोंद करा
            </div>
          </div>
          <div
            className="relative md:w-[172px] md:h-[257px] w-[166px] h-[100px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/assets/complaints/complaint1.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter `}
            >
              भाडेकरू माहिती नोंदवा
            </div>
          </div>
          </div>
          <div className="flex flex-col md:gap-5 gap-[10px]">
          <div className="flex md:gap-5 gap-[10px]">
          <div
            className="relative md:w-[153px] w-[166px] md:h-fit h-[232px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src="/assets/complaints/complaint4.png"
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter `}
            >
              हरवलेली किंवा सापडलेली माहिती नोंदवा
            </div>
          </div>
          <Link href="https://www.ceir.gov.in/Request/CeirUserBlockRequestDirect.jsp" target="_blank" className="md:w-[153px] md:h-fit w-[166px] h-[232px]">
          <div
            className="relative md:w-[153px] md:h-fit w-[166px] h-[232px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/assets/complaints/complaint3.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter `}
            >
              चोरलेला/हरवलेला मोबाइल ब्लॉक करा
            </div>
          </div>
          </Link>
          </div>
          <Link href="https://cybercrime.gov.in/Webform/Accept.aspx" target="_blank">
          <div
            className="relative md:w-[330px] md:h-[330px] w-full h-[232px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/assets/complaints/complaint5.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter bg-gradient-to-t from-yellow-500/30`}
            >
              महिला/मुलांवरील गुन्‍हेाची तक्रार नोंदवा
            </div>
          </div>
          </Link>
          </div>
          </div>
          
          <div className="flex md:hidden md:gap-5 gap-[10px] w-full">
          <Link href="https://cybercrime.gov.in/Webform/Accept.aspx" target="_blank">
          <div
            className="relative md:w-[180px] md:h-[319px] w-[160px] h-[100px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/assets/complaints/complaint2.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter `}
            >
              आर्थिक फसवणुकीची तक्रार नोंदवा
            </div>
          </div>
          </Link>
          <Link href={'https://cybercrime.gov.in/Webform/Accept.aspx'} target="_blank">
          <div
            className="relative md:w-[180px] md:h-[390px] w-[160px] h-[100px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/assets/complaints/complaint6.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter `}
            >
              इतर सायबर गुन्‍ह्यांची तक्रार नोंदवा
            </div>
          </div>
          </Link>
          </div>
          <div
            className="relative md:w-[530px] w-full h-fit has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/assets/complaints/complaint7.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter `}
            >
              हरवलेल्या मोबाइलची सूचना
            </div>
          </div>
         </div>
         {/* for web */}
          <div className="md:flex md:flex-col hidden gap-5">
          <Link href={"https://cybercrime.gov.in/Webform/Accept.aspx"} target="_blank">
          <div
            className="relative w-[180px] h-[319px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/assets/complaints/complaint2.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter `}
            >
              आर्थिक फसवणुकीची तक्रार नोंदवा
            </div>
          </div>
          </Link>
          <Link href={'https://cybercrime.gov.in/Webform/Accept.aspx'} target="_blank">
          <div
            className="relative w-[180px] h-[390px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/assets/complaints/complaint6.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-p3ExtraLightInter leading-p2ExtraLightInter `}
            >
              इतर सायबर गुन्‍ह्यांची तक्रार नोंदवा
            </div>
          </div>
          </Link>
          </div>
      </main>
    </div>
      </section>
    </section>
  );
};
