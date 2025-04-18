import VideoCallPage from "@/components/UI/VideoCallPage";

export default async function VideoCallRoute({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const { email = '', agenda = '', start = '', room = '' } = await searchParams;

  return (
    <VideoCallPage
      email={email}
      agenda={agenda}
      startTime={start}
      room={room}
    />
  );
}
