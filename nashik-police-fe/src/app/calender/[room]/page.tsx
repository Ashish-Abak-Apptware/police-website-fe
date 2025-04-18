import VideoCallPage from "@/components/UI/VideoCallPage";

export default function VideoCallRoute({ searchParams }: { searchParams: Record<string, string> }) {
  const email = searchParams.email ?? '';
  const agenda = searchParams.agenda ?? '';
  const start = searchParams.start ?? '';
  const room = searchParams.room ?? '';

  return (
    <VideoCallPage
      email={email}
      agenda={agenda}
      startTime={start}
      room={room}
    />
  );
}
