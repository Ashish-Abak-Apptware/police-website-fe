'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const timeSlots = [
    '9:00am', '9:30am', '10:00am', '10:30am', '11:00am',
    '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm',
    '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm'
  ];

export const ScheduleForm = ({onClose}:{onClose: () => void}) => {
  const router = useRouter();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [selectedDate, setSelectedDate] = useState<Date | null>(tomorrow);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [agenda, setAgenda] = useState('');

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime || !email || !agenda) {
        // toast.error("Please fill all fields")
        return;
    };

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
    const meetingLink = `${window.location.origin}/calender/${room}?start=${encodeURIComponent(start)}&email=${encodeURIComponent(email)}&agenda=${encodeURIComponent(agenda)}`;
    // await fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, agenda, startTime, room })
    //   });
    toast.success(
        <span>
          Appointment Scheduled!<br />
          {/* <a href={meetingLink} target="_blank" className="text-blue-600 underline">Join Link</a> */}
        </span>,
        { duration: 8000 }
      );
};

  return (
    <div className=" p-6">
              <h3 className="text-md font-medium mb-2 text-black">Select a Date & Time</h3>
    
              <div className="flex gap-6">
                <div className=''>
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
                    onClick={()=>{handleConfirm(),onClose()}}
                    disabled={!selectedTime || !email || !agenda}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 float-right rounded disabled:opacity-50 cursor-pointer disabled:cursor-auto"
                  >
                    Schedule Meeting
                  </button>
                </div>
              </div>
            </div>
  );
};
