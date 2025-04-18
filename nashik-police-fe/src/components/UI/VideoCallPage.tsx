'use client';

import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

interface VideoCallProps {
  email: string;
  agenda: string;
  startTime: string;
  room: string;
}

export default function VideoCallPage({ email, agenda, startTime, room }: VideoCallProps) {
  const jitsiRef = useRef(null);
  const apiRef = useRef<any>(null);
  const [hasAnnounced, setHasAnnounced] = useState(false);

  useEffect(() => {
//     if (!hasAnnounced && startTime) {
//       toast.success(`Meeting scheduled at ${new Date(startTime).toLocaleTimeString([], {
//         hour: '2-digit',
//         minute: '2-digit',
//       })}`);
//       setHasAnnounced(true);
//     }

    if (typeof window !== 'undefined' && jitsiRef.current && !apiRef.current) {
      const initJitsi = () => {
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        script.onload = () => {
          const domain = 'meet.jit.si'; 
          const options = {
            roomName: room || `default-room`,
            parentNode: jitsiRef.current,
            userInfo: {
              email: email || 'user@example.com',
              displayName: agenda || 'Guest',
            },
          };

          apiRef.current = new (window as any).JitsiMeetExternalAPI(domain, options);
        };
      };

      if (!(window as any).JitsiMeetExternalAPI) {
        const script = document.createElement('script');
      script.src = 'https://meet.jit.si/external_api.js';
      script.async = true;
      script.onload = initJitsi;
      document.body.appendChild(script);
      } else {
        initJitsi();
      }
    }

    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null;
      }
    };
  }, [room, email, agenda, startTime, hasAnnounced]);

  return <div ref={jitsiRef} style={{ height: '100vh', width: '100%' }} />;
}
