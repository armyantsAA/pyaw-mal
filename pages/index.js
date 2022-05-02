import Part1 from "../components/chat/Part1";
import Part2 from "../components/chat/Part2";
import Part3 from "../components/chat/Part3";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-primary text-white">
      <div className="w-1/4 bg-chat1 border-r border-divider">
        <Part1 />
      </div>
      <div className="flex-auto flex flex-col">
        <Part2 />
      </div>
      <div className="w-1/4 bg-chat1 border-l-2 border-divider">
        <Part3 />
      </div>
    </div>
  );
}
