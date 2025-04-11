'use client';
import Image from "next/image";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "नोंदवलेले", value: 2600 },
  { name: "निकाली", value: 2000 },
  { name: "प्रलंबित", value: 200 },
  { name: "जनजागृती", value: 450 },
  { name: "तातडीचे", value: 1200 },
];

export default function WhatsappSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
    <section className="flex justify-center bg-white">
    <div className="bg-bg-gradient flex justify-between items-center py-[55px] px-[100px] xl:w-[1280px] md:w-[768px] w-full">
            <h1 className="text-4xl text-white">
            पोलीस आयुक्तांचा व्हॉट्सअ‍ॅप नंबर 
            </h1>
            <p className="flex gap-2 text-2xl items-center text-Natural-Gray-100"><Image src="/image/whatsapp.png" alt="whatsapp" height={50} width={50}/>९९२३३२३३११</p>
          </div>
    </section>
    <section className="flex justify-center mx-auto bg-white">
        <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] py-[50px] w-full px-4">
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col gap-[10px]">
      {/* Total Box */}
      <div className="bg-hero-section-bg bg-center text-Natural-Gray-100 p-6 rounded-2xl flex flex-col justify-center  w-[327px] h-[227px]">
        <h2 className="text-xl mb-2">व्हॉट्सअ‍ॅपवरील एकूण संदेश</h2>
        <div className="text-6xl font-bold">2685</div>
      </div>

      {/* Important Messages */}
      <div className="bg-Natural-Gray-100 p-6 rounded-xl space-y-2 w-[327px] h-[316px]">
        <h2 className="text-[20px] text-Natural-Gray-50 mb-10">महत्त्वाचे संदेश</h2>
        <div className="text-Primary-Blue-30 font-semibold text-[24px] mb-4">वाहतूक <span className="float-right">648</span></div>
        <div className="text-Natural-Gray-50 text-[20px] mb-4">गस्त <span className="float-right">23</span></div>
        <div className="text-Natural-Gray-50 text-[20px] mb-4">महिला सुरक्षा <span className="float-right">89</span></div>
        <div className="text-Natural-Gray-50 text-[20px]">अंमली पदार्थ <span className="float-right">11</span></div>
      </div>
    </div>

      {/* Bar Chart */}
      <div className="bg-Natural-Gray-100 p-6 rounded-2xl w-[633px] h-[553px]">
        <h2 className="text-lg text-Natural-Gray-50 mb-4">व्हॉट्सअ‍ॅपवरील एकूण संदेश</h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} barSize={75}>
            <XAxis dataKey="name" tick={{ fill: "#7D7D7D", fontSize: 16 }} />
            <YAxis hide />
            <Tooltip contentStyle={{
            backgroundColor: "#7D7D7D",
            border: "1px solid #ddd",
            fill:"#000",
            fontSize: "12px",
          }}/>
            <Bar dataKey="value" fill="#C3C2FE" radius={[8, 8, 0, 0]} 
             onMouseEnter={(_, index) => setHoveredIndex(index)}
             onMouseLeave={() => setHoveredIndex(null)}
             // Override fill color conditionally
             shape={(props:any) => {
               const { x, y, width, height, index } = props;
               const fillColor = index === hoveredIndex ? "#6A5ACD" : "#C3C2FE"; // hover color
               return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={fillColor}
                />
              );
            }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </section>
    </section>
    </>
  );
}
