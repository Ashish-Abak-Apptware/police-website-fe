'use client';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const filters = [
  "पोलीस ठाणे",
  "सीपी कार्यालय",
  "विभागीय कार्यालय",
  "एसीपी कार्यालय",
  "वाहतूक विभाग",
];

export const SearchPoliceStation=()=> {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (filter: string) => {
    setSelected((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  return (
    <section className="flex justify-center bg-white">
        <div className="xl:w-[1280px] xl:p-[100px] md:w-[768px] w-full px-4 py-[50px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          आपलं पोलिस स्टेशन शोधा
        </h1>
        <button className="relative px-4 py-2 bg-Primary-Blue-30 text-white rounded-full shadow hover:bg-blue-700">
          Suggest a Spot
          <span className="absolute -top-2 -right-2 bg-orange-500 text-xs font-bold text-white px-1 rounded-tr-lg rounded-bl-lg">
            AI/ML
          </span>
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        तुम्हाला जवळच्या पोलिस स्टेशनची माहिती मिळवा आणि आवश्यक मदत घ्या.
      </p>

      {/* Filters */}
      <div className="bg-gray-100 p-4 rounded-xl mb-6 flex flex-col gap-4">
      <div className="flex justify-between gap-3 ">
        {filters.map((filter) => (
          <div key={filter} className="relative">
            <button
              onClick={() => toggleDropdown(filter)}
              className="flex items-center gap-4 px-8 py-2 bg-white border border-gray-300 rounded-full shadow-sm text-Natural-Gray-50 text-sm font-medium hover:bg-gray-50"
            >
              {filter}
              {selected[filter] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {selected[filter] && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">पर्याय 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">पर्याय 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">पर्याय 3</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mb-2">अंबड रोड, नाशिक, महाराष्ट्र ४२२०१०</p>
      </div>

      {/* Map */}
      <div className="rounded-xl overflow-hidden shadow">
        <iframe
          title="Ambad Police Station Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3963928767974!2d73.7734185746032!3d19.175659449063394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb8c24cdbd8b%3A0x4d5480ef12bd5472!2sAmbad%20Police%20Station!5e0!3m2!1sen!2sin!4v1712734887383!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </section>
  );
}
