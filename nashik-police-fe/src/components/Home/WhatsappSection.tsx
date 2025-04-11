'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "नोंदवलेले", value: 2600 },
  { name: "निकाली", value: 2000 },
  { name: "प्रलंबित", value: 200 },
  { name: "जनजागृती", value: 450 },
  { name: "तातडीचे", value: 1200 },
];

export default function WhatsappSection() {
  return (
    <section className="flex justify-center bg-white">
        <section className="xl:w-[1280px] xl:p-[100px] md:w-[768px] py-[50px] w-full px-4">
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col gap-[10px]">
      {/* Total Box */}
      <div className="bg-hero-section-bg bg-center text-Natural-Gray-100 p-6 rounded-2xl flex flex-col justify-center items-center w-[327px] h-[227px]">
        <h2 className="text-sm mb-2">ब्लॉट्सअॅपवरील एकूण संदेश</h2>
        <div className="text-5xl font-bold">2685</div>
      </div>

      {/* Important Messages */}
      <div className="bg-Natural-Gray-100 p-6 rounded-xl space-y-2 w-[327px] h-[316px]">
        <h2 className="text-sm text-Natural-Gray-50">महत्त्वाचे संदेश</h2>
        <div className="text-Primary-Blue-30 font-semibold text-lg">वाहतूक <span className="float-right">648</span></div>
        <div className="text-Natural-Gray-50 text-sm">गस्त <span className="float-right">23</span></div>
        <div className="text-Natural-Gray-50 text-sm">महिला सुरक्षा <span className="float-right">89</span></div>
        <div className="text-Natural-Gray-50 text-sm">अंमली पदार्थ <span className="float-right">11</span></div>
      </div>
    </div>

      {/* Bar Chart */}
      <div className="bg-Natural-Gray-100 p-6 rounded-2xl w-[633px] h-[553px]">
        <h2 className="text-sm text-Natural-Gray-50 mb-4">ब्लॉट्सअॅपवरील एकूण संदेश</h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} barSize={75}>
            <XAxis dataKey="name" tick={{ fill: "#7D7D7D", fontSize: 12 }} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value" fill="#C3C2FE" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </section>
    </section>
  );
}
