'use client';
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";
import Input from "../UI/InputField";

const services = [
  {
    title: "ऑनलाइन गुन्‍हेाची नोंद करा",
    image: "/image/complaints/complaint1.png",
  },
  {
    title: "हरवलेली किंवा सापडलेली माहिती नोंदवा",
    image: "/image/complaints/complaint4.png",
  },
  {
    title: "चोरलेला/हरवलेला मोबाइल ब्लॉक करा",
    image: "/image/complaints/complaint3.png",
  },
  {
    title: "आर्थिक फसवणुकीची तक्रार नोंदवा",
    image: "/image/complaints/complaint2.png",
  },
  {
    title: "भाडेकरू माहिती नोंदवा",
    image: "/image/complaints/complaint1.png",
  },
  {
    title: "महिला/मुलांवरील गुन्‍हेाची तक्रार नोंदवा",
    image: "/image/complaints/complaint5.png",
    highlight: true,
  },
  {
    title: "हरवलेल्या मोबाइलची सूचना",
    image: "/image/complaints/complaint7.png",
  },
  {
    title: "इतर सायबर गुन्‍ह्यांची तक्रार नोंदवा",
    image: "/image/complaints/complaint6.png",
  },
];
export const ComplaintSection = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>("ऑनलाइन सेवा आणि फॉर्म");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="flex justify-center bg-white">
      <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] w-full">
        {/* Heading */}
        <div className="text-black mb-10 text-center">
          <h1 className="text-4xl mb-4">तक्रार, माहिती आणि सुरक्षा – एका क्लिकवर</h1>
          <p className="text-2xl xl:max-w-[650px] mx-auto">
            समाजाच्या सुरक्षिततेसाठी आणि सुव्यवस्थेसाठी अनेक महत्त्वाची कामे पार
            पाडतात. त्यांची जबाबदारी विविध क्षेत्रांमध्ये विस्तारलेली आहे.
          </p>
        </div>
        {/* functionality */}
        <div className=" bg-white text-gray-800 p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Sidebar */}
      <aside className="md:col-span-1 space-y-6 h-[100%]">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          <Input
            type="text"
            placeholder="येथे शोधा"
          />
        </div>

        {/* Dropdown Sections */}
        <div>
            <div className="border-b border-b-Natural-Gray-60 pb-2">
          <button
            className="flex items-center justify-between w-full text-blue-700 font-bold "
            onClick={() => toggleSection("ऑनलाइन सेवा आणि फॉर्म")}
          >
            ऑनलाइन सेवा आणि फॉर्म {expandedSection === "ऑनलाइन सेवा आणि फॉर्म" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === "ऑनलाइन सेवा आणि फॉर्म" && (
            <ul className="mt-2 ml-1 text-sm text-gray-800 space-y-1">
              <li>ई-चालन भरणा</li>
              <li>हरवलेली व्यक्ती</li>
              <li>फॉर्म डाउनलोड करा</li>
              <li>अनोळखी मृतदेह</li>
              <li>प्रकाशित एफआयआर</li>
              <li>पोलीस क्लिअरन्स सेवा</li>
              <li>अटक करण्यात आलेले आरोपी</li>
              <li>नागरिक पोर्टल</li>
            </ul>
          )}
        </div>

        <div className="border-b border-b-Natural-Gray-60 py-2">
          <button
            className="flex items-center justify-between w-full text-blue-700 font-bold"
            onClick={() => toggleSection("लोकप्रिय माहिती")}
          >
            लोकप्रिय माहिती {expandedSection === "लोकप्रिय माहिती" ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>

        <div className="border-b border-b-Natural-Gray-60 py-2">
          <button
            className="flex items-center justify-between w-full text-blue-700 font-bold"
            onClick={() => toggleSection("नवीन काय ?")}
          >
            नवीन काय ? {expandedSection === "नवीन काय ?" ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
</div>
      </aside>

      {/* Grid of Services */}
      <main className="flex gap-5">
         <div className="flex flex-col gap-5">
         <div className="flex gap-5">
          <div className="flex flex-col gap-5">
          <div
            className="relative w-[172px] h-[257px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/image/complaints/complaint1.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-sm `}
            >
              ऑनलाइन गुन्‍हेाची नोंद करा
            </div>
          </div>
          <div
            className="relative w-[172px] h-[257px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/image/complaints/complaint1.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-sm `}
            >
              भाडेकरू माहिती नोंदवा
            </div>
          </div>
          </div>
          <div className="flex flex-col gap-5">
          <div className="flex gap-5">
          <div
            className="relative w-[153px] h-fit has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src="/image/complaints/complaint4.png"
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-sm `}
            >
              हरवलेली किंवा सापडलेली माहिती नोंदवा
            </div>
          </div>
          <div
            className="relative w-[153px] h-fit has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/image/complaints/complaint3.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-sm `}
            >
              चोरलेला/हरवलेला मोबाइल ब्लॉक करा
            </div>
          </div>
          </div>
          <div
            className="relative w-[330px] h-[330px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/image/complaints/complaint5.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-sm bg-gradient-to-t from-yellow-500/30`}
            >
              महिला/मुलांवरील गुन्‍हेाची तक्रार नोंदवा
            </div>
          </div>
          </div>
          </div>
          
          
          <div
            className="relative w-[530px] h-fit has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/image/complaints/complaint7.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-sm `}
            >
              हरवलेल्या मोबाइलची सूचना
            </div>
          </div>
         </div>
          <div className="flex flex-col gap-5">
          <div
            className="relative w-[180px] h-[319px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/image/complaints/complaint2.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-sm `}
            >
              आर्थिक फसवणुकीची तक्रार नोंदवा
            </div>
          </div>
          <div
            className="relative w-[180px] h-[390px] has-first:overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src='/image/complaints/complaint6.png'
              alt='complaint1'
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex items-end p-3 text-white font-semibold text-sm `}
            >
              इतर सायबर गुन्‍ह्यांची तक्रार नोंदवा
            </div>
          </div>
          </div>
      </main>
    </div>
      </section>
    </section>
  );
};
