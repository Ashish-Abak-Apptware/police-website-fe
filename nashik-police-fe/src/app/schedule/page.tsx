'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from 'uuid';

const timeSlots = [
  '9:00am', '9:30am', '10:00am', '10:30am', '11:00am',
  '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm',
  '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm'
];

export default function SchedulePage() {
  const router = useRouter();
  const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(tomorrow);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [agenda, setAgenda] = useState('');

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime || !email || !agenda) return;

    const [time, meridiem] = selectedTime.split(/(am|pm)/);
    const [hours, minutes] = time.split(':');
    let dateWithTime = new Date(selectedDate);
    let hourInt = parseInt(hours);
    if (meridiem === 'pm' && hourInt < 12) hourInt += 12;
    if (meridiem === 'am' && hourInt === 12) hourInt = 0;
    dateWithTime.setHours(hourInt);
    dateWithTime.setMinutes(parseInt(minutes));

    const room = `nskplcappt-${uuidv4()}`;
    const start = dateWithTime.toISOString();

    // Optional: Store email + agenda via API call here

    router.push(`/calender/${room}?start=${encodeURIComponent(start)}&email=${encodeURIComponent(email)}&agenda=${encodeURIComponent(agenda)}`);
  };

  return (
    <div className="min-h-screen p-8 flex flex-col justify-center items-center bg-gray-50">
        <h2 className='text-black pb-5 text-3xl font-bold'>Schedule an Appointment</h2>
      <div className="bg-white shadow-lg rounded-xl flex justify-center w-full max-w-3xl overflow-hidden">

        {/* Right Side */}
        <div className=" p-6">
          <h3 className="text-md font-medium mb-2 text-black">Select a Date & Time</h3>

          <div className="flex gap-6">
            <div>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setSelectedTime(null); // reset time
                }}
                minDate={new Date(Date.now() + 24 * 60 * 60 * 1000)} // only tomorrow and beyond
                inline
              />
              <p className="text-xs text-gray-500 mt-1">
                Time zone: India Standard Time (IST)
              </p>
            </div>

            <div className="flex-1 text-black">
              <h4 className="font-semibold text-sm mb-2">
                {selectedDate?.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </h4>

              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`px-4 py-2 border rounded text-sm ${selectedTime === slot ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mb-3 border rounded text-sm"
                />
                <textarea
                  placeholder="Meeting agenda"
                  value={agenda}
                  onChange={(e) => setAgenda(e.target.value)}
                  className="w-full px-4 py-2 border rounded text-sm"
                  rows={3}
                />
              </div>

              <button
                onClick={handleConfirm}
                disabled={!selectedTime || !email || !agenda}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer disabled:cursor-auto"
              >
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
