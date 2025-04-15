'use client';
import { useState } from "react";
import { ChevronDown, ChevronUp, MenuIcon } from "lucide-react";
import { AIMLtag } from "../UI/AIMLtag";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../UI/Maps"), { ssr: false });

const filters = [
  {"title":"पोलीस ठाणे",
    "list":["आडगाव","अंबड","भद्रकाली","सायबर","देवळाली कॅम्प","गंगापूर","इंदिरानगर","म्हसरूळ","मुंबई नाका","नाशिक रोड","पंचवटी","सरकारवाडा","सातपूर","उपनगर"]
  },
  {"title":"सीपी कार्यालय",
    "list":[]
  },
  {"title":"विभागीय कार्यालय",
    "list":[]
  },
  {"title":"एसीपी कार्यालय",
    "list":[]
  },
  {"title":"वाहतूक विभाग",
    "list":[]
  },
];
const locations = [
  "गंगापूर रोड",
  "सिडको",
  "नाशिक रोड",
  "अंबड",
  "सातपूर",
  "कॅम्प",
  "त्र्यंबक रोड",
  "पंचवटी",
];

export const SearchPoliceStation=()=> {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const toggleDropdown = (filter: string) => {
    setSelected((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const matches = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (text: string) => {
    setQuery(text);
    setSuggestions([]);
  };
  return (
    <section className="flex justify-center bg-white">
        <div className="xl:w-[1280px] xl:p-[100px] md:w-[768px] w-full px-4 py-[50px]">
      <div className="md:flex justify-between mb-10">
      <div className="">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          आपलं पोलिस स्टेशन शोधा
        </h1>
      </div>
      
      <p className="text-gray-600 mb-4 md:w-[300px] xl:w-auto">
        तुम्हाला जवळच्या पोलिस स्टेशनची माहिती मिळवा आणि आवश्यक मदत घ्या.
      </p>
      </div>
      <div className=" md:flex gap-2 max-w-sm mx-auto xl:mx-0 mt-6">
      {/* Input with AI/ML Ribbon */}
      <div className="relative">
        <input
          type="text"
          value={''}
          onChange={handleInputChange}
          placeholder="येथे टाइप करा"
          className="w-full border border-Natural-Gray-70 text-Natural-Gray-50 placeholder:text-Natural-Gray-50 rounded-lg px-4 py-4 text-sm outline-none "
        />
        <div className="absolute top-0 right-2">
          <div className="">
            <AIMLtag/>
          </div>
        </div>
        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
            {suggestions.map((s, i) => (
              <li
                key={i}
                onClick={() => handleSuggestionClick(s)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Submit Button */}
      <button className="w-full md:w-fit bg-Primary-Blue-30 text-Natural-Gray-100 mt-3 md:mt-0 h-[52px] px-6 rounded-md font-semibold text-sm">
        पेट्रोलिंग स्पॉट सुचवा
      </button>
    </div>
      </div>
      {/* Mobile Menu Button */}
      <div className="xl:hidden space-y-3 mb-4 ">
        <button
          onClick={() => toggleDropdown("mobileMenu")}
          className="flex items-center justify-between gap-2 px-4 py-2 text-sm text-Natural-Gray-50 rounded-full border border-Natural-Gray-70 w-full"
        >
          येथे आवश्यक कार्यालये फिल्टर करा
          <MenuIcon color="#03018D" size={20}/>
          {/* {selected["mobileMenu"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />} */}
        </button>
        <p className="text-sm text-gray-600 mb-2 flex">{query}<span className={`${!query?'hidden':'block'}`}>,</span> नाशिक, महाराष्ट्र ४२२०१०</p>
        </div>
      
      {selected["mobileMenu"] && (
        <div className="xl:hidden bg-gray-100 p-4 rounded-xl mb-6 flex flex-col gap-4">
          {filters.map((filter,index) => (
        <div key={index} className="relative">
          <button
            onClick={() => toggleDropdown(filter.title)}
            className="flex items-center gap-4 px-8 py-2 bg-white border border-gray-300 rounded-full shadow-sm text-Natural-Gray-50 text-sm font-medium hover:bg-gray-50"
          >
            {filter.title}
            {selected[filter.title] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {selected[filter.title] && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="text-sm text-gray-700">
          {filter.list.map((each, index) => (
            <li
              key={index}
              onClick={() => {
              handleSuggestionClick(each);
              toggleDropdown(filter.title);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
            >
              {each}
            </li>
            ))}
              </ul>
            </div>
          )}
        </div>
          ))}
        </div>
      )}
      {/* Filters */}
      <div className="bg-gray-100 p-4 rounded-2xl mb-6 xl:flex xl:flex-col gap-4 hidden ">
      <div className="flex justify-between gap-3 ">
        {filters.map((filter, index) => (
            <div key={index} className="relative">
          <button
            onClick={() => toggleDropdown(filter.title)}
            className="flex items-center gap-4 px-8 py-2 bg-white border border-gray-300 rounded-full shadow-sm text-Natural-Gray-50 text-sm font-medium hover:bg-gray-50"
          >
            {filter.title}
            {selected[filter.title] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {selected[filter.title] && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <ul className="text-sm text-gray-700 z-10">
            {filter.list.map((each, index) => (
            <li
              key={index}
              onClick={() => {
              handleSuggestionClick(each);
              toggleDropdown(filter.title);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
            >
              {each}
            </li>
            ))}
            </ul>
            </div>
          )}
            </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mb-2 flex">{query}<span className={`${!query?'hidden':'block'}`}>,</span> नाशिक, महाराष्ट्र ४२२०१०</p>
      </div>

      {/* Map */}
      <div className="rounded-xl shadow z-0">
        {/* <iframe
          title="Ambad Police Station Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3963928767974!2d73.7734185746032!3d19.175659449063394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb8c24cdbd8b%3A0x4d5480ef12bd5472!2sAmbad%20Police%20Station!5e0!3m2!1sen!2sin!4v1712734887383!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <Map station={query}/>
      </div>
    </div>
    </section>
  );
}
